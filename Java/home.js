$('.nav-side .nav-toggle').on('click', function(pi){
	pi.preventDefault();
	$(this).parent().toggleClass('nav-open');
});