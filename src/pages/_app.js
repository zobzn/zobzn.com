// workaround for bug with next-css
// https://github.com/zeit/next-plugins/issues/282
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import App from "next/app";
import Router from "next/router";
import nprogress from "nprogress";
import React from "react";
import Analytics from "../components/analytics";
import "../styles/404.scss";
import "../styles/app.scss";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
const variants = {
  hidden: {
    opacity: 0,
    transition,
  },
  visible: {
    opacity: 1,
    transition,
  },
};

class ZbzApp extends App {
  state = { isLoading: false };

  onRouteChangeStart = () => {
    nprogress.start();
    this.setState({ isLoading: true });
  };

  onRouteChangeComplete = () => {
    this.setState({ isLoading: false });
    nprogress.done();
  };

  onRouteChangeError = () => {
    this.setState({ isLoading: false });
    nprogress.done();
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", this.onRouteChangeStart);
    Router.events.on("routeChangeComplete", this.onRouteChangeComplete);
    Router.events.on("routeChangeError", this.onRouteChangeError);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeError", this.onRouteChangeError);
    Router.events.off("routeChangeComplete", this.onRouteChangeComplete);
    Router.events.off("routeChangeStart", this.onRouteChangeStart);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence exitBeforeEnter initial={false}>
          {!isLoading && (
            <motion.div
              key={router.asPath + (isLoading ? 1 : 0)}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Component {...pageProps} />
              <Analytics />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}

export default ZbzApp;
