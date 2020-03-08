$(document).ready(function() {
	$('#carousel')
		.on('slide.bs.carousel', function(event) {
			$('.bar', this)
				.removeClass('animation')
				.css('width', '0%');
		})
		.on('slid.bs.carousel', function(event) {
			$('.bar', this)
				.addClass('animation')
				.css('width', '100%');
		});
	$('.bar', '#carousel').css('width', '100%');
});

$(document).ready(function() {
	$('#carousel-products-desktop').on('slide.bs.carousel', function(e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 3;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems - (itemsPerSlide - 1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i = 0; i < it; i++) {
				if (e.direction == 'left') {
					$('.carousel-item')
						.eq(i)
						.appendTo('.carousel-inner');
				} else {
					$('.carousel-item')
						.eq(0)
						.appendTo($(this).find('.carousel-inner'));
				}
			}
		}
	});
});

$(document).ready(function() {
	$('#carousel-products-mobile').on('slide.bs.carousel', function(e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 3;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems - (itemsPerSlide - 1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i = 0; i < it; i++) {
				if (e.direction == 'left') {
					$('.carousel-item')
						.eq(i)
						.appendTo('.carousel-inner');
				} else {
					$('.carousel-item')
						.eq(0)
						.appendTo('.carousel-inner');
				}
			}
		}
	});
});