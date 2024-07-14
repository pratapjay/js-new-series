// reduce

const array= [1,2,3,4]
// 0+1+2+3+4=10
const initialvalue=0;
const sum=array.reduce((accumulator, currentvalue) => accumulator+currentvalue,initialvalue)
console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBill=shoppingCart.reduce((acc,curr)=> acc+curr.price,0)
console.log(totalBill);