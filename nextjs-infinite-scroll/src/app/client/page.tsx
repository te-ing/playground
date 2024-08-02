"use client";

import { Button } from "@/components/ui/button";
import { PageResonse } from "@/type/page.type";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getData } from "../api";
import { Card } from "@/components/ui/card";

export default function ClientPage({ initialData }: { initialData: PageResonse }) {
  const [post, setPost] = useState<PageResonse["data"]>(initialData?.data);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const hasFetched = useRef(false); // 첫 실행 여부를 추적하기 위한 ref

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    hasNextPage ? observer.observe(observerRef.current!) : observer.unobserve(observerRef.current!);
    return () => {
      observerRef.current && observer.unobserve(observerRef.current);
    };
  }, [observerRef.current, hasNextPage]);

  useEffect(() => {
    if ((initialData && page === 1) || (hasFetched.current && page === 1)) return;
    const getPageData = async (page: number) => {
      const res = await getData(page);
      if (res.nextPage >= res.totalPages) setHasNextPage(false);
      setPost((prev) => (prev || []).concat(res.data));
    };
    getPageData(page);
    hasFetched.current = true;
  }, [page]);

  return (
    <div>
      클라이언트 컴포넌트
      <Button size={"sm"}>페이지 ({page})</Button>
      <Card className="h-[200px] w-[300px] m-4 p-4 overflow-auto">
        {post?.map((v) => {
          return (
            <div key={v.id}>
              <span>{v.name}</span>
              <span>{v.age}</span>
            </div>
          );
        })}
        {hasNextPage && <div ref={observerRef}>loading...</div>}
      </Card>
      <Link href="/">
        <Button variant="link">뒤로가기</Button>
      </Link>
    </div>
  );
}
