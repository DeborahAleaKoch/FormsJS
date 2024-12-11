function diff() {
  const inputAge1 = document.querySelector("#age1").valueAsNumber;
  const inputAge2 = document.querySelector("#age2").valueAsNumber;

  let output;
  if (inputAge1 < inputAge2) {
    output = inputAge2 - inputAge1;
  } else {
    output = inputAge1 - inputAge2;
  }

  //   const output = inputAge1 - inputAge2;
  //   console.log(output);

  document.querySelector(".result").innerHTML += `<p>${output}</p>`;
}
