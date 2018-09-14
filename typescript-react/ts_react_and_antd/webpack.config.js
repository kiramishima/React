const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const package = require('./package.json');

module.exports = {
    entry: {
        vendor: Object.keys(package.dependencies),
        app: "./src/index.tsx"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "./dist/")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // Dev Server
    devServer: {
        contentBase:  path.join(__dirname, "./dist/"),
        compress: true,
        hot: true,
        overlay: true,
        port: 3000
    },
    // Modules
    module: {
        rules: [
            // Load CSS
            { test:/\.css$/, use:['style-loader','css-loader']},

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // Plugins
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            path: path.join(__dirname, './dist/'),
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};