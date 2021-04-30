
import axios from 'axios';

const INGREDIENT_URL = "http://localhost:8089/ingredients";


class IngredientService {
    
    getIngredients(){
        return axios.get(INGREDIENT_URL);
    }
}

export default new IngredientService();