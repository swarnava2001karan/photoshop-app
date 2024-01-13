/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'photoshop-app-xt7h.vercel.app'
            }
        ]
    }
}

module.exports = nextConfig