
var searchString; //Search string variable
var pageTitle;
var pageURL;
var pageDesc;

$(document).ready(function () {

    $("#submitButton").on("click", function (){
        $("#results").empty(); //Empty previous results on button click
        $("#results").append("<h2>Search Results</h2>"); //Appends search result heading
        searchString = $("#searchField").val(); //Get search string value
        //Use AJAX jQuery to call API
        $.ajax({
            method: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=opensearch&limit=10&suggest=1&redirects=resolve&search=" + searchString,
            dataType: "jsonp",
            async: true,
            success: function (data) { //Data input into function when AJAX call is successful
                console.log(data);
                pageTitle = data[1];
                pageURL = data[3];
                pageDesc = data[2];
                //Iterate through API array for title, description, and URL
                for (var i = 0; i < 10; i++) {
                    $("#results").append("<a id='clickMe' target='_blank' href=" + pageURL[i] + '><div id="searchContainer"><h3>' + pageTitle[i] + "</h3><p>" + pageDesc[i] + "</p></div></a>");
                }
            },
        });
    });

//Trigger submit form on Enter key press
    $("#searchField").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#submitButton").click();
        }
    });
});

