"use strict";

//Переменные для сохранения

let firstNum = "";
let secondNum = "";
let sign = "";
let finish = false;
let result = "";

//Функции для действий

function math(a, b, mark) {
   if (mark == "+") {
      result = +a + +b;
      finish = true;
      return result;
   } else if (mark == "-") {
      result = +a - +b;
      finish = true;
      return result;
   } else if (mark == "X") {
      result = +a * +b;
      finish = true;
      return result;
   } else if (mark == "/") {
      if (secondNum == 0) {
         clearAll();
         const errStr = "Error";
         return errStr;
      } else {
         result = +a / +b;
         finish = true;
         return result;
      }
   }
}

//Функция вывода на экран

function renderResult(value) {
   out.textContent = value;
}

//Экран для вывода

const out = document.querySelector(".out p");

//Массив для проверки

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["-", "+", "X", "/"];

//Очистка экрана

function clearAll() {
   firstNum = "";
   secondNum = "";
   sign = "";
   finish = false;
   out.textContent = 0;
}

//Поиск и замена лишней точки
//Перевод числа в строку при повторной операции

function replaceNumber(number) {
   if (typeof number == "number") {
      return number.toString();
   }
   let array = number.split("");
   if (array.indexOf(".") === array.length - 1) {
      array.pop();
   }
   return array.join("");
}

//Нажатие кнопок
const btns = [...document.querySelectorAll(".btn")];

btns.forEach((elem) => {
   elem.addEventListener("click", () => {
      if (elem.textContent == "ac") {
         clearAll();
         return;
      }

      const key = elem.textContent;

      if (digit.includes(key)) {
         if (secondNum === "" && sign === "") {
            firstNum += key;
            firstNum = firstNum
               .replace(",", ".")
               .replace(/[^\d\.]/g, "")
               .replace(/\./, "x")
               .replace(/\./g, "")
               .replace(/x/, ".");
            out.textContent = firstNum;
         } else if (firstNum !== "" && sign !== "" && finish) {
            firstNum = result;
            secondNum = key;
            finish = false;
            renderResult(secondNum);
         } else {
            secondNum += key;
            secondNum = secondNum
               .replace(",", ".")
               .replace(/[^\d\.]/g, "")
               .replace(/\./, "x")
               .replace(/\./g, "")
               .replace(/x/, ".");

            out.textContent = secondNum;
         }
      }
      if (action.includes(key)) {
         sign = key;
         out.textContent = key;
      }

      if (key == "=") {
         if (sign == "+") {
            const a = replaceNumber(firstNum);
            const b = replaceNumber(secondNum);
            const res = math(a, b, sign);
            renderResult(res);
         } else if (sign == "-") {
            const a = replaceNumber(firstNum);
            const b = replaceNumber(secondNum);
            const res = math(a, b, sign);
            renderResult(res);
         } else if (sign == "X") {
            const a = replaceNumber(firstNum);
            const b = replaceNumber(secondNum);
            const res = math(a, b, sign);
            renderResult(res);
         } else if (sign == "/") {
            const a = replaceNumber(firstNum);
            const b = replaceNumber(secondNum);
            const res = math(a, b, sign);
            renderResult(res);
         }
      }

      console.log(`firstNum = ${firstNum}`);
      console.log(`secondNum = ${secondNum}`);
      console.log(`sign = ${sign}`);
   });
});
