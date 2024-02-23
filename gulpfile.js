const gulp = require('gulp');
const include = require('gulp-file-include');
const scs = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const rp = require('gulp-replace');
const avif = require('gulp-avif');
// const webp = import('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

function imag(){
    return gulp.src(['app/images/*.*','!app/images/*.svg'])
        .pipe(newer('dist/images/'))
        .pipe(avif({ quality  : 50 }))

        // .pipe(gulp.src(['app/images/*.*','!app/images/*.svg']))
        // .pipe(newer('dist/images/'))
        // .pipe(webp())

        .pipe(gulp.src(['app/images/*.*','!app/images/*.svg']))
        .pipe(newer('dist/images/'))
        .pipe(imagemin())

        .pipe(gulp.src('app/images/*.svg'))
        .pipe(newer('dist/images/'))

        .pipe(gulp.dest('dist/images/'))
}
function style(){
    return gulp.src('app/scss/*.scss')
        .pipe(scs())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream())
}
const script = function(){
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream())
}
function scriptHTML(){
    return gulp.src('app/html/*index.html')
        .pipe(include())
        .pipe(rp(/@img\//g,'images/'))
        .pipe(rp(/@js\//g,'js/'))
        .pipe(rp(/@scss\//g,'css/'))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream())
}
const watching = function(){
    gulp.watch(['app/scss/*.scss'],style)
    gulp.watch(['app/html/*.html'],scriptHTML)
    gulp.watch(['app/js/*.js'],script)
    gulp.watch(['app/images/*.*'],imag)
    browserSync.init({
        server:{
            baseDir:'dist/'
        }
    });
}
exports.imag = imag;
exports.default = gulp.parallel(watching);