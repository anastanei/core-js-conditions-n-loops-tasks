/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: xQueen, y: yQueen } = queen;
  const { x: xKing, y: yKing } = king;
  return (
    xKing === xQueen ||
    yKing === yQueen ||
    Math.abs(yKing - yQueen) === Math.abs(xKing - xQueen)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return false;
  }
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let tens = '';
  switch (Math.trunc(num / 10)) {
    case 1:
      tens = 'X';
      break;
    case 2:
      tens = 'XX';
      break;
    case 3:
      tens = 'XXX';
      break;
    default:
      tens = '';
  }

  let ones = '';
  switch (num % 10) {
    case 1:
      ones = 'I';
      break;
    case 2:
      ones = 'II';
      break;
    case 3:
      ones = 'III';
      break;
    case 4:
      ones = 'IV';
      break;
    case 5:
      ones = 'V';
      break;
    case 6:
      ones = 'VI';
      break;
    case 7:
      ones = 'VII';
      break;
    case 8:
      ones = 'VIII';
      break;
    case 9:
      ones = 'IX';
      break;
    default:
      ones = '';
  }

  return `${tens}${ones}`;
}
/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    let char = '';
    switch (numberStr[i]) {
      case '0':
        char = 'zero';
        break;
      case '1':
        char = 'one';
        break;
      case '2':
        char = 'two';
        break;
      case '3':
        char = 'three';
        break;
      case '4':
        char = 'four';
        break;
      case '5':
        char = 'five';
        break;
      case '6':
        char = 'six';
        break;
      case '7':
        char = 'seven';
        break;
      case '8':
        char = 'eight';
        break;
      case '9':
        char = 'nine';
        break;
      case '-':
        char = 'minus';
        break;
      case '.':
        char = 'point';
        break;
      case ',':
        char = 'point';
        break;
      default:
        char = '';
    }
    res = res === '' ? char : `${res} ${char}`;
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let head = '';
  let tail = '';
  const len = Math.trunc(str.length / 2);
  for (let i = 0; i < len; i += 1) {
    head = `${head}${str[i]}`;
    tail = `${tail}${str[str.length - i - 1]}`;
  }
  return head === tail;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let rem = num;
  while (rem) {
    if (rem % 10 === digit) {
      return true;
    }
    rem = Math.trunc(rem / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const len = arr.length;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < len; i += 1) {
    rightSum += arr[i];
  }
  for (let k = 0; k < len; k += 1) {
    rightSum -= arr[k];

    if (leftSum === rightSum) {
      return k;
    }

    leftSum += arr[k];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */

function getSpiralMatrix(size) {
  const res = [];
  for (let i = 0; i < size; i += 1) {
    res[i] = [];
  }
  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  let num = 1;
  while (num <= size * size) {
    for (let col = left; col <= right; col += 1) {
      res[top][col] = num;
      num += 1;
    }
    top += 1;
    for (let row = top; row <= bottom; row += 1) {
      res[row][right] = num;
      num += 1;
    }
    right -= 1;
    for (let col = right; col >= left; col -= 1) {
      res[bottom][col] = num;
      num += 1;
    }
    bottom -= 1;
    for (let row = bottom; row >= top; row -= 1) {
      res[row][left] = num;
      num += 1;
    }
    left += 1;
  }
  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const res = matrix;

  for (let row = 0; row < n; row += 1) {
    for (let col = row; col < n; col += 1) {
      const temp = res[row][col];
      res[row][col] = res[col][row];
      res[col][row] = temp;
    }
  }

  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < Math.floor(n / 2); col += 1) {
      const temp = res[row][col];
      res[row][col] = res[row][n - col - 1];
      res[row][n - col - 1] = temp;
    }
  }

  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function partition(arr, low, high) {
  const resArr = arr;
  const pivot = resArr[high];
  let i = low;

  for (let j = low; j < high; j += 1) {
    if (resArr[j] < pivot) {
      const temp = resArr[i];
      resArr[i] = resArr[j];
      resArr[j] = temp;
      i += 1;
    }
  }

  const temp = resArr[i];
  resArr[i] = resArr[high];
  resArr[high] = temp;

  return i;
}

function sortByAsc(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    sortByAsc(arr, low, pivotIndex - 1);
    sortByAsc(arr, pivotIndex + 1, high);
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  let iterRem = iterations;
  let resStr = str;
  let even = '';
  let odd = '';
  const shuffledStrings = [];

  while (iterRem > 0) {
    for (let i = 1; i < str.length; i += 1) {
      if (i % 2 === 0) {
        even += resStr[i];
      } else {
        odd += resStr[i];
      }
    }
    resStr = str[0] + even + odd;
    shuffledStrings[shuffledStrings.length] = resStr;
    if (resStr === str) {
      const rem = iterations - iterRem;
      return shuffledStrings[(iterations % rem) + 2];
    }
    even = '';
    odd = '';
    iterRem -= 1;
  }

  return resStr;
}

// function getShuffleIterations(str) {
//   let tempStr = shuffleChar(str, 1);
//   let n = 1;
//   while (tempStr !== str) {
//     tempStr = shuffleChar(tempStr, 1);
//     n += 1;
//   }
//   return {
//     length: str.length,
//     iterations: n,
//   };
// }
// function shuffleChar(str, iterations) {
//   const n = str.length;

//   const currentIndices = new Array(n);
//   const srcIndices = [];
//   for (let i = 0; i < n; i += 1) {
//     currentIndices[i] = i;
//     srcIndices[i] = i;
//   }

// { length: 1, iterations: 1 }
// { length: 2, iterations: 1 }
// { length: 3, iterations: 2 }
// { length: 4, iterations: 2 }
// { length: 5, iterations: 4 }
// { length: 6, iterations: 4 }
// { length: 7, iterations: 3 }
// { length: 8, iterations: 3 }
// { length: 9, iterations: 6 }
// { length: 10, iterations: 6 }
// { length: 11, iterations: 10 }
// { length: 12, iterations: 10 }
// { length: 13, iterations: 12 }
// { length: 14, iterations: 12 }
// { length: 15, iterations: 4 }
// { length: 16, iterations: 4 }
// { length: 17, iterations: 8 }
// { length: 18, iterations: 8 }
// { length: 19, iterations: 18 }
// { length: 20, iterations: 18 }
// { length: 21, iterations: 6 }
// { length: 22, iterations: 6 }
// { length: 23, iterations: 11 }
// { length: 24, iterations: 11 }
// { length: 25, iterations: 20 }
// { length: 26, iterations: 20 }
// { length: 27, iterations: 18 }
// { length: 28, iterations: 18 }
// { length: 29, iterations: 28 }
// { length: 30, iterations: 28 }
// { length: 31, iterations: 5 }
// { length: 32, iterations: 5 }
// { length: 33, iterations: 10 }
// { length: 34, iterations: 10 }
// { length: 35, iterations: 12 }
// { length: 36, iterations: 12 }
// { length: 37, iterations: 36 }
// { length: 38, iterations: 36 }
// { length: 39, iterations: 12 }
// { length: 40, iterations: 12 }
// { length: 41, iterations: 20 }
// { length: 42, iterations: 20 }
// { length: 43, iterations: 14 }
// { length: 44, iterations: 14 }
// { length: 45, iterations: 12 }
// { length: 46, iterations: 12 }
// { length: 47, iterations: 23 }
// { length: 48, iterations: 23 }
// { length: 49, iterations: 21 }
// { length: 50, iterations: 21 }
// { length: 51, iterations: 8 }
// { length: 52, iterations: 8 }
// { length: 53, iterations: 52 }
// { length: 54, iterations: 52 }
// { length: 55, iterations: 20 }
// { length: 56, iterations: 20 }
// { length: 57, iterations: 18 }
// { length: 58, iterations: 18 }
// { length: 59, iterations: 58 }
// { length: 60, iterations: 58 }
// { length: 61, iterations: 60 }
// { length: 62, iterations: 60 }
// { length: 63, iterations: 6 }
// { length: 64, iterations: 6 }
// { length: 65, iterations: 12 }
// { length: 66, iterations: 12 }
// { length: 67, iterations: 66 }
// { length: 68, iterations: 66 }
// { length: 69, iterations: 22 }
// { length: 70, iterations: 22 }
// { length: 71, iterations: 35 }
// { length: 72, iterations: 35 }

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    const digit = tempNumber % 10;
    digits.unshift(digit);
    tempNumber = Math.floor(tempNumber / 10);
  }

  let i = digits.length - 2;
  while (digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  const left = [];
  const right = [];

  for (let k = 0; k <= i; k += 1) {
    left.push(digits[k]);
  }
  for (let k = i + 1; k < digits.length; k += 1) {
    right.push(digits[k]);
  }

  right.sort((a, b) => a - b);
  const res = [...left, ...right];
  return res.reduce((acc, digit) => acc * 10 + digit, 0);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
