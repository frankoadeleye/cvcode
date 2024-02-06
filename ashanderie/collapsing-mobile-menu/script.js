(() => {
  "use strict";
  const testInfo = {
    className: "ashanderie-collapsing-menu-v1-test",
    debug: 0,
    testName: "collapsing-menu",
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
            if (window.matchMedia("(max-width: 959px)").matches) {
                let btn = convert.$('.mobile-nav .mobile-nav__item .mobile-nav__child-item button');
                btn.attr('aria-expanded','false');
                btn.removeClass('is-open');
                let expandedArea = convert.$('.mobile-nav .mobile-nav__item .mobile-nav__sublist');
                expandedArea.removeClass('is-open');
                expandedArea.css("height","0");
            }
          });
        };
        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          convert
            .$(
              '<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">'
            )
            .appendTo("head");
          loadTest();
        }
      });
    }
  });
})();
