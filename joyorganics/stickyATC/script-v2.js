(() => {
  "use strict";
  const testInfo = {
    className: "joyorganics-test",
    debug: 0,
    testName: "sticky-atc",
    testVersion: "0.0.2",
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

           waitForElement('body.product').then(element=>{
           	 let stickyATCBtn = convert.$(`<button class="sticky-atc-button">Add to Cart</button>`);
           	 convert.$('body').append(stickyATCBtn);
            
            $('.product_section.js-product_section.container').attr('id', 'product-details');
            stickyATCBtn.click(function() {$('html, body').animate({scrollTop: $("#product-details #rc_container").offset().top}, 0);});
            
           })
           
          })
          
        };
        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          loadTest();
        }
      });
    }
  });
})();
