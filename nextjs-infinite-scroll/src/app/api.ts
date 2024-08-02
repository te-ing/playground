import { PageResonse } from "@/type/page.type";

export async function getData(page?: number): Promise<PageResonse> {
  const res = await fetch(page ? `/api?page=${page}` : "/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
