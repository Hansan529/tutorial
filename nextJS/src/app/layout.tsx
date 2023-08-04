import Link from 'next/link';
import './globals.css';
import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'NextJS로 만든 페이지',
  description: 'NEXT.JS로 SSR, CSR을 사용해보자',
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <header>Layout Header</header>
        <h1>
          <Link href="/">Web</Link>
        </h1>
        {children}
        <footer>Layout Footer</footer>
      </body>
    </html>
  );
}
