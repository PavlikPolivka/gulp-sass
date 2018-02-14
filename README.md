# Gulp SASS

This is a simple prototype for Gulp pipeline for SASS with minification and autorprefixer and correctly working source maps.

See gulpfile.js -- all postprocessors need to be in one pipestep `.pipe(postcss(processors))` multiple steps will break source maps.
Also do not use gulp-autoprefixer but postcss one. 

See package.json for specific versions.

It's very specific to what versions to run together for it to work.
Tested versions are:

- "autoprefixer": "^7.1.5"
- "cssnano": "^4.0.0-rc.2"
- "gulp": "^3.9.0"
- "gulp-sass": "^3.1.0"
- "gulp-postcss": "^7.0.0"
- "gulp-sourcemaps": "^2.6.1"