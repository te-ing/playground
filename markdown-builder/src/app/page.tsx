import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-4 [&_a]:text-2xl [&_a]:bg-sky-200 [&_a]:w-fit [&_a]:px-4">
      {['edit'].map((v) => (
        <Link key={v} href={v}>
          ➡️ {v}
        </Link>
      ))}
    </div>
  );
}
