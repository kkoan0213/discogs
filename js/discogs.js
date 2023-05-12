$(document).ready(function(){

  //서브메뉴
  $('.tab').mouseenter(function(){
    $(this).addClass('active')
  })
  $('.tab').mouseleave(function(){
    $(this).removeClass('active')
  })


  $('.genre').click(function(){
    //.album-swiper-box
    $(this).addClass('active');
    $(this).siblings().removeClass('active');



    let genre = $(this).attr('data-alt');
    // $('.album-swiper-box').removeClass('active');

    $(`#${genre}`).addClass('active');
    $(`#${genre}`).siblings().removeClass('active');

    // $('.album-swiper-box').addClass('active');
    // $('.album-swiper-box').siblings().removeClass('active');
  });

  // $('.album-swiper-box').click(function(){
  //   $(this).siblings().removeClass('active');
  // });




  $('.main-menu li').mouseenter(function(){
      // console.log('hover')
      let result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('active');

      $(`#${result}`).addClass('active');

      //서브메뉴박스 보이게
      $('.sub-menu-box').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
      $(this).removeClass('active');
    });








    $('.swiper-btn-n').click(function(){
      $('.lp1').addClass('active')
      $('.lp1').click()
      $('.lp2').removeClass('active')
      $('.needle').click()
      // $('.lp-img').animate({
      //   // transform: "rotate(0deg)",
      //   transform: "rotate(360deg)"

      // },500);

    });


    $('.swiper-btn-p').click(function(){
      $('.lp2').addClass('active')
      $('.lp2').click()
      $('.lp1').removeClass('active')
      $('.needle').click()
    });

    // $('.lp1').click(function(){
    //   $(this).addClass(active)
    //   $('.lp2').removeClass(active)
    // });
    // $('.lp2').click(function(){
    //   $(this).addClass(active)
    //   $('.lp1').removeClass(active)
    // });



    var el = document.querySelector(".lp1");
    el.onclick = function() {
      this.animate([
          {transform: "rotate(0deg)" },
          {transform: "rotate(360deg)" }
      ], {
          duration: 500,
          fill: "forwards"
      });        
    };

    var el1 = document.querySelector(".lp2");
    el1.onclick = function() {
      this.animate([
          {transform: "rotate(0deg)" },
          {transform: "rotate(-360deg)" }
      ], {
          duration: 500,
          fill: "forwards"
      });         
    };

    var needle = document.querySelector(".needle");
    needle.onclick = function() {
      this.animate([
          {transform: "translateX(-35%)" },
          {transform: "translateX(-50%)" }
      ], {
          duration: 500,
          fill: "forwards"
      });         
    };



      //스와이퍼
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#hamburger span').toggleClass('active');
        $('.hamburger-box').fadeToggle();
      });
      

      $('.hamburger-tab').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
      });
      
      var swiper = new Swiper(".Classical", {
        loop: true,
        navigation: {
          nextEl: ".album-next",
          prevEl: ".album-prev",
        },
      });

      var swiper = new Swiper(".Rock", {
        loop: true,
        navigation: {
          nextEl: ".album-next",
          prevEl: ".album-prev",
        },
      });

      var swiper = new Swiper(".POP", {
        loop: true,
        navigation: {
          nextEl: ".album-next",
          prevEl: ".album-prev",
        },
      });

      var swiper = new Swiper(".Jazz", {
        loop: true,
        navigation: {
          nextEl: ".album-next",
          prevEl: ".album-prev",
        },
      });









});

// window.addEventListener("load", function() {
// 	var el = document.querySelector(".lp-img");
//     el.onclick = function() {
//       $('.lp-img').animate([
//           {transform: "rotate(0deg)" },
//           {transform: "rotate(360deg)" }
//       ], {
//           duration: 1000,
//           fill: "forwards"
//       });         
//     };
// });