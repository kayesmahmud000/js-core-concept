const arr =[1,4,64,62,3,34,13,23,2,4,56,28]

function findMax(arr){
    let max = 0
    for (let i=0 ; i< arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
      
    }
    return max
}

console.log(findMax(arr))

const output= arr.reduce( (max, crr)=>{
    if(crr> max){
        max =crr
    }
    return max
}, 0)

console.log(output)