// const coding = ["js","html","css","react","cpp","c"]
// const value = coding.forEach((item)=> {
//     // console.log(item);
//     return item
// })
// console.log(value);


// filter 
// const myNumbs = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbs.filter((nums) => nums>4)
// console.log(newNums);

//Example 
// const myNumbs = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbs.filter((nums) => {   // we want to add curly braces.we need to return the value.
//     return nums>4    
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBook = books.filter((bk)=>bk.edition>2014)
console.log(myBook);



