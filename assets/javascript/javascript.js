/*====================VARIABLES================*/

var queryURL = 'https://api.giphy.com/v1/gifs/search?q='
var APIKey = '&api_key=i2stFVIUdlG8STAc1ICD2YznQz5YQsp0'
var bandList = ['Animals As Leaders', 'Dream Theater', 'Meshuggah']


/*====================FUNCTIONS================*/



function renderButtons() {
	$("#buttons-view").empty();

    for (var i = 0; i < bandList.length; i++) {

    	var button = $("<button>");
    	button.addClass("band-name");
    	button.attr("data-name", bandList[i]);
    	button.text(bandList[i]);
    	$("#buttons-view").append(button);
    }
}


function displayBandInfo() {

	    var band = $(this).attr("data-name");
	    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + band + APIKey

	    $.ajax({
	      url: queryURL,
	      method: "GET"
	    }).then(function(response) {

	      console.log(response)

	    });

	  }

  renderButtons()



/*====================CLICK EVENTS================*/

$("#addBand").on("click", function(event) {
        
    event.preventDefault();
    var band = $("#band-input").val();
    bandList.push(band);
	renderButtons();

});

$(document).on("click", ".band-name", displayBandInfo);