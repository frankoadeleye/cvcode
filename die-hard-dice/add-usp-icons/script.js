(() => {
  "use strict";
  const testInfo = {
    className: "dhd-22-test",
    debug: 0,
    testName: "add-usb-icons",
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

        const uspIconsData = [
          {
            imgSrc:
              "https://cdn-3.convertexperiments.com/uf/1004931/10041718/dhd-cup.png",
            text: "No Compromises In Quality",
          },
          {
            imgSrc:
              "https://cdn-3.convertexperiments.com/uf/1004931/10041718/dhd-heart.png",
            text: "100% Satisfaction Guarantee",
          },
          {
            imgSrc:
              "https://cdn-3.convertexperiments.com/uf/1004931/10041718/dhd-bus.png",
            text: "Free Shipping Over $40 in USA",
          },
        ];

        const USPIcons = `<div class="usp-icons-container">${uspIconsData
          .map((item) => {
            return `<span class="usp-icon-item"><img src="${item.imgSrc}" alt="${item.text}" /> <span class="text">${item.text}</span></span>`;
          })
          .join("\n")}</div>`;

        const loadTest = () => {
          waitForElement(".collection-header").then(() => {
            convert.$("#collection-utilities").prepend(USPIcons);
          });
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
