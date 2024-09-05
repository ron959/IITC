const request = require('supertest');
const express = require('express');
const app = require('../server.js'); // Adjust this path to point to your Express app

describe('GET /data', () => {
    it('should respond with JSON data', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });

    it('should respond with status code 200', async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
    });
});


// // describe('POST /data', () => {
// //     it('should respond with a successful message', async () => {
// //         const mockData = { key: 'value' };
// //         const response = await request(app)
// //             .post('/data')
// //             .send(mockData);
// //         expect(response.statusCode).toBe(200);
// //         expect(response.body.message).toBe('Data successfully sent via Axios, and Selenium task completed');
//     });
// });
const request = require('supertest');
const app = require('../server'); // Adjust this path to point to your Express app
const mockAxios = require('jest-mock-axios');
jest.mock('axios', () => mockAxios);

describe('GET /data', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should respond with JSON data', async () => {
        const mockResponse = { data: { token: 'fakeToken' } };
        mockAxios.post.mockResolvedValueOnce(mockResponse);

        const res = await request(app).get('/data');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            message: 'Data successfully sent via Axios',
            data: mockResponse.data
        });
    });
});
