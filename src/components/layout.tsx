import PropTypes from "prop-types";
import React, { useEffect } from "react";
import classnames from "classnames";

import Header from "./header/header";
import checkFonts from "../lib/check-fonts";

const defaultClassNames = {
  "page-bone": true,
};

export default function Layout({ classNames = {}, children }) {
  useEffect(() => {
    checkFonts(["Fira Sans"]);
  });

  return (
    <div className={classnames(defaultClassNames, classNames)}>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
