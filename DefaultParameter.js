// function lastIndexOf(arr, elt, start) {
//     for (let i = start - 1; i >= 0; i--)  
//       if (arr[i] === elt) return i  
//     return -1  
//   } 
//   console.log(lastIndexOf([1, 2, 1, 2], 2,4))

// function lastIndexOf(arr, elt, start) {
//     for(let i = start - 1; i>=0; i--){
//         if(arr[i]===elt){
//             return i;
//         } 
//     }
//     return -1;
// }

let lastIndexOf = (arr, elt, start = 10) => {
    for(let i = start - 1; i>=0; i--){
        if(arr[i]===elt){
            return i;
        }
    }
    return -1;
}
console.log(lastIndexOf([4,2,4,0,1,12,56,4,92,7,88], 4));