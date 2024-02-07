(() => {
  "use strict";
 const testInfo = {
    className: "goldielocks-usp-v1-test",
    debug: 0,
    testName: "usp-positioning",
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
          convert.$(document).ready(function () {
           let uspElement = `<img src="https://iili.io/J1fZ4Rt.png" class="usp-element"  alt="usp" />`;
           
           if(window.matchMedia("(max-width: 959px)").matches) uspElement = `<img src="https://iili.io/J1ftoe1.png" class="usp-element"  alt="usp" />`;
            
            convert.$('#product-accordion').prepend(uspElement);
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
