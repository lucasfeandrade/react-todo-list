var webpack = require('webpack')
module.exports = {
    devtool: 'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optmize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPludin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }
}