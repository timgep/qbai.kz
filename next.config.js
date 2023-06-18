/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com', 'res.cloudinary.com', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    },
    experimental: {
        swcPlugins: [["next-superjson-plugin", {}]],
      }
}

module.exports = nextConfig

