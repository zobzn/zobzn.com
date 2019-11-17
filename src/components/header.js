import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "./link";

const localhosts = ["localhost", "127.0.0.1", "10.0.75.1", "192.168.0.100"];
const siteTitle = `Ы`;
const rootPath = `/`;

export default function Header() {
  const router = useRouter();
  const [isLocalHost, setIsLocalHost] = useState(false);
  const isHomepage = rootPath === router.pathname;

  useEffect(() => {
    setIsLocalHost(localhosts.indexOf(window.location.hostname) !== -1);
  }, [setIsLocalHost]);

  return (
    <header className="site-head">
      {isHomepage && (
        <h1 className="site-head__title" data-site-title={siteTitle}>
          {""}
        </h1>
      )}
      {!isHomepage && (
        <Link
          href={`/`}
          className="site-head__title"
          data-site-title={siteTitle}
        ></Link>
      )}
      {isLocalHost && (
        <Link href="/start" className="zbz-link ml-16">
          Start
        </Link>
      )}
    </header>
  );
}
