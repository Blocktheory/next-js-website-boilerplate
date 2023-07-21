/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NEXT_PUBLIC_ENV === "dev" ? false : true,
    },
};

module.exports = nextConfig;
