/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        FORMSUBMIT_PATH: process.env.FORMSUBMIT_PATH,
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
