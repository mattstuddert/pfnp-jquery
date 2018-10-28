
/**
* Part 1 - Together:
*/

// 1. Remove the highlight class from #box2 (use the .removeClass() method)
$('#box2').removeClass('highlight');

// 2. Select the anchor (<a>) within #box3. Change the HTML to 'jQuery!'
$('#box3 a').html('jQuery!');

/**
* Part 1 - Now you try:
*/

// 1. Add the .highlight class to #box4 (use the .addClass() method)
$('#box4').addClass('highlight');
// 2. Make the text color of the strong tag (<strong>) within #box2 green (use the .css() method)
$('#box2 strong').css('color', 'green');
/**-----------------------------------------------------------------------------------------------*/


/**
*
* Part 2 - Together:
*
*/

// 1. When the anchor within #box3 is clicked
  // a) Slide toggle #box4
  // b) Fade out #box1 slowly
$('#box3 a').on('click', function () {
  $('#box4').slideToggle();
  $('#box1').fadeOut();
});

/**
*
* Part 2 - Now you try:
*
*/
// 1. When the h2 is clicked on
  // a) Slide up the h2
  // b) Add the snazzy class to the h1
$('h2').on('click', function(){
  $('h2').slideUp();
  $('h1').addClass('snazzy');
});

// 2. When #box1 is clicked on
// a) Add the highlight class to h3
$('#box1').on('click', function(){
  $('h3').addClass('highlight');
});

// Part 3 - Together:
$(document).ready(function(){
  // 1. Create a variable and name it 'school'. Set the value of the variable equal to the prompt 'Which school you at right now? :)'
  var school = prompt('Which school you at right now? :)');

  // 2. Create a conditional statement that says if the value entered in to the prompt is equal to 'General Assembly', change the p tag in the footer to say 'Thanks for stopping by General Assembly!' If the user enters 'GA' change the p tag in the footer to say 'Thanks for stopping by GA!' If the user enters in anything else change the p tag in the footer to say 'Still the footer!'
  if (school === 'General Assembly') {
      $('footer p').html('Thanks for stopping by General Assembly!');

  } else if (school === 'GA') {
      $('footer p').html('Thanks for stopping by GA!');

  } else {
      $('footer p').html('Still the footer!');
  }
});
