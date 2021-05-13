
import axios from 'axios';

const RECIPE_URL = "http://localhost:8089/recipes";
const RECIPE_ADD_URL = "http://localhost:8089/addRecipe";
const RECIPE_SERRCH_BY_NAME_URL = "http://localhost:8089/recipe";


class RecipeService {
    
    getRecipes(ingredients){
        return axios.post(RECIPE_URL, ingredients);
    }

    addRecipe(recipe){
        return axios.post(RECIPE_ADD_URL, recipe);
    }

    findRecipeByName(params){
        return axios.get(RECIPE_SERRCH_BY_NAME_URL,{params});
    }
}

export default new RecipeService();