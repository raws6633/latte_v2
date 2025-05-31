import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
    // your next.js config
};

const sentryWebpackPluginOptions = {
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: {
        name: process.env.SENTRY_RELEASE,
        finalize: true,
        setCommits: {
            auto: true as const, // 중요!
        },
    },
    include: ".next",
    ignore: ["node_modules"],
    urlPrefix: "~/_next",
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
