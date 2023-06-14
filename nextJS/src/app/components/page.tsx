"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <style jsx global>{`
        nav {
          background-color: skyblue;
        }
        a {
          color: red;
        }
      `}</style>
    </nav>
  );
}
