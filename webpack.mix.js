const { mix } = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix
    .setPublicPath('assets')
    .setResourceRoot('../')
    .sass( 'source/sass/style.scss', 'assets/css' )
    .js( 'source/js/main.js', 'assets/js' )
    .options({
        processCssUrls: true
      })
    //.browserSync({
    //    proxy: 'fun.octobercms.loc'
    //  })
    .webpackConfig({
      plugins: [
        new LiveReloadPlugin()
      ]
    })
    ;