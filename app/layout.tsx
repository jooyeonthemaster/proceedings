import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025 네안데르 개발팀 회의록",
  description: "주식회사 네안데르 개발팀 주간 회의 자료 - 체험형 AI 콘텐츠 창작 집단",
  keywords: ["네안데르", "회의록", "AI", "개발팀", "스타트업"],
  authors: [{ name: "네안데르" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://2025meeting.vercel.app",
    siteName: "네안데르 회의록",
    title: "2025 네안데르 개발팀 회의록",
    description: "주식회사 네안데르 개발팀 주간 회의 자료 - 체험형 AI 콘텐츠 창작 집단",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "네안데르 개발팀 회의록",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 네안데르 개발팀 회의록",
    description: "주식회사 네안데르 개발팀 주간 회의 자료",
    images: ["/profile.jpg"],
  },
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
