// JavaScript Document
$('#slide').owlCarousel({
loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:20000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
dots:false,
 })
$(document).ready(function(){
  $('#chuyen').owlCarousel({ 
    loop: true,           // Lặp lại carousel
    items: 4,             // Hiển thị 1 video tại một thời điểm (hoặc đổi thành 3 nếu cần)
    margin: 10,           // Khoảng cách giữa các video
    nav: true,            // Hiển thị nút điều hướng (mũi tên)
	dots:false,
  });
});
$(document).ready(function(){
  $('#chuyen1').owlCarousel({ 
    loop: false,           // Lặp lại carousel
    items: 5,             // Hiển thị 1 video tại một thời điểm (hoặc đổi thành 3 nếu cần)
    margin: 10,           // Khoảng cách giữa các video
    nav: true,            // Hiển thị nút điều hướng (mũi tên)
	dots:false,
	slideBy: 1,
  });
});