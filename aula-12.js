/*
var a = lines()

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
*/
// 1° caso
function soma(item1, item2){

}
console.log('Adição', soma(5,6))

// 2° caso 
console.log("2° Caso ")
function soma1(item1, item2){
    return item1 + item2
}
function subtrair1(item1, item2){
    return item1 - item2
}
function media(item1, item2){
    return (( item1 * 3.5 + item2 * 7.5 ) / ( 3.5 + 7.5)).toFixed(5)
}
function media1(item1, item2, item3){
    return ((item1 * 2 + item2 * 3 + item3 * 5 ) / ( 2 + 3 +5)).toFixed(1)
}
console.log('X = '+soma1(5,6))
console.log('X = '+soma1(-10,4))
console.log('Subtração', subtrair1(5,6))
console.log('Média = ' + media(5.0,7.1))
console.log('Média = ' + media(0.0,7.1))
console.log('Média entre 3 = ' + media1(5.0,6.1,7.0))
console.log('Média entre 3 = ' + media1(5.0,10.0,10.0))
console.log('Média entre 3 = ' + media1(10.0,10.0,5.0))