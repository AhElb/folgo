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



$('#confirm').click(function(){
  $('.price-convert').css('display','block');
$(this).text('Confirm');
});



$('.duration div').click(function(){
$('.duration div').removeClass('dur-active');
$(this).addClass('dur-active');



});






$('.history-action a').click(function(){
$('.history-action a').removeClass('active2');
$('.trans-table .invest-log div').removeClass('disppl');
$('.trans-table .invest-log div').addClass('nodisplay');



$(this).addClass('active2');

var value=$(this).attr('href');

$(value).addClass('disppl');


});











  });








//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}


//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker2 option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#aa').html(langArray);

//Set the button value to the first el of the array
$('.btn-select2').html(langArray[0]);
$('.btn-select2').attr('value', 'en');

//change button stuff on click
$('#aa li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select2').html(item);
  $('.btn-select2').attr('value', value);
  $(".bb").toggle();
  //console.log(value);
});

$(".btn-select2").click(function(){
        $(".bb").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select2').html(langArray[langIndex]);
  $('.btn-select2').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select2').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}


