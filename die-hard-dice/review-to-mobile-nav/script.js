(() => {
  "use strict";
  const testInfo = {
    className: "dnd-23-test",
    debug: 0,
    testName: "review-to-mobile-nav",
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
          const mobNavReview = `<div class="mobile-review-wrap"><div class="reviewer"><img class="avatar" src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/mob-review-header.png" alt="" /><div class="about"><div class="name">Mike</div><img class="stars" src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/mob-review-star.png" alt="stars" /></div></div><p class="review-text">"In a word, Perfect. <br/><br/>This set (and all of the others that I've ordered from DHD) have met and exceeded all expectations.</p></div>`;

          convert.$(".dnd-23-test #offcanvas-menu .offcanvas-body").append(mobNavReview);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
