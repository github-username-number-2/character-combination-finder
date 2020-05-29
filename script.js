/*
  made by luke baja
*/

"use strict"; var d

const e = i => document.getElementById(i);

const allChars = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM`-=\][';/.,<>?:\"{}|+_~";

const text = e("text"),
  input = e("charInput"),
  sInput = e("sInput"),
  sPoint = e("sPoint");

e("aChars").onclick = function () {
  input.value = allChars
};

let i;
e("start").onclick = function () {
  "use strict";

  const characters = input.value;
  const sleepTime = sInput.value;
  const charlen = characters.length;

  const CTN = {};
  for (let i = 0; i < charlen; i++) {
    CTN[i] = characters[i]
  };

  const NTC = {};
  for (let i = 0; i < charlen; i++) {
    NTC[characters[i]] = i
  };

  let charArray, dText, a2;
  if (sPoint.value === "") {
    charArray = [0]
  } else {
    charArray = [];

    sPoint.value.split("").forEach(function (v) {
      charArray.push(NTC[v])
    });
  };

  i = setInterval(function () {
    function add(a) {
      if (charArray[a] === charlen - 1) {
        add(a + 1);
        charArray[a] = 0;
      } else {
        if (charArray[a] === undefined) {
          charArray[a] = 0
        } else {
          charArray[a]++
        }
      }
    };
    add(0);

    dText = "";

    for (let i2 = 0, l = charArray.length; i2 < l; i2++) {
      dText += CTN[charArray[i2]]
    };
    d = CTN

    text.innerHTML = dText.split("").reverse().join("");
  }, sleepTime)
};

e("stop").onclick = function () {
  clearInterval(i)
};