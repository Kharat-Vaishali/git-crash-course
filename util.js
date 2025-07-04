function sayHello(){
    console.log('Hello')
}
sayHello()


let total = 0
function myFunction(value){
    total +=value
    return total
}
console.log(myFunction(5))
console.log(myFunction(5))
console.log(myFunction(50))
console.log(myFunction(50))


console.log('Hello')




function myFunction(msg,callBack){
console.log('hello' , msg)
callBack()
}
function sayHii(){
    console.log('Hello')
}
myFunction('vaishali',sayHii)