var $html = $('html');
var $body = $('body');

// Disabled buttons handler
$('[disabled]').on('click', function (e) {
	e.preventDefault();
});

// Items Selector
$('.js-items-selector').on('click', function (e) {
	e.stopPropagation();
	$(this).toggleClass('-active');
});

$('.js-items-selector-item-link').on('click', function (e) {
	e.preventDefault();
	$(this).closest('.js-items-selector').find('.js-items-selector-item-link').removeClass('-active');
	$(this).addClass('-active');

	var itemResult = $(this).data('item');
	var resultName = $(this).closest('.js-items-selector').find('.js-result-name')
	var resultCount = $(this).closest('.js-items-selector').find('.js-result-count')
	resultName.html(itemResult.name);
	resultCount.html(itemResult.count);
});

$(window).click(function () {
	$('.js-items-selector').removeClass('-active');
});

// Expand block
$('.js-expand-result, .js-expand-dropdown').on('click', function (e) {
	e.stopPropagation();
	$(this).closest('.js-expand').toggleClass('-active');
});

$('.js-expand-link').on('click', function (e) {
	e.preventDefault();
	$(this).closest('.js-expand-list').find('.js-expand-link').removeClass('-active');
	$(this).addClass('-active');

	var result = $(this).data('price');
	var resultName = $(this).closest('.expand').find('.js-result-name');
	var price = $(this).closest('.expand').find('.js-expand-current-price');
	var priceOld = $(this).closest('.expand').find('.js-expand-old-price');

	resultName.html(result.name);
	price.html(result.price);

	if (result.priceOld) {
		priceOld.addClass('-active').html(result.priceOld);
	} else {
		priceOld.removeClass('-active');
	}
});

$(window).click(function () {
	$('.js-expand').removeClass('-active');
});

// Open search
// ============================================================================
$('#js-main-search-icon').on('click', function () {
	$('#js-main-search').toggleClass('-active');
	if ($('#js-main-search').hasClass('-active')) {
		$('#js-main-search-input').focus();
	}
});

$('#js-main-search-close').on('click', function () {
	$('#js-main-search').removeClass('-active');
});

// Handle Mobile Menues
// ============================================================================
// var $mainBurger = $('.main-burger');
// var $mainMenuMobile = $('.main-menu-mobile');
// var $wrapper = $('.wrapper');
// var $mainFooter = $('.main-footer');
// var $mainMenuUserMobileOpen = $('#js-main-menu-user-mobile-open');
// var $mainMenuUserMobile = $('#js-main-menu-user-mobile');
//
// $mainBurger.on('click', function (e) {
// 	e.stopPropagation();
// 	if ($mainBurger.hasClass('-active')) { mainMenuMobileClose(); } else { mainMenuMobileOpen(); }
// });
//
// $mainMenuUserMobileOpen.on('click', function (e) {
// 	e.stopPropagation();
// 	if ($mainMenuUserMobileOpen.hasClass('-active')) { mainMenuUserMobileClose(); } else { mainMenuUserMobileOpen(); }
// })
//
// $mainMenuMobile.on('click', function (e) { e.stopPropagation(); });
//
// $mainMenuUserMobile.on('click', function (e) {
// 	e.stopPropagation();
// });
//
//
// $(window).click(function() {
// 	mainMenuMobileClose();
// 	mainMenuUserMobileClose();
// });
//
// const mainMenuMobileOpen = function () {
// 	$mainBurger.addClass('-active');
// 	$mainMenuMobile.addClass('-active');
// 	$wrapper.addClass('-main-menu-mobile-active');
// 	$mainFooter.addClass('-main-menu-mobile-active');
// 	$body.addClass('-menu-opened');
// }
//
// const mainMenuMobileClose = function () {
// 	$mainBurger.removeClass('-active');
// 	$mainMenuMobile.removeClass('-active');
// 	$wrapper.removeClass('-main-menu-mobile-active');
// 	$mainFooter.removeClass('-main-menu-mobile-active');
// 	$body.removeClass('-menu-opened');
// }
//
// const mainMenuUserMobileOpen = function () {
// 	$mainMenuUserMobileOpen.addClass('-active');
// 	$mainMenuUserMobile.addClass('-active');
// 	$wrapper.addClass('-main-user-mobile-active');
// 	$mainFooter.addClass('-main-user-mobile-active');
// 	$body.addClass('-menu-opened');
// }
//
// const mainMenuUserMobileClose = function () {
// 	$mainMenuUserMobileOpen.removeClass('-active');
// 	$mainMenuUserMobile.removeClass('-active');
// 	$wrapper.removeClass('-main-user-mobile-active');
// 	$mainFooter.removeClass('-main-user-mobile-active');
// 	$body.removeClass('-menu-opened');
// }

$('.js-clear-input').on('click', function () {
	$(this).prev('.js-input').val('').focus();
});

