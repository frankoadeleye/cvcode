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
          let media ={
            tablet: "799px",
            phablet: "600px",
            mobile: '500px',
            xtraSmall: '375px',
          }

          if (window.matchMedia("(max-width: 799px)").matches) {
            let stickyCTA = `<div class="sticky-cta-container hide"><button>Save + Get Instant Access Today</button> </div>`;
            
            let scrollvalue = 0;
            const handleView = (value)=>{
              $(window).scroll(function () {
                if ((jQuery(window).scrollTop() - scrollvalue) > value) {
                  $('.sc-3-test .sticky-cta-container').removeClass('hide');
                }else{$('.sc-3-test .sticky-cta-container').addClass('hide');}
              });
            }

            let href = window.location.href;
            if(href.indexOf("/product") !== -1){
              convert.$('body').append(stickyCTA);
              if(window.matchMedia(`(max-width: ${media.tablet}`).matches)handleView(670);
              if(window.matchMedia(`(max-width: ${media.phablet}`).matches)handleView(580);
              if(window.matchMedia(`(max-width: ${media.mobile}`).matches)handleView(680);
              if(window.matchMedia(`(max-width: ${media.xtraSmall}`).matches)handleView(830);
              $(`.sticky-cta-container button`).click(function () {window.location = "https://scholistico.com/step/naturopathy-course/"});
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
