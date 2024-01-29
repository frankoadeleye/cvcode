(() => {
  "use strict";
  const testInfo = {
    className: "articpodstore-test",
    debug: 0,
    testName: "ann-bar-usp",
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
            const sliderData = [
              {
                html: `<p class="swiper-slide announcement-bar__message">FREE 2-5 DAY US SHIPPING</p>`,
              },
              {
                html: `<p class="swiper-slide announcement-bar__message">30-DAY MONEY BACK GUARANTEE</p>`,
              },
              {
                html: `<p class="swiper-slide announcement-bar__message">LOVED BY 10,000+ PLUNGERS <img src="https://i.ibb.co/1qR9BpL/stars.png" alt="stars" border="0" /></p>`,
              },
              {
                html: `<p class="swiper-slide announcement-bar__message">24/7 SUPPORT, WE'LL RESOLVE ANY ISSUES</p>`,
              },
            ];

            const vertPartition = `<span class="vert-partition"></span>`;

            const singleSlideHtml = ({ html }, index) => html;
            const slider = `<div class="swiper mySwiper"><div class="swiper-wrapper">${sliderData
              .map((data, i) => singleSlideHtml(data, i))
              .join(
                "\n"
              )}</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>`;

            const annRow = `<p class="announcement-bar__message ann-row"><span>FREE 2-5 DAY US SHIPPING</span>
                             ${vertPartition}<span>30-DAY MONEY BACK GUARANTEE</span>${vertPartition}
                             <span>LOVED BY 10,000+ PLUNGERS <img src="https://i.ibb.co/1qR9BpL/stars.png" alt="stars" border="0" /></span>
                             ${vertPartition}<span>24/7 SUPPORT, WE'LL RESOLVE ANY ISSUES</span>
                           </p>`;

            convert
              .$(".announcement-bar")
              .html(`<div class="ann-column">${slider}${annRow}</div>`);
            jQuery.getScript(
              "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
              () => {
                new Swiper(".mySwiper", {
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                  },
                });
              }
            );
          });
        };
        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          convert
            .$(
              '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>'
            )
            .appendTo("head");
          loadTest();
        }
      });
    }
  });
})();
