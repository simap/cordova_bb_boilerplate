//install fastclick
window.addEventListener('load', function () {
	new FastClick(document.body);
}, false);

//Wait for cordova to connect to native layer
function Bootstrap() {
	document.addEventListener('deviceready', function() {
		$(".reliance").text("Hello CMA!");
	}, false);
}