(() => {
  "use strict";
  const testInfo = {
    className: "ap-24-test",
    debug: 0,
    testName: "test",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => {
        const loadTest = () => {
          const imgBaseURL =
            "https://cdn-3.convertexperiments.com/uf/1004931/10045227/";
          const banner = `<div class="chiller-section"><div class="chiller-text-section"><h2>never need ice again</h2><p>Fast-Cooling Chiller For Your Pod</p><a href="https://arcticpodstore.com/products/arcticpod%E2%84%A2-water-chiller">Shop Water Chiller</a></div><img src="${imgBaseURL}prod.png" alt="prod-image" /></div>`;
          convert
            .$(".AddToCartForm .item-content > div > .gf_column:last-child")
            .append(banner);
        };
        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
