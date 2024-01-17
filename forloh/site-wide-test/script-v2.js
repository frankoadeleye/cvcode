(() => {
  "use strict";
  const testInfo = {
    className: "forloh-test",
    debug: 0,
    testName: "site-wide-announcements",
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

            waitForElement('.site-wide-announcements a.announcement-link').then((element)=>{
              convert.$('.site-wide-announcements a.announcement-link .announcement-text').remove();
              convert.$('.site-wide-announcements a.announcement-link .announcement-link-text').html(`
              <span class="announcement-link-text">Free USA Shipping $125+ |<span><a href="https://forloh.com/collections/top-10-best-sellers">SHOP BEST SELLERS</a></span></span>`);
            });
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
