const inputDay = document.querySelector("#input-day");
const inputMonth = document.querySelector("#input-month");
const inputYears = document.querySelector("#input-year");

const dayErr = document.querySelector("#error-day");
const monthErr = document.querySelector(".error-month");
const yearErr = document.querySelector(".error-year");
const submitBtn = document.querySelector(".submit-btn");

const yearDis = document.querySelector(".years-display");
const monthDis = document.querySelector(".months-display");
const daysDis = document.querySelector(".days-display");

const date = new Date();
const day = date.getDate();
const month = 1 + date.getMonth();
const year = date.getFullYear();

let isValid = false;

inputMonth.addEventListener("input", function (e) {
  let value = inputMonth.value;
  if (value === "") {
    monthErr.innerHTML = "This field is required";
    inputMonth.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (isNaN(value)) {
    monthErr.innerHTML = "Insert a valid month";
    inputMonth.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (value < 1 || value > 12) {
    monthErr.innerHTML = "Insert a valid month";
    inputMonth.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else {
    monthErr.innerHTML = "";
    inputMonth.style.border = "";
    isValid = true;
  }
});

inputYears.addEventListener("input", () => {
  let value = inputYears.value;
  if (value === "") {
    yearErr.innerHTML = "This field is required";
    inputYears.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (isNaN(value)) {
    yearErr.innerHTML = "Insert a valid year";
    inputYears.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (value <= 0) {
    yearErr.innerHTML = "Insert a valid year";
    inputYears.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else {
    yearErr.innerHTML = "";
    inputYears.style.border = "";
    isValid = true;
  }
});
inputDay.addEventListener("input", function (e) {
  let value = inputDay.value;
  let DaysInMonth = getDaysInMonth(inputYears.value, inputMonth.value);

  if (value === "") {
    dayErr.innerHTML = "This field is required";
    inputDay.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (isNaN(value)) {
    dayErr.innerHTML = "Insert a valid day";
    inputDay.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else if (value < 1 || value > DaysInMonth) {
    dayErr.innerHTML = "Insert a valid day";
    inputDay.style.border = "1px var(--light-red) solid";
    isValid = false;
  } else {
    dayErr.innerHTML = "";
    inputDay.style.border = "";
    isValid = true;
  }
});

submitBtn.addEventListener("click", function () {
  let dayValue = inputDay.value;
  let yearValue = inputYears.value;
  let monthValue = inputMonth.value;
  let dayResult, monthResult, yearResult;
  if (isValid === false) {
    yearErr.innerHTML = "This field is required";
    inputYears.style.border = "1px var(--light-red) solid";
    monthErr.innerHTML = "This field is required";
    inputMonth.style.border = "1px var(--light-red) solid";
    dayErr.innerHTML = "This field is required";
    inputDay.style.border = "1px var(--light-red) solid";
  } else if (monthValue === "" && yearValue === "") {
    yearErr.innerHTML = "This field is required";
    inputYears.style.border = "1px var(--light-red) solid";
    monthErr.innerHTML = "This field is required";
    inputMonth.style.border = "1px var(--light-red) solid";
  } else if (yearValue === "" && dayValue === "") {
    yearErr.innerHTML = "This field is required";
    inputYears.style.border = "1px var(--light-red) solid";
    dayErr.innerHTML = "This field is required";
    inputDay.style.border = "1px var(--light-red) solid";
  } else if (monthValue === "" && dayValue === "") {
    dayErr.innerHTML = "This field is required";
    inputDay.style.border = "1px var(--light-red) solid";
    monthErr.innerHTML = "This field is required";
    inputMonth.style.border = "1px var(--light-red) solid";
  } else {
    yearResult = yearValue - year;
    if (dayValue >= day) {
      dayResult = dayValue - day;
    } else {
      monthResult--;
      dayResult = getDaysInMonth(year, month) + Number(dayValue) - day;
    }

    if (month < monthValue) {
      monthResult = monthValue - month;
    } else {
      yearResult--;
      monthResult = 12 + Number(monthValue) - month;
    }
    if (monthResult < 0) {
      monthResult = 11;
      yearResult--;
    }
    if (Number(yearValue) === year) {
      yearResult = 0;
      monthResult = 0;
    } else if (yearResult < 0) {
      yearResult = yearResult * -1;
    } else if (yearResult <= 1) {
      monthResult--;
    } else {
      yearResult;
    }

    daysDis.innerHTML = dayResult;
    monthDis.innerHTML = monthResult;
    yearDis.innerHTML = yearResult;
  }
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
