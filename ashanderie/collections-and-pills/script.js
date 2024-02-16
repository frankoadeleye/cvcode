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
          let tilesArray = [ {value: "PANTS & SHORTS",id: "pants-and-shorts",endpoint: "pants-and-jeans",
              url: "https://ashanderie.com/collections/pants-and-jeans?filter.v.availability=1",},
            {value: "SALE ITEMS",id: "sale-item",endpoint: "sale-items",url: "https://ashanderie.com/collections/sale-items",},
            { value: "LOUNGEWEAR",id: "loungewear",endpoint: "loungewear",url: "https://ashanderie.com/collections/loungewear?filter.v.availability=1",},
            {value: "SWEATERS & OUTERWEAR",id: "sweaters-and-outwear",endpoint: "sweaters-outerwear",url: "https://ashanderie.com/collections/sweaters-outerwear?filter.v.availability=1",},
            {value: "ATHLEISURE",id: "athleisure",endpoint: "activewear-collection",url: "https://ashanderie.com/collections/activewear-collection?filter.v.availability=1",},
            {value: "BUTTON DOWN SHIRTS",id: "button-down-shirts",endpoint: "everyday-shirts",url: "https://ashanderie.com/collections/everyday-shirts?filter.v.availability=1",
            },{value: "T-SHIRTS, HENLEYS, & POLOS",id: "t-shirts-and-polos",endpoint: "t-shirts-henleys-polos",url: "https://ashanderie.com/collections/t-shirts-henleys-polos?filter.v.availability=1",},
          ];

          let tiles = `<ul class="tiles-wrapper">${tilesArray.map((tile) => {return `<li class="tile-item" id="${tile.id}">${tile.value}</li>`}).join("\n")}</ul>`;

          const slider = `<div class="swiper mySwiper"><div class="swiper-wrapper tiles-wrapper">${tilesArray
            .map((tile) => {return `<div class="tile-item swiper-slide" id="${tile.id}">${tile.value}</div>`;}).join(
              "\n")}</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="left-abs"></div><div class="right-abs"></div></div>`;

          jQuery.getScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",() => {
              new Swiper(".mySwiper", {slidesPerView: 3,spaceBetween: 20,navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",}, breakpoints: {310: {slidesPerView: 2,spaceBetween: 10, },500: {slidesPerView: 3, spaceBetween: 10,},},});});

          if (window.matchMedia("(max-width: 767px)").matches) {
            convert.$(".collection-content").prepend(slider);
          } else {
            convert.$(".collection-content").prepend(tiles);
          }

          convert.$(".tiles-wrapper").on("click", handler);
          function handler(event) {
            convert.$(`.tile-item`).removeClass("active");
            var target = convert.$(event.target);
            if (target.is(".tile-item")) target.addClass("active");
          }

          for (let i = 0; i < tilesArray.length; i++) {
            if (window.location.href.indexOf(tilesArray[i].endpoint) != -1) convert.$(`#${tilesArray[i].id}`).addClass("active");
            convert.$(`#${tilesArray[i].id}`).on("click", function () {
              window.location.href = tilesArray[i].url;
            });
          }
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