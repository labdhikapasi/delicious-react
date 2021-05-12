
import axios from 'axios';

const RECIPE_URL = "http://localhost:8089/recipes";
const RECIPE_ADD_URL = "http://localhost:8089/addRecipe";


class RecipeService {
    
    getRecipes(ingredients){
        return axios.post(RECIPE_URL, ingredients);
    }

    addRecipe(recipe){
        return axios.post(RECIPE_ADD_URL, recipe);
    }
}

export default new RecipeService();