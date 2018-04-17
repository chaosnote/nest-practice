interface IRes
{
    status : number ;
    data ?: any ;
}
/**
 * 
 * @param status 0 : 失敗 1 :成功
 * @param data 回傳資料
 */
export function ResProvider(status: number = 0, data?: any)
{
    return <IRes>{
        status: status,
        data: data
    };
}