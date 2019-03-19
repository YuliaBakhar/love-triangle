/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount = (preferences = []) => {
  let loveTriangles = 0;

  for (i = 0; i < preferences.length; i++) {
    const firstIndex = i + 1;
    const firstValue = preferences[firstIndex - 1];

    if (firstIndex != firstValue) {
      const secondIndex = firstValue;
      const secondValue = preferences[secondIndex - 1];

      if (secondIndex != secondValue && secondValue != firstIndex) {
        const thirdIndex = secondValue;
        const thirdValue = preferences[thirdIndex - 1];

        if (thirdValue == firstIndex) {
          loveTriangles = loveTriangles + 1;
        }
      }
    }
  }
  return loveTriangles / 3;
};
