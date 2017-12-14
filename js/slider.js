(function(document, Swiper) {
  document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationHide: false
    });
  });
})(document, Swiper);
      
