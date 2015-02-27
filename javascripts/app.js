var process_keypress, sum_widths, init;
  
current_image: 0,

process_keypress = function(e) {
  console.log(e.keyCode);
};


sum_widths = function() {
  w = 0;
  $('img').each(function() {
    
    w += parseInt( ( $(this).css('width') ).replace(/px/, '') );
  });
  return(w);
};

init = function(){
  $(window).keypress( this.process_keypress );
};


$(function(){
  
  init();
  
});