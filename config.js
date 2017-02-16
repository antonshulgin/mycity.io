// jshint node: true
// jshint esnext: true
'use strict';

const PROJECT_NAME = 'mycity';

module.exports = {

	src: {
		root: 'src/',
		pug: [
			'src/mycity.pug'
		],
		styl: [
			'src/**/*.styl'
		],
		js: [
			'src/**/*.js'
		],
		assets: [
			'src/**/*.jpg',
			'src/**/*.png',
			'src/**/*.svg'
		]
	},

	dist: {
		root: 'dist/',
		filenames: {
			html: PROJECT_NAME + '.html',
			css: PROJECT_NAME + '.css',
			js: PROJECT_NAME + '.js'
		}
	},

	vendor: {
		filenames: {
			css: 'vendor.css',
			js: 'vendor.js'
		},
		css: [
			'./node_modules/reset-css/reset.css',
			'./node_modules/leaflet/dist/leaflet.css'
		],
		js: [
			'./node_modules/leaflet/dist/leaflet.js'
		]
	}

};
