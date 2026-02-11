"use strict"; 

const MEOWFACTS_URL = "https://meowfacts.herokuapp.com/"; 
const DADJOKE_URL = "https://icanhazdadjoke.com/"; 


function addResult(title, text) { 
  const $card = $("<div>").addClass("result-card"); 
  $card.append($("<h4>").text(title)); 
  $card.append($("<p>").text(text)); 
  $("#results").prepend($card); 
} 


function clearResults() { 
  $("#results").empty(); 
  $("#status").text(""); 
} 

 
function fetchCatFact() { 
  $("#status").text("Loading cat fact...");

  $.ajax({ 
    url: MEOWFACTS_URL, 
    method: "GET", 
    dataType: "json", 
    timeout: 10000 
  }) 
  
  .done(function (data) { 
    addResult("Cat Fact", data.data[0]); 
    $("#status").text("Cat fact loaded."); 
  }) 

  .fail(function () { 
    $("#status").text("Failed to load cat fact."); 
  }); 
} 

 

function fetchDadJoke() { 
  $("#status").text("Loading dad joke..."); 

  $.ajax({ 
    url: DADJOKE_URL, 
    method: "GET", 
    dataType: "json", 
    headers: { 
      "Accept": "application/json", 
      "User-Agent": "CSCI340 Lab 4" 
    }, 
    timeout: 10000 
  }) 

  .done(function (data) { 
    addResult("Dad Joke", data.joke); 
    $("#status").text("Dad joke loaded."); 
  }) 

  .fail(function () { 
    $("#status").text("Failed to load dad joke."); 

  }); 

} 


$(document).ready(function () { 
  $("#btnCatFact").on("click", fetchCatFact); 
  $("#btnDadJoke").on("click", fetchDadJoke); 
  $("#btnClear").on("click", clearResults); 
}); 
