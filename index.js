

const _ = require('lodash')
const deepClone = _.cloneDeep;

function init() {
  var name = "Mozilla"; 
 return function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
}
// init();
// displayName();

var result = init();
console.log(result())


const userModule = (() => {
    var mUserName = ''
    var mAge = 23

    function getUerName() {
        return mUserName
    }

    function getAge() {
        return mAge
    }

    function setAge(age) {
        mAge = age
    }

    function setName(name) {
        mUserName = name
    }

    var module = {export: {}}

    module.export =  {getAge, setAge, getUerName, setName}

    return module
})

// user = userModule()

// user.setAge(30)
// console.log(user.getAge())

let userDb= []

class User{

    constructor(name, address={}, contract={}){
        this.name =name
        this.address= address
        this.contract =contract
    }

    static addUser(user) {
        userDb.push(user);
    }

    static findUser(name) {
        return userDb.find(u => u.name === name);
    }

    
    static updateUser(name, newData) {
        const user = User.findUser(name);
        if (!user) return "User not found";

        if (newData.name) user.name = newData.name;

        return "User updated successfully";
    }

    
    static deleteUser(name) {
        userDb = userDb.filter(u => u.name !== name);
        return "User deleted!";
    }


}

class Address{
    constructor(home, road , house){
        this.home= home
        this.road=road
        this.house= house
    }
}
class Contract{
    constructor(phone, email){
        this.phone= phone
        this.email=email
       
    }
}

const user1 = new User('Kayes', new Address('home', 23 , 43), new Contract('2345524', 'email@email,com'))
console.log(user1)

const user2 = new User('Jon due', new Address('home', 23 , 43), new Contract('2345524', 'email@email,com'))
console.log(user2)

const user3 = new User('Alex', new Address('home', 23 , 43), new Contract('2345524', 'email@email,com'))
console.log(user3)

User.addUser(user1);
User.addUser(user2);
User.addUser(user3);

// console.log(userDb)


User.deleteUser("Alex");

console.log(userDb)
const findU= User.findUser('Kayes')

console.log(findU)

const updateUser= User.updateUser("Kayes", {
                                    name: "Updated",
                                    });

console.log(updateUser)

const UserInfo={
    name: 'Kayes',
    address: {
        home:'',
        road:'',
        house:'',
    },
    contract:{
        phone:'',
        email:'',
    }
}

const userInfo2  = {
    name: 'Kayes',
    address: {
        home:'',
        road:'',
        house:'',
    },
    contract:{
        phone:'',
        email:'',
        getContact: () => {
            return `${this.phone}-${this.email}`
        }
    }
}

// const userInfo3 = { ...userInfo2, contract: { ...userInfo2.contract }}
// const userInfo3 = JSON.parse(JSON.stringify(userInfo2))
const userInfo3 = deepClone(userInfo2)

userInfo3.name = "Sajon"
userInfo3.contract.phone = "018736"

console.log(userInfo2)
console.log(userInfo3)

const []= userDb
const {}= userInfo2


// const ComponentTest = () => {
//     const event = useRef()

//     // addEventListener('click', event)

//     const handleder = (event) => {
//             console.log('Clicked!!');
//         }


//     useEffect(() => {
//         getUser((result, errro) => {
//             // 
//         })
//     }, [])    
//     useEffect(() => {
//         event.current.addEventListener('click', handleder);

//         return () => {
//             event.current.removeEventListener('click', handleder)
//             dispatch(cleanStore())
//         }
//     }, [])

    
//     return (
//         <button >Click Me</button>
//     )
// }


function getUser(callback) {
    try {
        const result = fetch('url')
        callback(result, null)
    } catch(err) {
        callback(null, err)
    }
}



const waitingFunc= (waitInMillis) => {
   return new Promise((res, reject) => {
    setTimeout(()=>{
        // res()
        res({ success: true, data:[] })
    }, waitInMillis)
   })
}

async function myFunc() {
    console.log(1)

    console.log(2)

    console.log(3)

    waitingFunc(5000)
    .then((res)=>{
        console.log(res)
    })
    .catch(err => {
        console.log(err.message)
    })

    console.log(4)

    console.log(5)

    console.log(6)
}

myFunc()