(() => {
  "use strict";
  const testInfo = {
    className: "ae-4-test",
    debug: 0,
    testName: "blog-add-sticky-cta",
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

        let href = window.location.href;

        const loadTest = () => {
            let stickBlogCTA = `<div class="explore-products-cta"><a href="/collections/shop-all-clothes">Explore All Products</a></div>`;
            convert.$(`body.ae-4-test`).append(stickBlogCTA);
        };

        if (!convert.$("body").hasClass(testInfo.className) && href.indexOf("/blogs/") !== -1) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
