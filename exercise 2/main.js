//Write a function that returns an array containing all the numbers 
//inclusive to that range given the start and end values. See examples below.

// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

//reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

//reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]


function reversibleInclusiveList(num1, num2){
    const list= []
    if(num2 > num1){
    for(let i=num1; i<= num2; i++){
   list.push(i)}
}
   else if (num1 > num2){
       for(let i = num1; i>=num2; i--){
           list.push(i);
       }
   }
   return list;

}

const list1 = reversibleInclusiveList(1, 5)
console.log (list1)

const list2 =reversibleInclusiveList(2, 8)
console.log (list2)

const list3 = reversibleInclusiveList(10, 20)
console.log (list3)

const list4= reversibleInclusiveList(24, 17)
console.log (list4)