(() => {
  "use strict";
 const testInfo = {
    className: "ashanderie-cart-v2-test",
    debug: 0,
    testName: "cart-features",
    testVersion: "0.0.2",
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
        const loadTest = () => {
          convert.$(document).ready(function () {
           if(convert.$('.cart-items .cart__item')){
            convert.$('.additional-checkout-buttons.additional-checkout-buttons--vertical').remove();
            let infoContent = ['FREE 30-DAY RETURNS', 'FREE US SHIPPING'];
            const infoElements = `<div class="shipping-info">${infoContent.map(item=>{
              return `<div class="shipping-info-item"><img src="https://iili.io/J1Ck9QS.png" alt="${item}" /> ${item}</div>`}).join("\n")}</div>`;
            convert.$(infoElements).insertBefore(".drawer__inner .drawer__footer");
           }
          });
        };
        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
