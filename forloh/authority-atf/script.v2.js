(() => {
  "use strict";
  const testInfo = {
    className: "fl-26-test",
    debug: 0,
    testName: "authority-atf",
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
        const loadTest = () => {

          let platformArray = [
            {name: 'cnn-logo',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/cnn-forloh.png'},{name: 'bow-hunter-logo',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/bowhunter-forloh-no-bg.png'},{name: 'fox-and-friends',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/foxandfriends-no-bg.png'},{name: 'game-and-fish',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/Gameandfish-bo-bg.png'},{name: 'news-max',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/news-max (1).png'},{name: 'mens-journal',url: 'https://cdn-3.convertexperiments.com/uf/1004931/10041718/mens-journal_compressed.png'},
          ];

          function replicateArray(array, numOfTimes) {
            let arrays = Array.apply(null, new Array(numOfTimes)); 
            arrays = arrays.map(function() { return array });
            return [].concat.apply([], arrays);
          }

          let autATFContainer = `<div class="authority-atf-main"><span>As Seen in:</span><div class="authority-atf-container"><div class="authority-atf-wrap">${replicateArray(platformArray, 20).map(item=>{
                                    return `<img src="${item.url}" alt="${item.name}" />`}).join("\n")}</div></div></div>`;
          convert.$('.shopify-section.index-section:nth-child(4)').prepend(autATFContainer);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
