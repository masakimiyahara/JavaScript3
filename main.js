/* global $*/


$(function(){
  filtering = function(){
    let inputText = $("#search").val(),keyword;
    $(".keyword").each(function() {
        keyword = $(this).text();
        
        if (keyword.indexOf(inputText) != -1) {
            $(this).parent().removeClass("addhidden");
        } else {
            $(this).parent().addClass("addhidden");
        }
    });
  };
  
  $("#search").on("input", filtering);
  
    
});
  
    
