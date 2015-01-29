head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
		console.log($('body').html());
		var ul = $( ".out .lside .lside__nav ul" );
		var a = $( ".out .lside .lside__nav ul li a" );
		ul.mouseover(function() {
			ul.animate({width: 150}, "fast");
		setInterval(	function() {
		 	ul.queue(function () {
	  	      a.addClass("open"); 
	  	    })}, 1000);
	  });
});