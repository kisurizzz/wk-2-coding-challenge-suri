function swapCase(strg) {
    // this will reate an empty string to store the swapped characters
    let swappedString = "";
  
    for (let char of strg) {
      // Check if the character is lowercase
      if (char === char.toLowerCase()) {
        // Convert to uppercase and add to the swapped string
        swappedString += char.toUpperCase();
      } else {
        // Convert to lowercase and add to the swapped string
        swappedString += char.toLowerCase();
      }
    }
  
    return swappedString;
  }
  
  const sentence = "The Quick Brown Fox";
  const swappedText = swapCase(sentence);
  console.log(swappedText);