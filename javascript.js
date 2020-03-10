// variables for the API call
var calorieRange = "500-1000";
var from = 0
var to = 5





function getFood(foodSearch) {

    var queryURL = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=e24cb921&app_key=378bda3e9001f3259500ebfd83491004&from=" + from + "&to=" + to + "&calories=" + calorieRange;

    $.ajax({
        url: queryURL,
        method: "GET",
        beforeSend: function(){
            $(".preloader").css("visibility", "visible")
        },
        complete: function (){
            $(".preloader").css("visibility", "hidden")
        }
        })

        .then(function (response) {

            //global variable for API object response
            var foodHits = response.hits;
            




            // looping through the recipes on the object
            // for (var index = 0; index < foodHits.length; index++) {
                


                // variables for each attribute of the receipe
                var recipeName = $("<h3>").text(foodHits[from].recipe.label);
                $(".recipe-name").append(recipeName);

                var ingredients = foodHits[from].recipe.ingredientLines;
                $(".ingredients-list").append(listUL);

                var labelHealth = $("<h6>").text(foodHits[from].recipe.healthLabels);
                $(".health-label").append(labelHealth);

                var labelDiet = $("<h6>").text(foodHits[from].recipe.dietLabels);
                $(".diet-label").append(labelDiet)

                var imagePic = $("<img>").attr("src", foodHits[from].recipe.image);
                $(".food-image").append(imagePic);

                // calories and per serving
                var servings = foodHits[from].recipe.yield
                var calorieTotal = foodHits[from].recipe.calories;
                perServing = calorieTotal / servings;

                var calServing = $("<h6>").append(perServing);
                $(".serving-calories").append(calServing);

                var servingPerPerson = $("<h6>").append(servings);
                $(".total-servings").append(servingPerPerson);




                // looping through the ingredients list and formatting into an unordered list
                var listUL = $("<ul>");
                for (var i = 0; i < ingredients.length; i++) {
                    listUL.append($("<li>").text(ingredients[i]))
                }

                // link variable/object URL page with complete instructions - opens in new tab
                var foodURL = foodHits[from].recipe.url;
                var linkButton = $("<a>").attr({
                    href: foodURL,
                    target: "_blank"
                })
                linkButton.text("Click here for full recipe!");
                $("link-button").append(linkButton, "<p>");



                // variable div to append all the recipe variables with stored API object data
                var recipeAll = $("<div>");

                // all variables appended to Div variable above
                recipeAll.append(recipeName); // Recipe title
                recipeAll.append(listUL); // Ingredient list in list form
                recipeAll.prepend(imagePic); // Image
                recipeAll.append(labelHealth); // Health restrictions 
                recipeAll.append(labelDiet); // Diet info - aka Low-carb
                recipeAll.append(calServing); // Calories per serving
                recipeAll.append(servingPerPerson); // Number of servings from the recipe
                recipeAll.append(linkButton, "<p>"); // Link to full recipe


                // div located on chicken.html file for testing
                $(".posted-food").append(recipeAll);


            }




        // }
    )
}


// function for submit button
$("#submit-class").on("click", function (e) {
    event.preventDefault();
    var q = $("#search").val();
    getFood(q);
})

$("#submit-class").on("click", function (e) {
    event.preventDefault();
    $(".posted-food").empty();
})

$("#next-class").on("click", function (e) {
    var q = $("#search").val();
    from++;
    to++;
    // from = from < 4 ? from++ : 0;
    // console.log(from);
    // to = to < 5 ? to++ : 1;
    $(".posted-food").empty();
    getFood(q);
})

$("#back-class").on("click", function (e) {
    var q = $("#search").val();
    from--;
    to--;
    // from = from < 4 ? from++ : 0;
    // console.log(from);
    // to = to < 5 ? to++ : 1;
    $(".posted-food").empty();
    getFood(q);
})