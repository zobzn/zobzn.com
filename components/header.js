import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const localhosts = ["localhost", "127.0.0.1", "10.0.75.1", "192.168.0.100"];
const siteTitle = `Ы`;
const rootPath = `/`;

function Header(props) {
  const router = useRouter();
  const [isLocalHost, setIsLocalHost] = useState(false);
  const isHomepage = rootPath === router.pathname;

  console.log("Header props", props);

  useEffect(() => {
    console.log("Header useEffect");
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

export default Header;
