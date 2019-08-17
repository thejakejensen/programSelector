$(document).ready(function() {
  $("#langs").hide()

  $("#formOne").submit(function(event) {
    event.preventDefault()

    var hero = parseInt($("#hero").val());
    var shoe = parseInt($("#shoe").val());
    var food = parseInt($("#food").val());
    var colour = parseInt($("#colour").val());
    var animal = parseInt($("#animal").val());

    var score = food + shoe + hero + colour + animal;

    if (score > 5) {
      $("#ruby").hide();
      $("#python").hide();
      $("#Rust").hide();
      console.log(hi)
    } else if (score >= 5 && score < 7) {
      $("#ruby").show();
      $("#python").hide();
      $("#Rust").hide();

    } else if (score >= 7 && score < 13) {
      $("#ruby").hide();
      $("#python").show();
      $("#Rust").hide();

    } else if (score >= 13 && score < 20) {
      $("#ruby").hide();
      $("#python").hide();
      $("#Rust").show();

    };

  });
});
