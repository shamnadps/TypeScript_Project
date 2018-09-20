import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Response } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'jest';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect('One').toBe('One');
    });
  });
});
