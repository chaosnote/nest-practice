import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/test'),
    TestModule
  ],
  controllers: [AppController],
  components: []
})
export class ApplicationModule
{
}