
$(document).ready(function(){
    $('.facility').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
})
AOS.init({
    duration:1000,
    delay:400
});


$(window).scroll(function()
{
    let wScroll=$(window).scrollTop();
    console.log(wScroll);
    if(wScroll > 100)
    {
    $("#main-nav").css("boxShadow","0 .3rem .5rem rgba(0, 0, 0, .3)")
    $("#main-nav").css("backgroundColor","#fff")
    //  $("#btnUp").fadeIn(2000)
    }
    else
    {
        $("#main-nav").css("backgroundColor","transparent")    
        $("#main-nav").css("boxShadow","none")
        // $("#btnUp").fadeOut(2000)
    }
})

$("#btnUp").click(function()
{
    $("html,body").animate({scrollTop:0},2000)
})

$(".nav-link").click(function()
{
    $(this).addClass("active")
    $(this).parent().siblings().find('a').removeClass("active")
    let currentHref=$(this).attr("href")
    let currentOffset=$(currentHref).offset().top
    $("html,body").animate({scrollTop:currentOffset - 55},1000)
})


$(document).ready(function()
{
    $("#loading").fadeOut(2000,function()
    {
        $("#loading").remove()
        $("body").css("overflow","visible")
    })
})



  