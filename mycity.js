!function(){"use strict";function t(t){function e(){var t=i.imageUrls,l=t.length-1,a=Math.round(Math.random()*l);document.body.style.backgroundImage="url("+t[a]+")"}if(a(t)&&l(t.imageUrls)){var i={},n={};return i.imageUrls=t.imageUrls,n.shuffle=e,n}}function l(t){var l="[object Array]"===e(t);return l&&t.length>0}function a(t){return"[object Object]"===e(t)}function e(t){return Object.prototype.toString.call(t)}var i=["./features/random-body-background/images/01.jpg","./features/random-body-background/images/02.jpg","./features/random-body-background/images/03.jpg","./features/random-body-background/images/04.jpg","./features/random-body-background/images/05.jpg","./features/random-body-background/images/06.jpg","./features/random-body-background/images/07.jpg","./features/random-body-background/images/08.jpg","./features/random-body-background/images/09.jpg","./features/random-body-background/images/10.jpg","./features/random-body-background/images/11.jpg","./features/random-body-background/images/12.jpg"];window.addEventListener("load",function(){var l=t({imageUrls:i});l.shuffle()})}(),function(t){"use strict";t.instances=[{title:"Aberdeen",latLng:[57.14369,-2.09814]},{title:"Adelaide",latLng:[-34.92866,138.59863]},{title:"Alexandria",latLng:[31.31129,-92.44514]},{title:"Almaty",latLng:[43.25654,76.92848]},{title:"Aqtöbe",latLng:[50.27969,57.20718]},{title:"Asheville",latLng:[35.60095,-82.55402]},{title:"Astana",latLng:[51.1801,71.44598]},{title:"Atlanta",latLng:[33.749,-84.38798]},{title:"Aurora",latLng:[39.72943,-104.83192]},{title:"Austin",latLng:[30.26715,-97.74306]},{title:"Aylesbury",latLng:[51.81665,-.81458]},{title:"Banbury",latLng:[52.0602,-1.34029]},{title:"Baranovichi",latLng:[53.13,26.01],url:"http://baranovichi.mycity.io"},{title:"Barnaul",latLng:[53.34,83.77],url:"http://barnaul.mycity.io"},{title:"Beltsville",latLng:[39.03483,-76.90747]},{title:"Berdsk",latLng:[54.75,83.09],url:"http://berdsk.mycity.io"},{title:"Bethesda",latLng:[38.98067,-77.10026]},{title:"Bethlehem",latLng:[40.62593,-75.37046]},{title:"Bismarck",latLng:[46.80833,-100.78374]},{title:"Bloomfield",latLng:[40.80677,-74.18542]},{title:"Borehamwood",latLng:[51.65468,-.27762]},{title:"Boston",latLng:[42.35843,-71.05977]},{title:"Brisbane",latLng:[-27.46794,153.02809]},{title:"Bristol",latLng:[51.45523,-2.59665]},{title:"Calgary",latLng:[51.05011,-114.08529]},{title:"Chelmsford",latLng:[51.73575,.46958]},{title:"Chesham",latLng:[51.7,-.6]},{title:"Chester",latLng:[37.35682,-77.44165]},{title:"Chicago",latLng:[41.85003,-87.65005]},{title:"Colchester",latLng:[51.88921,.90421]},{title:"Coos Bay",latLng:[43.3665,-124.21789]},{title:"Cottonwood Heights",latLng:[40.61967,-111.81021]},{title:"Dallas",latLng:[32.78306,-96.80667]},{title:"Deerfield Beach",latLng:[26.31841,-80.09977]},{title:"Denver",latLng:[39.73915,-104.9847]},{title:"Detroit",latLng:[42.33143,-83.04575]},{title:"Dmitrov",latLng:[56.34485,37.52041]},{title:"East Kilbride",latLng:[55.76412,-4.17669]},{title:"Eau Claire",latLng:[44.81135,-91.49849]},{title:"Edinburgh",latLng:[55.95206,-3.19648]},{title:"Edmonton",latLng:[53.55014,-113.46871]},{title:"Elmira",latLng:[42.0898,-76.80773]},{title:"Espoo",latLng:[60.2,24.65],url:"http://suurpelto.mycity.io"},{title:"Everett",latLng:[47.97898,-122.20208]},{title:"Farnham",latLng:[51.21433,-.79587]},{title:"Flagstaff",latLng:[35.19807,-111.65127]},{title:"Glasgow",latLng:[55.86515,-4.25763]},{title:"Glendale",latLng:[34.14251,-118.25508]},{title:"Grand Rapids",latLng:[42.96336,-85.66809]},{title:"Helsinki",latLng:[60.17,24.92],url:"http://helsinki.mycity.io"},{title:"Honolulu",latLng:[21.30694,-157.85833]},{title:"Houston",latLng:[29.76328,-95.36327]},{title:"Izhevsk",latLng:[56.84,53.2],url:"http://izhevsk.mycity.io"},{title:"Kalamazoo",latLng:[42.29171,-85.58723]},{title:"Kansas City",latLng:[39.09973,-94.57857]},{title:"Kennesaw",latLng:[34.02343,-84.61549]},{title:"Kirkenes",latLng:[69.72,30.04],url:"http://kirkenes.mycity.io"},{title:"Kirovo-Chepetsk",latLng:[58.55386,50.03986]},{title:"Knoxville",latLng:[35.96064,-83.92074]},{title:"Krasnoyarsk",latLng:[56.01839,92.86717]},{title:"Kristiansand",latLng:[58.14671,7.9956]},{title:"Kurgan",latLng:[55.44,65.34],url:"http://kurgan.mycity.io"},{title:"Lafayette",latLng:[37.88576,-122.11802]},{title:"Lake Worth",latLng:[26.6159,-80.05699]},{title:"Lappeenranta",latLng:[61.05,28.18],url:"http://lappeenranta.mycity.io"},{title:"Las Vegas",latLng:[36.17497,-115.13722]},{title:"Lawrence",latLng:[42.70704,-71.16311]},{title:"Leesburg",latLng:[39.11566,-77.5636]},{title:"Leipzig",latLng:[51.34,12.25],url:"http://leipzig.mycity.io"},{title:"Little Rock",latLng:[34.74648,-92.28959]},{title:"London",latLng:[51.50853,-.12574]},{title:"Londonderry County Borough",latLng:[54.99721,-7.30917]},{title:"Long Beach",latLng:[33.76696,-118.18923]},{title:"Los Angeles",latLng:[34.05223,-118.24368]},{title:"Loveland",latLng:[40.39776,-105.07498]},{title:"Mackay",latLng:[-21.15345,149.16554]},{title:"Madison",latLng:[43.07305,-89.40123]},{title:"Magnitogorsk",latLng:[53.41861,59.04722]},{title:"Mansfield",latLng:[32.56319,-97.14168]},{title:"Marietta",latLng:[33.9526,-84.54993]},{title:"Melbourne",latLng:[-37.814,144.96332]},{title:"Miami Beach",latLng:[25.79065,-80.13005]},{title:"Miami",latLng:[25.77427,-80.19366]},{title:"Miass",latLng:[55.045,60.10833]},{title:"Michigan City",latLng:[41.70754,-86.89503]},{title:"Middletown",latLng:[41.44593,-74.42293]},{title:"Minneapolis",latLng:[44.97997,-93.26384]},{title:"Moscow",latLng:[46.73239,-117.00017]},{title:"Motherwell",latLng:[55.78924,-3.99187]},{title:"Murmansk",latLng:[68.97,33.07],url:"http://murmansk.mycity.io"},{title:"Mykolayiv",latLng:[46.96591,31.9974]},{title:"Myrtle Beach",latLng:[33.68906,-78.88669]},{title:"Nashville",latLng:[36.16589,-86.78444]},{title:"New Brunswick",latLng:[40.48622,-74.45182]},{title:"New York City",latLng:[40.71427,-74.00597]},{title:"Nikel",latLng:[69.4,30.2],url:"http://nikel.mycity.io"},{title:"Nizhny Novgorod",latLng:[56.31,44],url:"http://nizhniy-novgorod.mycity.io"},{title:"Norwalk",latLng:[33.90224,-118.08173]},{title:"Novosibirsk",latLng:[55.02,82.94],url:"http://novosibirsk.mycity.io"},{title:"Oakland",latLng:[37.80437,-122.2708]},{title:"Oakton",latLng:[38.88095,-77.30082]},{title:"Oklahoma City",latLng:[35.46756,-97.51643]},{title:"Orange",latLng:[-33.28397,149.10018]},{title:"Orange",latLng:[33.78779,-117.85311]},{title:"Orlando",latLng:[28.53834,-81.37924]},{title:"Oshkosh",latLng:[44.02471,-88.54261]},{title:"Palo Alto",latLng:[37.44188,-122.14302]},{title:"Pensacola",latLng:[30.42131,-87.21691]},{title:"Perth",latLng:[-31.95224,115.8614]},{title:"Petrozavodsk",latLng:[61.78,34.34],url:"http://petrozavodsk.mycity.io"},{title:"Philadelphia",latLng:[39.95234,-75.16379]},{title:"Podol’sk",latLng:[55.42418,37.55472]},{title:"Portland",latLng:[45.54,-122.79],url:"http://portland.mycity.io"},{title:"Poughkeepsie",latLng:[41.70037,-73.92097]},{title:"Poznań",latLng:[52.40692,16.92993]},{title:"Providence",latLng:[41.82399,-71.41283]},{title:"Provo",latLng:[40.23384,-111.65853]},{title:"Richmond",latLng:[37.55376,-77.46026]},{title:"Riga",latLng:[56.946,24.10589]},{title:"Saint Petersburg",latLng:[27.77086,-82.67927]},{title:"Salekhard",latLng:[66.53,66.60194]},{title:"Salford",latLng:[53.48771,-2.29042]},{title:"San Diego",latLng:[32.71533,-117.15726]},{title:"San Francisco",latLng:[37.75,-122.47],url:"http://sf.mycity.io"},{title:"San Jose",latLng:[37.33939,-121.89496]},{title:"San Leandro",latLng:[37.72493,-122.15608]},{title:"Sanford",latLng:[35.47988,-79.1803]},{title:"Santa Clarita",latLng:[34.39166,-118.54259]},{title:"Santa Fe",latLng:[35.68698,-105.9378]},{title:"Sarasota",latLng:[27.33643,-82.53065]},{title:"Satka",latLng:[55.0425,59.04]},{title:"Savannah",latLng:[32.08354,-81.09983]},{title:"Seattle",latLng:[47.60621,-122.33207]},{title:"Severodvinsk",latLng:[64.56,39.83],url:"http://severodvinsk.mycity.io"},{title:"Sibay",latLng:[52.71806,58.66583]},{title:"St. Louis",latLng:[38.62727,-90.19789]},{title:"Staten Island",latLng:[40.56233,-74.13986]},{title:"Suurpelto",latLng:[60.18,24.74],url:"http://suurpelto.mycity.io"},{title:"Suwałki",latLng:[54.11,22.93],url:"http://suwalki.mycity.io"},{title:"Sydney",latLng:[-33.86785,151.20732]},{title:"Tomsk",latLng:[56.49,84.97],url:"http://tomsk.mycity.io"},{title:"Topeka",latLng:[39.04833,-95.67804]},{title:"Toronto",latLng:[43.70011,-79.4163]},{title:"Tromsø",latLng:[69.66,18.97],url:"http://tromso.mycity.io"},{title:"Valkeakoski",latLng:[61.26,24.03],url:"http://valkeakoski.mycity.io"},{title:"Vancouver",latLng:[49.24,-123.11],url:"http://vancouver.mycity.io"},{title:"Vienna",latLng:[38.90122,-77.26526]},{title:"Vladivostok",latLng:[43.17,131.89],url:"http://vladivostok.mycity.io"},{title:"Volgograd",latLng:[48.71,44.5],url:"http://volgograd.mycity.io"},{title:"Voronezh",latLng:[51.66,39.2],url:"http://voronesh.mycity.io"},{title:"Washington,  D.C.",latLng:[38.89511,-77.03637]},{title:"Wellington",latLng:[-41.28664,174.77557]},{title:"West Palm Beach",latLng:[26.71534,-80.05337]},{title:"West Valley City",latLng:[40.69161,-112.00105]},{title:"Whangarei",latLng:[-35.73167,174.32391]},{title:"Yekaterinburg",latLng:[56.8519,60.6122]},{title:"Yoshkar-Ola",latLng:[56.63,47.89],url:"http://yoshkar-ola.mycity.io"}]}(this.mycity||(this.mycity={})),function(){"use strict";function t(t){function i(t){var a=t.target.options.url;l(a)&&window.open(t.target.options.url)}function n(t){if(a(t)){for(var l,e,n=r.config.marker.options,o=0,g=t.length;o<g;o+=1)e=n,e.title=t[o].title,e.url=t[o].url,l=L.marker(t[o].latLng,e),l.on({click:i}),r.markers.push(l);r.layers=L.layerGroup(r.markers),r.map.addLayer(r.layers)}}function o(){var t=r.containerId,l=r.config.map.options,a=r.config.tiles.url,e=r.config.tiles.options;r.map=L.map(t,l),r.tiles=L.tileLayer(a,e),r.layers={},r.markers=[],r.tiles.addTo(r.map)}if(e(t)&&e(t.config)&&l(t.containerId)){var r={},g={};return r.config=t.config,r.containerId=t.containerId,g.populate=n,o(),g}}function l(t){var l="[object String]"===i(t);return l&&t.trim().length>0}function a(t){var l="[object Array]"===i(t);return l&&t.length>0}function e(t){return"[object Object]"===i(t)}function i(t){return Object.prototype.toString.call(t)}var n=mycity.instances,o={};o.map={options:{center:[65,25],maxZoom:10,minZoom:2,zoom:3,zoomControl:!1,scrollWheelZoom:!1,touchZoom:!1}},o.marker={options:{icon:L.icon({iconUrl:"./features/sections/map/assets/icons/22.marker.png",iconSize:[22,22],iconAnchor:[11,11],popupAnchor:[11,11]}),riseOnHover:!0}},o.tiles={url:"https://{s}.tiles.mapbox.com/v3/antonshulgin.j24l2ega/{z}/{x}/{y}.png",options:{attribution:['Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,','<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,','Imagery © <a href="http://mapbox.com">Mapbox</a>'].join(" "),reuseTiles:!0}},window.addEventListener("load",function(){var l=t({config:o,containerId:"map"});e(l)&&l.populate(n)})}();
//# sourceMappingURL=mycity.js.map
