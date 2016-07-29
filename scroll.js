// scrollbar - taille réduite au défilement
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#change');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").addClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand").addClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand:hover").addClass('scroll');
          $(".navbar-default .nav > li > a").addClass('scroll');
          $(".navbar-default .nav > li > a:hover").addClass('scroll');
       } else {
          $(".navbar-default").removeClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand").removeClass('scroll');
          $(".navbar-default .navbar-header .navbar-brand:hover").removeClass('scroll');
          $(".navbar-default .nav > li > a").removeClass('scroll');
          $(".navbar-default .nav > li > a:hover").removeClass('scroll');
       }
   });
    }
});

// taille des initiales de chaque mot sur une ligne
$(document).ready(function() {
    var words = $('h1').text().split(' ');
    var html = '';
    $.each(words, function() {
        html += '<span style="font-size:80px">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
    });
    $('h1').html(html);
});
$(document).ready(function() {
    var words = $('.navbar-brand').text().split(' ');
    var html = '';
    $.each(words, function() {
        html += '<span style="font-size:45px">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
    });
    $('.navbar-brand').html(html);
});

// fonctions de gestion du flou des images (traiteur-1.html)
function addBlur(target) {
	document.getElementById(target).classList.add('blur');
}
function remBlur(target) {
	document.getElementById(target).classList.remove('blur');
}

// fonction de gestion du sous menu location (location.html)
function show(target) {
      var list_hide = document.getElementsByClassName('cacher');
      var i;
      for (i = 0; i < list_hide.length; i++) {
        list_hide[i].style.display = 'none';
      }
      document.getElementById(target).style.display = 'flex';
}
