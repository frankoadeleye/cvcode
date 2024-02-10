(() => {
  "use strict";
  const testInfo = {
    className: "fl-26-test",
    debug: 0,
    testName: "authority-atf",
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

          let platformArray = [
            {name: 'cnn-logo',url: 'https://iili.io/J1NiVIe.png'},{name: 'bow-hunter-logo',url: 'https://iili.io/J1NiNrQ.png'},{name: 'fox-and-friends',url: 'https://iili.io/J1Ni8p1.png'},{name: 'game-and-fish',url: 'https://iili.io/J1Nii4R.png'},{name: 'news-max',url: 'https://iili.io/J1NiQYN.png'},{name: 'mens-journal',url: 'https://iili.io/J1NipQs.png'},
          ];

          function replicateArray(array, numOfTimes) {
            let arrays = Array.apply(null, new Array(numOfTimes)); 
            arrays = arrays.map(function() { return array });
            return [].concat.apply([], arrays);
          }

          let autATFContainer = `<div class="authority-atf-main"><span>As Seen in:</span><div class="authority-atf-container"><div class="authority-atf-wrap">${replicateArray(platformArray, 20).map(item=>{
                                    return `<img src={${item.url}} alt="${item.name}" />`}).join("\n")}</div></div></div>`;
          convert.$('.shopify-section.index-section--hero').append(autATFContainer);
          
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
