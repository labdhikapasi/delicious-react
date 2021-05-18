
import axios from 'axios';

const RECIPE_URL = "http://172.18.0.3:8089/recipes";
const RECIPE_ADD_URL = "http://172.18.0.3:8089/addRecipe";
const RECIPE_SERRCH_BY_NAME_URL = "http://172.18.0.3:8089/recipe";
const RECIPE_UNAPPROVED_URL = "http://172.18.0.3:8089/unApprovedRecipes";
const RECIPE_APPROVE_URL = "http://172.18.0.3:8089/approveRecipe";
const RECIPE_REJECT_URL = "http://172.18.0.3:8089/rejectRecipe";
const RECIPE_BY_DISHTYPE_URL = "http://172.18.0.3:8089/getRecipesByDishType";


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
    findUnApprovedRecipes(){
        return axios.get(RECIPE_UNAPPROVED_URL);
    }
    approveRecipe(params){
        return axios.get(RECIPE_APPROVE_URL,{params});
    }
    rejectRecipe(params){
        return axios.get(RECIPE_REJECT_URL,{params});
    }
    getRecipesByDishType(params){
        return axios.get(RECIPE_BY_DISHTYPE_URL,{params});
    }
}

export default new RecipeService();