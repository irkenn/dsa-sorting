function selectionSort(arr){
  

    for (i=0; i < arr.length; i++){    
      
      let minVal = arr[i];
      let minPosition = i
      
      for (j=i+1; j < arr.length; j++){
        if (arr[j] < minVal){
          minVal = arr[j];
          minPosition = j
          }
      }
      arr[minPosition] = arr[i];
      arr[i] = minVal;
    }
    return arr;
    
  }

module.exports = selectionSort;