import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsController } from './questions.controller';
import { QuestionService } from '../question/question.service';

describe('QuestionsController', () => {
  let controller: QuestionsController;
  let questionService: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsController],
      providers: [QuestionService],
    }).compile();

    controller = module.get<QuestionsController>(QuestionsController);
    questionService = module.get<QuestionService>(QuestionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getQuestions', () => {
    it('should return questions from the service', () => {
      const expectedQuestions = ['LLM prompt 1', 'LLM prompt 2'];
      const result = controller.getQuestions();
      
      expect(result).toEqual(expectedQuestions);
    });

    it('should delegate to QuestionService', () => {
      const serviceSpy = jest.spyOn(questionService, 'getQuestions');
      const expectedQuestions = ['LLM prompt 1', 'LLM prompt 2'];
      
      const result = controller.getQuestions();
      
      expect(serviceSpy).toHaveBeenCalledTimes(1);
      expect(result).toEqual(expectedQuestions);
      
      serviceSpy.mockRestore();
    });
  });
});
