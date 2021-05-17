import $ from "jquery";


$(document).ready(function (e) {
  $(".tabs__block").slideUp(1);

  $(".tabs__item").each(function () {
   if ($(this).attr("data") == "active") {
     let targetLink = $(this).attr("href");
     $(targetLink).slideDown(1);
   }
  });

  $(".tabs__item").on("click", function () {
    event.preventDefault();
    let targetLink = $(this).attr("href");
    $(".tabs__item").attr("data","none");
    $(".tabs__block").slideUp(1);

    $(this).attr("data", "active");
    $(targetLink).slideDown(200);
  });
});







