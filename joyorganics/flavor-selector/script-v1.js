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
            const flavorSelector = `
                  <select class="selector-dropdown flavor">
                    <option value="Strawberry Lemonade 30 Pack 25mg">Strawberry Lemonade 30 Pack 25mg</option>
                    <option value="Strawberry Lemonade 30 Pack 10mg">Strawberry Lemonade 30 Pack 10mg</option>
                    <option value="Green Apple 30 Pack 10mg">Green Apple 30 Pack 10mg</option>
                  </select>
                  `;

            convert.$("#rc_radio_options").prepend(flavorSelector);

            waitForElement(".selector-dropdown.flavor").then((element) => {
              if (
                convert.$(".selector-dropdown.flavor").val() ===
                "Strawberry Lemonade 30 Pack 25mg"
              ) {
                $(
                  ".js.product-form__input [value='Strawberry Lemonade 30 pack 25mg']"
                ).trigger("click");
              }
              convert.$(".selector-dropdown.flavor").change(function () {
                if (
                  convert.$(".selector-dropdown.flavor").val() ===
                  "Strawberry Lemonade 30 Pack 25mg"
                ) {
                  $(
                    ".js.product-form__input [value='Strawberry Lemonade 30 pack 25mg']"
                  ).trigger("click");
                } else if (
                  convert.$(".selector-dropdown.flavor").val() ===
                  "Strawberry Lemonade 30 Pack 10mg"
                ) {
                  $(
                    ".js.product-form__input [value='Strawberry Lemonade 30 Pack 10mg']"
                  ).trigger("click");
                } else if (
                  convert.$(".selector-dropdown.flavor").val() ===
                  "Green Apple 30 Pack 10mg"
                ) {
                  $(
                    ".js.product-form__input [value='Green Apple 30 Pack 10mg']"
                  ).trigger("click");
                }
              });
            });
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
