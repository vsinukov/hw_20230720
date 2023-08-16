// //1.
// let shoppingList = [
//     {name: 'ram', number: 1, wasBought: 1},
//     {name: 'beer', number: 1, wasBought: 0},
//     {name: 'sausages', number: 1, wasBought: 0},
//     {name: 'banana', number: 1, wasBought: 1}
// ]
// shoppingList.sort((a, b) => a.wasBought-b.wasBought)
// console.log(shoppingList)
// let newName
// let repeatName, man 
// do{man = 0
//     newName = prompt(`${shoppingList.map(x => x.name)}\n Що треба  купити?`)
//     shoppingList.find(function(shoppingList){
//             if(shoppingList.name == newName){
//                 man = 10                                    
//                 return shoppingList.number++
//             }
//         })
        
//         if (man != 10){
//             shoppingList.push(
//                 {name: newName, number: 1, wasBought: 0}
//                 )
//                 man = 0
//             }            
        
// } while (newName != null)
// shoppingList.pop()
// shoppingList.sort((a, b) => a.wasBought-b.wasBought)
// console.log(shoppingList)
// // alert(shoppingList)
// let dellName 
// do{
//     man = 0
//     dellName = prompt(`${shoppingList.map(x => x.name)}\n Що купили?`)
//     shoppingList.find(function(shoppingList){
//             if(shoppingList.name == dellName){
//                 man = 10 
//                 if(shoppingList.wasBought == 0)                                   
//                 return shoppingList.wasBought++
//                 return shoppingList.number++
                
//             }
//         })
        
//         if (man != 10){
//             shoppingList.push(
//                 {name: dellName, number: 1, wasBought: 1}
//                 )
//                 man = 0
//             }            
        
// } while (dellName != null)
// shoppingList.pop()
// shoppingList.sort((a, b) => a.wasBought-b.wasBought)
// console.log(shoppingList)




// // 2.
// let check = [
//     {name: 'ram', number: 0.4, price: 5.4},
//     {name: 'fish', number: 0.6, price: 8.8},
//     {name: 'milk', number: 0.5, price: 4.2},
//     {name: 'eggs', number: 10, price: 0.31}
// ]
// for (let i=0; i<check.length; i++){
//     document.write(`${check[i].name} ......${check[i].number}......
//     ${check[i].price} ........  ${check[i].number*check[i].price} $  <br>`)
// }
// let sum = 0
// for (let i=0; i<check.length; i++){
//     sum = sum + check[i].number*check[i].price
// }
// document.write(`<br> Total .......................... ${sum} $ <br>`)
// let averagePrice = sum / check.length
// document.write(`<br> Average Price ............ ${averagePrice} $ <br>`)

{/* <p style="background-color:tomato;">This is a paragraph.</p> */}

// //3.
let style = [
    {name: 'background-color', value: 'LightGray' },
    {name: 'color', value: 'red'},
    {name: 'font-family', value: 'courier'},
    {name: 'font-size', value: '200%'},
    {name: 'text-align', value: 'center'},
]
let text = 'Hello World !'

function writingStyle(){
    let suma = 0
    document.write(`<p style="`)
    for (let i = 0; i < style.length; i++){
        document.write(`${style[i].name}:${style[i].value};`)
        
    }
    document.write(`">${text}</p>`)
}
writingStyle(style,text)

