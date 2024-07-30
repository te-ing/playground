import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full p-4 gap-2">
      Next 테스트
      <Link href="/client">클라이언트 컴포넌트</Link>
      <Link href="/server-client">서버 + 클라이언트 컴포넌트</Link>
    </main>
  );
}
