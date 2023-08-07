/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/destructuring-exercises",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
