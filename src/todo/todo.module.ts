import { Module } from '@nestjs/common';
import { TodoController } from './todo.control';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'todo', schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  components: [TodoService ]
})
export class TodoModule { }