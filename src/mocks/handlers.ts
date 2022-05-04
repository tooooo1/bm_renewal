import { rest } from 'msw';

const getMe: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: '김토스',
      rrn: '840218-2813218',
    })
  );
};

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', getMe),
  // Handles a GET /user request
  rest.get('/user', getMe),
];
