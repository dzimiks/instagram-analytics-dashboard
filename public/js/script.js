$(document).ready(function () {
	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#back-to-top').fadeIn();
		}
		else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function () {
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});

	// Dropdown menu
	$(".sidebar-dropdown > a").click(function () {
		$(".sidebar-submenu").slideUp(200);

		if ($(this).parent().hasClass("active")) {
			$(".sidebar-dropdown").removeClass("active");
			$(this).parent().removeClass("active");
		} else {
			$(".sidebar-dropdown").removeClass("active");
			$(this).next(".sidebar-submenu").slideDown(200);
			$(this).parent().addClass("active");
		}
	});

	$(".sidebar-dropdown-2 > a").click(function () {
		$(".sidebar-submenu-2").slideUp(200);

		if ($(this).parent().hasClass("active")) {
			$(".sidebar-dropdown-2").removeClass("active");
			$(this).parent().removeClass("active");
		} else {
			$(".sidebar-dropdown-2").removeClass("active");
			$(this).next(".sidebar-submenu-2").slideDown(200);
			$(this).parent().addClass("active");
		}
	});

	//toggle sidebar
	$("#toggle-sidebar").click(function () {
		$(".page-wrapper").toggleClass("toggled");
	});

	//Pin sidebar
	$("#pin-sidebar").click(function () {
		if ($(".page-wrapper").hasClass("pinned")) {
			// unpin sidebar when hovered
			$(".page-wrapper").removeClass("pinned");
			$("#sidebar").unbind("hover");
		} else {
			$(".page-wrapper").addClass("pinned");
			$("#sidebar").hover(
				function () {
					// mouseenter
					$(".page-wrapper").addClass("sidebar-hovered");
				},
				function () {
					// mouseout
					$(".page-wrapper").removeClass("sidebar-hovered");
				}
			)
		}
	});

	//toggle sidebar overlay
	$(".overlay").click(function () {
		$(".page-wrapper").toggleClass("toggled");
	});

	//switch between themes
	let themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";

	$('[data-theme]').click(function () {
		$('[data-theme]').removeClass("selected");
		$(this).addClass("selected");
		$('.page-wrapper').removeClass(themes);
		$('.page-wrapper').addClass($(this).attr('data-theme'));
	});

	// switch between background images
	let bgs = "bg1 bg2 bg3 bg4";

	$('[data-bg]').click(function () {
		$('[data-bg]').removeClass("selected");
		$(this).addClass("selected");
		$('.page-wrapper').removeClass(bgs);
		$('.page-wrapper').addClass($(this).attr('data-bg'));
	});

	// toggle background image
	$("#toggle-bg").change(function (e) {
		e.preventDefault();
		$('.page-wrapper').toggleClass("sidebar-bg");
	});

	// toggle border radius
	$("#toggle-border-radius").change(function (e) {
		e.preventDefault();
		$('.page-wrapper').toggleClass("boder-radius-on");
	});

	//custom scroll bar is only used on desktop
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(".sidebar-content").mCustomScrollbar({
			axis: "y",
			autoHideScrollbar: true,
			scrollInertia: 300
		});

		$(".sidebar-content").addClass("desktop");
	}

	// FullCalendar
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title,addEventButton',
			right: 'month,agendaWeek,agendaDay,listMonth'
		},
		selectable: true,
		// selectHelper: true,
		editable: true,
		// defaultTimedEventDuration: '00:30:00',
		forceEventDuration: true,
		firstDay: 1,
		timeFormat: 'HH:mm',
		events: 'https://fullcalendar.io/demo-events.json',
		eventColor: '#1565c0',
		eventLimit: true, // allow "more" link when too many events
		themeSystem: 'bootstrap4'
	});

	$(".media-slider").slick({
		arrows: false,
		dots: true,
		centerMode: true,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}, {
			breakpoint: 300,
			settings: "unslick" // destroys slick
		}]
	});

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	$.get('https://api.myjson.com/bins/7l5ev', function (data) {
		$("#search_input").typeahead({
			source: data,
			displayText: (item) => {
				const html = '<div class="row align-items-center h-100">' +
					'<div class="col-4">' +
					'<img src="' + item.image + '" class="img-fluid rounded-circle mx-auto" style="width: 80px;">' +
					'</div>' +
					'<div class="col-8">' +
					'<h3>@' + item.username + '</h3>' +
					'<p class="small">' + item.followers + ' followers</p>' +
					'</div>' +
					'</div>' +
					'<hr>';
				return html;
			},
			items: 3
		});
	}, 'json');

	$.get('https://api.myjson.com/bins/pcxtj', function (data) {
		$("#search_input_2").typeahead({
			source: data,
			displayText: (item) => {
				const html = '<div class="row align-items-center h-100">' +
					'<div class="col-4">' +
					'<img src="' + item.image + '" class="img-fluid rounded-circle mx-auto" style="width: 80px;">' +
					'</div>' +
					'<div class="col-8">' +
					'<h3>#' + item.hashtag + '</h3>' +
					'<p class="small">' + item.followers + ' followers</p>' +
					'</div>' +
					'</div>' +
					'<hr>';
				return html;
			},
			items: 3
		});
	}, 'json');
});
