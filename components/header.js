import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const localhosts = ["localhost", "127.0.0.1", "10.0.75.1", "192.168.0.100"];
const siteTitle = `Ы`;
const rootPath = `/`;

export default function Header() {
  const router = useRouter();

  const isHomepage = rootPath === router.pathname;
  const hostname = process.browser ? window.location.hostname : null;
  const isLocalHost = hostname && localhosts.indexOf(hostname) !== -1;

  return (
    <header className="site-head">
      {isHomepage && (
        <h1 className="site-head__title" data-site-title={siteTitle}>
          {""}
        </h1>
      )}
      {!isHomepage && (
        <Link href={`/`}>
          <a className="site-head__title" data-site-title={siteTitle}></a>
        </Link>
      )}
      {isLocalHost && (
        <Link href="/start">
          <a className="zbz-link ml-3">Start</a>
        </Link>
      )}
    </header>
  );
}
