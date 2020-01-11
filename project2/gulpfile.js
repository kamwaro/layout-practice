const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1.where is my scss
    return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
    .pipe(sass().on('error',sass.logError))
    //3. where do I save the compiled css file
    .pipe(gulp.dest('src/css'))
    //4. stream change to all browsers
    .pipe(browserSync.stream());
}


// Move JS Files to src/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});


// Move Fonts to src/fonts
gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('src/fonts'))
  })
  
  // Move Font Awesome CSS to src/css
  gulp.task('fa', function() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest('src/css'))
  })
  


function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

gulp.task('default', ['js','fa','fonts']);

exports.style = style;
exports.watch = watch;