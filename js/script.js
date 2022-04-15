$(document).ready(function() {
    $('.reviews-4').slick({
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 659,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });    
    $("img.panorama").panorama();
});

$(document).ready(function() {

    $("a").on("click", function (event) {
        var id = $(this).attr('href'), idel=$(id);
        if(!idel||idel.length==0) return;
        event.preventDefault();
        var top = idel.offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }
    update();
});



// open/close  popap contact block
const PopupBlock = document.querySelector('#Popup');
const PopupCloseBtn = document.querySelector('#closeBtn');
const styleBlock = document.querySelector('#contactBlock');
const body = document.querySelector(`body`);

//! open/close fixed popup block
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
  console.log(`hi`);
  // console.log(`click`);
  PopupBlock.classList.add("displayBlock");
  }, 3000);
});

PopupCloseBtn.addEventListener("click", () => {
  console.log(`click close btn`);
  PopupBlock.classList.remove("displayBlock");
  // wrapper.classList.remove("overlay");
  window.onscroll = function () { return false };
});