import { getData } from "./service.mjs";
import Ingredients from "./Ingredients.mjs";

const execute = async()=>{

    try{
        const data = await getData();

        //Creación de ingredientes
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients.ingredients);
    }catch(error){
        console.log(error.message);
    }
}

execute();

function showIngredients(ingredients){

    ingredients.forEach(ingredient=>{

        for(let atribute in ingredient){

            if(atribute === `effects`){

                let effectString = ``;

                ingredient[atribute].forEach(effect=>{

                    effectString += ` ${effect.name},`
                })
                console.log(`${atribute}:${effectString}`)
            }else{
                console.log(`${atribute}: ${ingredient[atribute]}`)
            }
        }
        console.log(`-------------------------------`)
    })
}