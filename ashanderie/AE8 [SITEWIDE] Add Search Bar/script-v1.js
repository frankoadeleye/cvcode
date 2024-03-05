(() => {
  "use strict";
  const testInfo = {
    className: "ae-8-test",
    debug: 0,
    testName: "add-search-bar",
    testVersion: "0.0.1",
  };
  const convertInterval = setInterval(() => {
    if (typeof convert != "undefined") {
      clearInterval(convertInterval);
      convert.$(document).ready(() => {
        let href = window.location.href;

        const returnSearchParams = () =>{
          let queryString = window.location.href.split('?', 2)[1] || '';
          let parameters = queryString.split('&').map(function(param) {
              let pair = param.split('=', 2);
              return {name: decodeURIComponent(pair[0]),value: decodeURIComponent(pair[1] || '')};
            });
            let searchQueryValueParam = parameters.filter(function(param) {return param.name === 'q';
            })[0];
            let searchQueryValue = searchQueryValueParam ? searchQueryValueParam.value.replace(/\+/g, ' ') : null;
            return searchQueryValue;
        }

        const putCursorAtEnd = (element)=>{
          let searchInput = convert.$(element);
          let strLength = searchInput.val().length * 2;

          searchInput.focus();
          searchInput[0].setSelectionRange(strLength, strLength);
        }

        const loadTest = () => {
          let searchBar = `<div class="search-wrapper"><input class="search-bar" placeholder="Search for jeans, shirts, and more.." /><img src="https://cdn-3.convertexperiments.com/uf/1004931/10041718/search-icon.png"  alt="search-icon" /></div>`;

          const activateOverflowSearchModal = (element)=>{
            convert.$(`body`).addClass('predictive-overflow-hidden');
            convert.$('.page-container .site-header__search-container').addClass('is-active');
            convert.$('.page-container .site-header__search-container [data-context="header"]').attr('class', 'is-active');
            convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').focus();
            putCursorAtEnd(element);
          }

         
          if (window.matchMedia("(max-width: 959px)").matches) { convert.$(searchBar).insertAfter(`.header-sticky-wrapper .page-width .header-layout`);
          }else{convert.$(`.header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons`).prepend(searchBar);
          }
         
          if(window.matchMedia("(max-width: 959px)").matches && returnSearchParams()){
              if (href.indexOf("/search") !== -1) {convert.$(".header-sticky-wrapper .page-width .search-wrapper .search-bar").val(returnSearchParams().replace(/\+/g, ' '));
                convert.$(`.main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input`).on('click', ()=> {
                  activateOverflowSearchModal(`.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input`);
                  convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').change(()=> {convert.$(".main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
                  convert.$(".header-sticky-wrapper .page-width .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
                  convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
                  });
                })
                let fixTop = convert.$(`.main-content .shopify-section .search-content .page-width.page-content [data-context="search-page"]`).offset().top;
                convert.$(`.header-sticky-wrapper .site-header .search-wrapper`).attr('style','display: none');
                convert.$(`.main-content .shopify-section`).attr('style','margin-top: 0px !important;');
                convert.$(window).scroll((e)=>{let currentScroll = jQuery(window).scrollTop();
                    if (currentScroll >= fixTop) {convert.$(`.header-sticky-wrapper .site-header .search-wrapper`).show();
                } else {convert.$(`.header-sticky-wrapper .site-header .search-wrapper`).hide();}});
             }
          }else{
            if(href.indexOf("/search") !== -1){
              convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(returnSearchParams().replace(/\+/g, ' '));
              convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').change(()=> {convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val())});
              }else{
                convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(returnSearchParams());
              }
              convert.$(`.main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input`).on('click', ()=> {
              activateOverflowSearchModal(`.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input`);
              convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').change(()=> {
                convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
                convert.$(".main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
              });
            });
            convert.$(`.header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar`).on('click', ()=> {
			        activateOverflowSearchModal(`.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input`);
              convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').change(()=> {
                convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
                convert.$(".main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
              });
            });
          }
          convert.$(`.ae-8-test .header-sticky-wrapper .search-wrapper .search-bar`).on('click', ()=> {
            activateOverflowSearchModal(`.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input`);
           convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(returnSearchParams());
              convert.$(".header-sticky-wrapper .page-width .search-wrapper .search-bar").val(returnSearchParams());
            convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').change(()=> {
              convert.$(".header-sticky-wrapper .header-wrapper .header-item .site-nav .site-nav__icons .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
              convert.$(".header-sticky-wrapper .page-width .search-wrapper .search-bar").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
              convert.$(".main-content .shopify-section [data-context='search-page'] .search__input-wrap .search__input").val(convert.$('.page-container .site-header .site-header__search-container.is-active .page-width form .search__input-wrap input').val());
            });
			    });
        };

        if (!convert.$("body").hasClass(testInfo.className)) {
          convert.$("body").addClass(testInfo.className);
          loadTest();
        }
      });
    }
  });
})();
