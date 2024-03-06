(() => {
  "use strict";
  const testInfo = {
    className: "fl-33-test",
    debug: 0,
    testName: "collection-pills-on-mobile",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => {        

        const loadTest = () => {
          let colPillsData = [{src:'https://cdn-3.convertexperiments.com/uf/1004931/10041718/fl33 img1.jpg', title: 'Gear on Sale', link:"https://forloh.com/collections/forloh-deals"}, {src:'https://cdn-3.convertexperiments.com/uf/1004931/10041718/fl33 img2.jpg', title: 'New Arrivals', link: 'https://forloh.com/collections/new-arrivals'}, {src:'https://cdn-3.convertexperiments.com/uf/1004931/10041718/fl33 img3.jpg', title: 'Cold Weather', link: 'https://forloh.com/collections/warm-weather-collection'},{src:'https://cdn-3.convertexperiments.com/uf/1004931/10041718/fl33 img4.jpg', title: 'Warm Weather', link: 'https://forloh.com/collections/warm-weather-collection'},]
            
          let colPills = `<div class="col-pills"> ${colPillsData.map(item=>{return `<a class="item" href="${item.link}"><img src="${item.src}" alt="${item.title}"/><div class="title">${item.title}</div></a>`}).join("\n")}</div>`;

          convert.$(`.page-container .main-content`).prepend(colPills);
        };

        if (!convert.$("body").hasClass(testInfo.className) && window.matchMedia("(max-width: 768px)").matches && window.location.pathname == "/") {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
