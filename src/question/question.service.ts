import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  getQuestions(): Array<string> {
    return ['where is', 'how is'];
  }
}
