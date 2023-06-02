import NextLink from "next/link";
import React from "react";

const pages = [`/`, `/work`, "/notes", "/contact", "/resume", "/start"].reduce(
  (acc, href) => ({ ...acc, [href]: true }),
  {}
);

const isPageHref = (href) => !!pages[href];
const isNoteHref = (href) => href.match(/^\/[^/]+$/) && !isPageHref(href);
const isWorkHref = (href) => href.match(/^\/work\/[^/]+$/);

export default function Link(props) {
  const {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    ...otherProps
  } = props;

  const nextLinkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
  };

  if (!nextLinkProps.as && nextLinkProps.href) {
    if (isNoteHref(nextLinkProps.href)) {
      nextLinkProps.as = nextLinkProps.href;
      nextLinkProps.href = "/[slug]";
      otherProps["data-route"] = nextLinkProps.href;
    } else if (isWorkHref(nextLinkProps.href)) {
      nextLinkProps.as = nextLinkProps.href;
      nextLinkProps.href = "/work/[slug]";
      otherProps["data-route"] = nextLinkProps.href;
    } else if (isPageHref(nextLinkProps.href)) {
      otherProps["data-route"] = nextLinkProps.href;
    } else {
      return <a href={nextLinkProps.href} {...otherProps} />;
    }
  }

  return <NextLink {...nextLinkProps} {...otherProps} />;
}
