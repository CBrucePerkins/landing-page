/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // Serves at musios.io root — Traefik has nothing else claiming `/`
  // (`/api` and `/app` are PathPrefix-routed to the api/frontend services),
  // so no basePath here.
  allowedDevOrigins: [
    "192.168.2.196",
    "172.20.10.9",
  ],
  // optional: enable image domains, etc.
}

export default nextConfig;
