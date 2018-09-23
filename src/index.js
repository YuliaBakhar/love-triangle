/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    loveTriangles = 0
  
    for(i=0; i<preferences.length; i++){
    firstIndex = i+1;
    firstValue = preferences[firstIndex-1];
  
    if (firstIndex!=firstValue){
      
      secondIndex = firstValue;
      secondValue = preferences[secondIndex-1];
    
    if (secondIndex!=secondValue && secondValue!=firstIndex){
        thirdIndex = secondValue;
        thirdValue = preferences[thirdIndex-1];
        
       if (thirdValue == firstIndex){ 
          loveTriangles = loveTriangles + 1;
        }
      }
    }
  }
  return loveTriangles / 3;
};
