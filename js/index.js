jQuery(document).ready(function($) { 

	// Find the toggles and hide their content
	$('.toggle').each(function(){
		$(this).find('.toggle-content').hide();
	});

	// When a toggle is clicked (activated) show their content
	$('.toggle a.toggle-trigger').click(function(){
		var item = $(this), parent = item.closest('.toggle');

		if( item.hasClass('active') )
		{
			parent.find('.toggle-content').slideToggle();
			item.removeClass('active');
		}
		else
		{
			parent.find('.toggle-content').slideToggle();
			item.addClass('active');
		}
		return false;
	});

});  //End










///







// init ScrollMagic Controller
controller = new ScrollMagic();



// Scene1 Handler
var scene11 = new ScrollScene({
  triggerElement: "#sticky-trigger", // point of execution
  //triggerElement: "#sticky-bar", // point of execution
  //duration: 620, // pin the element for a total of 400px
  triggerHook: 'onLeave'
})
//scene11.setPin("#sticky-bar"); // the element we want to pin
scene11.setPin("#sticky-bar",
              {pushFollowers: false}); // the element we want to pin



var scene12 = new ScrollScene({
  triggerElement: "#sticky-bar"
})
scene12.setClassToggle("#sticky-bar", "active") // add class toggle



//var scene99 = new ScrollScene({
  //triggerElement: "#leave",
  //triggerHook: 'onLeave'
//})
//scene99.setClassToggle("#sticky-bar", "active")
// add class toggle
//scene99.removePin("#sticky-bar");


var scene99 = new ScrollScene({
  triggerElement: "#leave",
  triggerHook: 'onLeave'
})
scene99.setClassToggle("#sticky-bar", "in-active");
// add class toggle
//scene99.removePin("#sticky-bar");

// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene11,
  scene12,
  scene99
]);



///About End Points
//https://github.com/janpaepke/ScrollMagic/issues/347
//A common misconception seems to be that you have to supply a triggerElement. Like all the other scene options it is (duh) optional. If it's an element that doesn't move it's better to supply an offset, as an element's position needs to be constantly recalculated, where an offset stays fixed.






////