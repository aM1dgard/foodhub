"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
var swiper2 = new Swiper('.tabs-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
var tabsBtn = document.querySelectorAll('.tabs__nav-btn');
var tabsOtems = document.querySelectorAll('.tabs__item');
tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute("data-tab");
    var currentTab = document.querySelector(tabId);
    console.log(tabId);
    tabsBtn.forEach(function (item) {
      item.classList.remove('tabs__nav-btn--active');
    });
    tabsOtems.forEach(function (item) {
      item.classList.remove('tabs__item--active');
    });
    currentBtn.classList.add('tabs__nav-btn--active');
    currentTab.classList.add('tabs__item--active');
  });
});
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');
  btnUp.click(function () {
    var oldValue = parseFloat(input.val());

    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }

    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
  btnDown.click(function () {
    var oldValue = parseFloat(input.val());

    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }

    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});
var iconMenu = document.querySelector('.burger');
var menuBody = document.querySelector('.burger-menu');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('burger-menu-active');
  });
}

$(document).ready(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".burger-menu"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
    // страницу для поиска нужного элемента

    if (windowWidth < 1061) {} else {
      elem.removeClass('burger-menu-active');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
//# sourceMappingURL=main.js.map
