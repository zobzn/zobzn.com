import React from "react";
import MyError from "./_error";

export default function Custom404() {
  return <MyError statusCode={404} />;
}
