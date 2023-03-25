function blockbar(){
  document.getElementById('display_bar').style.display = "block";
  document.getElementById('hide_bar').style.display = "none";
  document.getElementById('cross_bar').style.display = "block";
} 
function crossBar(){
  document.getElementById('display_bar').style.display = "none";
  document.getElementById('hide_bar').style.display = "block";
  document.getElementById('cross_bar').style.display = "none";
}


$(document).ready(function(){
    var mixer = mixitup(".container");
});

$(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });
  