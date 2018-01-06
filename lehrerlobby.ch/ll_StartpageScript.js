$( document ).ready(function() {
//shows div element with id="popin" when hover
  $(".page-footer").hover(function(){
    $('#popin').show();
    //scrolls to the end of the page
        $('html,body').animate({scrollTop:$('html,body').height()}, 1000);
    },function(){$('#popin').hide();});
  
  
});
