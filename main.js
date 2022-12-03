const isNumber = (num) => {
  return typeof num === "number";
};

const isString = (str) => {
  return typeof str === "string";
};

const isArr = (arr) => {
  if (isString(arr)) return false;
  return arr.length;
};

const isArrNum = (arr) => {
  if (isArr(arr)) return arr.every((item) => isNumber(item));
};

const isArrStr = (arr) => {
  if (isArr(arr)) return arr.every((item) => isString(item));
};

// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

const minNumbers = (arrNumber) => {
  if (isArrNum(arrNumber)) {
    return arrNumber.reduce((acc, cur) => {
      if (cur < acc) acc = cur;
      return acc;
    });
  }
  return false;
};

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

const max2Numbers = (arrNumber) => {
  if (isArrNum(arrNumber)) return arrNumber.sort((a, b) => b - a)[1];
  return false;
};

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']

const sortStudents = (arrStudents) => {
  if (isArrStr(arrStudents)) return arrStudents.sort().reverse();
  return false;
};

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
const sumDivisibleBy5 = () => {
  const arr = [...Array(100).keys()];
  return arr.reduce((acc, cur) => {
    if (!(cur % 5)) acc += cur;
    return acc;
  }, 0);
};

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả
// trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const balanceDividedBy2 = (arrNum) => {
  if (isArrNum(arrNum)) return arrNum.map((item) => item % 2);
  return false;
};

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].

const stringLengthMax = (arrStr) => {
  if (isArrStr(arrStr)) {
    const lengthMax = arrStr.reduce((acc, cur) => {
      if (cur.length > acc) acc = cur.length;
      return acc;
    }, 0);
    return arrStr.filter((item) => item.length === lengthMax);
  }
  return false;
};

// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9

const randomIndexInArr = (arr) => {
  return Math.floor(Math.random() * arr.length);
};
const sample = (arr) => {
  if (isArr(arr)) {
    return arr[randomIndexInArr(arr)];
  }
  return false;
};

// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
const randomIndexArr = (arr) => {
  if (isArr(arr)) {
    let arrLength = arr.length;
    while (arrLength !== 0) {
      const randomIndex = randomIndexInArr(arr);
      arrLength--;
      [arr[arrLength], arr[randomIndex]] = [arr[randomIndex], arr[arrLength]];
    }
    return arr;
  }
  return false;
};

// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]

const similarity = (arrA, arrB) => {
  if (isArr(arrA) && isArr(arrB)) {
    let newArr = arrA.filter((itemFil) => {
      return arrB.some((itemSom) => itemSom === itemFil);
    });
    return newArr;
  }
  return false;
};

// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
const filterDifferenceArr = (arr, similarityArr) => {
  return arr.filter(
    (itemFil) => !similarityArr.some((itemSom) => itemSom === itemFil)
  );
};
const symmetricDifference = (arrA, arrB) => {
  if (isArr(arrA) && isArr(arrB)) {
    const similarityArr = similarity(arrA, arrB);
    return filterDifferenceArr(arrA, similarityArr).concat(
      filterDifferenceArr(arrB, similarityArr)
    );
  }
};

// Bài 11: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

const subString = (str) => {
  if (isString) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      for (var j = i + 1; j < str.length + 1; j++) {
        newArr.push(str.slice(i, j));
      }
    }
    return newArr;
  }
  return false;
};

// Bài 12: Kiểm tra mảng xem có phải mảng tăng dần hay không

const isArrASC = (arrNum) => {
  if (isArrNum) {
    let check = 0;
    for (let i = 0; i < arrNum.length - 1; i++) {
      if (arrNum[i] <= arrNum[i + 1]) {
        check++;
      }
    }
    if (check === arrNum.length - 1) {
      return true;
    }
    return false;
  }
  return false;
};

// Bài 13: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
const isArrNumberOddDEC = (arrNum) => {
  if (isArrNum(arrNum)) {
    const arrNumberOdd = arrNum.filter((item) => item % 2 === 0);
    arrNumberOdd.reverse();
    return isArrASC(arrNumberOdd);
  }
  return false;
};

