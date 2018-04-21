import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    TodoModule,
    TestModule
  ],
  controllers: [AppController],
  components: []
})
export class ApplicationModule
{
}