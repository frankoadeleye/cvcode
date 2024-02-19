(() => {
  "use strict";
  const testInfo = {
    className: "rg-34-test",
    debug: 0,
    testName: "authority-image",
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
            let authImagesSection = `<div class="auth_images_section"><div class="review"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/rg-ratings-star.png" alt="ratings" />
                <p class="text"><b>Loved</b> by <b>your favorite</b> voices</p></div>
              <div class="reviewers-wrap"><div class="reviewer"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/reviewer1.png" alt="reviewer-1" /> <p class="review-text">The Glenn Beck Program</p></div>
              <div class="reviewer"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/reviewer2.png" alt="reviewer-2" /> <p class="review-text">Comments Section with Brett Cooper</p> </div>
              <div class="reviewer"><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/reviewer3.png" alt="reviewer-3" /> <p class="review-text">The Jesse Kelly Show</p> </div></div>
            </div>`;
          convert.$(`.section-wrapper .home-newest .dw-topper .new-homepage .dw-top-text`).append(authImagesSection);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
