/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  loveTriangles = 0
  
  for(i=0; i<preferences.length; i++){
  ind1 = i+1;
  elem1 = preferences[ind1-1];
  
  if (ind1!=elem1){
      
    ind2 = elem1;
    elem2 = preferences[ind2-1];
    
    if (ind2!=elem2 && elem2!=ind1){
      ind3 = elem2;
      elem3 = preferences[ind3-1];
        
      if (elem3 == ind1){ 
        loveTriangles = loveTriangles + 1;
      }
    }
  }
    
  }
  return loveTriangles / 3;
};
