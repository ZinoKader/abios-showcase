import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const Head = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:title" content={title || ""} />
  </NextHead>
);

Head.propTypes = {
  title: string.isRequired,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
