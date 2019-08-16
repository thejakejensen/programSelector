// $(document).ready(function(){
//   $("#langButton").click(function(event) {
//
//     if ($().val()==="armadillo lizard"){
//       $(".armadillo").show();
//     }
//     else if($("#animal").val()==="Red Panda"){
//       $(".redpanda").show();
//     }
//     else if($("#animal").val()==="Black Panther"){
//       $(".blackpanther").show();
//     }
//
//     event.preventDefault();
//   });
// });
$(document).ready(function(){
  $("#langButton").click(function(event) {

    if ($("#animal").val()==="armadillo lizard"){
      $(".armadillo").show();
    }
    else if($("#animal").val()==="Red Panda"){
      $(".redpanda").show();
    }
    else if($("#animal").val()==="Black Panther"){
      $(".blackpanther").show();
    }

    event.preventDefault();
  });
});
