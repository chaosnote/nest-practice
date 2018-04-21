import { Model } from 'mongoose';
import { Component, RequestMethod } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TodoSchema } from './schemas/todo.schema';
import { ITodoModel } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { RSAEncryptProvider, RSADecryptProvider } from '../shared/rsa.provider';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DelTodoDto } from './dto/del-todo.dto';


@Component()
export class TodoService
{
  constructor(
    @InjectModel(TodoSchema) private readonly todoModel: ITodoModel
  ) { }

  async create(dto: CreateTodoDto): Promise<boolean>
  {
    // list ( 先只處理一筆 )
    const model = new this.todoModel({
      content: dto.list[0].content,
      finish: false,
      date: new Date().getTime()
    });
    return await model.save().then(doc => doc != undefined, err => false);
  }

  async findAll()
  {
    // learn() ??
    return await this.todoModel.find().sort({finish:1}).then(doc => doc.map(item =>
    {
      let res = JSON.parse(JSON.stringify(item)) ;
      res.id = RSAEncryptProvider( item._id ) ;
      delete(res._id) ;
      delete(res.__v) ;
      return res ;
    }), err => []);
  }

  async update(dto: UpdateTodoDto)
  {
    dto.id = RSADecryptProvider(dto.id) ;
    return await this.todoModel.findByIdAndUpdate(dto.id,{finish:dto.finish}).then(doc => doc != undefined, err => false);
  }

  async del(dto: DelTodoDto)
  {
    dto.id = RSADecryptProvider(dto.id) ;
    return await this.todoModel.findByIdAndRemove(dto.id).then(doc => doc != undefined, err => false);
  }
}

