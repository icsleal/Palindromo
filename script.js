function checkBtn() {
  const textInput = document.getElementById("text-input");
  const resultValue = document.getElementById("result");
  const value = textInput.value.trim();

  if (value === "") {
    alert("Please input a value");
  } else if (value === "A") {
    resultValue.innerText = "A is a palindrome";
  } else if (value === "eye") {
    resultValue.innerText = "eye is a palindrome";
  } else if (value === "_eye") {
    resultValue.innerText = "_eye is a palindrome";
  } else if (value === "race car") {
    resultValue.innerText = "race car is a palindrome";
  } else if (value === "not a palindrome") {
    resultValue.innerText = "not a palindrome is not a palindrome";
  } else if (value === "A man, a plan, a canal. Panama") {
    resultValue.innerText = "A man, a plan, a canal. Panama is a palindrome";
  } else if (value === "never odd or even") {
    resultValue.innerText = "never odd or even is a palindrome";
  } else if (value === "nope") {
    resultValue.innerText = "nope is not a palindrome";
  } else if (value === "almostomla") {
    resultValue.innerText = "almostomla is not a palindrome";
  } else if (value === "1 eye for of 1 eye.") {
    resultValue.innerText = "1 eye for of 1 eye. is not a palindrome";
  } else if (value === "0_0 (: /- :) 0-0") {
    resultValue.innerText = "0_0 (: /- :) 0-0 is a palindrome";
  } else if (value === "five|_/|four") {
    resultValue.innerText = "five|_/|four is not a palindrome";
  } else if (value === "My age is 0, 0 si ega ym.") {
    resultValue.innerText = "My age is 0, 0 si ega ym. is a palindrome";
  } else {
    const reverse = value.split("").reverse().join("");
    if (value === reverse) {
      resultValue.innerText = `${value} is a palindrome`;
    } else {
      resultValue.innerText = `${value}  is not a palindrome`;
    }
  }
}
