"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <Link className={pathname === "/" ? styles.active : undefined} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/dashboard" ? styles.active : undefined}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </nav>
  );
}
