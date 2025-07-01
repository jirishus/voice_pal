import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionService],
    }).compile();

    service = module.get<QuestionService>(QuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getQuestions', () => {
    it('should return an array of questions', () => {
      const result = service.getQuestions();
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return the expected questions', () => {
      const expectedQuestions = ['LLM prompt 1', 'LLM prompt 2'];
      const result = service.getQuestions();
      
      expect(result).toEqual(expectedQuestions);
    });

    it('should return strings only', () => {
      const result = service.getQuestions();
      
      result.forEach(question => {
        expect(typeof question).toBe('string');
      });
    });

    it('should return the same questions on multiple calls', () => {
      const firstCall = service.getQuestions();
      const secondCall = service.getQuestions();
      
      expect(firstCall).toEqual(secondCall);
    });
  });
});
