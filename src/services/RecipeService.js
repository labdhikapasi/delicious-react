
import axios from 'axios';

const RECIPE_URL = "http://localhost:8089/recipes";


class RecipeService {
    
    getRecipes(ingredients){
        return axios.post(RECIPE_URL, ingredients);
    }
}

export default new RecipeService();