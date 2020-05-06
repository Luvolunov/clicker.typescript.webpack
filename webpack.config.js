const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = getConfig;

function getConfig(env){
    const isProd = env.NODE_ENV === "production";

    const config = {
        mode: isProd ? "production": "development",
        entry: {
            preloader: path.resolve(__dirname, "src/components/preloader/index.ts"),
            index: path.resolve(__dirname, "src/index.ts")            
        },
        output: {
            filename: isProd ? "[name].[contenthash].js": "[name].js",
            path: path.resolve(__dirname, "build")
        },
        resolve: {
            extensions: [".ts", ".js"],
            plugins: [new TsConfigPathsPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "awesome-typescript-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.pug/,
                    use: {
                        loader: "pug-loader",
                        options: {
                            root: path.resolve(__dirname, "src")
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "./src/index.pug"),
                filename: "index.html"
            }),
            new MiniCssExtractPlugin({
                filename: isProd ? "[name].[contenthash].css": "[name].css"
            })
        ]
    }

    return config;
}