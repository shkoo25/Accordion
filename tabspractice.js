console.log($(".tab").length)//* this will test out the arguments within the html.

$(".tab").each(function(index, tab){
	var $tab = $(tab)//* Jquery wrap the individual tab
	$tab.attr("data-tab", index) //*adds the attribute "data-tab" with the tab's index.

	$(".content:eq(" + index + ")").attrt("data-tab", index)  //* this will find all indexs.

})

$(document.on("ready", function(){
	$(".tab").on("click", function(){ //*binding the click even on each tab.
		$("tab").removeClass("active")//* this must be first in order to make sure color goes back to original color and removing active
		$(this).addClass("active") //* this all will change the color of the background of a specific portion once clicked upon and adding active
		$(".content[data-tab='" + $(this).attr("data-tab") + "']") //this will make the tabs inside the html show text after you click a specific one.

	})
	$(".tab:eq(0), .content:eq(0)").addClass("active")//* when loading page first time, just adding active state.
})
