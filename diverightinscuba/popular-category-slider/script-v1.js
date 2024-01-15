(() => {
  "use strict";
  const testInfo = {
    className: "forloh-test",
    debug: 0,
    testName: "popular-cat-slider",
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
            alert("I am here or am I??");
            const sliderData = [
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "ALL SCUBA GEAR",
                content: `anauvzers | cupsa swaps | sew TECH REGULATORS | TECH COMPUTERS scoorens | seeaw`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "TECHNICAL DIVING",
                content: `anauvzers | cupsa swaps | sew TECH REGULATORS | TECH COMPUTERS scoorens | seeaw`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "EXPOSURE GEAR",
                content: `anauvzers | cupsa swaps | sew TECH REGULATORS | TECH COMPUTERS scoorens | seeaw`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "EXPOSURE GEAR",
                content: `anauvzers | cupsa swaps | sew TECH REGULATORS | TECH COMPUTERS scoorens | seeaw`,
              },
              {
                img: "https://iili.io/JRU8Tba.png",
                title: "TECHNICAL DIVING",
                content: `anauvzers | cupsa swaps | sew TECH REGULATORS | TECH COMPUTERS scoorens | seeaw`,
              },
            ];

            const singleSlideHtml = ({ img, title, content }, index) =>
              `<div class="swiper-slide"><img class="slider-img" src="${img}" alt="${title}"><h2 class="slider-title">${title}</h2><p class="slider-content">${content}</p></div>`;

            const slider = `
                  <div class="swiper mySwiper">
                      <div class="swiper-wrapper">
                        ${sliderData
                          .map((data, i) => singleSlideHtml(data, i))
                          .join("\n")}
                      </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="39" viewBox="0 0 36 39" fill="none">
						  <path d="M28.5 18L7.5 18" stroke="#1C1C1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						  <path d="M18 28.5L7.5 18L18 7.5" stroke="#1C1C1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
                      </div>
                      <div class="swiper-button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9"
                          viewBox="0 0 5 9" fill="none">
                          <rect width="1.06849" height="5.99956"
                            transform="matrix(0.707107 0.707107 0.707107 -0.707107 0 7.91745)" fill="black" />
                          <rect x="0.0512695" y="0.733765" width="1.06849" height="6.07516"
                            transform="rotate(-43.3719 0.0512695 0.733765)" fill="black" />
                        </svg>
                      </div>
                  </div>
            `;

            convert.$(".category.owl-carousel.owl-theme.owl-loaded").remove();

            convert.$(".flex-container.custom-container").append(slider);
            jQuery.getScript(
              "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
              () => {
                new Swiper(".mySwiper", {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "none",
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
        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          convert
            .$(
              '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />'
            )
            .appendTo("head");
          loadTest();
        }
      });
    }
  });
})();
