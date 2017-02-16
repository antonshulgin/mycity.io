(function () {
	'use strict';

	var imageUrls = [
		'/features/random-body-background/images/01.jpg',
		'/features/random-body-background/images/02.jpg',
		'/features/random-body-background/images/03.jpg',
		'/features/random-body-background/images/04.jpg',
		'/features/random-body-background/images/05.jpg',
		'/features/random-body-background/images/06.jpg',
		'/features/random-body-background/images/07.jpg',
		'/features/random-body-background/images/08.jpg',
		'/features/random-body-background/images/09.jpg',
		'/features/random-body-background/images/10.jpg',
		'/features/random-body-background/images/11.jpg',
		'/features/random-body-background/images/12.jpg'
	];

	window.addEventListener('load', function () {
		var randomBodyBackground = produceRandomBodyBackground({
			imageUrls: imageUrls
		});
		randomBodyBackground.shuffle();
	});

	function produceRandomBodyBackground(params) {
		if (!isObject(params)) { return; }
		if (!isNonEmptyArray(params.imageUrls)) { return; }

		var internals = {};
		var externals = {};

		internals.imageUrls = params.imageUrls;

		externals.shuffle = shuffle;

		return externals;

		function shuffle() {
			var imageUrls = internals.imageUrls;
			var imagesCount = imageUrls.length - 1;
			var randomImageIndex = Math.round(Math.random() * imagesCount);
			document.body.style.backgroundImage = 'url(' + imageUrls[randomImageIndex] + ')';
		}
	}

	function isNonEmptyArray(item) {
		var isArray = toStringCall(item) === '[object Array]';
		return isArray && (item.length > 0);
	}

	function isObject(item) {
		return toStringCall(item) === '[object Object]';
	}

	function toStringCall(item) {
		return Object.prototype.toString.call(item);
	}

})();
