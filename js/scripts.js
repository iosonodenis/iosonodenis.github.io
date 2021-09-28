document.querySelector("a").addEventListener("click",function(){
    var clicked_text = document.querySelector(this).text()
    var clicked_url = document.querySelector(this).attr("href")
    analytics.track("User click", {
        clicked_text: clicked_text,
        clicked_url: clicked_url
    });
})