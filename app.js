// // Contenido de app.js 

// // Esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// const rest = (a,b) => {
//     return a - b
// }

// // Solo un registro en consola para nosotros
// console.log(sum(7,3))
// console.log(rest(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum, rest};

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    //converimos un euro a dolares//
    let dollar = valueInEuro * oneEuroIs.USD
    return dollar
}
const fromDollarToYen = (valueInDollar) => {
    // 1 euro =1,07 dollar
    // 0,93 euro=1 dollar
    let euro = valueInDollar / oneEuroIs.USD
    console.log(euro)
    // // 1 dollar ?euro
    // 0,93* 156,5=145,545
    let valueInYen= euro* oneEuroIs.JPY
    console.log(valueInYen)
    return valueInYen
}
fromDollarToYen(1)

const fromYenToPound=(valueInYen)=>{
// 1euro=156,5yen
// ?euros=1yen
let euro= valueInYen/oneEuroIs.JPY
console.log(euro)
// 1/156,5=euro
// euro*GBP 0,87
let valueInPound= euro* oneEuroIs.GBP
console.log(valueInPound)
return valueInPound
}
fromYenToPound(1)

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};








