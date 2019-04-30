$(document).ready(function(){
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
      scroller($(this.hash));
    });
    $('[name=DateInput]').change(function(e){ formatDate() })
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;
    $('[name=DateInput]').val(today)
    //formatDate()
  });
  $(document).scroll(function(){ showhidenav() });
  function scroller(hash){
      var target = hash;
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-70
        }, 1000);
        return false;
      }
  }

  function formatDate(){
    var fecha = $('[name=DateInput]').val()
    var fe = fecha.split('-')
    $('[name=DateIn]').val(fe[1]+'/'+fe[2]+'/'+fe[0])
  }

  function showhidenav(){
    if($(window).scrollTop()>250){
      $('nav.navbar').addClass('visible');
    } else {
      $('nav.navbar').removeClass('visible');
    }
  }