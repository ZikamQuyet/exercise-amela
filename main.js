// Bài 1. Viết hàm để lấy danh sách các key của object
const getListKeyObj = (obj) => {
  return Object.keys(obj);
};

// Bài 2. Viết hàm để lấy danh sách các value của object
const getListValuesObj = (obj) => {
  return Object.values(obj);
};

// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
const isKey = (obj, key) => {
  return Object.hasOwn(obj, key);
};

// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
const getLengthObj = (obj) => {
  return getListKeyObj(obj).length;
};

// Bài 5. Cho mảng các user mỗi user có cấu trúc
// user = {
//   name : string,
//   age : number,
//   isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true
const getUser = (arr) => {
  return arr.filter((item) => item.age > 25 && item.isStatus === true);
};
