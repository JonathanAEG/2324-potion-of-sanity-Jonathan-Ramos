import { getData } from "./service.mjs";
import Ingredients from "./Ingredients.mjs";

const execute = async()=>{

    try{
        const data = await getData();

        //Creación de ingredientes
        const ingredients = Ingredients.load(data);
    }catch(error){
        console.log(error.message);
    }
}



execute();