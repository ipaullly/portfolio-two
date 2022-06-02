/* Description: Custom JS file */

/* Navigation */
// Collapse the navbar by adding the top-nav-collapse class

window.onscroll = function () {
	scrollFunction();
	// scrollFunctionBTT(); // back to top button
};
var pageAbout = '';
var a = '';


window.onload = function () {
	const mouseTarget = document.getElementsByClassName('single-text');
	const unorderedList = document.getElementsByClassName('head-text-about');
	

		for (let i = 0; i < mouseTarget.length; i++) {
			const element = mouseTarget[i];
			element.addEventListener('mouseenter', e => {
				element.classList.add('animated','bounce')
				// enterEventCount++;
			});
		}
		// console.log('mouseTarget', mouseTarget.length)
		for (let i = 0; i < mouseTarget.length; i++) {
			const element = mouseTarget[i];
			console.log('mouseTarget', i)
			element.addEventListener('mouseleave', function(){
				// setTimeout(function () {
					element.classList.remove('animated','bounce')
					element.style.opacity = 1
					element.classList.add('animated','rubberBand');
				// }, 2000)
			});
			element.addEventListener('animationend', function(){
				element.classList.remove('animated','rubberBand');
				// console.log('element', i)
			});
		}
	scrollFunction();
	if ($('.count').length) {
		$('.count').counterUp({
			delay: 5,
			time: 3000
		});
	}
	
	$('#myCanvas').tagcanvas({
			textColour : '#FFFC52',
			outlineThickness : 0.5,
			outlineColour : '#FE0853',
			outlineMethod: 'outline',
			maxSpeed : 0.06,
			freezeActive:true,
			shuffleTags:true,
			shape:'sphere',
			zoom:0.9,
			wheelZoom:false,
			noSelect:true,
			textFont:null,
			freezeDecel:true,
			fadeIn:3000,
			initial: [0.3,-0.1],
			depth : 1.1
		}, 'tags')
		// TagCanvas failed to load
		// $('#myCanvasContainer').hide();
	}

	// $(document).ready(function(){
	// 	pageAbout = jQuery('.head-text-about');
	// 	a = 0;

	// 	$(window).on('load',function(){
	// 			pageAbout.mouseenter( handlerIn(pageAbout, a));
	// 			pageAbout.mouseleave(handlerOut(pageAbout) );
	// 			console.log('window loaded');
	// 	});
	// 	console.log('DOM ready');
	// })

// if (pageAbout) {
// 	pageAbout.hover( handlerIn(pageAbout, a), handlerOut(pageAbout) )
// }

function handlerIn(pageAbout, a) {
	console.log('handlerIn', pageAbout)
		pageAbout.find(".single-text").each(function(){
			var el = jQuery(this);
			setTimeout(function(){
				el.addClass('animated bounce');
				el.css({
					backgroundColor: '#fff'
				})
			},a);
			a = a + 80;
		});
}
function handlerOut(pageAbout) {
	console.log('handlerOut', pageAbout)
	setTimeout(function(){
			pageAbout.find(".single-text").removeClass('animated bounce');
			pageAbout.find(".single-text").css('opacity',1);
			pageAbout.find(".single-text").mouseenter(function (){
		});
	},2000);
}

function scrollFunction() {
	/// depending on the browser the scrollTop value can either be derived from document.documentElement
	/// or document.body
	if (document.documentElement.scrollTop || document.body.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop || document.body.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".navbar-nav .nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});




/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

// function scrollFunctionBTT() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		myButton.style.display = "block";
// 	} else {
// 		myButton.style.display = "none";
// 	}
// }

// When the user clicks on the button, scroll to the top of the document
function topTopFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// document.getElementById('myBtn').addEventListener('click', topTopFunction)