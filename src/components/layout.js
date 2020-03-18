import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Header from "./header";
import classnames from "classnames";
import checkFonts from "../lib/check-fonts";

const defaultClassNames = {
  "page-bone": true
};

export default function Layout({ classNames = {}, children }) {
  const combinedClassNames = Object.assign({}, defaultClassNames, classNames);

  useEffect(() => {
    checkFonts(["Fira Sans"]);
  });

  return (
    <>
      <div className={classnames(combinedClassNames)}>
        <Header />
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
