$(document).ready(function(){
  $("button#cat").click(function() {
      $("ul").prepend("<li>Meoowwww</li>");
  });

  $("button#dog").click(function() {
      $("ul").prepend("<li>woof-woof</li>");
  });

  // $("button#lady").click(function() {
  //     $("ul#messages").children("li").first().click(function(){
  //       $("li").remove();
  //       $()
  //     });
  // });
  $("button#lady").click(function() {
      // $("ul").prepend("<li>STOP!</li>");
      $("ul").before("<h1>Stooooppp!!!!!</h1>");
      $("#messages").remove();
  });

});
