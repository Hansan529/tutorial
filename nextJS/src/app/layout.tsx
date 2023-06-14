import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "NextJS로 만든 페이지",
  description: "NEXT.JS로 SSR, CSR을 사용해보자",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
