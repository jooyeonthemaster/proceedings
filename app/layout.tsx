import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025.11.08 개발팀 회의록",
  description: "주식회사 네안데르 개발팀 회의 자료",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
