let arraySize = 10;
let query = [[1,5,3],[4,8,7],[6,9,1]]

function arrayManipulation(n, queries) {
    // Write your code here
    let newArray = Array(n).fill(0);
    let maxValue = 0;
    let currentValue = 0;

    for (let i = 0; i < queries.length; i++) {
        newArray[queries[i][0]-1] += queries[i][2];
        newArray[queries[i][1]] -= queries[i][2];
    }

    for (let i = 0; i < newArray.length; i++) {
      
        currentValue += newArray[i];
      
        if (currentValue > maxValue){
          maxValue = currentValue;
        }
      
    }

  return maxValue;
    
}


console.log(arrayManipulation(arraySize, query));



/*
function arrayManipulation(n, queries) {
    // Write your code here
    let newArray = Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
      
      newArray = newArray.map(function(value, index) {
        if(index >= queries[i][0]-1 && index <= queries[i][1]-1){
          return value + queries[i][2];
        }else{
          return value;
        }
      });
      
    }

  return Math.max(...newArray)
    
}

    let newArray = Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {

      for (let j = queries[i][0]-1; j < queries[i][1]; j++) {

        newArray[j] += queries[i][2];
      }
    }

  return Math.max(...newArray)




*/