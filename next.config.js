/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/invoice-generator",
    assetPrefix: "/invoice-generator",
    trailingSlash: false,  // Prevents Next.js from adding extra slashes
    experimental: {
        serverComponentsExternalPackages: ["puppeteer-core"],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.map$/,
            use: "ignore-loader",
        });
        return config;
    },
};

// Bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
