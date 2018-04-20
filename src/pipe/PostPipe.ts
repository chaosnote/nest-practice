import { HttpException } from '@nestjs/common';
import
{
    PipeTransform,
    Pipe,
    ArgumentMetadata,
    HttpStatus,
} from '@nestjs/common';

import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ResProvider } from '../shared/res.provider';

@Pipe()
export class PostPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata)
    {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) // 找不到映射類別
        {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0)
        {
            throw new HttpException(ResProvider(0, "資料(格式/值)錯誤 !"), HttpStatus.BAD_REQUEST);
        }
        return value;
    }
    private toValidate(metatype): boolean
    {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
}