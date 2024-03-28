/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.semrush.com",
      },
      {
        protocol: "https",
        hostname: "d4.alternativeto.net",
      },
      {
        protocol: "https",
        hostname: "static.filehorse.com",
      },
    ],
  },
};

export default nextConfig;
