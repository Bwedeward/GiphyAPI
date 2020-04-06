//set up an array of animals(start with an empty array)
//when animal is clicked on, show gifs of that animal
//when a new animal is searched, add both a button and gifs for that animal

var topics = ""

$("#run-search").on("click", function(){
var userInput = $(".form-control").val().trim()
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=HiSNzSFVyBDcF1VO0ol1jYExSJMkPNxL&limit=10&rating=pg"

console.log(queryURL)
// var topics = $(".search-term")
//     .val()
//     .trim();
//     console.log(topics)

$.ajax({
    url: queryURL,
    method: "GET"
  })


.then(function(response){
    console.log(response)
var imageUrl = response.data.data
for ( var i=0; i < response.data.length; i ++){
var gifImage = $("<img>")
gifImage.attr("scr", imageUrl)
gifImage.attr("alt", "gif")
$(".gifImage").prepend(gifImage)
}

})

// $("img").on("click", function(){
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//       }
// })

})