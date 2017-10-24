const { mix } = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');

mix
    .setPublicPath('assets')
    .setResourceRoot('../')
    .sass( 'source/sass/style.scss', 'assets/css' )
    .js( 'source/js/main.js', 'assets/js' )
    .options({
      processCssUrls: true
    })
    .webpackConfig({
      plugins: [
        //new LiveReloadPlugin(),
        //new PurifyCSSPlugin({
        //  paths: glob.sync([
        //    path.join(__dirname, '**/*.htm')
        //  ]),
        //})
      ]
    })
    ;