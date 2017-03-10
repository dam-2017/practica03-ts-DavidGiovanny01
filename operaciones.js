"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.sumar = function (x, y) {
        return x + y;
    };
    Operaciones.prototype.restar = function (x, y) {
        return x - y;
    };
    Operaciones.prototype.factorial = function (x) {
        var t = 1;
        for (var i = x; i > 0; i--) {
            t *= i;
        }
        return t;
    };
    Operaciones.prototype.primo = function (x) {
        for (var i = x; i > 0; i--) {
            if (x % i == 0 && i != 1 && i != x)
                return false;
        }
        return true;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
