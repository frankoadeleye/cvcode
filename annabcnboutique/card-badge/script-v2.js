(() => {
  "use strict";
  const testInfo = {
    className: "AnnabcnBoutique-v2-test",
    debug: 0,
    testName: "card-badge",
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

        const convertToNumber = (variable) => {
          let withoutComma = variable.replace(/\,/g, "");
          let withoutCurrencySymbol = withoutComma.replace("€", "");
          let withoutCurrency = withoutCurrencySymbol.replace("EUR", "");
          let withoutEmpty = withoutCurrency.replace(" ", "");
          let toNum = parseInt(withoutEmpty, 10);

          return toNum;
        };

        const getPercentage = (partialValue, totalValue) => {
          return 100 - ((100 * partialValue) / totalValue).toFixed(0);
        };

        /*__________________________Home Page ____________________________*/
        const HomeTest = () => {
          var subchildrenLen = convert.$(
            "#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0 [id^=Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0]"
          ).length;

          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);

            convert
              .$(
                "#Slider-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0"
              )
              .map((index, item) => {
                for (let i = 0; i < subchildrenLen; i++) {
                  var currentChild = convert.$(
                    "#Slide-template--20330949804381__84645203-0e22-4f2d-bc59-fca825baf5e0-" +
                      (i + 1)
                  );

                  var text = currentChild.find(
                    ".card__badge.bottom.left > .badge.badge--bottom-left.color-accent-2"
                  );

                  var reg = currentChild
                    .find(
                      ".price__sale > span > s.price-item.price-item--regular"
                    )
                    .text();

                  var discounted = currentChild
                    .find(".price__regular > .price-item.price-item--regular")
                    .text();

                  text.text(
                    `Ahorra ${getPercentage(
                      convertToNumber(discounted),
                      convertToNumber(reg)
                    )}%`
                  );
                }
              });
          });
        };

        /* ________________________ Collections Page ____________________ */
        const CollectionsTest = () => {
          let children = convert.$(".product-grid").children(".grid__item");

          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);

            convert.$("#product-grid").map((index, item) => {
              for (let i = 0; i < children.length; i++) {
                let currentChild = children[i];

                var text = convert.$(
                  ".card__badge.bottom.left .badge.badge--bottom-left.color-accent-2",
                  currentChild
                );
                var reg = convert
                  .$(
                    ".price__sale > span > s.price-item.price-item--regular",
                    currentChild
                  )
                  .text();
                var discounted = convert
                  .$(
                    ".price__regular .price-item.price-item--regular",
                    currentChild
                  )
                  .text();
                text.text(
                  `Ahorra ${getPercentage(
                    convertToNumber(discounted),
                    convertToNumber(reg)
                  )}%`
                );
              }
            });
          });
        };

        /* ________________________ Product Page ____________________ */
        const ProductTest = () => {
          convert.$(document).ready(function () {
            classAllocation(testInfo.testName);

            var parent = convert.$("#price-template--20330950099293__main");
            var reg = convert
              .$(".price__sale > span > s.price-item.price-item--regular")
              .text();
            var discounted = convert
              .$(".price__sale > .price-item.price-item--sale.price-item--last")
              .text();
            parent.html(
              `<div class="no-js-hidden" id="price-template--20330950099293__main" role="status">
          <div class="price price--large price--on-sale price--show-badge">
            <div class="price__container">
              <div class="price__regular">
                <span class="visually-hidden visually-hidden--inline">Precio habitual</span>
                <span class="price-item price-item--regular">${discounted}</span>
              </div>
              <div class="price__sale">
                <span class="visually-hidden visually-hidden--inline">Precio habitual</span>
                <span>
                  <s class="price-item price-item--regular">${reg}</s>
                </span>
                <span class="visually-hidden visually-hidden--inline">Precio de oferta</span>
                <span class="price-item price-item--sale price-item--last">${discounted}</span>
              </div>
              <small class="unit-price caption hidden">
                <span class="visually-hidden">Precio unitario</span>
                <span class="visually-hidden">
                  <span></span>
                  <span aria-hidden="true">/</span>
                  <span class="visually-hidden">&nbsp;por&nbsp;</span>
                  <span></span>
                </span>
              </small>
            </div>
            <span class="badge price__badge-sale color-accent-2">Ahorra ${getPercentage(
              convertToNumber(discounted),
              convertToNumber(reg)
            )}%</span>
            <span class="badge price__badge-sold-out color-inverse">Agotado</span>
          </div>
        </div>`
            );
          });
        };

        if (!convert.$("body").hasClass(testInfo.testName)) {
          convert.$("body").addClass(testInfo.testName);
          HomeTest();
          waitForElement("#product-grid").then((element) => {
            CollectionsTest();
          });
          waitForElement("#ProductInfo-template--20330950099293__main").then(
            (element) => {
              ProductTest();
            }
          );
        }
      });
    }
  });
})();
