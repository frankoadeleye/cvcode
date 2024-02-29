(() => {
  "use strict";
  const testInfo = {
    className: "ae-1-test",
    debug: 0,
    testName: "rearrange-collections-tiles",
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
        	let PantsAndJeans = convert.$(`.page-container .main-content .shopify-section .promo-grid .flex-grid .flex-grid__item:has(> .promo-grid__container > a[aria-label="Shop Pants & Jeans"]`);
        	let TeesHenleysAndPolos = convert.$(`.page-container .main-content .shopify-section .promo-grid .flex-grid .flex-grid__item:has(> .promo-grid__container > a[aria-label="Shop Tees, Henleys, & Polos"]`);
          convert.$(`.page-container .main-content .shopify-section .promo-grid .flex-grid`).prepend(PantsAndJeans);
          convert.$(TeesHenleysAndPolos).insertAfter(`.page-container .main-content .shopify-section .promo-grid .flex-grid .flex-grid__item:has(> .promo-grid__container > a[aria-label="Shop New Loungewear"]`);
        };

        if (!convert.$("body").hasClass(testInfo.className) && window.matchMedia("(max-width: 768px)").matches && window.location.pathname == "/") {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
