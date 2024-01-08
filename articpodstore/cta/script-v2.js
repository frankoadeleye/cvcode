(() => {
  "use strict";
  const testInfo = {
    className: "ArticPodStore-v2-test",
    debug: 0,
    testName: "shop-all-product-cta",
    testVersion: "0.0.2",
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
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.testName)) {
      return;
    }
    bodyEle.classList.add(testInfo.testName);

    //create your link element
    let ctaButton = document.createElement("a");

    //add appropraite classes
    ctaButton.classList.add("shop-all-prod-btn");

    // Create the text node for anchor element.
    var linkText = document.createTextNode("Shop Ice Bath");

    //append link text
    ctaButton.appendChild(linkText);

    //add title
    ctaButton.title = "Shop Ice Bath";

    //add reference link
    ctaButton.href = "https://arcticpodstore.com/products/arcticpod";

    //call on mutation observer to wait for element to be present
    waitForElement(".styles_CartPreview__empty__WFP86").then((element) => {
      element.appendChild(ctaButton);
    });
  };
  loadTest();
  window.addEventListener("popstate", loadTest);
})();
