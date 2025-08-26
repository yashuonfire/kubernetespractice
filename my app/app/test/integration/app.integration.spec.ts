import request from 'supertest';
import { createApp } from '../../src/server.js';

describe('myapp integration', () => {
const app = createApp();

it('GET /health', async () => {
const res = await request(app).get('/health');
expect(res.status).toBe(200);
expect(res.body.status).toBe('ok');
});

it('POST /sum', async () => {
const res = await request(app).post('/sum').send({ a: 2, b: 3 });
expect(res.status).toBe(200);
expect(res.body.result).toBe(5);
});
});
