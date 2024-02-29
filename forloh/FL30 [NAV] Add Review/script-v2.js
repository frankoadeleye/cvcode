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
                  let navCustomerReview = `<div class="guarantee-quote"><div class="title"> <img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/card.png" alt="card-image" /> 100% American Made</div><p class="review">Raw goods sourcing, fabric creation, cut and sew, printing, and distribution are all done in the USA. We are 100% American Made.</p></div>`;
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