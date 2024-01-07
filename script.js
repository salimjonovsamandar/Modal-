const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const span = document.getElementById("span");
const yes = document.getElementById("yes");
const input = document.getElementById("input");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  if (input.value) {
    modal.style.display = "none";
  }
});

yes.addEventListener("click", function () {
  if (input.value) {
    modal.style.display = "none";
  } else {
    alert("Ism kiritilishi shart");
    input.focus();
  }
});

document.addEventListener("click", function (e) {
  if (e.target !== modal && e.target !== btn && e.target !== input) {
    modal.style.display = "none";
  }
});
