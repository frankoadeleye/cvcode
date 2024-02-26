(() => {
  "use strict";
  const testInfo = {
    className: "fl-30-test",
    debug: 0,
    testName: "nav-review",
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
         let navCustomerReview = `<div class="nav-customer-review">
              <img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/stars-fl.png" alt="review-stars" class="stars" />
              <p class="review">“I just love my new Airlite jacket. It's perfect for a chilly, foggy morning on the water in South Louisiana. And it's made in the USA!!!”</p><div class="reviewer"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/reviewer-fl.png" alt="" class="avatar" /><div class="details"><div class="name">Daniel L, Louisiana </div><div class="status"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/verify-logo-fl.png" alt="" class="check" />Verified Customer Review</div></div> </div>
         </div>`;

         convert.$(`.page-container .transition-body .drawer .drawer__contents   .drawer__scrollable`).append(navCustomerReview);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
