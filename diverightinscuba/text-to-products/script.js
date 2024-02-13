(() => {
  "use strict";
  const testInfo = {
    className: "dris-24-test",
    debug: 0,
    testName: "financing-available-text",
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

        const convertToNumberType = (variable) => {
          let withoutComma = variable.replace(/\,/g, "");
          let withoutCurrencySymbol = withoutComma.replace("$", "");
          let withoutEmpty = withoutCurrencySymbol.replace(" ", "");
          let toNum = parseInt(withoutEmpty, 10);

          return toNum;
        };

        const ProductLabel = (text) => `<div class="product-label">${text}</div>`;

        const loadTest = () => {
          waitForElement(".products.wrapper.grid.products-grid").then(() => {
            let children = convert.$(".ss__results.products.list.items.product-items").children(".ss__result.item.product.product-item");
            convert.$(".ss__results.products.list.items.product-items")
              .map((index, item) => {
                for (let i = 0; i < children.length; i++) {
                  let currentChild = children[i];
                  let currentAmount = convert.$(".product.details.product-item-details .item-price .price-wrapper .price span.ss__price:first-child",currentChild).text();
                  if (convertToNumberType(currentAmount) >= 1000) {convert.$(".product.details.product-item-details .item-price",currentChild).append(ProductLabel("0% FINANCING AVAILABLE"));
                  }
                }
              });
          });
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
          (function (history) {
            var pushState = history.pushState;
            history.pushState = function (state) {
              setTimeout(() => {loadTest();
                convert.$(".product.details.product-item-details .item-price .product-label:not(:first-child)").remove()}, 1000);
              return pushState.apply(history, arguments);
            };
          })(window.history);
        }
      });
    }
  });
})();
