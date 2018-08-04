$(document).ready('turbolinks:load', function(){
  //Initialise tooltip
  $(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


  //scrolling nav
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }
});
