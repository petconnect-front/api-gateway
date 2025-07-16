// tests/api.test.js
import request from 'supertest';
import express from 'express';

// Importa tu app desde index.js o crea una app mínima aquí para probar
import app from '../index.js'; // si exportas el app desde index.js

describe('API Gateway Basic Test', () => {
  it('should respond to GET / with 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
