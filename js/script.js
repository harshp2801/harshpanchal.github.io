const hiringRad = document.querySelector("#hiring");
const question = document.querySelector("#question");
const comment = document.querySelector("#comment");
const wage = document.querySelector("#wage");
wage.style.display = "none";
question.addEventListener("change", () => {
  wage.required = "";
  wage.style.display = "none";
});
comment.addEventListener("change", () => {
  wage.required = "";
  wage.style.display = "none";
});
hiringRad.addEventListener("change", () => {
  wage.required = "required";
  wage.style.display = "block";
});

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const postalCodeRegex =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const emailContent = document.getElementById("email");
const postalContent = document.getElementById("postalCode");
const form = document.querySelector("#contactForm");

form.onsubmit = () => {
  if (validateCode(postalContent.value) && validateEmail(emailContent.value)) {
    return true;
  }
  return false;
};

const validateEmail = (email) => {
  if (emailRegex.test(email)) {
    return true;
  }
  alert("Invalid email address!!");
  return false;
};

const validateCode = (code) => {
  if (postalCodeRegex.test(code)) {
    return true;
  }
  alert("Invalid postal code!");
  return false;
};
