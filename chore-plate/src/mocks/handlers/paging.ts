import { rest } from 'msw';
import { paging } from '../mockData/paging';

export const getPagingList = rest.post('/point', async (req, res, ctx) => {
  const body = await req.json();
  const page = `page${body.page || 1}`;
  return res(ctx.json(paging[page]));
});
