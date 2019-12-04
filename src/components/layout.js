import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import classnames from "classnames";

const defaultClassNames = {
  "page-bone": true
};

export default function Layout({ classNames = {}, children }) {
  const combinedClassNames = Object.assign({}, defaultClassNames, classNames);

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
