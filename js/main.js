$(document).ready(function(){

	var openAnimation = new TimelineMax({paused: true});

	openAnimation.to(".l-letter-container", 0.75, { autoAlpha: 1, top: "50%", left: "50%", ease: Back.easeInOut});
	openAnimation.to(".first", 0.75, { autoAlpha: 1, left: "50%" , ease: Back.easeInOut}, 0.75);	
	openAnimation.to(".second", 0.75, { autoAlpha: 1, left: "50%", ease: Back.easeInOut}, 0.75);

	var mumsName = $("input").val();

	var inputName = document.getElementById("l-input-name");

	$('button').on("click", function(){

		TweenMax.to(".l-splash-overlay" , 0.75, {
			autoAlpha: 0,
			left: 0,
			display: "none",
			ease: Back.easeInOut,
			onComplete: function() {
				openAnimation.play();
				inputName.innerHTML = mumsName;
			}
		});



	});

	// $(window).on("load", function(){
	// 	openAnimation.play();
	// });


});