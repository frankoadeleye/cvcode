(() => {
  "use strict";
  const testInfo = {
    className: "one-quiet-mind-test",
    debug: 0,
    testName: "thumbnail-slider",
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
            const sliderDataBlue = [
              {
                imgSrc: "https://iili.io/J55uDjp.webp",
              },
              {
                imgSrc: "https://iili.io/J55lhdP.webp",
              },
              {
                imgSrc: "https://iili.io/J556PIe.webp",
              },
              {
                imgSrc: "https://iili.io/J556trQ.webp",
              },
              {
                imgSrc: "https://iili.io/J55PJhg.webp",
              },
              {
                imgSrc: "https://iili.io/J55PBYN.webp",
              },
            ];

            const SwiperSlideItem = (imgSrc) =>
              `<div class="swiper-slide">
		          <img src="${imgSrc}" />
		        </div>`;

            const Slider = `
               <div
			      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" navigation="true"
			      class="swiper mySwiper2"
			    >
			      <div class="swiper-wrapper">
			         ${sliderDataBlue
                 .map((item) => {
                   return SwiperSlideItem(item.imgSrc);
                 })
                 .join("")}
			      </div>
			      <div class="swiper-button-next"></div>
			      <div class="swiper-button-prev"></div>
			    </div>
			    <div thumbsSlider="" class="swiper mySwiper">
			      <div class="swiper-wrapper">
			         ${sliderDataBlue
                 .map((item) => {
                   return SwiperSlideItem(item.imgSrc);
                 })
                 .join("")}
			      </div>
			    </div>
              `;

            jQuery.getScript(
              "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
              () => {
                new Swiper(".mySwiper2", {
                  spaceBetween: 10,
                  pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {},
                  thumbs: {
                    swiper: new Swiper(".mySwiper", {
                      spaceBetween: 10,
                      slidesPerView: sliderDataBlue.length,
                      freeMode: true,
                      navigation: true,
                      watchSlidesProgress: true,
                    }),
                  },
                });
              }
            );

            convert
              .$(
                ".product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile"
              )
              .append(Slider);
          });
        };

        if (!convert.$("body").hasClass("thumbnail-slider")) {
          convert.$("body").addClass("thumbnail-slider");
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
