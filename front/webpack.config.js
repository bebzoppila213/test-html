const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
};