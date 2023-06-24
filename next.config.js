module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
}
