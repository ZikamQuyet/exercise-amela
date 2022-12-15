// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

const getCurrentDate = (option: string = "/") => {
  const d = new Date();
  return `${d.getDate()}${option}${
    d.getMonth() + 1
  }${option}${d.getFullYear()}`;
};
console.log(getCurrentDate());

// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(12, 2022));

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.

const isTheWeekend = (date = new Date()) => {
  return date.getDay() === 6 || date.getDay() === 0;
};

// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút

const getMinutes = (hours: number, minute: number): number => {
  return hours * 60 + minute;
};

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.

const countDay = () => {
  const dCurrent = new Date();
  var dPrevious = new Date(dCurrent.getFullYear(), 0, 1);

  return Math.ceil((+dCurrent - +dPrevious + 1) / 86400000);
};
console.log(countDay());

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))

const calculateAge = (date: string) => {
  const d = new Date();
  const dBirthday = new Date(date);
  return d.getFullYear() - dBirthday.getFullYear();
};
console.log(calculateAge("12/08/1998"));

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)

const startOfWeek = (d: Date) => {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};
console.log(startOfWeek(new Date()));

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

const endOfMonth = (dt: Date) => {
  dt = new Date(dt);
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
};

console.log(endOfMonth(new Date()));

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch

const countDown = (d: Date) => {
  const dTime = new Date(d).getTime();
  const now = new Date().getTime();
  const distance = dTime - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''

const plusTime = (strTime: string, x: number) => {
  const [hours = 0, minutes = 0, seconds = 0] = strTime.split(":");
  let d: any = new Date();
  d.setHours(+hours);
  d.setMinutes(+minutes);
  d.setSeconds(+seconds + x);

  return `${new Date(d).getHours()}:${new Date(d).getMinutes()}:${new Date(
    d
  ).getSeconds()}`;
};

console.log(plusTime("9:20:56", 7));

// Bài 11. Viết hàm reset data. Input là object. Output là object sau khi được reset

const obj = {
  name: "quan",
  age: 25,
  hobby: ["code", "play", "game"],
  family: {
    name: "tuna",
    age: 12,
    parent: {
      name: "Hoa",
    },
  },
};

const isObject = (value: unknown): boolean => {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
};

const resetData = <T extends {}>(input: T) => {
  if (!isObject(input)) {
    throw new Error("Input not object");
  }

  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "string") {
      input[key] = "";
    } else if (typeof value === "number") {
      input[key] = 0;
    } else if (Array.isArray(value)) {
      input[key] = [];
    } else if (isObject(value)) {
      resetData(value as {});
    }
  }

  return input;
};

console.log(resetData(obj));
