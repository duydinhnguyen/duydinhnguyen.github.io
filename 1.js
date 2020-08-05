
 $(function(){
     vitrikhoigt=$('#khoigt').offset().top;
     vitricuaedu=$('#khoiedu').offset().top;
     vitricuasp=$('#khoisp').offset().top;
     vitricuacomment=$('#phanhoi').offset().top;
     vitricuacontact=$('#lienhe').offset().top;
     
     $(".gt,.navbar-brand").click(function(){
        $('body,html').animate({ scrollTop:vitrikhoigt},700)
        return false;
    })
     $(".xuong,.kn").click(function(){
         $('body,html').animate({ scrollTop:vitricuaedu },700)
         return false;
     })
     $(".cm").click(function(){
        $('body,html').animate({ scrollTop:vitricuacomment},700)
        return false;
    })
    $(".sp").click(function(){
        $('body,html').animate({ scrollTop:vitricuasp},700)
        return false;
    })

    $(".contact").click(function(){
        $('body,html').animate({ scrollTop:vitricuacontact},700)
        return false;
    })

     
    /* xử lý sự kiện cho skill bar */
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // ----------------------- 
      // Progress Bar--------------------
      // 
  $('.progress-bar').each(function(){
          var width = $(this).data('percent');
          $(this).css({'transition': 'width 3s'});
          $(this).appear(function() {
              console.log('hello');
              $(this).css('width', width + '%');
              $(this).find('.count').countTo({
                  from: 0,
                  to: width,
                  speed: 3000,
                  refreshInterval: 50
              });
          });
      });
  });  //End On Load Function
  /*End xử lý sự kiện cho skill bar */

  $(window).scroll(function(){
      
  })

})  
 