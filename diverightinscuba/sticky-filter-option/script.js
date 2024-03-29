(() => {
  "use strict";
  const testInfo = {
    className: "dris-25-test",
    debug: 0,
    testName: "sticky-filter-options",
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
          if (window.matchMedia("(max-width: 767px)").matches) {

            if (!convert.$(".subcat_list .subcat_list_inner")[0]) {
              if (convert.$('.page-wrapper #maincontent #searchspring-content .ss__content .ss-slidebout-button.ss-isMobile').length) {
                let stickyOptions = `<div class="sticky-options-wrap">
                <div class="button">FILTER YOUR OPTIONS</div></div>`
                convert.$('.page-wrapper .page-header').append(stickyOptions);
                convert.$(".page-wrapper .page-header .sticky-options-wrap").click(function () { convert.$('.page-wrapper #maincontent #searchspring-content .ss__content .ss-slidebout-button.ss-isMobile').trigger("click") });
                convert.$('.page-wrapper .page-header .sticky-options-wrap').hide();
                
                var scrollvalue = convert.$('.dris-25-test .ss-slidebout-button.ss-isMobile').offset().top;;
                convert.$(window).scroll(function () {
                  if ((convert.$(window).scrollTop() - scrollvalue) > 10) {
                    convert.$('.page-wrapper .page-header .sticky-options-wrap').show();
                  } else {
                    convert.$('.page-wrapper .page-header .sticky-options-wrap').hide();
                  }
                });
              } else {
                convert.$('.page-wrapper .page-header .sticky-options-wrap').remove();
              }
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