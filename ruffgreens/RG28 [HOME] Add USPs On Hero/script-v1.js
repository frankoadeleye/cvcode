(() => {
  "use strict";
  const testInfo = {
    className: "rg-28-test",
    debug: 0,
    testName: "add-usp-on-hero",
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
          if(window.location.pathname == "/"){
            let uspSection = `<div class="usp-section"><div class="item"><span>1M+</span><span>Bags Shipped</span></div><div class="item"><span>200K+</span><span>Happy Customers</span></div><div class="item"><span>100%</span><span> Satisfaction Guarantee</span></div></div>`;
            convert.$(uspSection).insertAfter(`.section-wrapper .dw-topper .new-homepage .dw-top-text .themid`);
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
