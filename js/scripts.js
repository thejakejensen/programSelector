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
$(document).ready(function() {
  $("#langButton").click(function(event) {
    event.preventDefault()
    var hero = parseInt($("#hero")).val();
    var shoe = parseInt($("#shoe")).val();
    var food = parseInt($("#food")).val();
    var colour = parseInt($("#colour")).val();
    var animal = parseInt($("#animal")).val();

    var score = food + shoe + hero + colour + animal ;

    if (
  
  });
});
