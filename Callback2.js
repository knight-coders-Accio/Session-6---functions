

// function hello(x){ // x = 9 , correct
//     // x = 4+5 = 9 , NO
//     console.log(x)
    
// }


// hello(4+5)



// function hello(n, fun1){ //fun1 = greet()
//     console.log("Inside the function")
//     // n  = 100
//     // fun1 = 1000
//     console.log(n)
//     console.log(fun1)
//     // fun1()
// }

// let x = 100 

// let greet = () => {
//     console.log('Good Morning')
//     return 1000
// }


// hello(x, greet())





function hello( fun1){ 

    // fun1 = 1000

    // fun1= () => {
    //     console.log('Good Morning')
    //     return 1000
    // }
    console.log("Inside the function")
   
    console.log(fun1)
    fun1()
}



let greet = () => {
    console.log('Good Morning')
    return 1000
}


// let y1 = greet() 
let y2 = greet  // 

// y2 = () => {
//     console.log('Good Morning')
//     return 1000
// }

// hello( y1)


hello( y2)