(() => {
  "use strict";
  const testInfo = {
    className: "rg-27-test",
    debug: 0,
    testName: "display-number-of-servings",
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

        const loadTest = () => {
          let servings = ['5 Servings','28 Servings','28 Servings']
          let href = window.location.href;
          let servingsBtn = (amount)=> `<button class="servings-btn">${amount}</button>`;
          if(href.indexOf(`/pages/risk-free-trial-new`) > -1){
            if (window.matchMedia("(max-width: 767px)").matches) {
              jQuery('.flex-good .good-column .good-column-inner .good-top').each(function (index) {jQuery(this).append(servingsBtn(servings[index]));});
            }else{
              jQuery('.flex-good .good-column .good-column-inner .good-inner .good-img').each(function (index) {jQuery(this).append(servingsBtn(servings[index]));
              });
            }
          }
        }

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
