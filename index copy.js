// var allSitInfo = document.querySelectorAll(".sit-info");
// function dynamicFunctionAdd(){
    
//     for (let i = 0; i < allSitInfo.length; i++) {
//       allSitInfo[i].addEventListener("mouseover", function () {
//         const thisId = "#" +this.id
//         // alert(thisId)
//         sitePriceHandler(thisId);
//       });
//     }
// }
// dynamicFunctionAdd();
sitPriceHandler("#first-class-sit");
sitPriceHandler("#economy-sit");


function sitPriceHandler(id) {
  const sitePrice = document.querySelector(id + " #price");
  const pluscount = document.querySelector(id + " #plus-counter");
  const minusCount = document.querySelector(id + " #minus-counter");
  const countValue = document.querySelector(id + " #count-show");
  pluscount.addEventListener("click", function () {
    counterHandler(true, countValue, sitePrice);
  });
  minusCount.addEventListener("click", function () {
    counterHandler(false, countValue, sitePrice);
  });
}

function counterHandler(isIncrease, countShowID, priceId) {
  const countShowNum = parseInt(countShowID.value);
  let newCountValue = countShowNum;
  if (isIncrease == true) {
    newCountValue = newCountValue + 1;
  } else if (isIncrease == false && countShowNum > 0) {
    newCountValue = newCountValue - 1;
  }
  countShowID.value = newCountValue;
    const getPrice = priceId.getAttribute("data-price");
  const getPriceNum = parseFloat(getPrice)
  const sitTotalPrice = getPriceNum * newCountValue;
  priceId.innerText = sitTotalPrice;

}

/* 
const economySitPrice = document.querySelector("#economy-sit #price");
const countShow = document.querySelector("#economy-sit #count-show");
const economySit = document.querySelector("#economy-sit");
const firstClassSit = document.querySelector("#first-class-sit");
const economyPlusCounter = document.querySelector("#economy-sit #plus-counter");

economyPlusCounter.addEventListener("click", function (e) {
  counterHandler(true);
});

const economyMinusCounter = document.querySelector(
  "#economy-sit #minus-counter"
);
economyMinusCounter.addEventListener("click", function (e) {
  counterHandler(false);
});
economySitPrice.addEventListener("click", function (e) {
  alert("site price  is clicked");
});

function counterHandler(isIncrease) {
  const countShowNum = parseInt(countShow.value);
  let newCountValue = countShowNum;
  if (isIncrease == true) {
    newCountValue = newCountValue + 1;
  } else if (isIncrease == false && countShowNum > 0) {
    newCountValue = newCountValue - 1;
  }
  countShow.value = newCountValue;
    const sitPrice = 100 * newCountValue;
  economySitPrice.innerText = sitPrice;
}
 */
/* -------------------------------------------------------
--------------counter contorols funtion -------------------
---------------------------------------------------------- */

// const countShowNum = parseInt(countShow.value)
// var newCountNum = 0;
// function counterControls(counterId){
//     if(counterId == "plus"){
//         newCountNum = countShowNum + 1;
//     }
//     else if(counterId == "minus" && newCountNum < 0){
//         newCountNum = countShowNum - 1;
//     }
//     countShow.value = newCountNum;
// }

