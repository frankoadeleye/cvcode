(() => {
  "use strict";
  const testInfo = {
    className: "dris-26-test",
    debug: 0,
    testName: "price-display",
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
          let BuyNowBox = `<div class="buy-now-box"><div class="title">Buy Now</div><div class="price-section"><span></span><span></span></div><div class="discount"></div></div>`;

          let PayMonthlyBox = `<div class="pay-monthly-box"><div class="title">Pay Monthly</div><div class="price-section"> <span></span><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/affirm.png" alt="" /></div><div class="see-if-qualify">See if you qualify</div></div>`;

          let currentPrice = convert.$(".page-wrapper .product-media-and-info span.price:first-child").first().text();

          let oldPrice = convert.$(".page-wrapper .product-media-and-info .product-info-price .old-price span.price-wrapper span.price:first-child").text();

          let discount = convert.$(".page-wrapper .product-media-and-info .product-info-price .old-price .saveprice span.savings-amount").text();

          let BoxContainer = `<div class="box-container">${BuyNowBox} ${PayMonthlyBox}</div>`;

          convert.$(".page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product").append(BoxContainer);

          if (currentPrice) {convert.$(".page-wrapper .product-media-and-info .product-info-main .product-info-price .old-price span.price-wrapper span.price").remove();
            convert.$(".page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product .buy-now-box .price-section span:first-child" ).append(currentPrice);
          }

          convert.$(".page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product .buy-now-box .price-section span:last-child").append(oldPrice);

          if (discount) {convert.$(".page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product .buy-now-box .discount").append(`You save: ${discount}`);
          }
        
          waitForElement(".page-wrapper .product-media-and-info .product-info-main .affirm-as-low-as .affirm-ala-price"
          ).then((element) => { convert.$(".page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product .pay-monthly-box .price-section span:first-child").append(`${element.textContent}/MO`);

            convert.$(`.page-wrapper .product-media-and-info .product-info-main .page-title-wrapper.product .box-container .pay-monthly-box .see-if-qualify`).click(function () {convert.$(`.page-wrapper .product-media-and-info
                    .product-info-main a.affirm-modal-trigger`).trigger("click");});

            convert.$(".page-wrapper .product-media-and-info .product-info-main .product-info-price").css("display", "none");
            convert.$(".page-wrapper .product-media-and-info .product-info-main .affirm-as-low-as").css("display", "none");
          });
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
