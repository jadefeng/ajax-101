$(document).ready(function () {
  setInterval(function () {
    $.ajax('/time.json').done(function (stamp) {
      $('body').html('<p>Current time:' + stamp.now + '</p>');
      $('<p></p>').text('Lucky number:' + stamp.lucky_number).appendTo('body');
    });
  }, 1000);
});


console.log("Hello world");