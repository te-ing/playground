// eslint-disable-next-line import/no-extraneous-dependencies
import { rest, RestRequest } from "msw";

// [Get] fruits 서버 요청 시 [ '사과', '바나나' ]를 응답한다.

const 과일 = ["사과", "바나나"];
const fruits = ["apple", "banana"];
export const get과일 = rest.get(`/${encodeURIComponent("과일")}`, (req, res, ctx) => res(ctx.json(과일)));

export const getFruits = rest.get("/fruits", (req, res, ctx) => res(ctx.json(fruits)));

export const postFruit = rest.post("/fruits", async (req: RestRequest, res, ctx) => {
  const { data } = await req.json();
  fruits.push(data);
  return res(
    ctx.status(200),
    ctx.json({
      fruits,
    })
  );
});
