closer();
$("#btn").addEventListener("click", function() {
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "hello");
  input.setAttribute("class", "textt");
  $("#form").appendChild(input);
  console.log(input);
  myalert(saludo());

});

function closer() {
  let elements = document.querySelectorAll(".close");
  for (let index = elements.length - 1; index >= 0; index--) {
    let el = elements[index];

    el.addEventListener("click", function() {
      this.parentNode.style.display = "none";
    });
  }
}

function myalert(msg) {
  let div = document.createElement("div");
  div.setAttribute("class", "alert");
  div.innerText = msg;
  let close = document.createElement("span");
  close.style.float = " right";
  close.innerText = "C";
  close.setAttribute("class", "close");

  div.appendChild(close);

  $("body").insertBefore(div, $("body").lastChild);
  closer();
}

function $(selector) {
  return document.querySelector(selector);
}

let bye = prompt('what is your name?')

const saludo = (saludar) => 'Hello' + ' ' + bye 
console.log(saludo())