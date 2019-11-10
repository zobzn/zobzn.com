import React from "react";

export default React.forwardRef(function ZbzLink(props, ref) {
  return <a ref={ref} className="zbz-link" {...props} />;
});
