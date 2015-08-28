// Default number of boxes
var gridBoxes = 5;

$(document).ready(function() {
	// Function call to show grid passing 'gridBoxes'
	// as a parameter
	grids(gridBoxes);

	// When mouse enter on grid it change color
	// adding class '.square_hover' to '.square'
	$(".square").on("mouseenter", function() {
		$(this).addClass("square_hover");
	});

	// Clear button
	$(".clear").on("click", function() {
		$(".square").removeClass("square_hover");
	});
	
	// Random colors
	$(".random").on("click", function(){
		newGrid();
		$(".square").on("mouseenter", function(){
			$(this).css("background", randomColor());
		});
	});

	// Creates a new grid
	$(".new").on("click", function() {
		newGrid();
		$(".square").on("mouseenter", function() {
			$(this).addClass("square_hover");
		});
	});
});

// Generate grid
function grids(w) {
	// Box sizes are calculated and used for width and height
	// Parameter 'w' = 'gridBoxes'
	var boxSize = (960 - 2 * w) / w;
	var gridWrapper = $(".grid_wrapper").html("");

	// Append boxes into the html
	for (var x = 0; x < w; x++) {
		for (var i = 0; i < w; i++) {
			gridWrapper.append($("<div></div>").addClass("square").width(boxSize).height(boxSize));
		}
	}
}

// New grid
function newGrid() {
	// Prompt box
	gridBoxes = prompt("A number between 1 and 64 is required");

	if (gridBoxes > 0 && gridBoxes <= 64) {
		//Grids function call which generates the grid
		grids(gridBoxes);
	} else {
		newGrid();
	}
}

// Random colors
function randomColor() {
	// The split() method splits a String object into an array of strings
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    // Hex colors require 6 characters
    for (var i = 0; i < 6; i++ ) {
    	// Math.floor() randomize the variable 'letters'
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}