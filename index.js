sitPriceHandler("#first-class-sit");
sitPriceHandler("#economy-sit");

/* -----------------------------------------------------------------------------------
--------------------Total count and price handle Funtion --------------------
Here are some feature........
1. it is easy to control ..
2. it can selected by only one id. that will all parants element.
3. iT can be more dynamic . bye a more one funtion .
-------------------------------------------------------------------------------------- */
function sitPriceHandler(id) {
  const sitePrice = document.querySelector(id + " #price");
  const pluscount = document.querySelector(id + " #plus-counter");
  const minusCount = document.querySelector(id + " #minus-counter");
  const countValue = document.querySelector(id + " #count-show");
  pluscount.addEventListener("click", function () {
    counterHandler(true, countValue, sitePrice);
    console.log(this.parentNode.parentNode);
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
  const getPriceNum = parseFloat(getPrice);
  const sitTotalPrice = getPriceNum * newCountValue;
  priceId.innerText = sitTotalPrice;
  getTotalPrice();
}

/* -----------------------------------------------------------------------------------
--------------------Total value calculation Funtion --------------------
-------------------------------------------------------------------------------------- */

function getTotalPrice(totalPrice) {
  const subTotalPrice =
    getInnerTextToNumber("#first-class-sit #price") +
    getInnerTextToNumber("#economy-sit #price");
  document.querySelector("#sub-total").innerText = subTotalPrice;
  const vatChargePrice = subTotalPrice * 0.1;
  document.querySelector("#vat-charge").innerText = vatChargePrice;
  const grandTotalPrice = vatChargePrice + subTotalPrice;
  document.querySelector("#grand-total").innerText = grandTotalPrice;

  console.log("vat" + vatChargePrice, "grand" + grandTotalPrice);
}

/* -----------------------------------------------------------------------------------
--------------------String/ innerText to number value funtion --------------------
-------------------------------------------------------------------------------------- */
function getInnerTextToNumber(selector) {
  const str = document.querySelector(selector);
  const num = parseFloat(str.innerText);
  return num;
}

/* -----------------------------------------------------------------------------------
--------------------Massage Handler funtion are here--------------------
-------------------------------------------------------------------------------------- */

const bookNowBtn = document.querySelector('#book-now-btn');
bookNowBtn.addEventListener('click',function(){
  showMassage('#massage',".cancle-icon")
})

function showMassage(massageBoxSelector,cancleBtnSelector){
const massageBox = document.querySelector(massageBoxSelector)
const cancleBtn = document.querySelector(cancleBtnSelector);
  massageBox.classList.add("animation-top-to-middle");
cancleBtn.addEventListener("click", function () {
  massageBox.classList.remove("animation-top-to-middle");
});

}