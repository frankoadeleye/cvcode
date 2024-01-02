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
              `<swiper-slide>
              <img src="${imgSrc}" />
            </swiper-slide>`;

            const Slider = `
            <div class="slider-container">
              <swiper-container
                style="--swiper-navigation-color: blue; --swiper-pagination-color: #fff"
                class="mySwiper"
                thumbs-swiper=".mySwiper2"
                space-between="0"
                navigation="true"
              >
                  ${sliderDataBlue
                    .map((item) => {
                      return SwiperSlideItem(item.imgSrc);
                    })
                    .join("")}
              </swiper-container>
              <swiper-container
                class="mySwiper2"
                space-between="10"
                slides-per-view="${sliderDataBlue.length}"
                free-mode="true"
                watch-slides-progress="true"
              >
                  ${sliderDataBlue
                    .map((item) => {
                      return SwiperSlideItem(item.imgSrc);
                    })
                    .join("")}
              </swiper-container>
            </div>`;

            convert
              .$(
                ".product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile > li"
              )
              .remove();
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
              '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">'
            )
            .appendTo("head");
          convert
            .$(
              '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>'
            )
            .appendTo("body");
          loadTest();
        }
      });
    }
  });
})();
