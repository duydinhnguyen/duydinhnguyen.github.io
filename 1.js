 $(function(){
     vitricuaedu=$('#khoiedu').offset().top;
     vitricuasp=$('#khoisp').offset().top;
     vitricuacomment=$('#phanhoi').offset().top;
     
     $(".xuong,.kn").click(function(){
         $('body,html').animate({ scrollTop:vitricuaedu },700)
         return false;
     })
     $(".cm").click(function(){
        $('body,html').animate({ scrollTop:vitricuacomment},700)
        return false;
    })
 
})  
 