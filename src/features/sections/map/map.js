(function () {
	/* global L */
	/* global mycity */
	'use strict';

	var cityMarkers = mycity.instances;
	var config = {};

	config.map = {
		options: {
			center: [65, 25],
			maxZoom: 10,
			minZoom: 2,
			zoom: 3,
			zoomControl: false,
			scrollWheelZoom: false,
			touchZoom: false
		}
	};

	config.marker = {
		options: {
			icon: L.icon({
				iconUrl: './features/sections/map/assets/icons/22.marker.png',
				iconSize: [22, 22],
				iconAnchor: [11, 11],
				popupAnchor: [11, 11]
			}),
			riseOnHover: true
		}
	};

	config.tiles = {
		url: 'https://{s}.tiles.mapbox.com/v3/antonshulgin.j24l2ega/{z}/{x}/{y}.png',
		options: {
			attribution: [
				'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,',
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,',
				'Imagery © <a href="http://mapbox.com">Mapbox</a>'
			].join(' '),
			reuseTiles: true
		}
	};

	window.addEventListener('load', function () {
		var map = produceMap({
			config: config,
			containerId: 'map'
		});

		if (!isObject(map)) { return; }

		map.populate(cityMarkers);
	});

	function produceMap(params) {
		if (!isObject(params)) { return; }
		if (!isObject(params.config)) { return; }
		if (!isNonEmptyString(params.containerId)) { return; }

		var internals = {};
		var externals = {};

		internals.config = params.config;
		internals.containerId = params.containerId;

		externals.populate = populate;

		init();

		return externals;

		function openURL(event) {
			var url = event.target.options.url;
			if (isNonEmptyString(url)) {
				window.open(event.target.options.url);
			}
		}

		function populate(markers) {
			if (!isNonEmptyArray(markers)) { return; }

			var marker;
			var markerOptions = internals.config.marker.options;
			var options;

			for (var idx = 0, len = markers.length; idx < len; idx += 1) {
				options = markerOptions;
				options.title = markers[idx].title;
				options.url = markers[idx].url;
				marker = L.marker(markers[idx].latLng, options);
				marker.on({ click: openURL });
				internals.markers.push(marker);
			}
			internals.layers = L.layerGroup(internals.markers);
			internals.map.addLayer(internals.layers);
		}

		function init() {
			var containerId = internals.containerId;
			var mapOptions = internals.config.map.options;
			var tilesUrl = internals.config.tiles.url;
			var tilesOptions = internals.config.tiles.options;

			internals.map = L.map(containerId, mapOptions);
			internals.tiles = L.tileLayer(tilesUrl, tilesOptions);
			internals.layers = {};
			internals.markers = [];
			internals.tiles.addTo(internals.map);
		}
	}

	function isNonEmptyString(item) {
		var isString = toStringCall(item) === '[object String]';
		return isString && (item.trim().length > 0);
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
