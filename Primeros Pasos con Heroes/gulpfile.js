var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var react = require('gulp-react');
var webserver = require('gulp-webserver');
var runsequence = require('gulp-run-sequence');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');

// Directorios para `gulp.src`.
var paths = {
  less: ['src/**/*.less', 'src/**/**/*.less', '!src/{style,style/**}'],
  css: ['build/**/*.css', '!build/{style,style/**}'],
  globalcss: ['build/style/*.css'],
  style: ['src/style/*.less'],
  appjs: ['./src/app.jsx'],
  js: ['src/**/*.js'],
  indexhtml: ['./src/index.html']
};

// Here is where we will be sending all our files to.
var destPath = './build'


function swallowError(error) {
  gutil.log(error.message, gutil.colors.magenta('123'));
  this.emit('end');
}

/*
 * Copies the index.html from the source directory to the build directory.
 */
gulp.task('copy-index', function () {
  return gulp
    .src(paths.indexhtml)
    .pipe(gulp.dest(destPath));
});

/*
 * Injects the "global" styles.
 */
gulp.task('inject-index', function () {
  return gulp
    .src([ './build/index.html' ])
    /*.pipe(
      inject(
        gulp.src(paths.globalcss, {read: false}),
        {name: 'global', relative: true}
      )
    )
    .pipe(
      inject(gulp.src(paths.css, {read: false}), {relative: true})
    )*/
    .pipe(gulp.dest(destPath));
});

/*
 * Copies the index.html from the source directory to the build directory, and
 * injects link tags into the HTML.
 */
gulp.task('index', function (done) {
  return runsequence('copy-index', done);
});

/*
 * Watch for changes in files.
 */
gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  //gulp.watch(paths.appjs, ['jsx']);
  gulp.watch(paths.indexhtml, ['index']);
});

/*
 * Corre el Servidor
 */
gulp.task('server', function () {
  return gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

/*
 * Compiles the global styles, local styles, and the JavaSript/JSX code, and
 * puts the compiled code into the `build` folder. Injects the necessary
 * dpeendencies into the HTML.
 */
gulp.task('build', function (done) {
  return runsequence(
  	'jsx',
  	'js',
    'index',
    done
  );
});

/*
 * The default is meant for development. Watches for changes, runs the builds,
 * and fires up a web server. Also opens a new browser tab to the application.
 */
gulp.task('develop', function () {
  return runsequence('build', ['watch', 'server']);
});

gulp.task('js', function(){
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(destPath));
});

gulp.task('jsx', function() {
  return browserify(paths.appjs)
    .transform(reactify)
    .bundle()
    .on('error', function (err) {
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .on('error', swallowError)
    .pipe(gulp.dest(destPath));
});