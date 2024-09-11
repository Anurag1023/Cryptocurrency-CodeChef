// Api key: CG - HhbUi8uSb9PZHjsBc6mfrkbS

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"

let bitcoin = document.getElementById("bitcoin");
let dogecoin = document.getElementById("dogecoin");
let ethereum = document.getElementById("ethereum");

// var setting = {
//     "async" : true,
//     "scrossDomain" : true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
//     "method" : "GET",
//     "headers" : {}
// }

// $.ajax(setting).done(function (response) {
//     bitcoin.innerHTML = response.bitcoin.usd;
//     dogecoin.innerHTML = response.dogecoin.usd;
//     ethereum.innerHTML = response.ethereum.usd;
// })

const apiURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

//Using async & await

async function getCost(url) {
  let data = await fetch(url);
  let response = await data.json();
  bitcoin.innerHTML = response.bitcoin.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
}

getCost(apiURL);

let e = document.querySelector(".mode");
let background = document.querySelector(".container");
let images = document.querySelectorAll(".button");
let borders = document.querySelectorAll(".coin");

e.addEventListener("click", () => {
  if (background.classList.contains("dark")) {
    background.style.backgroundImage = "url('Images/bright.png')";
    background.classList.replace("dark", "bright");
    background.style.color = "black";
    // background.style.filter = "invert(1)";
    images.forEach(image => {
        image.style.filter = "invert(1)";
      });
    borders.forEach(border => {
        border.style.borderColor = "black";
      });
    }
    
    else {
        background.style.backgroundImage = "url('Images/background.png')";
        background.classList.replace("bright", "dark");
        background.style.color = "white";
        // background.style.filter = "invert(0)";
        
        images.forEach(image => {
            image.style.filter = "invert(0)";
        });
        borders.forEach(border => {
            border.style.borderColor = "white";
          });
  }
});
