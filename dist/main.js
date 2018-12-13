
class API {
    constructor() {
        this.renderer = new Renderer()
    }

    searchFood() {
        let foodQuery = $("#food").val()
        $.get(`/recipes/:${foodQuery}`, (response) => {
            let searchedFoodArray = response.results
            let recipes = []
            for (let f of searchedFoodArray) {
                recipes.push
                    ({
                        ingredients: f.ingredients.trim().split(', '),
                        title: f.title,
                        thumbnail: f.thumbnail,
                        href: f.href
                    })
            }
            console.log(recipes)
            this.renderer.renderIngredients(recipes)
        })
    }
}
const api = new API()

$('#searchfood').on('click', function () {
    api.searchFood()
})




// An array of ingredients
// A title
// A thumbnail - a URL of a small image
// An href - a link to the actual recipe