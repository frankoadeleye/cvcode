(() => {
  "use strict";
  const testInfo = {
    className: "AnnabcnBoutique-v1-test",
    debug: 0,
    testName: "card-badge",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => {
        const classAllocation = (selector) => {
          convert.$(selector).each((i, ele) => {
            convert.$(ele).addClass(`section-${i}`);
          });
        };
        const waitForElement = (selector) => {
          return new Promise((resolve) => {
            if (document.querySelector(selector)) {
              return resolve(document.querySelector(selector));
            } else {
              window.DOMContentLoaded = () => {
                return reject(
                  document.querySelector(selector),
                  "Target element not found."
                );
              };
            }
            const observer = new MutationObserver((mutations) => {
              if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
              }
            });
            observer.observe(document.querySelector("body"), {
              childList: true,
              subtree: true,
            });
          });
        };

        const convertToNumber = (variable) => {
          let withoutComma = variable.replace(/\,/g, "");
          let withoutCurrencySymbol = withoutComma.replace("€", "");
          let withoutCurrency = withoutCurrencySymbol.replace("EUR", "");
          let withoutEmpty = withoutCurrency.replace(" ", "");
          let toNum = parseInt(withoutEmpty, 10);

          return toNum;
        };

        const removeLastTwoZeros = (oldPrice, discounted) => {
          let newAmount =
            convertToNumber(oldPrice) - convertToNumber(discounted);
          let RoundedUp = (newAmount - (newAmount % 100)) / 100;
          return RoundedUp;
        };

        const loadTest = () => {
          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);
            var subchildrenLen = convert.$(
              "#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0 [id^=Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0]"
            ).length;

            convert
              .$(
                "#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0"
              )
              .map((index, item) => {
                for (let i = 0; i < subchildrenLen; i++) {
                  let currentChild = document.getElementById(
                    `Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0-${
                      i + 1
                    }`
                  );

                  let text = currentChild.querySelector(
                    ".card__badge.bottom.left > .badge.badge--bottom-left.color-accent-2"
                  );

                  let reg = currentChild.querySelector(
                    ".price__sale > span > s.price-item.price-item--regular"
                  ).textContent;

                  let discounted = currentChild.querySelector(
                    ".price__regular > .price-item.price-item--regular"
                  ).textContent;

                  text.textContent = `Ahorra ${removeLastTwoZeros(
                    reg,
                    discounted
                  )}€`;

                  console.log(text);
                }
              });
          });
        };
        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          loadTest();
        }
      });
    }
  });
})();
