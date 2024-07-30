import getQueryString from "@/util/getQueryString";
import { NextRequest } from "next/server";
import { pageData } from "./database";
import { PageResonse } from "@/type/page.type";

export async function GET(request: NextRequest) {
  const { page } = getQueryString(request.url);
  const result = page ? pageData.slice(10 * (Number(page) - 1), 10 * Number(page)) : pageData;
  return Response.json(result, { status: 200 });
}

export async function POST() {
  return Response.json("ok", { status: 200 });
}
