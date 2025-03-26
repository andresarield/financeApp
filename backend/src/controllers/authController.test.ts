import request from 'supertest';
import app from '../app';

describe('POST /api/auth/login', () => {
  it('retorna 401 si las credenciales son inválidas', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'invalid', password: 'invalid' });
    expect(res.status).toBe(401);
  });
});