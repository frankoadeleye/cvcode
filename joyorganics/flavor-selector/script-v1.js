(() => {
  "use strict";
  const testInfo = {
    className: "joyorganic-test",
    debug: 0,
    testName: "flavor-selector",
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
            classAllocation(testInfo.testName);
            const flavorSelector = `
            <select class="selector-dropdown flavor">
              <option value="">Strawberry Lemonade 30 Pack 25mg</option>
              <option value="">Strawberry Lemonade 30 Pack 10mg</option>
              <option value="">Green Apple 30 Pack 10mg</option>
            </select>
            `;

            convert
              .$(".price.price--large.price--on-sale")
              .append(flavorSelector);
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
