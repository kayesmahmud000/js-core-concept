// console.log('Start')

// setTimeout(function callback(){
//     console.log("Callback")
// },5000)

// console.log('End')

// let startDate = new Date().getTime()
// let endDate = startDate
// while(endDate< startDate +1000){
//     endDate =new Date().getTime()
// }

// console.log('While is expired')



// higher order function

const radius = [2,3,4,5,1]
const aria = function (radius){
    return Math.PI* radius* radius
}

const circumference = function (radius){
    return 2* Math.PI*radius
}

const diameter= function (radius){
    return 2*radius
}
Array.prototype.calculate= function ( logic){
    const output =[];

    for(let i = 0; i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.map(aria))

console.log(radius.calculate( aria))

console.log(radius.calculate(diameter))
console.log(radius.calculate(circumference))
