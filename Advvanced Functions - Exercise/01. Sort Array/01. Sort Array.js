function solve(arr, comand){
    if(comand == 'asc'){
       return arr.sort((a,b) => a-b);
    }
    return arr.sort((a,b) => b-a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));