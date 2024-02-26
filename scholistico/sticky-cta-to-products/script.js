(() => {
  "use strict";
  const testInfo = {
    className: "sc-3-test",
    debug: 0,
    testName: "sticky-cta-to-products",
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
         if (window.matchMedia("(max-width: 799px)").matches) {
             var fixTop = jQuery(
              '.elementor-widget-wrap > div.elementor-widget-button[data-widget_type="button.default"].elementor-mobile-align-center .elementor-button:first'
            ).offset().top;

            let href = window.location.href;
            if (href.indexOf("/product") !== -1) {

            jQuery(window).scroll(function (e) {
              var currentScroll = jQuery(window).scrollTop();
                if (currentScroll >= fixTop) {
                  jQuery("body").addClass("sticky-nav");
                  jQuery(`.elementor-widget-wrap > div.elementor-widget-button[data-widget_type="button.default"].elementor-mobile-align-center .elementor-button-text`).text('Save + Get Instant Access Today');
                } else {
                  jQuery("body").removeClass("sticky-nav");
                }
              });
            }
          }
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();

jQuery(`.elementor-widget-wrap > div.elementor-widget-button[data-widget_type="button.default"].elementor-mobile-align-center .elementor-button-text`)