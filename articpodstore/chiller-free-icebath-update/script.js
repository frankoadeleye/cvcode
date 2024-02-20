(() => {
  "use strict";
  const testInfo = {
    className: "ap-28-test",
    debug: 0,
    testName: "chiller-free-icebath-update",
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
        	
         let waterChillerImage = `<img class="gf_product-image gf_featured-image" src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/water-chiller-new.png" data-zoom="//arcticpodstore.com/cdn/shop/files/NEWChillerProductPic_2048x2048.png?v=1704969439" alt="ArcticPod™ Water Chiller for Ice Bath" natural-width="1000" natural-height="1000" width="1000" height="1000" data-width="100%" data-height="auto" style="width: 100%; height: auto">`
          convert
            .$(
              `.`
            )
            .remove();
            
            convert.$(`.`).append(waterChillerImage);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
