$(document).ready(function(){
	
$('#games-ratator').utilCarousel({
	showItems : 3,
	autoPlay : true,
	rewind : true,
	interval : 6500,
	slideSpeed : 650,
	pauseOnHover : true,
	navigation : true,
	navigationText : ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
	breakPoints : [[1900, 3], [1200, 3], [992, 3], [768, 2], [480, 1]]
});	
	
$('#widget-baner-ratator').utilCarousel({
	showItems : 1,
	autoPlay : true,
	rewind : true,
	interval : 12500,
	slideSpeed : 650,
	pauseOnHover : true,
	navigation : true,
	navigationText : ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
	breakPoints : [[1900, 1], [1200, 1], [992, 1], [768, 1], [480, 1]]
});

$('.games-post-text').jScrollPane({showArrows: false,maintainPosition: false});	

$("input[type=password]").passField({ 
        showGenerate: true, 
        showWarn: true, 
        showTip: false, 
});

});