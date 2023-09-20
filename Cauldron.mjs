import Potion from "./Potion.mjs";

export default class Cauldron{

    constructor(ingredients){

        this.ingredients = ingredients;
    }

    createPotion(ingredientName1, ingredientName2){

        const ingredient1 = this.ingredients.find(ingredientName1);
        const ingredient2 = this.ingredients.find(ingredientName2);

        const commonEffects = ingredient1.findCommonEffects(ingredient2);
        
        if(commonEffects.length === 0){

            return Potion.failed();
            
        }else if(isPotionOfSanity(ingredient1, ingredient2)){

            return Potion.sanity();
        }else{
            
            return Potion.with(
                commonEffects[0],
                ingredient1.weight + ingredient2.weight,
                ingredient1.value + ingredient2.value
            );
        }
    }
}

function isPotionOfSanity(i1,i2){
        
    return i1.name === `Nightshade` && i2.name === `Ectoplasm` ||
    i1.name === `Ectoplasm` && i2.name === `Nightshade` ? true : false;
}