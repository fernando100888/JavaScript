//coerción implícita:
var a = 4 + "7"; // >>"47"
typeof a; // >>"string"

var b = 4 * "7"; // >>28
typeof b; // >>"number"


//coerción explícita:
var c = 20;
var d = c + ""; 
typeof d; // >>"tring"

var e = String(c);
typeof e; // >>"string"

var f = Number(e);
typeof f; // >>"number"