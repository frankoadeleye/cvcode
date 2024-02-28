(() => {
  "use strict";
  const testInfo = {
    className: "fl-22-5-test",
    debug: 0,
    testName: "search-dropdown-menu-desktop",
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
          let searchBar = `<div class="search-wrapper"><input class="search-bar" placeholder="Search by gear, weather type, or camo" /><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/search-icon.png"  alt="search-icon" /></div?`;
          if (window.matchMedia("(min-width: 1024px)").matches) {
              convert.$('.page-container .header-item.header-item--icons .site-nav__icons .site-nav__link.site-nav__link--icon.small--hide.js-search-header').remove();
              convert.$('.page-container .header-item.header-item--icons .site-nav__icons').prepend(searchBar);
              convert.$(".page-container .header-item.header-item--icons .site-nav__icons .search-wrapper").click(function(){
                convert.$('html').addClass('js supports-touch crjs js-drawer-open js-drawer-open--search lock-scroll');
                convert.$('.page-container .header-wrapper .site-header__search-container').addClass('is-active');
                convert.$('.page-container .header-wrapper .site-header__search-container').attr('tabindex','-1');
                convert.$('.page-container .header-wrapper .site-header__search-container form input[placeholder="Search our store"]').focus();
              });
              convert.$('.page-container .header-wrapper .site-header__search-container form input[placeholder="Search our store"]').change(()=> {convert.$(".page-container .header-item.header-item--icons .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .header-wrapper .site-header__search-container form input[placeholder="Search our store"]').val())});
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