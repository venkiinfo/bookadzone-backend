import mongoose from 'mongoose';
import { FaqModel } from '../../src/models/faqModel';
import { ENV } from '../../src/config/env';

beforeAll(async () => {
  await mongoose.connect(ENV.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Faq Model', () => {
  it('requires question and answer', async () => {
    const faq = new FaqModel({});
    let error;
    try {
      await faq.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    const anyError = error as any;
    expect(anyError.errors.question).toBeDefined();
    expect(anyError.errors.answer).toBeDefined();
  });

  it('defaults status and isDeleted', async () => {
    const faq = await FaqModel.create({ question: 'Test?', answer: 'Testing content' });
    expect(faq.status).toBe('active');
    expect(faq.isDeleted).toBe(false);
  });
});
