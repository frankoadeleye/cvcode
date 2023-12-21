(() => {
  "use strict";
  const testInfo = {
    className: "dh-testno-test",
    debug: 0,
    testName: "test",
    testVersion: "0.0.1",
  };
  const jQueryInterval = setInterval(() => {
    if (typeof jQuery != "undefined") {
      clearInterval(jQueryInterval);
      jQuery(document).ready(() => {
        const classAllocation = (selector) => {
          jQuery(selector).each((i, ele) => {
            jQuery(ele).addClass(`section-${i}`);
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
          $(document).ready(function () {
            $(".site-header__logo-link").before(
              '<img src="https://iili.io/JAdu9Tb.png" alt="variant-logo" class="variant-logo" />'
            );
            $(".site-header__logo-link").remove();

            $(".ssw-auth-dropdown").html(
              '<div class="action-icons-wrap"><a href="/account/login"><img src="https://iili.io/JAdFtne.png" alt="user-icon" /></a><a href="/apps/iwish"><img src="https://iili.io/JAdK3t1.png" alt="wishlist-icon" /></a><a href="/cart"><img src="https://iili.io/JAdK1Hl.png" alt="cart-icon" /></a></div>'
            );
          });
        };
        if (!jQuery("body").hasClass("dh-nav-test")) {
          jQuery("body").addClass("dh-nav-test");
          loadTest();
        }
      });
    }
  });
})();
