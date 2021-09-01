// JavaScript Document
// $(document).ready(
//     function(){

//         //sticky nav
//         $('.about-section').waypoint(
//             function(direction){
//                 if(direction == 'down'){
//                     $('nav').addClass('sticky');
//                 }
//                 else
//                     $('nav').removeClass('sticky');
//             }, {
//                 offset: '600px'
//             }
//         )

//         //smooth scroll
//         $('a').click(function(event){
//             $('html, body').animate({
//                 scrollTop: $( $.attr(this, 'href') ).offset().top
//             }, 700);
//             event.preventDefault();
//         });
//         console.log(document)
//     }
// )
var listItems1 = document.querySelectorAll('.parent>li');
var listItems3 = document.querySelectorAll('.parent ul > ul > li');
console.log(listItems3);
