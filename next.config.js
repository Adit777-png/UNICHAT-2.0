/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    swcPlugins:[
      ["next-superjson-plugin",{}]
    ]
  },
  images: {
    domains: ["avatars.githubusercontent.com","res.cloudinary.com",
      "lh3.googleuseraccount.com"
    ],
  },
};

module.exports = nextConfig;