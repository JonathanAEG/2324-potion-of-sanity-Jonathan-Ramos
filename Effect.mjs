const positive_effect_tokens =[`Fortify`, `Resist`, `Cure`, `Restore`, `Regenerate`, `Invisibility`, `Waterbreathing`];

class Effect{

    // constructor(name, type){


    // }

    static from(name){

        return new Effect(
            name, 
            positive_effect_tokens.some(token=> name.inculdes(token)) ? `beneficial` : `harmful`

        )
    }
}