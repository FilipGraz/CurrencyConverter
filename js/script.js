let formElement = document.querySelector(".js-form");
let firstCurrency = document.querySelector(".js-firstSelect");
let amountElement = document.querySelector(".js-amount");
let secondCurrency = document.querySelector(".js-secondSelect");
let resultElement = document.querySelector(".js-result");
let submit = document.querySelector(".js-submit");
let message = document.querySelector(".js-message");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let currency1 = firstCurrency.value;
  let currency2 = secondCurrency.value;
  let result;

  let plnValue;
  let euroRate = 4.451;
  let usdRate = 3.953;
  let gbpRate = 4.994;

  switch (currency1) {
    case "PLN":
      plnValue = +amount;
      break;

    case "EUR":
      plnValue = amount * euroRate;
      break;

    case "USD":
      plnValue = amount * usdRate;
      break;

    case "GBP":
      plnValue = amount * gbpRate;
      break;
  }

  switch (currency2) {
    case "PLN":
      result = plnValue;
      break;

    case "EUR":
      result = plnValue / euroRate;
      break;

    case "USD":
      result = plnValue / usdRate;
      break;

    case "GBP":
      result = plnValue / gbpRate;
      break;
  }

  resultElement.value = result.toFixed(2);
});
