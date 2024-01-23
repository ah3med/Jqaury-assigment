//^ jQuery Auto Complete ...
/// <reference types="../@types/jquery" />;

//~ ======================================(Singers section )=========================================
// اول الصفحة متحمل
$(function () {
  $(".col-md-6 p").eq(0).slideToggle(400);
});

$(".col-md-6 h2")
  .eq(0)
  .on("click", function () {
    $(".col-md-6 p").eq(0).slideToggle(400);
  });
$(".col-md-6 h2")
  .eq(1)
  .on("click", function () {
    $(".col-md-6 p").eq(1).slideToggle(400);
    $(".col-md-6 p").eq(0).slideUp(400);
  });
$(".col-md-6 h2")
  .eq(2)
  .on("click", function () {
    $(".col-md-6 p").eq(1).slideUp(400);
    $(".col-md-6 p").eq(2).slideToggle(400);
  });
$(".col-md-6 h2")
  .eq(3)
  .on("click", function () {
    $(".col-md-6 p").eq(2).slideUp(400);
    $(".col-md-6 p").eq(3).slideToggle(400);
  });
//~ ===================================(singers section )============================================

//~ ===================================(left menu )============================================

$(".open_slider_span").on("click", function () {
  $(".open_slider_span").css({ display: "none" });
  $("#sideMenu").animate({ width: "toggle" }, 200);
});

$(".close_button").on("click", function () {
  $(".open_slider_span").css({ display: "inline" });
  $("#sideMenu").animate({ width: "toggle" }, 200);
});

//~ ===================================(left menu)============================================

//~ ===================================(count down  timer)============================================
// party date
let countdownDate = new Date("4 25 ,2024 23:59:59").getTime();
let counter = setInterval(function () {
  // get date now
  let dateNow = new Date().getTime();
  // difference between date noew and part Date
  let differenceBetween = countdownDate - dateNow;
  // get time units
  let days = Math.floor(differenceBetween / (1000 * 60 * 60 * 24));
  //* document.querySelector(".days").innerHTML = `- ${days}` < 10 ? `-0${days} ` : `- ${days}`;
  document.querySelector(".days").innerHTML = days < 10 ? `0${days} ` : days;

  let hours = Math.floor(
    (differenceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.querySelector(".hours").innerHTML =
    hours < 10 ? `0${hours} ` : hours;

  let minutes = Math.floor(
    (differenceBetween % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes} ` : minutes;

  let seconds = Math.floor((differenceBetween % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds} ` : seconds;
  if (differenceBetween <= 0) {
    alert("Timed Out 👋🏻");
  }
}, 1000);
//~ ===================================(count down  timer)============================================

//~ ===================================loading============================================

$(function () {
  $(".loader").fadeOut(1500, function () {
    $(".loading").slideUp(1500, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
      // $("body").animate({ scrollTop: 0 }, 0);
      $(window).scrollTop(0);
    });
  });
});

//~ ===================================loading============================================

//~ ===================================limitted textarea============================================
var maxCount = 100;
var spanCounter = document.querySelector("#char_counter");
var limitedTextArea = document.querySelector("textarea");

limitedTextArea.addEventListener("keydown", function (e) {
  if (maxCount == 0 && e.key != "Backspace") {
    e.preventDefault();
    $(".spanText").text("Can Not Add More Chars");
    $(".spanText").css("color", "red");

    return;
  }
  if (maxCount == 100 && e.key == "Backspace") {
    e.preventDefault();
    return;
  }
  if (e.key == "Backspace") {
    maxCount = maxCount + 1;
    spanCounter.innerHTML = maxCount;
    $(".spanText").text("Number Of Character Left :");
    $(".spanText").css("color", "black");
  } else {
    $(".spanText").text("Number Of Character Left :");
    $(".spanText").css("color", "black");
    maxCount = maxCount - 1;
    spanCounter.innerHTML = maxCount;
  }
});
//~ ===================================limitted textarea============================================


