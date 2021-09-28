$("a").on("click",function(){
    var clicked_text = $(this).text();
    var clicked_url = $(this).attr("href");
    analytics.track("User click", {
        clicked_text: clicked_text,
        clicked_url: clicked_url
    });
})