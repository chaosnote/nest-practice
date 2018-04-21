import { Document,Model } from 'mongoose';

interface ITodoDocument extends Document
{
    readonly date : number ;
    content : string ;
    finish : boolean ;
}
export interface ITodoModel extends Model<ITodoDocument>
{
}