$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});



$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});



function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });
  




  $('.play-icon').on('click', function(e){
    e.preventDefault();
    $('.modalWindow-video').addClass('open');
    $(".modalWindow-video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/q7ywieLNCHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
  
  $('.modalWindow-video, .close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.modalWindow-video.open').removeClass('open').find('iframe').remove();
  };