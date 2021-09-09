$(document).ready(function() {
	$('.images').magnificPopup({
		delegate: 'a',
		tLoading: 'Načítání obrázku ...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},		
		type: 'image'
	});
});