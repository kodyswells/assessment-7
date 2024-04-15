const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);  // 26.5us for insert or unshift, and 98.9us for append or push
const smallArray = getSizedArray(100);  // 21.8us for insert or unshift, and 51.3us for append or push
const mediumArray = getSizedArray(1000);  // 112.1us for insert or unshift, and 84us for append or push
const largeArray = getSizedArray(10000);  // 5.4636ms for insert or unshift, 336.4us for append or push
const extraLargeArray = getSizedArray(100000); // 499.2844ms for insert or using the unshift, 2.0028ms for append or push

/* The function that uses the, "push", method to add elements to the end of the array is much faster as it is only adding a new index to the end of the array. Even though the time is increasing with each larger array, it is by relatively small amounts.

The function that uses unshift however, is adding each new value to the begining of the array. Becouse of this all elements in the array have to be assigned a new index every time a value is added to the array. As the array is increased in size the time to run the function is significantly longer.

So by comparison using the push method to add elements to any array is much more efficent and faster as it is only adding one element to one index each time. Unlike the unshift method that has to assign an index to all elements each time a new element is added. */

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);