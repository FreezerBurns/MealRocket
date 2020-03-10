// variables for the API call
var calorieRange = "500-1000";
var from = 0
var to = 5





function getFood(foodSearch) {

    var queryURL = "https://api.edamam.com/search?q=" + foodSearch + "&app_id=f0c25d74&app_key=66ff721ddf2c581a5d5b0fdc2898fbcb&from=" + from + "&to=" + to + "&calories=" + calorieRange;

    $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function (response) {

            //global variable for API object response
            var foodHits = response.hits;
            




            // looping through the recipes on the object
            // for (var index = 0; index < foodHits.length; index++) {
                


                // variables for each attribute of the receipe
                var recipeName = $("<h3>").text(foodHits[from].recipe.label);
                var ingredients = foodHits[from].recipe.ingredientLines;
                var labelHealth = $("<h4>").text(foodHits[from].recipe.healthLabels);
                var labelDiet = $("<h4>").text(foodHits[from].recipe.dietLabels);
                var imagePic = $("<img>").attr("src", foodHits[from].recipe.image);

                // calories and per serving
                var servings = foodHits[from].recipe.yield
                var calorieTotal = foodHits[from].recipe.calories;
                perServing = calorieTotal / servings;
                var calServing = $("<h4>").append(perServing);
                var servingPerPerson = $("<h4>").append(servings);




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
$(".submit-class").on("click", function (e) {
    var q = $("#form-food").val();
    getFood(q);
})

$(".submit-class").on("click", function (e) {
    $(".posted-food").empty();
})

$(".next-class").on("click", function (e) {
    var q = $("#form-food").val();
    from++;
    to++;
    // from = from < 4 ? from++ : 0;
    // console.log(from);
    // to = to < 5 ? to++ : 1;
    $(".posted-food").empty();
    getFood(q);
})

$(".back-class").on("click", function (e) {
    var q = $("#form-food").val();
    from--;
    to--;
    // from = from < 4 ? from++ : 0;
    // console.log(from);
    // to = to < 5 ? to++ : 1;
    $(".posted-food").empty();
    getFood(q);
})