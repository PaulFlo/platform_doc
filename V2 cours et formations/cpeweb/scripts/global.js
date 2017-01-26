var spinnerTarget;
var spinner;

function init() {

	navSize();						// Gestion des menus
	mobilMainNav();					// Toggle Menu Ipad
	$(window).resize(menu);			// Managing menu of window resize	
}
function navSize() {
	
	$('aside ul li a').css('line-height', $('aside ul li').height() + 'px');
	$('#asideTop a').css('line-height', $('#asideTop').height() + 'px');
}
function mobilMainNav() {
	
	$('#mainNavBtn').click( function() 	{
		if ( !$('#mobilNav').hasClass('open')) {
			$('#mobilNav').addClass('open');
			$('#mobilNav ul').animate({'height': 'toggle'}, 700, 'easeOutExpo');
		}
		else {
			$('#mobilNav').removeClass('open');
			$('#mobilNav ul').animate({'height': 'toggle'}, 700, 'easeOutExpo');
		}
		return false;
	});	
}
function menu() {

	$('aside ul li a').css('line-height', $('aside ul li').height() + 'px');
	$('#asideTop a').css('line-height', $('#asideTop').height() + 'px');
	$('#mobilNav.open ul').animate({'height': 'toggle'}, 300, 'easeOutExpo');
	$('#mobilNav').removeClass('open');
}
function filterDrop() {

	$('.filterBox').click( function() 	{
		
		if ( $('ul',this).is(':hidden') )
		{
			$('ul', this).stop(true, false).animate( {height: 'toggle', opacity: 1}, {duration: 300, specialEasing: { height: 'easeOutExpo', opacity: 'linear' }});
			$('.bgOverlay').stop(true, false).fadeIn(300);
			$(this).addClass('active');
		}
		else
		{
			$('ul', this).stop(true, false).animate( {height: 'toggle', opacity: 0}, {duration: 300, specialEasing: { height: 'easeOutExpo', opacity: 'linear' }});
			$('.bgOverlay').stop(true, false).fadeOut(300);
			$(this).removeClass('active');
		}		
	});
	
	return false;
}
function filterActivation() {

	$('.filterBox').click( function() {
		
		if ( !$(this).hasClass('active') )
		{
			$('.filterBox').removeClass('active');
			$(this).addClass('active');					
		}
	});
}
function showBox() {

	var timer = 300;
		
	$('#boxs .box').each( function() {

		$(this).css('opacity', 0).css('visibility', 'visible');
		$(this).delay(timer).fadeTo(250,1);				
		timer += 100;
	});
}
function initOutil() {
	
	$('#filterLink').click ( function() {
		
		$('#incLinkForm').submit();
		return false;
	});
	
	$('#info').css('width', $('section').width() + 30 + 'px');
	$(window).resize( function()
	{
		setTimeout( function() {
			$('#info').css('width', $('section').width() + 30 + 'px');
		}, 300);
	});

	$('#info .backBtn').click ( function () {
		$('#info').fadeOut(200);	
		$('.container').removeClass('lightbox');
		return false;				
	});
}
function initSpinner() {

	opts = { lines: 17, length: 8, width: 6, radius: 26, corners: 1, rotate: 0, direction: 1, color: '#fff', speed: 1, trail: 60, shadow: false, hwaccel: true, className: 'spinner', zIndex: 2e9, top: '100px', left: '50%' };
	spinnerTarget = document.getElementById('spinner');
	spinner = new Spinner(opts);
}