(() => {
  "use strict";
  const testInfo = {
    className: "fl-32-test",
    debug: 0,
    testName: "nav-review",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => {        

        const loadTest = () => {
            
          let productDesc = convert.$(`.page-content.page-content--product .page-width .grid__item .vw-product-description`);

          let accordionFor = (media)=> convert.$(`.page-content.page-content--product .page-width .grid__item .vw-product-description .vw-product-accordion.vw-product-tabs-${media}`);

          if (window.matchMedia("(max-width: 576px)").matches){
            convert.$(productDesc).prepend(accordionFor('mobile'));
          }else{
            convert.$(productDesc).prepend(accordionFor('desktop'));
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
