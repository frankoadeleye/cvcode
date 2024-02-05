(() => {
  "use strict";
  const testInfo = {
    className: "joyorganic-flavor-selector-v1-test",
    debug: 0,
    testName: "flavor-selector",
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
            let children = convert.$(".js.product-form__input").children("input");
            let getChildValueByPosition = (position) => {
              return convert.$(".js.product-form__input").find("input").eq(position).val();
            };
            let childrenArray = [];
            for (let i = 0; i < children.length; i++) {
              childrenArray[i] = convert.$(".js.product-form__input").find("input").eq(i).val();
            }
            const flavorSelector = ` <select class="selector-dropdown flavor">
                      ${childrenArray.map((element) => {return `<option value="${element}">${element}</option>`;
                      })};</select>`;

            waitForElement(".selector-dropdown.flavor").then((element) => {
              if (convert.$(".selector-dropdown.flavor").val() ===getChildValueByPosition(0)) {
                $(`.js.product-form__input [value='${getChildValueByPosition(0)}']`).trigger("click");
              }
              convert.$(".selector-dropdown.flavor").change(function () {
                for (let i = 0; i < children.length; i++) {
                  if (convert.$(".selector-dropdown.flavor").val() ===getChildValueByPosition(i)) {
                    $(`.js.product-form__input [value='${getChildValueByPosition(i)}']`).trigger("click");
                  }
                }
              });
            });

            if (window.matchMedia("(max-width: 767px)").matches) {
              if(children.length > 0){
                convert.$("#rc_radio_options").prepend(flavorSelector);
              }
            }
          });
        };
        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          convert
            .$(
              '<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">'
            )
            .appendTo("head");
          loadTest();
        }
      });
    }
  });
})();
