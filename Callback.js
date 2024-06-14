


// function hii(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f)
// }


// let x1 = 10
// let x2 = 20.5
// let x3 = "hello"
// let x4 = true
// let x5 = [1,2,3,4]
// let x6 = {name:"John", age:25}


// hii(x1,x2,x3,x4,x5,x6)



// let hey = () => console.log('hey')


// function hey(){
//     console.log('hey')
// }

// let x = hey()   //x =  undefined , hey will be displayed in console

// let y = hey



function hello(n, fun1){
    // n = x = 100
    // fun1 = greet // fun1 =  () => console.log('Good Morning')
    console.log(n)
    console.log(fun1)
    fun1()
}



let x = 100 

let greet = () => console.log('Good Morning')  


hello(x, greet())

hello(x, greet)