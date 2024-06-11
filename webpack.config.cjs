// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            open: true,
            host: 'localhost',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),

            new MiniCssExtractPlugin(),

            // Add your plugins here
            // Learn more about plugins from https://webpack.js.org/configuration/plugins/
        ],
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-loader'
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.(ts|tsx)$/i,
                    use: [

                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                    ],
                    exclude: ['/node_modules/'],
                },
                {
                    test: /\.css$/i,
                    use:
                        [stylesHandler, 'css-loader'],
                }
                ,
                {
                    test: /\.s[ac]ss$/i,
                    use:
                        [stylesHandler, 'css-loader', 'sass-loader'],
                }
                ,
                {
                    test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                    type:
                        'asset',
                }
                ,

// Add your rules for custom modules here
// Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.svg', '...'],
        }
        ,
    }
;

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        config.entry = './src/index.tsx',
            config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
        config.entry = './development/devIndex.tsx';
    }
    return config;
};
