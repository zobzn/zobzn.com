import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "../link";

import styles from "./header.module.scss";

const localhosts = ["localhost", "127.0.0.1", "10.0.75.1", "192.168.0.100"];
const siteTitle = `Semyon Tokarev`;
const rootPath = `/`;

export default function Header() {
  const router = useRouter();
  const [isLocalHost, setIsLocalHost] = useState(false);
  const isHomepage = rootPath === router.pathname;

  useEffect(() => {
    setIsLocalHost(localhosts.indexOf(window.location.hostname) !== -1);
  }, [setIsLocalHost]);

  return (
    <header className={"container " + styles["site-head"]}>
      <div className={styles["site-head__title"]}>
        {isHomepage && <h1>{siteTitle}</h1>}
        {!isHomepage && <Link href={`/`}>{siteTitle}</Link>}
      </div>
      <nav className={styles["site-head__menu"]}>
        {isLocalHost && (
          <div>
            <Link href="/start" className="zbz-link">
              Start
            </Link>
          </div>
        )}
        {isLocalHost && (
          <Link href="/work" className="zbz-link">
            Work
          </Link>
        )}
        {
          <Link href="/notes" className="zbz-link">
            Notes
          </Link>
        }
        {
          <Link href="/contact" className="zbz-link">
            Contact
          </Link>
        }
      </nav>
    </header>
  );
}
