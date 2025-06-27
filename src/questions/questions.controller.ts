import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getQuestions(): string {
    return this.appService.getHello();
  }
}
