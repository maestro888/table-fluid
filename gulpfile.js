const gulp   = require('gulp'),
  plumber    = require('gulp-plumber'),
  sass       = require('gulp-sass'),
  babel      = require('gulp-babel'),
  sourceMaps = require('gulp-sourcemaps');

const path = {
  build: {
    js: 'dist/js',
    css: 'dist/css',
  },
  src: {
    js: 'src/js/**/*.js',
    scss: 'src/scss/**/*.scss',
  },
  watch: {
    js: 'src/js/**/*.js',
    scss: 'src/scss/**/*.scss',
  },
};

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  sourceComments: false,
};

// Error handling.
function catchError(e) {
  console.log(e);
  this.emit('end');
}

// Build js.
function taskJs() {
  return gulp.src(path.src.js)
    .pipe(plumber(catchError))
    .pipe(sourceMaps.init())
    .pipe(babel({
      presets: ['@babel/env'],
      'comments': false,
      'retainLines': false,
    }))
    .pipe(sourceMaps.write(''))
    .pipe(gulp.dest(path.build.js));
}

// Build css.
function taskScss() {
  return gulp.src(path.src.scss)
    .pipe(plumber(catchError))
    .pipe(sourceMaps.init())
    .pipe(sass(sassOptions))
    .pipe(sourceMaps.write(''))
    .pipe(gulp.dest(path.build.css));
}

// Build all files.
function taskWatch() {
  gulp.watch(path.watch.js, taskJs);
  gulp.watch(path.watch.scss, taskScss);
}

exports.js      = taskJs;
exports.scss    = taskScss;
exports.default = taskWatch;
