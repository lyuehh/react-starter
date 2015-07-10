var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './js/app.js'],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: 'react-hot!babel-loader', include: path.join(__dirname, 'js')},
                { test: /\.sass/, loader: "style!css!sass" },
                { test: /\.less$/, loader: "style!css!less" }
            ]
        },
        devtool: 'source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
};
