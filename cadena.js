"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this._cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "cadena", {
        get: function () {
            return this._cadena;
        },
        set: function (cadena) {
            this._cadena = cadena;
        },
        enumerable: true,
        configurable: true
    });
    Cadena.prototype.palindromo = function () {
        var temp = this.cadena.toLowerCase().replace(/ /g, '').split("");
        var reve = temp.reverse().toString();
        if (temp.toString() == reve)
            return true;
        return false;
    };
    Cadena.prototype.vocales = function () {
        var vocales = { "a": 0, "e": 0, "i": 0, "o": 0, "u": 0 };
        var temp = this.cadena.toLowerCase().replace(/ /g, '').split("");
        temp.forEach(function (c) {
            switch (c) {
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
        });
        return JSON.stringify(vocales);
    };
    Cadena.prototype.letras = function () {
        return this.cadena.replace(/ /g, '').length;
    };
    Cadena.prototype.palabras = function () {
        return this.cadena.split(/ /g).length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
