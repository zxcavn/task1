const numbers = [1,1,1,1,1,2,2,2,2,2,3,4,4,4,5,5,6,6,7,7];
function findOne(one) {
    const count = {};
    for (let num of one) {
        count[num] = (count[num] || 0) + 1;
    }
 
    for (let num in count) {
        if (count[num] === 1) {
            return parseInt(num);
        }
    }
}
console.log(findOne(numbers));