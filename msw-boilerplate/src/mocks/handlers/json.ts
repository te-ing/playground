// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

export const getJson = rest.get("json", async (req, res, ctx) => {
  const date = req.url.searchParams.get("date");
  if (date !== "undefined") {
    const json = (await import(`../jsonData/${date}.json`)).default;
    return res(ctx.json(json));
  }
  return res(ctx.json("성공!"));
});
