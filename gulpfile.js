var gulp = require('gulp');
//var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');

var src = 'app/src/slingshot';
var dist = 'app/dist';

var paths = {
    js: src + '/js/*.js',
    styl: src + '/styl/*.styl',
    html: src + '/**/*.html'
};

// gulp.task('js:combine', function () {
//     return gulp.src(paths.js)
//         .pipe(concat('combined.js'))
//         .pipe(gulp.dest(dist+'/js'))
//         //.pipe(uglify())
//         .pipe(rename('combined.min.js'))
//         .pipe(gulp.dest(dist+'/js')) });

gulp.task('watch', function () {
    gulp.watch(paths.js, ['babel']);
    //gulp.watch(paths.scss, ['scss:compile']);
});


gulp.task('babel', function() {
    return gulp.src(paths.js)
       // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(concat('all.js'))
        //.pipe(gulp.dest(dist+'/js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist+'/js'))
});
gulp.task('default', ['babel','watch']);



