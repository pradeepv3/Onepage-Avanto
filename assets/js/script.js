/*
Theme: Avanto Protfolio One Page
Author: Inkowly
contact: inkowly@gmail.com
Version: 1.0.0
File Description: Main JS file
*/
var Owly = (function () {
    "use strict";

    var $elBody = $('body');
    var $elHeaderFixedTop = $('.fixed-top');

    // To Check it is old Browser
    var browserCheck = function () {
        if (/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10) {
            window.location.href = "ie-warning.php";
        }
    };

    // To Check element is present in Viewpost
    var IsInViewport = function (id) {
        var elemTop = $(id).offset().top;
        var elemBottom = elemTop + $(id).outerHeight();
        var vpTop = $(window).scrollTop();
        var vpBottom = vpTop + $(window).height();
        return elemBottom > vpTop && elemTop < vpBottom;
    };

    // Identify Mobile Device
    var isMobile = function () {
        var isMobile = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
        }
        return isMobile;
    };

    // Number Counter
    var initCounter = function () {
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

    // Progress Bar
    var progressBar = function () {
        var $elProgresssBar = $('.progress-bar');
        $(window).scroll(function () {

            if (IsInViewport('#progress_bar')) {
                // Horizontal Bar
                $elProgresssBar.length && $elProgresssBar.css("width", function () {
                    return $(this).attr('aria-valuenow') + "%";
                });

                // Circle Progress bar Animation
                if ($('.circle-progress').length) {
                    $('.skils').each(function () {
                        var $this = $(this);
                        var percentageComplete = $this.attr('data-count');
                        var percentageOffset = 100 - parseInt(percentageComplete);
                        $this.find('.skil-percentage').html(percentageComplete + "%");
                        $this.find('.js-circle-progress-bar').css("stroke-dashoffset", percentageOffset);
                    });
                }

            }
        });
    };

    // Menu Toggle
    var menuToggleMobile = function () {
        var $navbarToggle = $('.navbar-toggler');
        $navbarToggle.click(function () {
            if ($elBody.hasClass('menu-open')) {
                $elBody.removeClass('menu-open');
                $('.page-overlay').remove();
            } else {
                $elBody.prepend('<div class="page-overlay"></div>');
                $elBody.addClass('menu-open');
            }
        });
    };

    // Fancy Box
    var initFancyBox = function () {
        var $elFancybox = $("a.grouped_elements");
        $elFancybox.length && $elFancybox.fancybox({
            padding: '0'
        });

        $(".sec-ourwork-overlay").click(function () {
            $(this).parent().parent().find('.grouped_elements').trigger("click");
        });
    };

    // Mixup Animation
    var initMixup = function () {
        var $mixUp = $('#work_filter');
        $mixUp.length && $mixUp.mixItUp({
            load: {
                filter: 'all'
            }
        });
    };

    // Sticky Header
    var stickyHeader = function () {
        var headerTriggerPosition = (isMobile()) ? 75 : 150;
        if ($(window).scrollTop() >= headerTriggerPosition) {
            $elHeaderFixedTop.addClass('fixed-nav-bg');
        } else {
            $elHeaderFixedTop.removeClass('fixed-nav-bg');
        }
    };

    // Smooth Scrolling 
    var menuScroll = function () {
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (isMobile() && !$(this).parent().hasClass('banner-content')) {
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
    };

    var sendContactEmail = function (event, fromSlector) {
        //$("#contactSubmit").click(function (event) {
        // Fetch form to apply custom Bootstrap validation
        var form = $(fromSlector)

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
            // IF Contact Ajax Success
            request.done(function (msg) {
                $('#contactForm').modal('toggle');
                $('#error-msg').html(msg).delay(5000).fadeOut('slow');
            });
            // IF Contact Ajax Fail
            request.fail(function (jqXHR, textStatus) {
                $('#error-msg').html("<p class='alert alert-danger'><strong>Error: </strong>Some thing went wrong. Please try again.</span></p>").delay(5000).fadeOut('slow');

            });
        }
        form.addClass('was-validated');

        //});
    };

    var init = function () {

        // Check For Old Browser
        browserCheck();

        // Mobile Menu Toggle
        menuToggleMobile();

        // FancyBox
        initFancyBox();

        // Number Counter
        var $elSectionCount = $('.sec-countdown_count');
        $elSectionCount.length && initCounter();

        // Progress Bar
        var $elProgressBar = $('#progress_bar');
        $elProgressBar.length && progressBar();


        // Mixup animation
        var $mixUp = $('#work_filter');
        $mixUp.length && initMixup();

        // Fixed Nav Trriger
        stickyHeader();
        $elHeaderFixedTop.length && $(window).scroll(function () {
            stickyHeader();
        });

        // Smooth scrolling using jQuery easing
        menuScroll();

        // Scroll Navigation
        $elBody.scrollspy({
            target: '.navbar-nav',
            offset: 70
        });

        // Contact Email Trigger
        $("#contactSubmit").click(function (event) {
            sendContactEmail(event, "#contact-form");
        });

        //
        new WOW().init();

    };
    return {
        init: init()
    }
})();