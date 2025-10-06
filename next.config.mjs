/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    // ✅ This removes the DevTools logo
    nextScriptWorkers: false,
  },

  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
