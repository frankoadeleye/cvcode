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

        const handleSubChangeMutations = (testElement)=>{
          let isRunning = false;
          const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
              if (isRunning) return;
              testElement();
              isRunning = true;
              setTimeout(() => {
                isRunning = false;
              }, 100);
            }
          });
          observer.observe(document.querySelector("body"), {
            childList: true,
            subtree: true,
            attributes: true
          });
        }

        const convertToNumber = (variable) => {
          let withoutComma = variable.replace(/\,/g, "");
          let withoutCurrencySymbol = withoutComma.replace("€", "");
          let withoutCurrency = withoutCurrencySymbol.replace("EUR", "");
          let withoutEmpty = withoutCurrency.replace(" ", "");
          let toNum = parseInt(withoutEmpty, 10);

          return toNum;
        };

        const getPercentage = (partialValue, totalValue) => {
          return 100 - ((100 * partialValue) / totalValue).toFixed(0);
        };

        const LoadTest = () => {
          var subchildrenLen = convert.$(
            "#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0 [id^=Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0]"
          ).length;

          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);

            convert.$("#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0")
              .map((index, item) => {
                for (let i = 0; i < subchildrenLen; i++) {
                  var currentChild = convert.$(`#Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0-${i + 1}`);
                  var targetEle = currentChild.find(".card__badge.bottom.left > .badge.badge--bottom-left.color-accent-2");
                  var reg = currentChild.find(".price__sale > span > s.price-item.price-item--regular").text();
                  var discounted = currentChild.find(".price__regular > .price-item.price-item--regular").text();
                  targetEle.text(`Ahorra ${getPercentage(convertToNumber(discounted),convertToNumber(reg))}%`);
                }
              });
            waitForElement(".product__info-container").then(() => {
                var parent = convert.$(".product__info-container");
                let targetEle = parent.find(".badge.price__badge-sale");
                var reg = convert.$(".price__sale > span > s.price-item.price-item--regular").text();
                var discounted = convert.$(".price__sale > .price-item.price-item--sale.price-item--last").text();
                targetEle.text(`Ahorra ${getPercentage(convertToNumber(discounted),convertToNumber(reg))}%`);
              }
            );
            waitForElement("#product-grid").then(() => {
              let children = convert.$(".product-grid").children(".grid__item");
              convert.$("#product-grid").map((index, item) => {
                for (let i = 0; i < children.length; i++) {
                  let currentChild = children[i];
                  var targetEle = convert.$(".card__badge.bottom.left .badge.badge--bottom-left.color-accent-2",currentChild);
                  var reg = convert.$(".price__sale > span > s.price-item.price-item--regular",currentChild).text();
                  var discounted = convert.$(".price__regular .price-item.price-item--regular",currentChild).text();
                  targetEle.text(`Ahorra ${getPercentage(convertToNumber(discounted),convertToNumber(reg))}%`);
                }
              });
            });
          });
        };

        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          handleSubChangeMutations(LoadTest);
        }
      });
    }
  });
})();
