/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "masterarts.co",
        },
      ],
    },
  };
  
  export default nextConfig;
  