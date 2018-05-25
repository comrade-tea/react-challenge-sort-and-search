'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);

const ghPages = require('gh-pages');

register(gulp, plugins, config)([
  'build-js',
  'build-scss',
  'copy',
  'serve',
  'watch',
  'deploy'
]);

gulp.task('build', gulp.parallel('build-js', 'build-scss', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));

gulp.task('gh', function () {
	ghPages.publish('public', {
		// repo: 'https://example.com/other/repo.git'
    }, function(err) {
		console.log("----", err)
    });
});
