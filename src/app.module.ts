import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionProcessorModule } from './question-processor/question-processor.module';
import { QuestionsController } from './questions/questions.controller';

@Module({
  imports: [QuestionProcessorModule],
  controllers: [AppController, QuestionsController],
  providers: [AppService],
})
export class AppModule {}
