


var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        
        .then(function (response) {
            console.log(response.drinks);
        
                    //global variable for API object response
                var drinkName = $("<h4>").text(response.drinks[0].strDrink);
                // console.log(drinkName)

                var drinkImage = $("<img>").attr("src", response.drinks[0].strDrinkThumb);
                // console.log(drinkImage)

                var drinkInstructions = $("<h4>").text(response.drinks[0].strInstructions);
                // console.log(drinkInstructions)

                var ingredientOne = $("<h4>").text(response.drinks[0].strIngredient1);

                var ingredientTwo = $("<h4>").text(response.drinks[0].strIngredient2);

                var ingredientThree = $("<h4>").text(response.drinks[0].strIngredient3);
                var ingredientFour = $("<h4>").text(response.drinks[0].strIngredient4);
                var ingredientFive = $("<h4>").text(response.drinks[0].strIngredient5);
                var ingredientSix = $("<h4>").text(response.drinks[0].strIngredient6);
                    
        
        
        
        
        // //             // looping through the recipes on the object
        //             for (var index = 0; index < drinkHits.length; index++) {
        //                 console.log(index);
        
        
                     
                            
        //                 // var ingredients = foodHits[from].recipe.ingredientLines;
        //                 // var labelHealth = $("<h4>").text(foodHits[from].recipe.healthLabels);
        //                 // var labelDiet = $("<h4>").text(foodHits[from].recipe.dietLabels);
        //                 // var imagePic = $("<img>").attr("src", foodHits[from].recipe.image);
        //             }
        // //                 // calories and per serving
        //                 var servings = foodHits[from].recipe.yield
        //                 var calorieTotal = foodHits[from].recipe.calories;
        //                 perServing = calorieTotal / servings;
        //                 var calServing = $("<h4>").append(perServing);
        //                 var servingPerPerson = $("<h4>").append(servings);
        
        
        
        
        //                 // looping through the ingredients list and formatting into an unordered list
        //                 var listUL = $("<ul>");
        //                 for (var i = 0; i < ingredients.length; i++) {
        //                     listUL.append($("<li>").text(ingredients[i]))
        //                 }
        
        //                 // link variable/object URL page with complete instructions - opens in new tab
        //                 var foodURL = foodHits[from].recipe.url;
        //                 var linkButton = $("<a>").attr({
        //                     href: foodURL,
        //                     target: "_blank"
        //                 })
        //                 linkButton.text("Click here for full recipe!");
        
        
        
                        // variable div to append all the recipe variables with stored API object data
                        var drinkAll = $("<div>");
        
                        // all variables appended to Div variable above
                        drinkAll.append(drinkName); 
                        drinkAll.append(drinkImage); 
                        drinkAll.append(drinkInstructions); 
                        drinkAll.append(ingredientOne); 
                        drinkAll.append(ingredientTwo); 
                        drinkAll.append(ingredientThree); 
                        drinkAll.append(ingredientFour); 
                        drinkAll.append(ingredientFive); 
                        drinkAll.append(ingredientSix); 

        
        
                        // div located on chicken.html file for testing
                        $(".posted-drink").append(drinkAll);
        
        
        //             }
        
        
        
        
        //         // }
        //     )
        // }
        
        
        // // function for submit button
        // $(".submit-class").on("click", function (e) {
        //     var q = $("#form-food").val();
        //     getFood(q);
        // })
        
        // $(".submit-class").on("click", function (e) {
        //     $(".posted-food").empty();
        // })
        
        // $(".next-class").on("click", function (e) {
        //     var q = $("#form-food").val();
        //     from++;
        //     to++;
        //     // from = from < 4 ? from++ : 0;
        //     // console.log(from);
        //     // to = to < 5 ? to++ : 1;
        //     $(".posted-food").empty();
        //     getFood(q);
        // })
        
        // $(".back-class").on("click", function (e) {
        //     var q = $("#form-food").val();
        //     from--;
        //     to--;
        //     // from = from < 4 ? from++ : 0;
        //     // console.log(from);
        //     // to = to < 5 ? to++ : 1;
        //     $(".posted-food").empty();
        //     getFood(q);
        })