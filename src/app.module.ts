import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';
import { QuestionService } from './question/question.service';

@Module({
  imports: [],
  controllers: [AppController, QuestionsController],
  providers: [AppService, QuestionService],
})
export class AppModule {}
