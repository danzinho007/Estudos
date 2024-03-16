/*
var a = parseInt(lines.shift(0)); // código da peça 1
var b = parseInt(lines.shift(1)); // número de peças 1
var c = parseFloat(lines[2]);// valor unitário de cada peça 1
var d = parseInt(lines.shift(3)); // código da peça 2
var e = parseInt(lines.shift(4)); // número de peças 2
var f = parseFloat(lines[5]); // valor unitário de cada peça 2

*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = lines.shift().split(" ");
let valor2 = lines.shift().split(" ");

let code1 = parseInt(valor1.shift());
let num1 = parseInt(valor1.shift());
let valorUnitario1 = parseFloat(valor1.shift());
let valorTotal1 = num1 * valorUnitario1;

let code2 = parseInt(valor2.shift());
let num2 = parseInt(valor2.shift());
let valorUnitario2 = parseFloat(valor2.shift());
let valorTotal2 = num2 * valorUnitario2;

let valorTotal = valorTotal1 + valorTotal2;

console.log("VALOR A PAGAR : R$ " + valorTotal.toFixed(2));
