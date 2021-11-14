/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        console.log(process.env.PROXY_URL)
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.PROXY_URL}/api/:path*`,
                permanent: true,
            },
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/],
            },
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    cleanupIDs: false,
                                },
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    },
                },
            ],
        })

        return config
    },
}
