import NextLink from "next/link";

export default class Link extends NextLink {
  render() {
    const {
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      ...otherProps
    } = this.props;

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
}
