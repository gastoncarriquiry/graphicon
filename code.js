$(document).ready(function(){
    $(".nav-toggle").click(function(){
        $("nav").slideToggle("medium");
        $(this).toggleClass("is-active");
    })
});