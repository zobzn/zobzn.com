// workaround for bug with next-css
// https://github.com/zeit/next-plugins/issues/282
import "../styles/app.scss";

import App from "next/app";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] };

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
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          variants={variants}
          initial={false}
          animate="visible"
          exit="hidden"
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default ZbzApp;
