$(document).ready(function() {
	'use strict';


	/**
	 *
	 * Hello visitor: Here's how my website works.
	 *
	 * It's a single page app. When I wrote it a few years ago jQuery was
	 * really popular, and jQuery Mobile had just come out. I also wanted
	 * to show of my HTML5 and CSS3 skills. I have just removed the jquery
	 * mobile code.
	 *
	 * The use of a JavaScript interval to cycle through 5 really old projects
	 * I had written was a challenge. At the time I thought it would be cute
	 * to not just have a typical horizontal row of empty circles with a
	 * single filled circle indicating where in the cycle the current interval
	 * was, so I used a 5-pointed star to provide an indicator to the user.
	 *
	 * Also, the user could manually click on the star to stop the cycle, and
	 * click manually through the projects.
	 *
	 */

	var myGlobals = {
		intervalId: -1,
		isCycleStopped: false,
		starAngleInDegrees: [0, 72, 144, 216, 288, 360],
		siteIndex: 0,
		siteName: [ "placeholder", "lightning", "mapMarkers", "clipper", "perfectResponse", "pronto" ],
		firstCycle: true,

		/**
		 *
		 * highlightMenuItem() accepts 1 argument, the section of
		 * the page to scroll into the visible area, which we
		 * signal using class active-section.
		 *
		 */

		highlightMenuItem: function(mySection) {
			var $myMenu;

			$myMenu = $(".menu-container");

			// remove the active-section class from all sections
			$myMenu.find("active-section").removeClass("active-section");

			// set the currently portfolio page as active by using a CSS class to change the view
			$myMenu.find("section").eq(mySection).addClass("active-section");
		},

		/**
		 *
		 *   Logic for rotating the star-pointed inner circle navigation.
		 *   Here's how it works:
		 *   360 degree circle and 5 points means each point should be 72 degrees
		 *   from the others. 72 = 360 / 5. So the points are at 0, 72, 144, 216, and 288.
		 *
		 */

		rotateStar: function() {
			$(".mainCircle").css("transform", "rotate(" + myGlobals.starAngleInDegrees[myGlobals.siteIndex] + "deg)");
			if (myGlobals.isCycleStopped === true) {
				window.clearInterval(myGlobals.intervalId);
				console.log("start has stopped rotating");

				// restart cycling
				myGlobals.isCycleStopped  = false;
			}
		},

		/**
		 *
		 * portfolio: gets run every 10 second interval display cycle
		 *
		 */

		switchSite: function() {
			var lastSite;

			if (myGlobals.firstCycle === true) {
				myGlobals.firstCycle = false;
			} else {

				myGlobals.rotateStar ();

				lastSite = myGlobals.siteIndex - 1;
				if ( myGlobals.siteIndex === 0 ) {
					lastSite = 4;
				}

				//myGlobals.siteIndex siteName       lastSite
				//            0       lightning         4
				//            1       mapMarkers        0
				//            2       clipper           1
				//            3       perfectResponse   2
				//            4       pronto            3

				console.log ( "siteIndex: %i siteName: '%s' lastSiteNo %i",
					myGlobals.siteIndex, myGlobals.siteName [ myGlobals.siteIndex ], lastSite );

				$ ( '.site-slice.active' ).removeClass ( 'active' );
				$ ( '.site-slice:eq(' + myGlobals.siteIndex + ')' ).addClass ( 'active' );
				console.log( ".site-slice:eq(" + myGlobals.siteIndex + ").addClass ( 'active' )" );

				$ ( '.contribution.active' ).removeClass ( 'active' );
				$ ( '.contribution:eq(' + myGlobals.siteIndex + ')' ).addClass ( 'active' );

				console.log ( ".contribution:eq(" + myGlobals.siteIndex + ").addClass ( 'active' )" );
				if ( myGlobals.siteIndex === 4 ) {
					myGlobals.siteIndex = 1;
				} else {
					myGlobals.siteIndex++;
				}
			}

		},


		/**
		 *
		 * page initialization
		 */
		init: function() {
			var myCover;

			// make all the sections equal height
			//$("#home, #about, #contact").height("100%");
			//$("#portfolio").css("height", "auto");

			myCover = $('#cover');
			myCover.removeClass("hidden");
			myCover.addClass("visible");

			// Start the rotation cycle of the sites on the 5-pointed star at an interval of 3 seconds.
			// Save the intervalId so the cycling can be stopped later.
			myGlobals.intervalId = setInterval(myGlobals.switchSite(), 3000);

			// start the cycle
			myGlobals.switchSite();
		}
	};
	myGlobals.init();


	/**
	 *
	 * Click handler for directly clicking on the star of the portfolio menu
	 *
	 */

	$(".innerCircle").on("click", function() {
		console.log("manual click handler. Showing siteIndex %i, siteName '%s'",
			myGlobals.siteIndex, myGlobals.siteName [ myGlobals.siteIndex ]);
		myGlobals.switchSite();
		window.clearInterval(myGlobals.intervalId);
		return false;
	});

	/**
	 *
	 * Click handler for the Home button
	 *
	 */

	$(".menu-container div").click(function(evt) {
		var hamburgerMenu;
		var bbunny;

		hamburgerMenu = $(".menu-container");
		bbunny = $(".buggs-bunny").eq(0);
		evt.preventDefault();
		hamburgerMenu.toggleClass("menu-hidden");
		hamburgerMenu.toggleClass("menu-visible");
		$(".toggle-icon").toggleClass("active");
		var target = "#" + $(this).text().toLowerCase();
		var $target = $(target);

		if (target === "#contact") {
			if (bbunny.hasClass("buggs-up")) {
				bbunny.addClass("buggs-down").removeClass("buggs-up");
			} else {
				bbunny.addClass("buggs-up").removeClass("buggs-down");
			}
		}

		/*
		 *
		 * This is to stop animating once we reach the top of the page
		 */
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});

	/*
	 *
	 *  Click handler for the bugs bunny image and the hole
	 *
	 */

	$(".buggs-bunny").click(function() {
		$(".buggs-bunny").addClass("buggs-down").removeClass("buggs-up");
	});

	$(".hole").click(function() {
		$(".buggs-bunny").addClass("buggs-up").removeClass("buggs-down");
	});

	/*
	 *
	 * page scroll handler
	 *
	 */

	$(document).scroll(function() {
        var CONSTANT_HOME_SECTION = 0;
        var CONSTANT_ABOUT_SECTION = 1;
        var CONSTANT_CONTACT_SECTION = 2;
        var CONSTANT_PORTFOLIO_SECTION = 3;
		var currentPosition;
		var topOfContactSection = $("#home").height() + $("about").height();

		currentPosition = $(document).scrollTop();
        console.log("currentPosition " + currentPosition + " topOfContactSection " + topOfContactSection );

        // Buggs will being rising halfway up the About section
		if ( currentPosition > topOfContactSection ) {
			myGlobals.highlightMenuItem(CONSTANT_CONTACT_SECTION);
			$(".buggs-bunny").addClass("buggs-up").removeClass("buggs-down");
		} else {
			$(".buggs-bunny").addClass("buggs-down").removeClass("buggs-up");
            myGlobals.highlightMenuItem(CONSTANT_CONTACT_SECTION);
		}
	});

	/*
	 *
	 * This click handler toggles the hamburger menu
	 *
	 */

	$(".menu-button").click(function() {
		var $menuContainer = $(".menu-container");
		$menuContainer.toggleClass("menu-hidden");
		$menuContainer.toggleClass("menu-visible");
		$(".toggle-icon").toggleClass("active");
	});

});
