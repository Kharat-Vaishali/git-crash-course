console.log('Git_Crash_Course ')

const userName = 'Vaishali'
console.log(userName)


const userAge1 = 23
console.log(userAge1)
let total = 200000
function sayHii(){
    console.log('Helllo')
}
sayHii()

Promise.resolve().then(()=>{
    console.log('Promise')
},1000)


let result =((a,b)=>{
    setTimeout(()=>{
        console.log(a + b)
    },2000)
})
result(12,45)