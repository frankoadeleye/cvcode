(() => {
  "use strict";
  const testInfo = {
    className: "ae-7-test",
    debug: 0,
    testName: "collections-and-pills",
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
            let tilesArray = [
              {
                value: "PANTS & SHORTS",
                id: "pants-and-shorts",
              },
              {
                value: "SALE ITEMS",
                id: "sale-item",
              },
              {
                value: "LOUNGEWEAR",
                id: "loungewear",
              },
              {
                value: "SWEATERS & OUTERWEAR",
                id: "sweaters-and-outwear",
              },
              {
                value: "ATHLEISURE",
                id: "athleisure",
              },
              {
                value: "BUTTON DOWN SHIRTS",
                id: "button-down-shirts",
              },
              {
                value: "T-SHIRTS, HENLEYS, & POLOS",
                id: "t-shirts-and-polos",
              },
            ];

            let tiles = `
                    <ul class="tiles-wrapper">
                      ${tilesArray
                        .map((tile) => {
                          return `<li class="tile-item" id="${tile.id}">${tile.value}</li>`;
                        })
                        .join("\n")}
                    </ul>
          `;

            const slider = `<div class="swiper mySwiper"><div class="swiper-wrapper tiles-wrapper">${tilesArray
              .map((tile) => {
                return `<div class="tile-item swiper-slide" id="${tile.id}">${tile.value}</div>`;
              })
              .join(
                "\n"
              )}</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>`;

            jQuery.getScript(
              "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
              () => {
                new Swiper(".mySwiper", {
                  loop: true,
                  slidesPerView: 3,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                });
              }
            );

            if (window.matchMedia("(max-width: 767px)").matches) {
              convert.$(".collection-content").prepend(slider);
            } else {
              convert.$(".collection-content").prepend(tiles);
            }

            convert.$(".tiles-wrapper").on("click", handler);
            function handler(event) {
              convert.$(`.tile-item`).removeClass("active");
              var target = convert.$(event.target);
              console.log(target);
              if (target.is(".tile-item")) {
                target.addClass("active");
              }
            }
          });
        };
        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
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
