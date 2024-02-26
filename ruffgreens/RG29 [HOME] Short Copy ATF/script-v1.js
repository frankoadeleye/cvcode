(() => {
  "use strict";
  const testInfo = {
    className: "rg-29-test",
    debug: 0,
    testName: "short-copy-ATF",
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
            convert.$(`.section-wrapper .dw-topper .dw-top-text .font48.thetop`).text('TRY RUFFGREENS FOR FREE');
            convert.$(`.section-wrapper .dw-topper .dw-top-text .Sub-title`).html(`The <span class="lg fattest">#1 Food Supplement</span> For Dogs`);
            convert.$(`.section-wrapper .dw-topper .dw-top-text .themid`).html(`<p class="themid  ">Improve your dog's skin, coat, digestion, energy, and joint mobility in one easy scoop per day. <span>SOURCED AND MADE IN USA with Live Vitamins, Minerals, Probiotics, Digestive Enzymes, Omega Oils and Anti-Oxidants all in a delicious blend that Dogs Love.</span></p>`);
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
