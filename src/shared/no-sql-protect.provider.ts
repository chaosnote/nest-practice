import { Sanitizer } from 'class-sanitizer';
const sanitizer = new Sanitizer() ;

export function NoSQLProtectProvider(value:string)
{
    value = value && value.length ? value : "" ;
    return sanitizer.blacklist(value, "$")
}