
import axios from 'axios';

const INGREDIENT_GET_URL = "http://172.18.0.3:8089/ingredients";
const INGREDIENT_URL = "http://172.18.0.3:8089/ingredient";


class IngredientService {
    
    getIngredients(){
        return axios.get(INGREDIENT_GET_URL);
    }

    findIngredientByName(params){
        return axios.get(INGREDIENT_URL,{params});
    }

    addIngredient(ingredient){
        return axios.post(INGREDIENT_URL, ingredient);
    }
}

export default new IngredientService();