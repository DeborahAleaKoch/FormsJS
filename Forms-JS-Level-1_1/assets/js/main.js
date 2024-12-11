function twice() {
  const inputValue = document.querySelector("#number").valueAsNumber;

  const outputValue = inputValue * 2;
  console.log(outputValue);

  document.querySelector(".product").innerHTML += `<p>${outputValue}</p>`;
}
