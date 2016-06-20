$(document).ready(function() {
  // Blackout the word when it is clicked
  $("a").click(function() {
    // get highlight color
    var color = $(this).css('background-color');

    // If highlight is black, make it white
    if (color == "rgb(0, 0, 0)")
      $(this).css('background-color', 'white');
    // If highlight is white, make it black
    else
      $(this).css('background-color', 'black');
  });
});
