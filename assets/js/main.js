(() => {
  const formElement = document.getElementById("form-validator");
  const phoneElement = formElement.querySelector("#phone-number");
  const result = formElement.querySelector(".result");

  if (!formElement || !phoneElement || !result) return false;

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const phoneValue = phoneElement.value.trim();

    // Kiem tra du lieu nguoi dung nhap vao co rong khong
    const spaceRegex = /^\s*$/;

    if (spaceRegex.test(phoneValue)) {
      result.innerHTML = `<span style="color: red">Error: Empty string is not a valid phone number</span>`;
    } else {
      const isPhoneNum = phoneNumberValidator(phoneValue);
      if (isPhoneNum) {
        result.innerHTML = `Result: <span style="color: blue">${phoneValue}</span> is a phone number of US`;
      } else {
        result.innerHTML = `Error: <span style="color: red">${phoneValue}</span> is not a phone number of US`;
      }
    }
  });
})();

const phoneNumberValidator = (phoneNumber) => {
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return phoneRegex.test(phoneNumber);
};

/*
^ bắt đầu chuỗi.
(1\s?)? có thể có hoặc không có mã quốc gia 1, được phân tách bởi khoảng trắng (sau đó có thể có hoặc không có khoảng trắng).
(\(\d{3}\)|\d{3}) đầu số điện thoại bắt đầu bằng 3 chữ số, hoặc trong cặp dấu ngoặc tròn, với 3 chữ số ở giữa.
[\s-]? có thể có hoặc không có khoảng trắng hoặc dấu gạch ngang.
\d{3} ba chữ số tiếp theo.
[\s-]? có thể có hoặc không có khoảng trắng hoặc dấu gạch ngang.
\d{4} bốn chữ số cuối cùng.
$ kết thúc chuỗi.
 */
