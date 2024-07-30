import { Test } from '@nestjs/testing';
import request = require('supertest');
import { BookModule, PatronModule } from '@repo/lending';
import { INestApplication } from '@nestjs/common';
import { SharedModule } from '@repo/shared';

describe('Place Book on hold e2e', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PatronModule, BookModule, SharedModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST patron profiles/profileId/hold`, () => {
    const patronId = 'd3fbbb5d-18db-48ab-9fb0-d81e28e4d885';
    request(app.getHttpServer())
      .post(`/profiles/${patronId}/hold`)
      .send({
        bookId: 'd3fbbb5d-18db-48ab-9fb0-d81e28e4d885',
        numberOfDays: 2,
      })
      .expect(201)
      .expect({});
  });

  afterAll(async () => {
    await app.close();
  });
});
