const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano = require('cssnano');

const processors = [
  autoprefixer({browsers: ['last 2 version']}),
  nano(),
];

gulp.task('css', function () {
  return   gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/css'));
});


gulp.task('default', ['css'], function () {
  gulp.watch("src/scss/*/*.scss", ['css']);
});
