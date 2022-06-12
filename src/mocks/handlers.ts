import { rest } from 'msw';

const getMe: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      id: 'test1',
      pw: 'test1!',
    })
  );
};

const getItems: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        imgSrc: 'assets/detailMenu/cherry.png',
        name: '체리 두알',
        price: 10000,
      },
      {
        id: 2,
        imgSrc: 'assets/detailMenu/hamburger.png',
        name: '게살버거',
        price: 3000,
      },
      {
        id: 3,
        imgSrc: 'assets/detailMenu/fries.png',
        name: '감자튀김',
        price: 1500,
      },
      {
        id: 4,
        imgSrc: 'assets/detailMenu/salad.png',
        name: '안든든한 샐러드',
        price: 3000,
      },
      {
        id: 5,
        imgSrc: 'assets/detailMenu/ice.png',
        name: '얼음과자',
        price: 3000,
      },
      {
        id: 6,
        imgSrc: 'assets/detailMenu/blueberry.png',
        name: '블루베리 세알',
        price: 15000,
      },
      {
        id: 7,
        imgSrc: 'assets/detailMenu/coffee.png',
        name: '따뜻한 콜드브루',
        price: 6000,
      },
      {
        id: 8,
        imgSrc: 'assets/detailMenu/rice.png',
        name: '든든한 밥한공기',
        price: 1000,
      },
    ])
  );
};

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', getMe),
  // Handles a GET /user request
  rest.get('/user', getMe),
  // Handles a GET /items request
  rest.get('/items', getItems),
];
