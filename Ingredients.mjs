import Ingredient from "./Ingredient.mjs";

export default class Ingredients{

    constructor(ingredients){
        
        this.ingredients = ingredients;
    }

    static load (data){
        return new Ingredients(data.ingredients.map(Ingredient.from))
    }
}