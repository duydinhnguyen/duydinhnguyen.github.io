 $(function(){
     vitricuaedu=$('#khoiedu').offset().top;
     vitricuasp=$('#khoisp').offset().top;
     
     $(".xuong,.kn").click(function(){
         $('body,html').animate({ scrollTop:vitricuaedu },700)
         return false;
     })
     $(".sp").click(function(){
        $('body,html').animate({ scrollTop:vitricuasp },700)
        return false;
    })
 
})  
 