import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { QuestionService } from 'src/question/question.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  getQuestions(): Array<string> {
    return this.questionService.getQuestions();
  }
}
