export class Operaciones{
    constructor(){}

    sumar(x:number,y:number):number{
        return x+y;
    }

    restar(x:number,y:number):number{
        return x-y;
    }

    factorial(x:number):number{
        var t=1;
        for(var i=x;i>0;i--){t*=i;}
        return t;
    }

    primo(x:number):boolean{
        for(var i=x;i>0;i--){
            if(x%i==0 && i!=1 && i!=x) return false;
        }
        return true;
    }
}