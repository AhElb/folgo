$(document).ready(function(){

setTimeout(() => { $('.item1').addClass('item1over') }, 8000);
setTimeout(() => { $('.item1').removeClass('item1over') }, 16000);

setTimeout(() => { $('.item2').addClass('item2over') }, 8000);
setTimeout(() => { $('.item2').removeClass('item2over') }, 16000);

function sslider(){

setTimeout(() => { $('.item1').addClass('item1over') }, 8000);
setTimeout(() => { $('.item1').removeClass('item1over') }, 16000);

setTimeout(() => { $('.item2').addClass('item2over') }, 8000);
setTimeout(() => { $('.item2').removeClass('item2over') }, 16000);


}

window.setInterval(sslider, 16900);


$('.confirm1').click(function(){




  $('.sec-dep').toggleClass('non-disp');
  $('.first-dep').toggleClass('non-disp');

});

$('.confirm1').click(function() {
   if($('#customRadio2').is(':checked')) { 

    $('.paybank').css('display','inline-flex');
    $('.paycard').css('display','none');

    }
});




  });