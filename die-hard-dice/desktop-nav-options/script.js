(() => {
  "use strict";
  const testInfo = {
    className: "dhd-19-test",
    debug: 0,
    testName: "desktop-nav-options",
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
          const AddedNavOptions = {
            AllDice: [
              {name: "All Product",link: "/collections/all",},
              {name: "Metal Dice",link: "/collections/metal-dnd-dice",},
              {name: "Polymer Dice",link: "/collections/polymer-dnd-dice",},
              {name: "Gift Cards",link: "/collections/gift-cards",},
              {name: "Miniature Dice",link: "/collections/critlings-mini-dice",},
              {name: "Oversized Dire D20s",link: "/collections/dire-d20s",},
              {name: "Glow / UV",link: "/collections/glow-and-uv-reactive", },
            ],
            Accessories: [
              {name: "Folding Dice Tray",link: "/collections/portable-dice-trays",},
              {name: "Velvet Dice Bags",link: "/collections/dice-storage", },
              {name: "Scrolls of Rolling",link: "/collections/scrolls",},
              {name: "Pride Stickers", link: "/collections/pride-2022-stickers",},
            ],
            MTG_and_MORE: [
              {name: "MTG LifeLink Counters",link: "/collections/mtg-life-counters",},
              {name: "d10 Sets",link: "/collections/d10-sets", },
              {name: "Infinity the Game",link: "/collections/infinity-dice",},
              {name: "Wargaming Dice",link: "/collections/vanguard-section-for-holiday-2022-page",},
            ],
            AboutUs: [
              {name: "About Die Hard Dice",link: "/pages/about-us", },
              { name: "Meet the Team", link: "/pages/meet-the-team", },
              {name: "Our Backstory", link: "/pages/backstory", },
              { name: "Our Partners and Projects",link: "/pages/partners-and-projects", },
              {name: "Find a Store Near You",link: "/pages/find-us", },
              {name: "Contact Us",link: "/pages/contact-us", },
              { name: "Why Choose Die Hard Dice",link: "/pages/why-choose-die-hard-dice", },
            ],
          };

          convert.$("#navbar-desktop .container div.col-3").addClass("col-2");
          convert.$("#navbar-desktop .container div.col-2").removeClass("col-3");

          convert.$("#navbar-desktop .container div.col-6").addClass("col-8");
          convert.$("#navbar-desktop .container div.col-8").removeClass("col-6");

          convert.$("#navbar-desktop .container div.col-8 .nav.nav-links").html(`<li class="nav-item">
            <a class="nav-link rounded" href="https://www.dieharddice.com/collections/new" aria-current=""> <b>New Arrivals</b></a>
            </li>
            <li class="nav-item"> <a class="nav-link rounded" href="https://www.dieharddice.com/collections/best-sellers" aria-current=""><b>Best Sellers</b></a></li>
            <li class="nav-item dropdown"><a class="nav-link rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" data-index="3" role="button" > All Dice </a>
            <ul class="dropdown-menu"> ${AddedNavOptions.AllDice.map((item, index) => { return ` <li> <a id="navbar-childitem-${index}" class="dropdown-item" href="${item.link}" aria-current="" >${item.name}</a> </li>`; }).join("\n")}</ul></li>
            <li class="nav-item dropdown"><a class="nav-link rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" data-index="4" role="button"> Accessories</a>
            <ul class="dropdown-menu"> ${AddedNavOptions.Accessories.map((item, index) => {return `<li><a id="navbar-childitem-${index}" class="dropdown-item" href="${item.link}" aria-current="">${item.name}</a></li>`;}).join("\n")}</ul> </li>
            <li class="nav-item dropdown"><a class="nav-link rounded dropdown-toggle" href="#" data-bs-toggle="dropdown"  aria-expanded="false" data-index="4" role="button" >MTG & More</a>
            <ul class="dropdown-menu">${AddedNavOptions.MTG_and_MORE.map((item, index) => { return ` <li><a id="navbar-childitem-${index}" class="dropdown-item" href="${item.link}" aria-current="" > ${item.name}</a></li>`; }).join("\n")}</ul></li>
            <li class="nav-item dropdown"> <a class="nav-link rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" data-index="4" role="button"> About Us</a>
            <ul class="dropdown-menu"> ${AddedNavOptions.AboutUs.map((item, index) => { return `<li><a id="navbar-childitem-${index}" class="dropdown-item" href="${item.link}" aria-current="" > ${item.name} </a> </li>`; }).join("\n")}</ul>
          </li>`);
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
