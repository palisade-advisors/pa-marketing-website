import { GatsbySSR } from "gatsby";
import React from "react";
import Layout from "./src/components/Layout";
const headComponents = [
  <link rel="preconnect" href="https://fonts.googleapis.com" />,
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />,
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
    rel="stylesheet"
  />,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
