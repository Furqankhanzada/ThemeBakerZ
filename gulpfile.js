const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const imagemin = require('gulp-imagemin');

const livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./assets/css/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets'],
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        //.pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

gulp.task('es6', function () {
    return gulp.src(['./assets/js/es6/*.js', './assets/js/es6/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/js'))
        .pipe(livereload());
});

gulp.task('imagemin', function () {
    return gulp.src('./assets/images/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('./assets/images'))
        .pipe(livereload());
});

gulp.task('fonts', function() {
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./assets/css/sass/*.scss', ['sass']);
    gulp.watch(['./assets/js/es6/*.js', './assets/js/es6/**/*.js'], ['es6']);
    gulp.watch('./assets/images/img/*', ['imagemin']);
});

gulp.task('default', ['sass', 'es6', 'imagemin', 'fonts', 'watch'],  function() {
    // place code for your default task here
});