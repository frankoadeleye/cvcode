(() => {
  "use strict";
  const testInfo = {
    className: "forloh-test",
    debug: 0,
    testName: "happy-customer-section",
    testVersion: "0.0.1",
  };
  const jQueryInterval = setInterval(() => {
    if (typeof jQuery != "undefined") {
      clearInterval(jQueryInterval);
      jQuery(document).ready(() => {
        const classAllocation = (selector) => {
          jQuery(selector).each((i, ele) => {
            jQuery(ele).addClass(`section-${i}`);
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
          $(document).ready(function () {
            $(".shopify-section.index-section.collection-list-sec").append(
              '<div class="happy-customers">' +
                '<div class="page-width for-happy-cus">' +
                '<div class="section-header">' +
                '<h2 class="section-header__title">Over 3,800+ Happy Customers</h2>' +
                '<a href="/" class="btn btn--secondary btn--small section-header__link">View all</a>' +
                "</div>" +
                '<div class="happy-cus-carousel-item">' +
                '<img class="happy-cus-carousel-item-img" src="https://iili.io/JRU8Tba.png" />' +
                '<div class="happy-cus-carousel-item-title">Great Jacket</div>' +
                '<div class="happy-cus-carousel-paragraph">' +
                "?The jacket fits just as I would like for a mid layer. I have worn it around town several times and it keeps me warmer than I thought it would. Looking forward to using it this fall during hunting season.? - <span>Jacob J.</span>" +
                "</div>" +
                "</div>" +
                '<div class="happy-cus-carousel-navigator">' +
                '<img src="https://iili.io/JRU49wX.png" alt="left-arrow" class="left-arrow" />' +
                "<span>1/3</span>" +
                '<img src="https://iili.io/JRU4Htn.png" alt="right-arrow" class="right-arrow" />' +
                "</div>" +
                "</div>" +
                "</div>"
            );
          });
        };
        if (!jQuery("body").hasClass("happy-cus-v1-test")) {
          jQuery("body").addClass("happy-cus-v1-test");
          loadTest();
        }
      });
    }
  });
})();
