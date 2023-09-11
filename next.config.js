/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.com','jgec.ac.in','picsum.photos','drive.google.com','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
