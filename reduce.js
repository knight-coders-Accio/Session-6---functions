
// reduce: 

// let arr = [10,20,30,40,50]

// find the sum of all elements of array 


// let sum 
// arr.forEach( (value, index) =>  {sum = sum + value})

// console.log("sum", sum)


// let z = arr.reduce((sum, value, index)=> {
//           console.log("sum", sum)
//           return sum+value

// }
    
//     , 0)
// let x = arr.reduce((mul, value, index)=>  mul*value, 1)
// let x = arr.reduce((mul, value, index)=> mul*value)
// mul = 10

// sum = 0  ,  v= 10 => sum = 0+10 = 10

// sum = 10, v = 20 => sum = 10+20 = 30

// 10+20+30+40+50 = 150

// console.log("x", x)



// let a 

// console.log(a*5)




// q1:  
// let arr = [10,[20,30],40,50, [60,70,80],90]  

// console [10,20,30,40,50,60,70,80,90] // flatten the array

// let x = arr.flat()

// console.log(x)


// arr.reduce((finalArray,value,index)=>{

// })




// let arr = [10,[20,30],40,50, [60,70,80],90] 


// let t = arr[1] // [20,30]
// console.log(t[1])

// console.log(arr[1][1])

// console.log(arr[4][1])


// let arr = [10,[20,30],40,50, [60,70,80],90] 


// let newArr = []
// for(let t of arr){
//     // console.log(t, typeof t)
//     // newArr.push(t)

//     if(typeof(t) == "number"){
//        newArr.push(t)
//     }
//     else if(typeof(t) == "object"){
//         // t = [20,30]
//       for(let x of t){
//          newArr.push(x)
//       }

//     }
// }

// concat:

// let arr1 = [10,[20,30], [40,50]]
// // let arr2 = [40,[50,60]]

// // let x = arr1.concat(arr2)
// let x = []
// for(let t  of arr1){
//    x = x.concat(t)
// }
// console.log(x)

// console.log(arr1)
// console.log(arr2)

// console.log(x)


// let arr = [10,[20,30],40,50, [60,70,80],90] 


// let x = arr.reduce((newArr, value, index)=>{
//      console.log("newArr", newArr)
//       if(typeof(value) == "number"){
//         //   return newArr.push(value) // 10  => [10]
//         return [...newArr, value]
//       }
//       else if(typeof(value) == "object"){
//           for(let x of value){
//             return [...newArr, x]
//           }
//       }
// }, [])

// step 1: newArr = []
//  return => [10]  => newArr = [10]

// step 2: newArr = [10]

// step 2a:  newArr = [10]
// x = 20
// return [10,20]


// step 2b: newArr = [10,20]
// x = 30
// return => [10,20,30]

// newArr = [10,20,30]

// console.log(x)






// 

// let peopleDetails = [
//     {name: "John", age: 30, city: "Delhi"},
//     {name: "Raj", age: 25, city: "Mumbai"},
//     {name: "Amit", age: 35, city: "Delhi"},
//     {name: "Rahul", age: 40, city: "Mumbai"},
//     {name: "Aman", age: 20, city: "Delhi"},
//     {name: "Ravi", age: 45, city: "Mumbai"},
//     {name: "Rohit", age: 50, city: "Chennai"},
//     {name: "Rahim", age: 55, city: "Bangalore"},
// ]

// your final ans should be an object grouped by city name: 

// {
//     "Delhi": [
//         {name: "John", age: 30, city: "Delhi"},
//         {name: "Amit", age: 35, city: "Delhi"},
//         {name: "Aman", age: 20, city: "Delhi"}
//     ],
//     "Mumbai": [
//         {name: "Raj", age: 25, city: "Mumbai"},
//         {name: "Rahul", age: 40, city: "Mumbai"},
//         {name: "Ravi", age: 45, city: "Mumbai"}
//     ],
//     "Chennai": [
//         {name: "Rohit", age: 50, city: "Chennai"}
//     ],
//     "Bangalore": [
//         {name: "Rahim", age: 55, city: "Bangalore"}
//     ]
// }



// peopleDetails.reduce((finalObject, value,index)=>{

// }, {})


// let obj = {
  
// }


// for(let t of peopleDetails){
//     if(obj[t.city] == undefined){
//         obj[t.city] = [t]
//     }
//     else{
//         obj[t.city].push(t)
//     }

   
// }

// console.log(obj)

// let peopleDetails = [
//     {name: "John", age: 30, city: "Delhi"},
//     {name: "Raj", age: 25, city: "Mumbai"},
//     {name: "Amit", age: 35, city: "Delhi"},
//     {name: "Rahul", age: 40, city: "Mumbai"},
//     {name: "Aman", age: 20, city: "Delhi"},
//     {name: "Ravi", age: 45, city: "Mumbai"},
//     {name: "Rohit", age: 50, city: "Chennai"},
//     {name: "Rahim", age: 55, city: "Bangalore"},
// ]

// let x = peopleDetails.reduce((finalObject, value, index)=>{
//      // finalObject = {} 
//     //  {
//     //     "Delhi": [
//     //         {name: "John", age: 30, city: "Delhi"},
            
        
//     //  }

//     if(obj[t.city] == undefined){
//                 // obj[t.city] = [t]
//                 return {...finalObject, [t.city]: [t]}
//         }
//     else{
//         //  obj[t.city].push(t)
//         return {...finalObject, [t.city]: [...finalObject[t.city], t]}
//      }
// },{})



// let obj = {
//     "Delhi": [
//         {name: "John", age: 30, city: "Delhi"},
//         {name: "Amit", age: 35, city: "Delhi"},
//     ],
//     "Mumbai":  [ {name: "Raj", age: 25, city: "Mumbai"},]
// }



// let arr = [10,20,10,20,10,10,10,20,30,30,10,20,30,40] // assignment.

// {
//     10: 6,
//     20: 3,
//     30: 2,
//     40: 1
// }




let arr = ["a", "e", "i", "b", "c", "o"]

// retirn the final ["a", "e", "i", "o" ]



let x = arr.reduce((vowelArray,  v, i)=>{
    console.log("vowelArray", vowelArray)
      if(v == "a" || v == "e" || v == "i" || v == "o" || v == "u"){
           
            return [...vowelArray, v]  // ["e"]
      }
      else{
           return [...vowelArray]
      }

     
},[])


console.log(x)


// vowelArray = ["a"]
    // vowelArray = ["e"]
// ["a", e, i]

 //  return vowelArray.push(v) // ["a"] => 1
            // console.log("vowelArrayInside", vowelArray)
            // return undefined