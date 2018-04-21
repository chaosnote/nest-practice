import { Res, Controller, Get, Post, Body, Param } from '@nestjs/common';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ResProvider } from '../shared/res.provider';

import { PostPipe } from '../pipe/PostPipe';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DelTodoDto } from './dto/del-todo.dto';

@Controller('todo')
export class TodoController
{
  constructor(
    private readonly todoService: TodoService
  ) { }

  /**
   * 建立新待做清單
   * @param dto 
   */
  @Post("c")
  async create( @Res() res, @Body(new PostPipe()) dto: CreateTodoDto)
  {
    await this.todoService.create(dto).then(flag =>
    {
      if (flag) res.json(ResProvider(1));
      else res.json(ResProvider(0));
    });
  }
  /**
   * 取得所有待做清單
   * @param res
   */
  @Get("r")
  async read( @Res() res)
  {
    await this.todoService.findAll().then(doc => res.json(ResProvider(1, doc)));
  }

  @Post("u")
  async update( @Res() res, @Body(new PostPipe()) dto: UpdateTodoDto)
  {
    await this.todoService.update(dto).then(flag =>
    {
      if (flag) res.json(ResProvider(1));
      else res.json(ResProvider(0));
    });
  }

  @Post("d")
  async del( @Res() res, @Body(new PostPipe()) dto: DelTodoDto)
  {
    await this.todoService.del(dto).then(flag =>
      {
        if (flag) res.json(ResProvider(1));
        else res.json(ResProvider(0));
      });
  }
}