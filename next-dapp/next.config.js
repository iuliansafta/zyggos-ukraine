const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
