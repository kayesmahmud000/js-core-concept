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


 const users=[
    { firstName :'Jon', lastName:'Due', age:43},
    { firstName :'Akshay', lastName:'Saine', age:33},
    { firstName :'Elon', lastName:'Mask', age:50},
    { firstName :'Bil', lastName:'Gets', age:55},
    { firstName :'Donal', lastName:'Tramp', age:50},
    { firstName :'SR', lastName:'Khan', age:55},
 ]

 //TASK: list of the full name this users

 const listOfFullName = users.map(user =>user.firstName+ " " + user.lastName)

 console.log(listOfFullName)


//  list of the age og this users
 const listOfAge =users.reduce((acc, crr)=>{
    if(acc[crr.age]){
        acc[crr.age]= ++acc[crr.age]
    }else{
        acc[crr.age] =1
    }
    return acc
 },{})

 console.log(listOfAge)


 const listOfMoreAge = users.filter((user)=> user.age >50).map((user=>user.firstName))

 console.log(listOfMoreAge)