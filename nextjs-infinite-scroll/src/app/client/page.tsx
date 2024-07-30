"use client";

import { Button } from "@/components/ui/button";
import { PageResonse } from "@/type/page.type";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getData(page?: number): Promise<PageResonse[]> {
  const res = await fetch(page ? `/api?page=${page}` : "/api");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function ClientPage({ initialData }: { initialData: PageResonse[] }) {
  const [post, setPost] = useState<PageResonse[]>(initialData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setPost(await getData(page));
      return;
    })();
  }, [page]);

  return (
    <div>
      클라이언트 컴포넌트
      <Button size={"sm"} onClick={() => setPage((prev) => (prev >= 4 ? 1 : prev + 1))}>
        페이지 변경 ({page})
      </Button>
      {post?.map((v) => {
        return (
          <div key={v.id}>
            <span>{v.name}</span>
            <span>{v.age}</span>
          </div>
        );
      })}
      <Link href="/">
        <Button variant="link">뒤로가기</Button>
      </Link>
    </div>
  );
}
