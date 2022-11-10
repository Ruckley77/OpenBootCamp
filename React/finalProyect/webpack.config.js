/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const path = require('path')

// plugins, mini Css, Scss/Sass
// to reduce the amount of style pages

const HtmlWebpackPlugin = require('html-webpack-plugin') // for the template that webpack uses

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // reduce css

const { SourceMapDevToolPlugin } = require('webpack') // To know the SourceMap of our proyect

const ESLintPlugin = require('eslint-webpack-plugin'); // replacing eslint-loader

// Port Config

const port = process.env.PORT || 3000

// export webpack config

module.exports = {
  // ? entry
  entry: './src/index.jsx', // Point of access 

  // ? output
  output: {
    path: path.join(__dirname, '/dist'), // all bundle generated will go under /dist
    filename: 'bundle.[fullhash].js',
    publicPath: '/'
  },
  // ? context
  context: path.resolve(__dirname),

  // ? dev server
  devServer: {
    port,
    historyApiFallback: true
  },

  // ? devtools
  devtool: 'eval-source-map',

  // ? modules
  module: {
    rules: [
      // rules for JS and JSX
      {
        enforce: 'pre',
        test: /(\.js|\.jsx)$/, // it will test both js and jsx
        exclude: /node_modules/,
        use: [
          'source-map-loader'
        ]
      },
      // rules for Babel ES and JSX
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react'
            ]
          }
        },
      },
      // rules for CSS, SCSS, SASS
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // eslint-disable-next-line func-names, object-shorthand
                plugins: function () {
                  return [
                    // eslint-disable-next-line global-require
                    require('autoprefixer')
                  ]
                }
              }
            }
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      // rules for images
      {
        test: /(\.png|\.jpe?g|\.gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
    ]
  },

  // ? plugins
  plugins: [
    // template HTML
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: './css/styles.css'
      }
    ),
    new SourceMapDevToolPlugin(
      {
        filename: '[file].map'
      }
    ),
    new ESLintPlugin(
      {
        files: './node_modules/eslint-webpack-plugin'
      }
    )
  ],
  
  // ? resolve
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    modules: [
      'node_modules'
    ],
    alias: {
      'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min.js')
    }
  }
}