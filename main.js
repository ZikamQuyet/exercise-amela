// Bài 1
const handleCalculateVolumeSphere = (r) => {
  if (typeof r === "number") {
    return ((4 * Math.PI * Math.pow(r, 3)) / 3).toFixed(2);
  }
  return false;
};

// Bài 2
const handleSumNumberToNumber = (numberA, numberB) => {
  if (
    typeof numberA === "number" &&
    typeof numberB === "number" &&
    numberB - numberA >= 2
  ) {
    let result = 0;
    for (let i = numberA + 1; i < numberB; i++) {
      result += i;
    }
    return result;
  }
  return false;
};

// Bài 3
const isPrime = (number) => {
  if (typeof number === "number") {
    if (number < 2) {
      return false;
    } else if (number === 2) {
      return true;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
};

// Bài 4
const handleSumPrime = (number) => {
  if (typeof number === "number") {
    let result = 0;
    for (let i = 0; i < number + 1; i++) {
      if (isPrime(i)) {
        console.log("i", i);
        result += i;
      }
    }
    return result;
  }
  return false;
};

// Bài 5
const isDivisor = (numberA, numberB) => {
  if (typeof numberA === "number" && typeof numberB === "number")
    return numberA % numberB;
  return false;
};
const handleSumDivisor = (number) => {
  if (typeof number === "number") {
    let result = 0;
    for (let i = 1; i < number; i++) {
      if (!isDivisor(number, i)) result += i;
    }
    return result;
  }
  return false;
};

// Bài 6
const sortArr = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
};
const findNumberMin = (number) => {
  if (typeof number === "number") {
    let arr = number.toString().split("");
    let arrNumber = arr.map((item) => +item);
    arrNumber = sortArr(arrNumber);
    const arrNumber0 = arrNumber.filter((item) => item === 0);
    arrNumber = arrNumber.filter((item) => item !== 0);
    for (let i = 0; i < arrNumber0.length; i++) {
      arrNumber.splice(1, 0, arrNumber0[i]);
    }
    return +arrNumber.join("");
  }
  return false;
};
console.log(findNumberMin(9001));
