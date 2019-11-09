import PropTypes from "prop-types";
import React from "react";
import Header from "./header";

// export default function Layout({ location, children }) {
export default function Layout({ children }) {
  return (
    <div className={`page-bone`}>
      {/*
      <Header location={location} />
       */}
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
