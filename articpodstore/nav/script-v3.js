(() => {
  "use strict";
  const testInfo = {
    className: "articpodstore-test",
    debug: 0,
    testName: "artic-sidebar",
    testVersion: "0.0.3",
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
            const divider = `<div class="sidebar-divider"></div>`;
            const review = `<div class="sidebar-review-section">
                            ${divider}
                            <div><img src="https://i.ibb.co/1J3zFPr/thumbs-up-1.png"  alt="thumbs-up" />Loved by 10,000+ Plungers</div>
                            <div><img src="https://i.ibb.co/5kkSZfX/shipping-box-icon.png"  alt="thumbs-up" />Free 2-5 Day US Shipping</div>
                            <div><img src="https://i.ibb.co/tcHYz6N/shield-icon.png"  alt="thumbs-up" />30-Day Money Back Guarantee</div>
            <div>`;

            convert.$(".drawer__inner.drawer-left__inner").append(review);
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
