import getQueryString from "@/util/getQueryString";
import { NextRequest } from "next/server";
import { pageData } from "./database";

export async function GET(request: NextRequest) {
  const { page } = getQueryString(request.url);
  const result = page ? pageData.slice(10 * (Number(page) - 1), 10 * Number(page)) : pageData;
  const data = {
    data: result,
    nextPage: Number(page) + 1,
    totalPages: Math.ceil(pageData.length / 10),
  };

  return Response.json(data, { status: 200 });
}

export async function POST() {
  return Response.json("ok", { status: 200 });
}
