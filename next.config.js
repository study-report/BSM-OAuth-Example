/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://auth.bssm.kro.kr/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
