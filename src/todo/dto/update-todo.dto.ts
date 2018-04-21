import { IsString, IsDefined, IsInt, IsBoolean, MinLength, ValidateNested, ArrayMinSize } from "class-validator";
import { Type } from "class-transformer";

export class UpdateTodoDto
{
    @MinLength(1)
    @IsString()
    id : string ;

    @IsBoolean()
    finish : boolean ;
}