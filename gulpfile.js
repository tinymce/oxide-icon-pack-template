var iconPackager = require('@ephox/oxide-icons-tools').iconPackager;
var clean = require('gulp-clean');
var gulp = require('gulp');
const fs = require('fs');

gulp.task('icon-packager', function () {
  const contents = fs.readFileSync('package.json');
  const name = JSON.parse(contents).iconPackName;

  return gulp.src('src/svg/**/*.svg')
    .pipe(iconPackager({ name }))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('./dist', {
    read: false,
    allowEmpty: true,
  }).pipe(clean());
});

gulp.task('default', gulp.series('clean', 'icon-packager'));
