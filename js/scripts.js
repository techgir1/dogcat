$(document).ready(function() {
  $("button#catbutton").click(function() {
    $("ul#dogs").prepend("<li>Woof</li>");
    $("#dogh2").before("<img src='img/scarydog.jpg'>");

});

$("#img").children("#dogdiv").first().click(function() {
      $(this).remove();

});

  $("button#dogbutton").click(function() {
    $("ul#cats").prepend("<li>Meow</li>");
    });

});
