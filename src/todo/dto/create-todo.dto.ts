import { IsString, IsDefined, IsInt, IsBoolean, MinLength, ValidateNested, ArrayMinSize } from "class-validator";
import { Type } from "class-transformer";

class CreateTodoItemDto
{
    readonly id : string ;

    @MinLength(1)
    @IsString()
    @IsDefined()
    content : string ;
}
export class CreateTodoDto
{
    @ArrayMinSize(1)
    @ValidateNested()
    @Type(()=>CreateTodoItemDto)
    list : CreateTodoItemDto[] ;
}