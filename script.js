var q = "chicken"
var calorieRange ="500-1000"


    
var queryURL = "https://api.edamam.com/search?q=" + q + "&app_id=f227cdd3&app_key=32526e4e0bff2ed8f7e09004de391df7&from=0&to=5&calories=" + calorieRange;

$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response) {

    var foodHits = response.hits;

    // console.log(foodHits[0].recipe.label);

    for (var index = 0; index < foodHits.length; index ++) {

        var recipeName = $("<h3>").text(foodHits[index].recipe.label);
        var ingredients = $("<h4>").text(foodHits[index].recipe.ingredientLines);

        var imagePic = $("<img>");
        
        imagePic.attr("src", foodHits[index].recipe.image);


        var recipeAll = $("<div>");

        recipeAll.append(recipeName);
        recipeAll.append(ingredients);
        recipeAll.prepend(imagePic);

        $("#posted-food").append(recipeAll);


        
   
    }
    
    
    
})