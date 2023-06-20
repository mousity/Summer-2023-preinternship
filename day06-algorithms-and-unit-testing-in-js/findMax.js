function findMax(arr) {
if(arr.length === 0) {
    return null;
}


let largest = arr[0];
for(let i of arr) {
    if(i > largest) {
        largest = i;
    }
}    

return largest;
}
module.exports = findMax;