/*
	1. Multiple Carousel
	2. Counter
*/
if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10) {
	//document.body.innerHTML = '<div class="e-warning"><div class="">Dear User, You are using old browser. Please upate</div>';
	window.location.href = "ie-warning.php";
}

var IOY = (typeof IOY !== 'undefined' && typeof IOY === "object") ? IOY : {};

(function ($) {
	// Element View port check
	$.fn.IsInViewport = function () {
		var elemTop = $(this).offset().top;
		var elemBottom = elemTop + $(this).outerHeight();
		var vpTop = $(window).scrollTop();
		var vpBottom = vpTop + $(window).height();
		return elemBottom > vpTop && elemTop < vpBottom;
	};

	IOY.isMobile = function () {
		var isMobile = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			isMobile = true;
		}
		return isMobile;
	};

	// Multiple Carousel
	IOY.MultiCarousel = function () {
		var $scrollItem = $('.carousel[data-type="multi"] .carousel-item');
		$scrollItem.each(function () {
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i = 0; i < 4; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
			}
		});
	};

	// Scroll Counter
	IOY.Counter = function () {
		var a = 0;
		$(window).scroll(function () {
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.sec-countdown_count').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
				a = 1;
			}
		});
	};

	// Email 

	IOY.contactEmail = function () {

	};

	// Progress Bar
	IOY.progressBar = function () {
		$(window).scroll(function () {
			if ($('#progress_bar').IsInViewport()) {
				// Horizontal Bar
				$('.progress-bar').length && $('.progress-bar').css("width", function () {
					return $(this).attr('aria-valuenow') + "%";
				});

				// Circle Progress bar Animation
				if ($('.circle-progress').length) {
					$('.skils').each(function () {
						var percentageComplete = $(this).attr('data-count');
						var percentageOffset = 100 - parseInt(percentageComplete);
						$(this).find('.skil-percentage').html(percentageComplete + " %");
						$(this).find('.js-circle-progress-bar').css("stroke-dashoffset", percentageOffset);
					});
				}

			}


		});
	};

	$(function () {

		var $elBody = $('body');

		// Smooth scrolling using jQuery easing
		$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (IOY.isMobile()) {
					$('.navbar-toggler').trigger('click');
				}

				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - 60)
					}, 1000);
					return false;
				}
			}
		});

		// Scroll Navigation
		$elBody.scrollspy({
			target: '.navbar-nav',
			offset: 70
		});

		// Mobile menu toggle
		var $navbarToggle = $('.navbar-toggler');
		$navbarToggle.click(function () {
			if ($('body').hasClass('menu-open')) {
				$('body').removeClass('menu-open');
				$('.page-overlay').remove();
			} else {
				$('body').prepend('<div class="page-overlay"></div>');
				$('body').addClass('menu-open');
			}
		});

		// Mixup animation
		var $mixUp = $('#work_filter');
		$mixUp.length && $mixUp.mixItUp({
			load: {
				filter: 'all'
			}
		});

		// Fancy Box Function
		var $elFancybox = $("a.grouped_elements");
		$elFancybox.length && $elFancybox.fancybox({
			padding: '0'
		});

		$(".sec-ourwork-overlay").click(function () {
			$(this).parent().parent().find('.grouped_elements').trigger("click");
		});


		// Fixed Nav Trriger
		var $elHeaderFixedTop = $('.fixed-top');
		$elHeaderFixedTop.length && $(window).scroll(function () {
			var headerTriggerPosition = 150;
			if (IOY.isMobile()) {
				headerTriggerPosition = 75;
			}
			if ($(window).scrollTop() >= headerTriggerPosition) {
				$elHeaderFixedTop.addClass('fixed-nav-bg');
			} else {
				$elHeaderFixedTop.removeClass('fixed-nav-bg');
			}
		});


		var $elSectionCount = $('.sec-countdown_count');
		$elSectionCount.length && IOY.Counter();

		var $elProgressBar = $('#progress_bar');
		$elProgressBar.length && IOY.progressBar();

		$("#contactSubmit").click(function (event) {
			// Fetch form to apply custom Bootstrap validation
			var form = $("#contact-form")

			if (form[0].checkValidity() === false) {
				event.preventDefault()
				event.stopPropagation()
			} else {
				// single page message box

				var formData = "username=" + jQuery("#nameField").val() + "&phone=" + jQuery("#phoneField").val() + "&email=" + jQuery("#emailField").val() + "&message=" + jQuery("#messageField").val();
				var request = jQuery.ajax({
					url: "email.php",
					type: "get",
					data: formData,
				});

				request.done(function (msg) {
					$('#contactForm').modal('toggle');
					$('#error-msg').html(msg).delay(5000).fadeOut('slow');
				});

				request.fail(function (jqXHR, textStatus) {
					alert("Request failed: " + textStatus);
				});
			}

			form.addClass('was-validated');
			// Perform ajax submit here...

		});


	});
})(jQuery);