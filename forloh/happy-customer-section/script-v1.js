(() => {
  "use strict";
  const testInfo = {
    className: "forloh-test",
    debug: 0,
    testName: "happy-customer-section",
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
            convert.$(
              ".shopify-section.index-section.collection-list-sec"
            ).append(`<div class="happy-customers desktop">
            <div class="page-width for-happy-cus">
              <div class="section-header">
                <h2 class="section-header__title">Over 3,800+ Happy Customers</h2>
                <a href="/" class="btn btn--secondary btn--small section-header__link"
                  >View all</a
                >
              </div>
              <div class="carousel-container desktop">
                <div class="happy-cus-carousel-item">
                  <img
                    class="happy-cus-carousel-item-img"
                    src="https://iili.io/JRU8Tba.png"
                  />
                  <div class="happy-cus-carousel-item-title">Great Jacket</div>
                  <div class="happy-cus-carousel-paragraph">
                    "The jacket fits just as I would like for a mid layer. I have worn
                    it around town several times and it keeps me warmer than I thought
                    it would. Looking forward to using it this fall during hunting
                    season.? - <span>Jacob J.</span>
                  </div>
                </div>
                <div class="happy-cus-carousel-item">
                  <img
                    class="happy-cus-carousel-item-img"
                    src="https://iili.io/JRU8Tba.png"
                  />
                  <div class="happy-cus-carousel-item-title">Great Jacket</div>
                  <div class="happy-cus-carousel-paragraph">
                    "The jacket fits just as I would like for a mid layer. I have worn
                    it around town several times and it keeps me warmer than I thought
                    it would. Looking forward to using it this fall during hunting
                    season.? - <span>Jacob J.</span>
                  </div>
                </div>
                <div class="happy-cus-carousel-item">
                  <img
                    class="happy-cus-carousel-item-img"
                    src="https://iili.io/JRU8Tba.png"
                  />
                  <div class="happy-cus-carousel-item-title">Great Jacket</div>
                  <div class="happy-cus-carousel-paragraph">
                    "The jacket fits just as I would like for a mid layer. I have worn
                    it around town several times and it keeps me warmer than I thought
                    it would. Looking forward to using it this fall during hunting
                    season.? - <span>Jacob J.</span>
                  </div>
                </div>
              </div>
              <div class="happy-cus-carousel-navigator">
                <img
                  src="https://iili.io/JRU49wX.png"
                  alt="left-arrow"
                  class="left-arrow"
                />
                <span>
                  <div class="current">1</div>
                  /3
                </span>
                <img
                  src="https://iili.io/JRU4Htn.png"
                  alt="right-arrow"
                  class="right-arrow"
                />
              </div>
            </div>
          </div>`);
            var count = 1;

            var slidesContainer = convert.$(".carousel-container");
            var slide = convert.$(".happy-cus-carousel-item");
            var prevButton = convert.$(".left-arrow");
            var nextButton = convert.$(".right-arrow");

            nextButton.on("click", function () {
              var slideWidth = slide.width();
              slidesContainer.scrollLeft(
                slidesContainer.scrollLeft() + slideWidth
              );
              if (count === 3) {
                return false;
              }
              count++;
              convert.$(".current").html(count);
            });

            prevButton.on("click", function () {
              var slideWidth = slide.width();
              slidesContainer.scrollLeft(
                slidesContainer.scrollLeft() - slideWidth
              );
              if (count === 1) {
                return false;
              }
              count--;
              convert.$(".current").html(count);
            });
          });
        };
        if (!convert.$("body").hasClass("happy-cus-test")) {
          convert.$("body").addClass("happy-cus-test");
          loadTest();
        }
      });
    }
  });
})();
