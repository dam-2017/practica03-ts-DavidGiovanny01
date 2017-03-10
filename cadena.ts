export class Cadena{
    private _cadena:string;

    constructor(cadena:string){
        this._cadena=cadena;
    }

    get cadena():string{
        return this._cadena;
    }

    set cadena(cadena:string){
        this._cadena=cadena;
    }

    palindromo():boolean{
        let temp=this.cadena.toLowerCase().replace(/ /g,'').split("");
        let reve=temp.reverse().toString()
        if(temp.toString()==reve) return true;
        return false;
    }

    vocales():string{
        var vocales={"a":0,"e":0,"i":0,"o":0,"u":0};
        let temp=this.cadena.toLowerCase().replace(/ /g,'').split("");
        
        temp.forEach(c=>{
            switch(c){
                case "a":
                    vocales.a++;
                break;
                case "e":
                    vocales.e++;
                break;
                case "i":
                    vocales.i++;
                break;
                case "o":
                    vocales.o++;
                break;
                case "u":
                    vocales.u++;
                break;
            }
        })
        return JSON.stringify(vocales);
    }

    letras():number{
        return this.cadena.replace(/ /g,'').length
    }

    palabras():number{
        return this.cadena.split(/ /g).length
    }

}