const withPWA = require("next-pwa")({
    dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

module.exports = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
});

module.exports = nextConfig;
u;
