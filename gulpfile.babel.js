import browserify from 'browserify';
import babelify from 'babelify';
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const { autoprefixer, concat, imagemin, livereload, sass, sourcemaps, uglify, util} = gulpLoadPlugins();
import ftp from 'vinyl-ftp';

gulp.task('sass', () => {
    return gulp.src('./assets/css/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [
              './node_modules/bootstrap/scss',
              './node_modules/font-awesome-sass/assets/stylesheets'
            ]
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

gulp.task('es6', () => {
    // set up the browserify instance on a task basis
    let b = browserify({
        entries: './assets/js/es6/main.js',
        debug: true
    });
    return b.transform(babelify).bundle()
        .pipe(source('all.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/js'))
        .pipe(livereload());
});

gulp.task('imagemin', () => {
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

gulp.task('fonts', () => {
    return gulp.src([
      './node_modules/bootstrap-sass/assets/fonts/**/*',
      './node_modules/font-awesome-sass/assets/fonts/**/*'
    ])
    .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('./assets/css/sass/*.scss', ['sass']);
    gulp.watch(['./assets/js/es6/*.js', './assets/js/es6/**/*.js'], ['es6']);
    gulp.watch('./assets/images/img/*', ['imagemin']);
});

const upload = (globs, destination) => {
    const conn = ftp.create( {
        host:     'HOST_ADDRESS',
        user:     'FTP_USERNAME',
        password: 'FTP_PASSWORD',
        log:      util.log,
        timeOffset: 50000
    } );

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newerOrDifferentSize( destination || '/' ) ) // only upload newer files
        .pipe( conn.dest( destination || '/' ) );
};

gulp.task( 'deploy:theme', () => {
    let globs = [
        'assets/**',
        '!assets/css/{scss,scss/**}',
        '!assets/js/{es6,es6/**}',
        '!assets/images/{img,img/**}',
        'inc/**',
        '404.php',
        'footer.php',
        'functions.php',
        'header.php',
        'home.php',
        'index.php',
        'singular.php',
        'style.css'
    ];
    upload(globs, '/wp/wp-content/themes/theme-bakerz')
});

gulp.task('default', ['sass', 'es6', 'imagemin', 'fonts', 'watch'], () => {
    // place code for your default task here
});
