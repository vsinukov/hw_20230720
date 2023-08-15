//1.
let shoppingList = [
    {name: 'ram', number: 1, wasBought: 1},
    {name: 'beer', number: 1, wasBought: 0},
    {name: 'sausages', number: 1, wasBought: 0},
    {name: 'banana', number: 1, wasBought: 1}
]
shoppingList.sort((a, b) => a.wasBought-b.wasBought)
console.log(shoppingList)
let newName
let repeatName, man 
do{man = 0
    newName = prompt(`${shoppingList.map(x => x.name)}\n Що треба  купити?`)
    shoppingList.find(function(shoppingList){
            if(shoppingList.name == newName){
                man = 10                                    
                return shoppingList.number++
            }
        })
        
        if (man != 10){
            shoppingList.push(
                {name: newName, number: 1, wasBought: 0}
                )
                man = 0
            }            
        
} while (newName != null)
shoppingList.pop()
shoppingList.sort((a, b) => a.wasBought-b.wasBought)
console.log(shoppingList)
// alert(shoppingList)
let dellName 
do{
    man = 0
    dellName = prompt(`${shoppingList.map(x => x.name)}\n Що купили?`)
    shoppingList.find(function(shoppingList){
            if(shoppingList.name == dellName){
                man = 10 
                if(shoppingList.wasBought == 0)                                   
                return shoppingList.wasBought++
                return shoppingList.number++
                
            }
        })
        
        if (man != 10){
            shoppingList.push(
                {name: dellName, number: 1, wasBought: 1}
                )
                man = 0
            }            
        
} while (dellName != null)
shoppingList.pop()
shoppingList.sort((a, b) => a.wasBought-b.wasBought)
console.log(shoppingList)