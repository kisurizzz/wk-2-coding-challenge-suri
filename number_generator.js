function generateArray(start, end) {
    // Handle cases where start is greater than end
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    } else {
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    }
   }
   
   // Example usage
   const startNum = 4;
   const endNum = 7;
   const array = generateArray(startNum, endNum);
   console.log(array);  // Output: [4, 5, 6, 7]
   
   // Another example with negative numbers
   const startNum2 = -4;
   const endNum2 = 7;
   const array2 = generateArray(startNum2, endNum2);
   console.log(array2);
   