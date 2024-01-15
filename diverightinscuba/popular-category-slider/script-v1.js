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
                        <img class="onhover" src="https://iili.io/JYVQjUb.jpg" alt="" />
                      </div>
                      <div class="swiper-button-next">
                        
                      </div>
                  </div>
            `;

            convert
              .$(
                ".category-section.new-category-section > .flex-container.custom-container"
              )
              .append(slider);
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
                    400: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
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
