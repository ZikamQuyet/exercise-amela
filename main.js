// Bài 1
const checkStringExist = (stringA, stringB) => {
  if (typeof stringA !== "string" || typeof stringB !== "string") return false;
  return stringA.includes(stringB);
};

// Bài 2
const shortenString = (string) => {
  if (typeof string === "string") {
    return string.slice(0, 8) + "...";
  }
  return false;
};

// Bài 3
const duplicateString = (string) => {
  if (typeof string === "string") {
    let newString = "";
    // có thể dùng repet
    for (let i = 0; i < 10; i++) {
      newString += string;
    }
    return newString;
  }
  return false;
};
// Bài 4
const duplicateStringSeparated = (string) => {
  if (typeof string === "string") {
    let newString = "";
    for (let i = 0; i < 10; i++) {
      if (i === 9) {
        newString += string;
      } else {
        newString += string + "-";
      }
    }
    return newString;
  }
  return false;
};

// Bài 5
const repeatString = (string, number) => {
  if (typeof string === "string") {
    let newString = "";
    for (let i = 0; i < number; i++) {
      if (i === number - 1) {
        newString += string;
      } else {
        newString += string + "-";
      }
    }
    return newString;
  }
  return false;
};

// Bài 6
const reverseString = (string) => {
  if (typeof string !== "string") return false;
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  return reverseArray.join("");
};

// Bài 7
const isPalindrome = (string) => {
  if (typeof string === "string") {
    let splitString = string.split("");

    let arr = splitString
      .filter((item) => item !== " ")
      .map((item) => item.toLowerCase());

    let firstEle = arr[0];
    let lastEle = arr[arr.length - 1];

    if (firstEle === lastEle) {
      arr.pop();
      arr.shift();
      if (arr.length === 0 || arr.length === 1) {
        return true;
      } else {
        let newString = arr.join("");
        return isPalindrome(newString);
      }
    } else return false;
  }
  return false;
};

// Bài 8
const isUpperCase = (string) => {
  if (typeof string === "string" && string === string.toUpperCase()) {
    return true;
  }
  return false;
};
