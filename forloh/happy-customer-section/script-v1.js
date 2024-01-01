(() => {
  "use strict";
  const testInfo = {
    className: "forloh-test",
    debug: 0,
    testName: "happy-customer-section",
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
            classAllocation(".happy-cus-test");
            const sliderData = [
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "Great Jacket",
                content: `“Doesn't feel bulky or heavy & dries out literally in minutes when becoming wet. Wore in 20 degree temperatures in 30 to 50 mph winds & I never got cold & the wind never cut through.” - <strong>Mathew T.</strong>`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "Great Jacket",
                content: `“Doesn't feel bulky or heavy & dries out literally in minutes when becoming wet. Wore in 20 degree temperatures in 30 to 50 mph winds & I never got cold & the wind never cut through.” - <strong>Mathew T.</strong>`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "Great Jacket",
                content: `“Doesn't feel bulky or heavy & dries out literally in minutes when becoming wet. Wore in 20 degree temperatures in 30 to 50 mph winds & I never got cold & the wind never cut through.” - <strong>Mathew T.</strong>`,
              },
            ];

            const singleSlideHtml = ({ img, title, content }, index) =>
              `<div class="slide-${
                index + 1
              } swiper-slide"><img class="slider-img" src="${img}" alt="${title}"><h2 class="slider-title">${title}</h2><p class="slider-content">${content}</p></div>`;
            const slider = `<div class="custom-slider-wrapper"><div class="main-slider"><h2 class="section-title section-header__title">Over 3,800+ Happy Customers</h2><a class="read-review-cta btn btn--secondary btn--small section-header__link" href="/pages/reviews">Read reviews<a><div class="swiper customSwiper"><div class="swiper-wrapper">${sliderData
              .map((data, i) => singleSlideHtml(data, i))
              .join(
                "\n"
              )}</div><div class="swiper-pagination"></div><div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="none"><rect width="1.06849" height="5.99956" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 5 0.755524)" fill="black" /><rect x="4.94873" y="7.93921" width="1.06849" height="6.07516" transform="rotate(136.628 4.94873 7.93921)" fill="black" /></svg></div><div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="none"><rect width="1.06849" height="5.99956" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.91745)" fill="black" /><rect x="0.0512695" y="0.733765" width="1.06849" height="6.07516" transform="rotate(-43.3719 0.0512695 0.733765)" fill="black" /></svg></div></div></div>`;

            convert
              .$(slider)
              .insertAfter(
                ".shopify-section.index-section.collection-list-sec"
              );
            jQuery.getScript(
              "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
              () => {
                new Swiper(".customSwiper", {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    310: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  },
                });
              }
            );
          });
        };
        if (!convert.$("body").hasClass("happy-cus-test")) {
          convert.$("body").addClass("happy-cus-test");
          convert
            .$(
              '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>'
            )
            .appendTo("head");
          loadTest();
        }
      });
    }
  });
})();
