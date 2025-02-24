// priority: -100
ServerEvents.recipes(event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        if (hasRemovedItems(recipe)==true) {
            
        } else {
            let r = event.custom(recipe)
            r.id = getUniqueRecipeName(r)
            if (recipe.hidden==true) {
                r.id = r.id+"/hidden"
            }
        }
    });
    modpackRemovedRecipes.forEach(recipeFilter => {
        event.remove(recipeFilter)
    });
})

// onEvent('server.datapack.low_priority', (event) => {
//     event.addJson('botania:orechid_ore_weights/orechid.json', {
//         values: botaniaOrechidList
//     });
// }) not sure why I added it here need to look into it



function hasRemovedItems(recipe) {
    let r = false;
    global.itemsToRemove.forEach(item => {
        if (Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach(ingredient => {
                if ((ingredient + "").includes(item + "")) {
                    
                    r = true
                }
            });
        }
        if (recipe.output) {
            if ((recipe.output + "").includes(item+"")) {
                
                r = true
            }
        }
    });
    return r
}