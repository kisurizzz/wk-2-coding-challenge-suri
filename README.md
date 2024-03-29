# WK2: Code Challenge

#### Date, 2024/03/29

#### By Arnold Kisuri

## Description
This repository contains several reusable JavaScript functions for common tasks:

* `swapCase(text)`: Swaps the case of all characters in a string (uppercase to lowercase and vice versa).
* `generateArray(start, end)`: Generates an array of numbers between the provided start and end values (inclusive), handling both positive and negative ranges.
* `findPrimes(numbers)`: Takes an array of numbers and returns a new array containing only the prime numbers from the original array.

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
Git clone https://github.com/hamida-mstafa/Triangle-tracker.git

```

# Live Link
[Git](gh-pages link)

## Technologies used
HTML
CSS
Github
Javascript

## Support and contact details
github.com/hamida-mstafa

### License
The content of this site is licensed under the MIT license
Copyright (c) 2018.


Absolutely, here's a README file you can use for your GitHub repository containing the JavaScript functions:

**Title:** JavaScript Utility Functions

**Description:**

This repository contains several reusable JavaScript functions for common tasks:

* `swapCase(text)`: Swaps the case of all characters in a string (uppercase to lowercase and vice versa).
* `generateArray(start, end)`: Generates an array of numbers between the provided start and end values (inclusive), handling both positive and negative ranges.
* `findPrimes(numbers)`: Takes an array of numbers and returns a new array containing only the prime numbers from the original array.

**Installation:**

These functions are designed to be used directly in your JavaScript code. You don't need to install them separately.

**Usage:**

**1. Swap Case:**

```javascript
const text = "The Quick Brown Fox";
const swappedText = swapCase(text);
console.log(swappedText); // Output: "tHE qUICK bROWN fOX"
```

**2. Generate Array:**

```javascript
const startNum = 4;
const endNum = 7;
const array = generateArray(startNum, endNum);
console.log(array);  // Output: [4, 5, 6, 7]

const startNum2 = -4;
const endNum2 = 7;
const array2 = generateArray(startNum2, endNum2);
console.log(array2);  // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
```

**3. Find Prime Numbers:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimes(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
```

**Contributing:**

Feel free to fork this repository and submit pull requests with improvements or additional utility functions. Please refer to the CONTRIBUTING.md file (if you choose to create one) for details on the contribution process.

**License:**

This code is distributed under the MIT License: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

**Author:**

[Your Name] ([Your GitHub Profile URL])
