


function insertionSort(arr){
    for(let i=0; i < arr.length-1; i++){ //-1 is because getting to arr[i+1] will cause an error
      let j = i;
      while( arr[j+1] < arr[j]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1]= temp;
        j--;
     
      }
    }
    return arr;
  }

module.exports = insertionSort;