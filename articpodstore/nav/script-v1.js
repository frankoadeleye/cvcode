(() => {
  "use strict";
  const testInfo = {
    className: "articpodstore-test",
    debug: 0,
    testName: "artic-sidebar",
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
          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);
            const divider = `<div class="sidebar-divider"></div>`;
            const review = `<div class="sidebar-review-section">
                            ${divider}
                            <img src="https://i.ibb.co/1qR9BpL/stars.png" class="stars" alt="stars" border="0" />
                            <p class="review-text">"I use my ArcticPod everyday! I'd recommend to anyone into fitness looking to      improve their recovery like me or for the mental benefits."
                            </p>
                            <div class="reviewer-section">
                              <img src="https://i.ibb.co/V347wxZ/image-3.png" alt="reviewer-image" />
                              <div class="reviewer-details">
                               <p class="name">James G, Texas</p>
                               <span>
                                <img src="https://i.ibb.co/pPbNwhj/check.png" alt="verified-icon" />
                                Verified Customer Review
                               </span>
                              </div>
                            </div>
                            ${divider}
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
