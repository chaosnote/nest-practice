import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    date : Number, // 加入時間
    content : String, // 內容
    finish : Boolean, // 是否已完成
});