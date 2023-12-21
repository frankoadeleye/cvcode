(() => {
  "use strict";
  const testInfo = {
    className: "dhHenryWatches-homepage-primaryColor-v1-test",
    debug: 0,
    testName: "test",
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
          //Please write your jQuery code
          /**
           * Instead of jQuery or $ please use convert.$
           */
        };
        if (!convert.$("body").hasClass("dh-primary-color-test")) {
          convert.$("body").addClass("dh-primary-color-test");
          loadTest();
        }
      });
    }
  });
})();
