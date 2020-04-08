//set up an array of animals(start with an empty array)
//when animal is clicked on, show gifs of that animal
//when a new animal is searched, add both a button and gifs for that animal

var topics = "";

$("#run-search").on("click", function () {
  var userInput = $(".form-control").val().trim();
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    userInput +
    "&api_key=HiSNzSFVyBDcF1VO0ol1jYExSJMkPNxL&limit=10&rating=pg";

  console.log(queryURL);
  var topics = $(".search-term").val().trim();
  console.log(topics);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      var imageUrl = response.data[i].images.fixed_height_still.url;
      var gifImage = $("<img>");
      var animate = response.data[i].images.fixed_height.url;
      gifImage.attr("src", imageUrl);
      gifImage.attr("alt", "gif");
      gifImage.attr("data-animate", animate);
      gifImage.attr("data-still", imageUrl);
      gifImage.attr("data-state", "still");
      $(".gifImage").prepend(gifImage);
      $(".animalButton").append(topics);
    }
  });

  $(document).on("click", "img", function (event) {
    event.preventDefault();
    console.log("YOU CLICKED, HOORAY");
    var state = $(this).attr("data-state")
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
