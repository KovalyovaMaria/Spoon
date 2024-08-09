let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let cssmin = require('gulp-cssmin');
let jsmin = require('gulp-minify.js');

let inlineImages = require('gulp-inline-images');

gulp.task('inline-images', function(){
    return gulp.src(['src/assets/img/*.png'])
        .pipe(inlineImages({/* options */}))
        .pipe(gulp.dest('build/images'));
});

gulp.task('minify-html', () => {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/font-face.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/animation.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/css/media.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});


gulp.task('minify-js', () => {
    return gulp.src('./src/main.js')
        .pipe(jsmin())
        .pipe(gulp.dest('build'));
});
