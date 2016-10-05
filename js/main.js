var sliders = new Array();
window.onload = function() {
	var options = {
		transitionTime:500,
		touchTransitionTime:300
	};
	var slidersElements = document.querySelectorAll('.slider');

	for(var i = 0 ; i < slidersElements.length ; i++) {
		sliders.push(  new myCarousels ('#slider', '#frame', '#frame .slide', '.arrowLeft', '.arrowRight') );
	}
	for(var i = 0; i < sliders.length; i++) {
		sliders[i].initialize();
	}
}