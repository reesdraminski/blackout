$(document).ready(function() {
  // Blackout the word when it is clicked
  $("a").click(function() {
    // get highlight color
    var color = $(this).css('background-color');

    // If highlight is white, make it black
    if (color == "rgba(0, 0, 0, 0)")
      $(this).css('background-color', 'black');
    // If highlight is black, make it white

    else if (color == "rgb(0, 0, 0)")
      $(this).css('background-color', 'white');
  });
});
