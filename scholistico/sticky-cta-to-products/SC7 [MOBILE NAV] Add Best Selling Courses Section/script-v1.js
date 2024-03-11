(() => {
  "use strict";
  const testInfo = {
    className: "sc-7-test",
    debug: 0,
    testName: "add-best-selling-courses-section",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => { 
        
        const loadTest = () => {
          
          const mobNavItems = [
            { imgSrc: "https://cdn-3.convertexperiments.com/uf/1004931/10041718/first-image.png",review: "41",regStudents: "3191", title: "Naturopathy Practitioner Certification Course", paragraph: "Discover the fascinating world of naturopathic medicine with our comprehensive online course. Unveil the mysteries of naturopathy for your health.", learnMoreLink: "/product/naturopathy-practitioner-training-course/",},
            {imgSrc: "https://cdn-3.convertexperiments.com/uf/1004931/10041718/second-image.png",review: "47", regStudents: "2673",title: "Art Therapy Practitioner Certification Course",paragraph: "Embrace the love of Art with our Art Therapy Practitioner Course. Art therapy is a therapeutic approach that places art in the service of health and well-being.", learnMoreLink: "/product/art-therapy-practitioner-training-course/", }
          ]
          
          let BestSellingSectn = `<div class="mobile-nav-best-selling-sec">
              <div class="heading">Best Selling Courses</div>
              <div class="items">${mobNavItems.map(item=>{
                    return `<div class="item"><img src="${item.imgSrc}" alt="${item.heading}" /> <div class="review-student-sec"><div>(${item.review}+ Reviews)</div><div>${item.regStudents}+ Students</div></div><div class="title">${item.title}</div><div class="paragraph">${item.paragraph}</div><div class="learn-more-btn"><a href="${item.learnMoreLink}">LEARN MORE →</a></div></div>` }).join('\n')}</div></div>`;
          convert.$(`#page .bb-mobile-panel-wrapper .bb-mobile-panel-inner .main-navigation #menu-header-menu-2`).append(BestSellingSectn);
        };

        if (!convert.$("body").hasClass(testInfo.className) && window.matchMedia("(max-width: 799px)").matches) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();