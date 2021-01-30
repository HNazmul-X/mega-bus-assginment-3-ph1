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
--------------------Form Validation and information getting funtion are here --------------------
-------------------------------------------------------------------------------------- */
const [
  fromInput,
  toInput,
  deparatureInput,
  returnInput,
  firstClassSitPrice,
  firstClassSitCount,
  economySitPrice,
  economyCount,
  vatCharge,
  totalCharge,
] = [
  document.querySelector("#from-input"),
  document.querySelector("#to-input"),
  document.querySelector("#deparature-input"),
  document.querySelector("#return-input"),
  document.querySelector("#first-class-sit #price"),
  document.querySelector("#first-class-sit #count-show"),
  document.querySelector("#economy-sit #price"),
  document.querySelector("#economy-sit #count-show"),
  document.querySelector("#vat-charge"),
  document.querySelector("#grand-total"),
];
function getFormInfo() {
  document.querySelector("#msg-li-1").innerText =" " + " " + " " + fromInput.value;
  document.querySelector("#msg-li-2").innerText =" " + " " + " " + toInput.value;
  document.querySelector("#msg-li-3").innerText = " " + " " + " " + deparatureInput.value;
  document.querySelector("#msg-li-4").innerText =" " + " " + " " + returnInput.value;
  document.querySelector("#msg-li-5").innerText = " " + " " + " " + firstClassSitCount.value;
  document.querySelector("#msg-li-6").innerText =" " + " " + " " + firstClassSitPrice.innerText;
  document.querySelector("#msg-li-7").innerText =" " + " " + " " + economyCount.value;
  document.querySelector("#msg-li-8").innerText =" " + " " + " " + economySitPrice.innerText;
  document.querySelector("#msg-li-9").innerText = " " + " " + " " + vatCharge.innerText;
  document.querySelector("#msg-li-10").innerText = " " + " " + " " + totalCharge.innerText;
}

/* -----------------------------------------------------------------------------------
--------------------Massage Handler funtion are here--------------------
-------------------------------------------------------------------------------------
this funtion can use any box with this parant div and cancle icon.
just to do set parante div selector in first parameter and second parameter is cancle-icon selecotor
------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------- */

const bookNowBtn = document.querySelector("#book-now-btn");
bookNowBtn.addEventListener("click", function () {
  if (
    fromInput.value !== "" &&
    toInput.value !== "" &&
    deparatureInput.value !== "" &&
    returnInput.value !== "" 
  ) {
    showMassage("#massage", ".cancle-icon");
    getFormInfo();
    
  } else  {
    showMassage("#massage-2", "#massage-2 .cancle-icon");
  }
 
});

function showMassage(massageBoxSelector, cancleBtnSelector) {
  const massageBox = document.querySelector(massageBoxSelector);
  const cancleBtn = document.querySelector(cancleBtnSelector);
  massageBox.classList.add("animation-top-to-middle");
  cancleBtn.addEventListener("click", function () {
    massageBox.classList.remove("animation-top-to-middle");
  });
}

