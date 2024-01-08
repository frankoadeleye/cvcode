(() => {
  "use strict";
  const testInfo = {
    className: "ArticPodStore-v2-test",
    debug: 0,
    testName: "empty-cart-cta",
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

  const isAbsent = (selector, callback) => {
    var in_dom = document.body.contains(document.querySelector(selector));
    var observer = new MutationObserver(function (mutations) {
      if (document.body.contains(document.querySelector(selector))) {
        in_dom = true;
      } else if (in_dom) {
        in_dom = false;
        callback();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
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
    var linkText = "Shop Ice Bath";

    //insert after beginning link text
    ctaButton.insertAdjacentHTML("afterbegin", linkText);

    //add title
    ctaButton.title = "Shop Ice Bath";

    //add reference link
    ctaButton.href =
      "https://arcticpodstore.com/products/arcticpod%E2%84%A2-water-chiller";

    isAbsent(".styles_PreviewCarousel__WEHWj", () => {
      waitForElement(".styles_CartPreview__empty__WFP86").then((element) => {
        element.appendChild(ctaButton);
      });
    });

    //call on mutation observer to wait for element to be present
    waitForElement(".styles_CartPreview__empty__WFP86").then((element) => {
      element.appendChild(ctaButton);
    });
  };
  loadTest();
  window.addEventListener("popstate", loadTest);
})();
