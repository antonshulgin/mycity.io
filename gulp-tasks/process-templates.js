// jshint node: true
// jshint esnext: true
'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function (config) {

	gulp.task('process-templates', function () {
		return gulp
			.src(config.src.pug)
			.pipe(pug())
			.pipe(gulp.dest(config.dist.root));
	});

	gulp.task('watch-templates', function () {
		const allTemplates = [
			config.src.root,
			'**/*.pug'
		].join('');
		gulp.watch(allTemplates, ['process-templates']);
	});

};
