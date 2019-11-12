// workaround for bug with next-css
// https://github.com/zeit/next-plugins/issues/282
import "../styles/app.scss";

import App from "next/app";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
// const transition = { duration: 0.1 };

const variants = {
  hidden: {
    opacity: 0,
    transition
  },
  visible: {
    opacity: 1,
    transition
  }
};

class ZbzApp extends App {
  state = { isLoading: false };

  onRouteChangeStart = url => {
    this.setState({ isLoading: true });
  };

  onRouteChangeComplete = () => {
    this.setState({ isLoading: false });
  };

  onRouteChangeError = () => {
    this.setState({ isLoading: false });
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
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}

export default ZbzApp;
