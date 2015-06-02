var $orangeSpan = $("span.orange")  //* this will get the specific span in Orange.

$orangeSpan.text("here is some programmatically added text") //* this is just adding text
$orangeSpan.addClass("blue") //* this will add text blue

$orangeSpan.removeClass("orange") //*this will remove orange.
//* you can also just do .addClass("blue") and .removeClass("orange")

//*1 way of adding a click
.on("click", function(evt) }
$(evt.target).text("you clicked me!") //*once you click the text, it will change to "you clicked me!"
})

//*Another way of adding a click function
.on("click", function(evt){
$(this).text("hey whats up") //* this will also change text.

})
//* this will add the class red with the orange.
var $orangeStuff = $(".orange")
$orangeStuff.addClass("red")

$orangeStuff.on("click", function (){

	$(this).text("i was clicked upon oh noooo") *//this will add text once clicked upon.

})	.on("mouseout", function(){
	$(this).text("moused out") //* this will change text to moused out once mouse is away from the word.
})

$orangeStuff.each(function() {

	console.log(this, arguments) //*use this to test out what is going on.

	$(node).attr("data-original-text", $(node.text()) //* this will switch the content back to the original.
}
