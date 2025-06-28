import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  getQuestions(): Array<string> {
    return ['LLM prompt 1', 'LLM prompt 2'];
  }
}
