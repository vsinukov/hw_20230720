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

// function writingCheck(){
//     for (let i=0; i<check.length; i++){
//         document.write(`${check[i].name} ......${check[i].number}......
//         ${check[i].price} ........  ${check[i].number*check[i].price} $  <br>`)
//     }
// }

// function writingTotal(){
//     let sum = 0
// for (let i=0; i<check.length; i++){
//     sum = sum + check[i].number*check[i].price
// }
// document.write(`<br> Total .......................... ${sum} $ <br>`)
// return sum
// }


// function averagePrice(){
//     let sum = 0
// for (let i=0; i<check.length; i++){
//     sum = sum + check[i].number*check[i].price}
//     let averagePrice = sum / check.length
// document.write(`<br> Average Price ............ ${averagePrice} $ <br>`)
// }
// writingCheck(check)
// writingTotal(check)
// averagePrice(check)





// // //3!!!!.
// let style = [
//     {name: 'background-color', value: 'LightGray' },
//     {name: 'color', value: 'red'},
//     {name: 'font-family', value: 'courier'},
//     {name: 'font-size', value: '200%'},
//     {name: 'text-align', value: 'center'},
// ]
// let text = 'Hello World !'

// function writingStyle(){
//     let suma = 0
//     document.write(`<p style="`)
//     for (let i = 0; i < style.length; i++){
//         document.write(`${style[i].name}:${style[i].value};`)
        
//     }
//     document.write(`">${text}</p>`)
// }
// writingStyle(style,text)


// 4.
let audience = [
    {name: 'a101', number: 15, faculty: 'math'},
    {name: 'c102', number: 16, faculty: 'physics'},
    {name: 'b103', number: 18, faculty: 'chemistry'},
    {name: 'e104', number: 20, faculty: 'philosophy'},
    {name: 'f201', number: 12, faculty: 'philosophy'},
    {name: 'd202', number: 15, faculty: 'philosophy'},
]
let grupa1 = {name: 'ECV-23', number: 14, faculty: 'philosophy'}


function writingAudience(){
    for (let i=0; i<audience.length; i++){
        document.write(`${audience[i].name} ......${audience[i].number}......
        ${audience[i].faculty} <br>`)
        }
        document.write(`<br>`)
}
writingAudience()

function writingAudienceFaculty(facult){
    for (let i=0; i<audience.length; i++){
        if (audience[i].faculty == facult)
        document.write(`${audience[i].name} ......${audience[i].number}......
        ${audience[i].faculty} <br>`)
    }
}
writingAudienceFaculty('philosophy')

function writingAudienceGrupa(){
    document.write(`<br> Для групи ${grupa1.name} підходять такі аудиторії <br>`)
    for (let i=0; i<audience.length; i++)
        if ((audience[i].faculty == grupa1.faculty) && (audience[i].number >= grupa1.number)){
            
            document.write(`${audience[i].name} ......${audience[i].number}......
        ${audience[i].faculty} <br>`)
    }
}

writingAudienceGrupa()

function writingAudienceSort(){

    function compareNumbers(a, b) {
        return a.number - b.number;
    }
    audience.sort(compareNumbers)
    document.write(` <br> Відсортований список по кількості місць <br>`)
    for (let i=0; i<audience.length; i++){
        document.write(`${audience[i].name} ......${audience[i].number}......
        ${audience[i].faculty} <br>`)
        }
        document.write(`<br>`)

}
writingAudienceSort()


function writingAudienceSortName(){
       
    audience.sort((a,b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    
    document.write(` <br> Відсортований список по назві <br>`)
    for (let i=0; i<audience.length; i++){
        document.write(`${audience[i].name} ......${audience[i].number}......
        ${audience[i].faculty} <br>`)
        }
        document.write(`<br>`)

}
writingAudienceSortName()