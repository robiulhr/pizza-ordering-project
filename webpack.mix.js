let mix = require('laravel-mix');
require('laravel-mix-favicon');

mix.js('resources/js/app.js', 'js')
    .sass('resources/scss/app.scss', 'css/').setPublicPath('public')
