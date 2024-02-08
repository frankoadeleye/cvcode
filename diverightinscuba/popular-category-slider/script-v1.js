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
            const sliderData = [
              {
                img: "https://iili.io/JYWRKua.webp",
                title: {
                  name: "ALL SCUBA GEAR",
                  link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                },
                content: [
                  {
                    name: "DIVE COMPUTERS",
                    link: "https://www.diverightinscuba.com/gauges-c-394-2.html/",
                  },
                  {
                    name: "LIGHTS",
                    link: "https://www.diverightinscuba.com/lights-c-51.html/",
                  },
                  {
                    name: "BCDS",
                    link: "https://www.diverightinscuba.com/bcds-c-409.html/",
                  },
                  {
                    name: "REGULATORS",
                    link: "https://www.diverightinscuba.com/regulatorsoctos-c-86.html/",
                  },
                  {
                    name: "MASKS",
                    link: "https://www.diverightinscuba.com/masks-c-56.html/",
                  },
                  {
                    name: "TANKS",
                    link: "https://www.diverightinscuba.com/tanksaccys-c-141-2.html/",
                  },
                  {
                    name: "SEE ALL",
                    link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                  },
                ],
              },
              {
                img: "https://iili.io/JYWRqZv.webp",
                title: {
                  name: "TECHNICAL DIVING",
                  link: "https://www.diverightinscuba.com/techequipment-c-363.html/",
                },
                content: [
                  {
                    name: "ANALYZERS",
                    link: "https://www.diverightinscuba.com/analyzers.html/",
                  },
                  {
                    name: "CLIPS & SNAPS",
                    link: "https://www.diverightinscuba.com/techequipmentclipsandsnaps-c-363-410.html/",
                  },
                  {
                    name: "BP/W",
                    link: "https://www.diverightinscuba.com/techequipmentbackplatesandpads-c-363-366.html/",
                  },
                  {
                    name: "TECH REGULATORS",
                    link: "https://www.diverightinscuba.com/tech-regs.html/",
                  },
                  {
                    name: "TECH COMPUTERS",
                    link: "https://www.diverightinscuba.com/techequipmenttechnicalcomputers-c-363-433.html/",
                  },
                  {
                    name: "SCOOTERS",
                    link: "https://www.diverightinscuba.com/techequipmenttechnicalcomputers-c-363-433.html/",
                  },
                  {
                    name: "SEE ALL",
                    link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                  },
                ],
              },
              {
                img: "https://iili.io/JYWRnGp.webp",
                title: {
                  name: "EXPOSURE GEAR",
                  link: "https://www.diverightinscuba.com/exposure-gear.html/",
                },
                content: [
                  {
                    name: "DRY SUIT",
                    link: "https://www.diverightinscuba.com/techequipmenttechnicalcomputers-c-363-433.html/",
                  },
                  {
                    name: "DRYGLOVES",
                    link: "https://www.diverightinscuba.com/drysuitsundiesdrysuitgloves-c-270-428.html/",
                  },
                  {
                    name: "UNDERGARMENTS",
                    link: "https://www.diverightinscuba.com/drysuitsundiesundergarments-c-270-271.html/",
                  },
                  {
                    name: "WETSUITS",
                    link: "https://www.diverightinscuba.com/wetsuits-c-116.html/",
                  },
                  {
                    name: "BOOTS",
                    link: "https://www.diverightinscuba.com/drysuitsundiesaccessories-c-270-273.html/",
                  },
                  {
                    name: "ACCESSORIES",
                    link: "https://www.diverightinscuba.com/drysuitsundiesaccessories-c-270-273.html/",
                  },
                  {
                    name: "SEE ALL",
                    link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                  },
                ],
              },
              {
                img: "https://iili.io/JYWRT8X.webp",
                title: {
                  name: "SNORKELING GEAR",
                  link: "https://www.diverightinscuba.com/snorkelingstuff-c-197.html/",
                },
                content: [
                  {
                    name: "FINS",
                    link: "https://www.diverightinscuba.com/snorkelingstufffins-c-197-445.html/",
                  },
                  {
                    name: "MASKS",
                    link: "https://www.diverightinscuba.com/snorkelingstuffmasks-c-197-443.html/",
                  },
                  {
                    name: "SNORKELING",
                    link: "https://www.diverightinscuba.com/snorkelingstuffsnorkels-c-197-444.html/",
                  },
                  {
                    name: "SNOKRKELING PACKAGES",
                    link: "https://www.diverightinscuba.com/snorkelingstuffsnorkelingpackages-c-197-446.html/",
                  },
                  {
                    name: "SNORKELING VESTS",
                    link: "https://www.diverightinscuba.com/snorkelingstuffsnorkelingvests-c-197-442.html/",
                  },
                  {
                    name: "SEE ALL",
                    link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                  },
                ],
              },
              {
                img: "https://iili.io/JYWRcMl.webp",
                title: {
                  name: "PSD & MILITARY",
                  link: "https://www.diverightinscuba.com/publicsafety-c-412.html/",
                },
                content: [
                  {
                    name: "DIVE RESCUE GEAR",
                    link: "https://www.diverightinscuba.com/publicsafetydivingequipment-c-412-452.html/",
                  },
                  {
                    name: "SURFACE RESCUE GEAR",
                    link: "https://www.diverightinscuba.com/publicsafety-c-412.html/",
                  },
                  {
                    name: "CLASSES",
                    link: "https://www.diverightinscuba.com/publicsafety-c-412.html#pub-sd/",
                  },
                  {
                    name: "REPAIRS",
                    link: "https://www.diverightinscuba.com/publicsafetypfd-c-412-451.html/",
                  },
                  {
                    name: "SEE ALL",
                    link: "https://www.diverightinscuba.com/recreational-scuba.html/",
                  },
                ],
              },
            ];

            const singleSlideHtml = ({ img, title, content }, index) =>
              `<div class="swiper-slide"><img class="slider-img" src="${img}" alt="${
                title.name
              }"><h2 class="slider-title"><a href='${title.link}'>${
                title.name
              }</a></h2><p class="slider-content">${content
                .map(
                  (item) =>
                    `<span><a href='${item.link}'>${item.name}</a></span>`
                )
                .join("\n")}</p></div>`;

            const slider = `
                  <div class="swiper mySwiper">
                      <div class="swiper-wrapper">
                        ${sliderData
                          .map((data, i) => singleSlideHtml(data, i))
                          .join("\n")}
                      </div>
                      <div class="swiper-button-prev">
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
                      slidesPerView: 2,
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
