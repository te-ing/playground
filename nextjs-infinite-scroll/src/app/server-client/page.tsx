import { Suspense } from "react";
import ClientPage from "../client/page";
import { PageResonse } from "@/type/page.type";

export async function getData(page?: number): Promise<PageResonse> {
  const res = await fetch(page ? `http://localhost:3000/api?page=${page}` : "http://localhost:3000/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function ServerClient() {
  const initialData = await getData(1);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage initialData={initialData} />
    </Suspense>
  );
}