var $previewImagesSlider = $('.js-preview-images-slider');
var $previewImagesItem = $('.js-preview-images-item');
var $previewBigPicture = $('.js-perview_slider-big_picture');

$previewImagesItem.on('click', function (e) {
	var imageUrl = $(this).data('image');
	var $this = $(this);
	$this.closest($previewImagesSlider).find($previewImagesItem).removeClass('-current');
	$this.addClass('-current');

	$previewBigPicture.css({
		backgroundImage: `url(${imageUrl})`
	});
});

$('.js-view-password').on('click', function (e) {
	var $input = $(this).closest('.input-wrapper').find('.input');
	if ($(this).hasClass('-show')) {
		$(this).removeClass('-show');
		$input.attr('type', 'password');
	} else {
		$(this).addClass('-show');
		$input.attr('type', 'text');
	}
});

// Popups
var $overlay = $('.js-overlay');
var $closePopup = $('.js-close-popup');

$('[data-popup]').on('click', function (e) {
	e.preventDefault();
	var popup = $(this).data('popup');
	$body.addClass('popup-open');
	$(popup).removeClass('-hide');
	$overlay.removeClass('-hide');
});

var closePopup = function () {
	$overlay.addClass('-hide');
	$body.removeClass('popup-open');
	$('.popup-wrapper').addClass('-hide');
}

$('.js-overlay, .js-close-popup').on('click', function () {
	closePopup();
});

// PLUGINS

// Slick carousel
if ($(".slick").length) {
	try {
		$(".slick").slick({
		  infinite: true,
		  responsive: [{
		    breakpoint: 1260,
		    settings: {
		      slidesToShow: 5,
		      infinite: true
		    }
		  }, {
		    breakpoint: 620,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      dots: true
		    }
		  }]
		});
	} catch(e) {
		console.log(e);
	}
}

// Massonry
$('.posts-list').masonry({
	itemSelector: '.post-item, .post-partner',
});

if (document.getElementById('js-main-menu-mobile')) {
	// Mobile Menu Slideout
	var slideMenu = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('js-main-menu-mobile'),
		'padding': 268,
		'tolerance': 70,
		'touch': false
	});
	// slideMenu.once('open', slideMenu._initTouchEvents);
	// slideMenu.on('open', slideMenu.enableTouch);
	// slideMenu.on('close', slideMenu.disableTouch);

	var slideoutUser = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('js-main-menu-user-mobile'),
		'padding': 268,
		'tolerance': 70,
		'side': 'right',
		'touch': false
	});

	// slideoutUser.once('open', slideMenu._initTouchEvents);
	// slideoutUser.on('open', slideMenu.enableTouch);
	// slideoutUser.on('close', slideMenu.disableTouch);

	document.querySelector('.js-main-burger').addEventListener('click', function() {
		slideMenu.toggle();
	});

	document.getElementById('js-main-menu-user-mobile-open').addEventListener('click', function() {
		slideoutUser.toggle();
	});

	slideMenu.on('beforeopen', function () {
		$('.js-main-burger').addClass('-active');
		$body.addClass('slideout-open--left');
	});
	slideMenu.on('open', function () {
		$body.addClass('slideout-opened--left');
	});

	slideMenu.on('close', function () {
		$('.js-main-burger').removeClass('-active');
		$body.removeClass('slideout-open--left');
	});
	slideMenu.on('beforeclose', function () {
		$body.removeClass('slideout-opened--left');
	});

	slideMenu.on('translatestart', function() {
		$body.addClass('slideout-open--left');
	});

	slideoutUser.on('beforeopen', function () {
		$body.addClass('slideout-open--right');
	});

	slideoutUser.on('close', function () {
		$body.removeClass('slideout-open--right');
	});

	slideoutUser.on('translatestart', function() {
		$body.addClass('slideout-open--right');
	});

	$(".panel-overflow").on('click', function () {
		slideMenu.close();
		slideoutUser.close();
	});

	var fixedHeader = document.querySelector('.js-main-header');
	var panel = document.getElementById('panel');

	function setHeaderComportament(menu, position) {
		menu.on('translate', function(translated) {
			if (position === 'right') { translated = -translated; }
			fixedHeader.style.transform = 'translateX(' + translated + 'px)';
		});

		menu.on('beforeopen', function () {
			if (position === 'left') { var translateX = 268; }
			if (position === 'right') { var translateX = -268; }
			fixedHeader.style.transition = 'transform 300ms ease';
			fixedHeader.style.transform = 'translateX(' + translateX + 'px)';
		});

		menu.on('beforeclose', function () {
			fixedHeader.style.transition = 'transform 300ms ease';
			fixedHeader.style.transform = 'translateX(0px)';
		});

		menu.on('open', function () {
			fixedHeader.style.transition = '';
		});

		menu.on('close', function () {
			fixedHeader.style.transition = '';
		});
	}

	setHeaderComportament(slideMenu, 'left');
	setHeaderComportament(slideoutUser, 'right');
}
