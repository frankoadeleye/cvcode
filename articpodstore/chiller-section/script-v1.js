(() => {
  "use strict";
  const testInfo = {
    className: "articpodstore-test",
    debug: 0,
    testName: "artic-product-chiller-section",
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
            const chillerSection = `
            <div class="chiller-section">
              <div class="chiller-text-sectn">
               <p>never need ice again</p>
               <p>Fast-Cooling Chiller For Your Pod</p>
               <button><a href="https://arcticpodstore.com/products/arcticpod%E2%84%A2-water-chiller">Shop Water Chiller</a></button>
              </div>
              <img src="https://iili.io/JlJYYkG.png" alt="prod-image" />
            </div>`;

            convert.$("#e-1693584511550").append(chillerSection);
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
