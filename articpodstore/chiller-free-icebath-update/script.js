(() => {
  "use strict";
  const testInfo = {
    className: "ap-28-test",
    debug: 0,
    testName: "chiller-free-icebath-update",
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
         let waterChillerImage = `<img class="" src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/water-chiller-new.png" data-zoom="//arcticpodstore.com/cdn/shop/files/NEWChillerProductPic_2048x2048.png?v=1704969439" alt="ArcticPod™ Water Chiller for Ice Bath" natural-width="1000" natural-height="1000" width="1000" height="1000" data-width="100%" data-height="auto" style="width: 100%; height: auto">`;
         
         let newPrice = `<span class="new_product_price money gf_gs-text-paragraph-1" itemprop="price" data-price="699.99">$699.99</span>`;

         let updatedCarouselImage = `<img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/water-chiller-new.png" width="1000" height="1000" alt="ArcticPod™ Water Chiller for Ice Bath">`;

          convert.$(`.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"]:first-child img`).remove();
          
          convert.$(`.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"] span.gf_product-price`).remove();
          
          convert.$(`.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"] .gf_product-prices`).prepend(newPrice);
            
            
          convert.$(waterChillerImage).insertAfter('.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"] .gf_product-badge-anchor');

          convert.$(`.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"] h3 a`).attr('href','https://arcticpodstore.com/products/arcticpod%E2%84%A2-water-chiller?variant=46958722056492');

          convert.$(`.page-container .main-content [data-key="row"] .module-wrap .module .item-content div[data-pid="8487939572012"] .img-holder`).attr('href','https://arcticpodstore.com/products/arcticpod%E2%84%A2-water-chiller?variant=46958722056492');

          convert.$(`.page-container .main-content [data-key="row"] [data-current-variant="46958722023724"] form input[data-productid="8487939572012"] button`).attr('disabled');

         waitForElement('.page-container .main-content [data-key="row"] [data-current-variant="46958722023724"] form input[data-productid="8487939572012"]').then(element=>{
           setTimeout(() => {
            element.setAttribute('value','46958722056492');
            element.setAttribute('data-value','46958722056492');
            convert.$(`.page-container .main-content [data-key="row"] [data-current-variant="46958722023724"] form input[data-productid="8487939572012"] button`).attr('disabled','false');
           }, 1000);
         })

          let url = window.location.search;
          if(url.indexOf("variant=46958722056492") !== -1) {
            convert.$(`.page-container .main-content .wrapper .module-wrap .item-content .gf_column.gf_col_no_tools.gf_col-md-12.gf_swatches-selector.gf_swatches-option1 span`).hide();

          waitForElement('.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider').then(element=>{
            convert.$(`.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider .gf_product-images-list.gf_product-slider.owl-carousel .owl-stage .owl-item:nth-child(1)`).remove();
            convert.$(`.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider .gf_product-images-list.gf_product-slider.owl-carousel .owl-stage .owl-item:nth-child(1) .gf_product-image-thumb img`).remove();
            convert.$(`.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider .gf_product-images-list.gf_product-slider.owl-carousel .owl-stage .owl-item:nth-child(1) .gf_product-image-thumb`).append(updatedCarouselImage);
            convert.$(`.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider .gf_product-images-list.gf_product-slider.owl-carousel .owl-stage .owl-item:nth-child(1) .gf_product-image-thumb`).attr('data-image','https://cdn-3.convertexperiments.com/uf/1004931/10041718/water-chiller-new.png');
            convert.$(`.page-container .main-content .module-wrap.gf-carousel-loaded .style-slider .gf_product-images-list.gf_product-slider.owl-carousel .owl-stage .owl-item:nth-child(1) .gf_product-image-thumb`).trigger('click');
          })
          }
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
