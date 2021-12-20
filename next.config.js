const path = require("path");

module.exports = {
  images: {
    domains: ["example.com", "192.168.1.3"],
  },
  env: {},
  webpack: (config, { isServer }) => {
    config.resolve.alias["~"] = path.resolve("./src");

    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    return config;
  },
};

