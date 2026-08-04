/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  basePath: process.env.NODE_ENV === 'production' ? '/landing' : '',
  allowedDevOrigins: [
    "192.168.2.196",
    "172.20.10.9",
  ],
  // optional: enable image domains, etc.
}

export default nextConfig;
