import type { GatsbyConfig } from "gatsby";
import * as env from "dotenv";

// load env vars from .env
env.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cw-gatsby`,
    // siteUrl: `https://www.tennesseethetatau.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-provide-react",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //   },
    // },
  ],
};

export default config;
