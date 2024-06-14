
// forEach, map, filter


// let arr = [10,20,30,40,50]



//  arr.map(findSqaure)

//  function map(fun1){
//     // fun1 = (value, index)=>{console.log("helllo",value, index)}

//     fun1(value, index)
// }



// function findSqaure(value, index){
//       console.log("helllo",value, index)
// }


// let arr = [10,20,30,40,50]

// let x = arr.map( (value, index)=>{return value*value})

// let x = arr.map( (value, index)=> value*value)


// console.log("x", x)



// let y = arr.map((value, index) => {return value*index} )

// [0,20,60,120,200]



// let z = arr.map((value, index) => value%4==0)

// // let z = arr.map((value, index) => { return value%4==0})

// // [false,true,false,true,false]

// console.log("z", z)




// let arr = [10,20,30,40,50]

//  arr.forEach((value, index) =>{ console.log(value, index) })



// let arr = [11,20,31,40,47]


// let x = arr.map(display)


// function display(value, index){
//    if(value%2!=0){
//       return "odd"
//    }
// }


// ["odd", undefined, "odd", undefined, "odd"]


let arr = [11,20,31,40,47]



// let y = arr.filter((value, index)=> value%2!=0)


// console.log("y", y)  // [11,31,47]


let z = arr.filter((value, index)=> value<0)


console.log("z", z)  