import React from "react";
import NextLink from "next/link";

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
    prefetch
  };

  return (
    <NextLink {...nextLinkProps}>
      <a {...otherProps} />
    </NextLink>
  );
}
