// let unsortedArray = [2, 1]
//
// function merge(arr1, arr2){
//   let min1 = arr1[0]
//   let min2 = arr2[0]
//   let sorted = []
//   while(arr1.length!== 0 && arr2.length!== 0 ){
//     if (min1<min2){
//       sorted.push(min1)
//       return arr1.splice(min1, 1)
//     }else{
//       sorted.push(min2)
//       return arr2.splice(min2, 1)
//     }
//   }
//   return sorted.concat(arr1).concat(arr2)
// }
//
// function mergeSort(array){
//   let midpoint = array.length/2
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//   return merge(firstHalf, secondHalf)
// }
//
//
//
// mergeSort(unsortedArray)
// // [1, 2]
//


function mergeSort(array){
  if(array.length < 2){
    return array;
  } else {
    merge(mergeSort(firstHalfArray), mergeSort(secondHalfArray))
  }
}
