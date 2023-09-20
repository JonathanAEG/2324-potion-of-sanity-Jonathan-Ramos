import { getData } from "./service.mjs";
import Ingredients from "./Ingredients.mjs";
import Cauldron from "./Cauldron.mjs";

const execute = async()=>{

    try{
        const data = await getData();

        //Creación de ingredientes
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients.ingredients);

        //Creación de cauldron
        const cauldron = new Cauldron(ingredients.ingredients);

        //Crear Pociones
        

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);


    }catch(error){
        console.log(error);
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


function showPotion(potion){

    for(let atribute in potion){

        if(atribute != `name`){

            console.log(`${atribute}:    ${potion[atribute]}`)
        }else{
            console.log(`${potion[atribute]}`)
        }
    }
    console.log(`-------------------------------`)
}