let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let err1 = document.querySelector(".err1");
let err2 = document.querySelector(".err2");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let refresh = document.querySelector(".refresh");
let box2 = document.querySelector(".box2");
let box1 = document.querySelector(".box1");
let life = document.querySelector(".life");
let ans = document.querySelector(".ans");
let count = 3

button1.addEventListener("click", function () {
  if (input1.value) {
    if (input1.value - 9999) {
      if (input1.value < 9) {
        two.style.transform = "scale(1)";
        one.style.transform = "scale(0)";
      } else {
        (err1.innerHTML = "Number Should be 1 to 9"),
          (err1.style.color = "red");
        input1.value = "";
      }
    } else {
      (err1.innerHTML = "Please Enter a Number"), (err1.style.color = "red");
      input1.value = "";
    }
  } else {
    (err1.innerHTML = "Please Enter a Number"), (err1.style.color = "red");
  }
});

button2.addEventListener("click", function () {
  if (input2.value) {
    if (input2.value - 9999) {
      if (input2.value < 9) {
        if (input2.value == input1.value) {
          input2.style.display = "none";
          button2.style.display = "none";
          err2.style.display = "none";
          input1.value = ""
          box2.style.transform = "scale(1)";
        } else {
            count--
            life.innerHTML = "সুযোগ আছে " + count + " বার";
              input2.value = "";
              life.style.color = "red"
              err2.innerHTML = "মাথা ঠান্ডা করে দে"
              err2.style.color = "red";
            if(count < 1){
              err2.innerHTML = "তোরে দিয়ে হবে না।";
              life.style.display = "none"
              button2.style.display = "none"
              input2.style.display = "none"
              ans.innerHTML = "Correct answer is " + input1.value;
              one.style.transform = "scale(1)";
              player1.style.display = "none"
              button1.style.display = "none"
              err1.style.display = "none"
              input1.style.display = "none"
              box1.style.transform = "scale(1)";
            }
        }
      } else {
        (err2.innerHTML = "Number Should be 1 to 9"),
          (err2.style.color = "red");
        input2.value = "";
      }
    } else {
      (err2.innerHTML = "Please Enter a Number"), (err2.style.color = "red");
      input2.value = "";
    }
  } else {
    (err2.innerHTML = "Please Enter a Number"), (err2.style.color = "red");
  }
});

refresh.addEventListener("click", function () {
  location.reload();
  input1.value = "";
  input2.value = "";
  err1.innerHTML = "";
  err2.innerHTML = "";
});
