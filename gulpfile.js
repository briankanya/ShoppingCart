var gulp = require('gulp');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var minifyCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var gutil = require('gulp-util');
	
gulp.task('css', function() {
    return gulp.src([
            './src/css/**/*.css'
        ])
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
    return gulp.src([
            './src/js/**/*.js'
        ])
        .pipe(uglify())
		.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('fonts', function() {
    return gulp.src([
            './src/fonts/*.otf',
			'./src/fonts/*.eot',
			'./src/fonts/*.svg',
			'./src/fonts/*.ttf',
			'./src/fonts/*.woff',
			'./src/fonts/*.woff2'
        ])
        .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('html', function() {
	return gulp.src([
            './src/*.html'
        ])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('images', function() {
    return gulp.src([
            './src/img/**/*'
        ])
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('extra', function() {
    return gulp.src([
            './src/favicon.ico'
        ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.parallel('css', 'js', 'html', 'fonts', 'images', 'extra'));