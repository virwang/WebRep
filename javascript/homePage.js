// myWEB0125ss
// function TL_hide() {
//   document.image1.src= "./png/square_TL.png"
// }
//
// function TL_show() {
//   document.image1.src= "./png/BTopLeft.png"
//   $(".middle").onmouseover(funcrion(){
//     $(showImage).attr("square_TL", "./png/BTopLeft.png");
//   }).onmouseover(function(){
//     return false;
//   });
// }


function initial() {
  // append img
  $(".middle").append('<img id="TL_S" class="hint" src="../png/square_TL.png" alt="top_left">');
  $(".middle").append('<img id="TR_S" class="hint" src="../png/square_TR.png" alt="top_right">');
  $(".middle").append('<img id="BL_S" class="hint" src="../png/square_BL.png" alt="bottom_left">');
  $(".middle").append('<img id="BR_S" class="hint" src="../png/square_BR.png" alt="bottom_right">');
  $('#TL_S').hide();
  $('#TR_S').hide();
  $('#BL_S').hide();
  $('#BR_S').hide();
  // append text
  $(".middle").append("<ul id=TL_list></ul>");
  $("#TL_list").append('<li class="hint"'+">中文書</li>");
  $("#TL_list").append('<li class="hint"'+">英文書</li>");
  // TR_list
  $(".middle").append('<ul id="TR_list"></ul>');
  $("#TR_list").append('<li class="hint"'+">女性</li>");
  $("#TR_list").append('<li class="hint"'+">男性</li>");
  //BL_list
  $(".middle").append('<ul id="BL_list"></ul>');
  $("#BL_list").append('<li class="hint"'+">清潔用具</li>");
  $("#BL_list").append('<li class="hint"'+">傢俱</li>");
  // BR_list
  $(".middle").append('<ul id="BR_list"></ul>');
  $("#BR_list").append('<li class="hint"'+">樸克牌</li>");
  $("#BR_list").append('<li class="hint"'+">桌遊</li>");
  // HIDE
  $('#TL_list').hide();
  $('#TR_list').hide();
  $('#BL_list').hide();
  $('#BR_list').hide();

  // can locate the above four images here.
  $("#C_TL").mouseover(function() {
      $("#TL_S").show();
      $("#TL_list").show();
  });
  $('#txt_CTL').mouseover(function() {
    $("#TL_S").show();
    $("#TL_list").show();
  });
  $("#C_TL").mouseout(function() {
      $("#TL_S").hide();
      $("#TL_list").hide();
  });
  $("#C_TR").mouseover(function() {
      $("#TR_S").show();
      $("#TR_list").show();
  });
  $("#C_TR").mouseout(function() {
      $("#TR_S").hide();
      $("#TR_list").hide();
  });
  $("#C_BL").mouseover(function() {
      $("#BL_S").show();
      $("#BL_list").show();
  });
  $("#C_BL").mouseout(function() {
      $("#BL_S").hide();
      $("#BL_list").hide();
  });
  $("#C_BR").mouseover(function() {
      $("#BR_S").show();
      $("#BR_list").show();
  });
  $("#C_BR").mouseout(function() {
      $("#BR_S").hide();
      $("#BR_list").hide();
  });
}

$(document).ready(function () {
  //var action = getQueryString("action");
 //document.addEventListener("keydown",key_handle);

  initial();
});
