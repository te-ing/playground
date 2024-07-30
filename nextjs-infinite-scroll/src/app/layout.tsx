import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next 서버컴포넌트 테스트",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex justify-center bg-slate-200`}>
        <div className="w-full max-w-xl bg-white h-screen" aria-label="모바일 wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
