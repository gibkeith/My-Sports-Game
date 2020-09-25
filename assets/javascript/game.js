let all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

{
  let RESET = document.querySelector("#reset-button");
  let NUMBEROFRESETS = document.querySelector("#num-resets");
  let stringCountValue = NUMBEROFRESETS.innerHTML;
  let countValue = Number(stringCountValue);

  RESET.addEventListener("click", function () {
    countValue += 1;
    console.log(countValue);
    NUMBEROFRESETS.innerHTML = countValue;
  });
}

{
  let SHOTSTAKEN = document.querySelector("#teamone-numshots");
  let SHOOT = document.querySelector("#teamone-shoot-button");
  let GOALS = document.querySelector("#teamone-numgoals");
  let stringCountValue = SHOTSTAKEN.innerHTML;
  let countValue = Number(stringCountValue);

  SHOOT.addEventListener("click", function () {
    countValue += 1;
    console.log(countValue);
    SHOTSTAKEN.innerHTML = countValue;
    console.log(countValue);
    GOALS.innerHTML = countValue;
  });
}

{
  let SHOTSTAKEN = document.querySelector("#teamtwo-numshots");
  let SHOOT = document.querySelector("#teamtwo-shoot-button");
  let GOALS = document.querySelector("#teamtwo-numgoals");
  let stringCountValue = SHOTSTAKEN.innerHTML;
  let countValue = Number(stringCountValue);

  SHOOT.addEventListener("click", function () {
    countValue += 1;
    console.log(countValue);
    SHOTSTAKEN.innerHTML = countValue;
    console.log(countValue);
    GOALS.innerHTML = countValue;
  });
}
