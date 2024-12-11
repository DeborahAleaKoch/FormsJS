function data() {
  const inputVal = document.querySelector("#birth-date").valueAsNumber;

  const outputVal = 2024 - inputVal;

  document.querySelector(".result").innerHTML += `<p>${outputVal}</p>`;
}
