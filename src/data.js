const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name" && sortOrder === "a-z") {
    data.sort((a, b) => (a.Title < b.Title ? -1 : 0));
  } else if (sortBy === "name" && sortOrder === "z-a") {
    data.sort((a, b) => (a.Title > b.Title ? -1 : 0));
  }
  return data;
};
window.GlobalData = {
  sortData
};

$(document).ready(function () {
    
  /*********************************************** boton hacia arriba **********************************************/
  $('.ir-arriba').click(function(){
      $('body, html').animate({
          scrollTop: '0px'
      }, 1000);
  });

  $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
          $('.ir-arriba').slideDown(600);
      } else {
          $('.ir-arriba').slideUp(600);
      }
  });
});