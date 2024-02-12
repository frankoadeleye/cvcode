(() => {
  "use strict";
  const testInfo = {
    className: "dhd-21-test",
    debug: 0,
    testName: "collection-circles-under-nav",
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
          const collectionData = [
            {title: "Mithril",url: "https://iili.io/J1sox4f.png", link: "https://www.dieharddice.com/collections/mithril"},
            {title: "New Dice",url: "https://iili.io/J1socCu.png",link: "https://www.dieharddice.com/collections/new"},
            {title: "Metal",url: "https://iili.io/J1soVyB.png",link: "https://www.dieharddice.com/collections/metal-dnd-dice"},
            {title: "Polymer",url: "https://iili.io/J1soe6J.png",link: "https://www.dieharddice.com/collections/polymer-dnd-dice"},
            {title: "Best Selling",url: "https://iili.io/J1sx9t9.png",link: "https://www.dieharddice.com/collections/best-selling-metal-dice"},
          ];
          const CollectionContainer = `<div class="collection__circles__wrap">
            ${collectionData.map((item) => {
                return `<a href="${item.link}" class="item"><img src="${item.url}"  alt="${item.title}" /><div class="text">${item.title}</div></a>`;}).join("\n")}`;

          if (window.matchMedia("(max-width: 767px)").matches && window.location.pathname == "/") {
            convert.$(".dhd-21-test #main .shopify-section:first-child").prepend(CollectionContainer);
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
