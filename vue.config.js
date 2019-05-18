const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, 'server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
            },
        },
        disableHostCheck: true,
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 350000,
            },
        },
        performance: {
            maxAssetSize: 1000000,
            maxEntrypointSize: 1000000,
        },
    },
};
