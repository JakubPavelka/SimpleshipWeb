const sluzby = document.querySelector(".services");
const servicesDropdown = document.querySelector(".services__dropdown");
const undernavText = document.querySelector(".undernav__text");
const undernavBg = document.querySelector(".undernav__bg");
const czechFlag = document.querySelector(".flag");
const czk = document.querySelector(".czk");
const engFlag = document.querySelector(".dropdown__eng");
const eur = document.querySelector(".dropdown__eur");
const menu = document.querySelector(".btn");

// FIRST PAGE START ************************************************************************

// SERVICES EVENT LISTENERS START
sluzby.addEventListener("mouseenter", () => {
  servicesDropdown.classList.toggle("active");

  undernavBg.classList.toggle("active");
});

servicesDropdown.addEventListener("mouseleave", () => {
  servicesDropdown.classList.remove("active");
  undernavBg.classList.remove("active");
  undernavText.classList.remove("active");
});
// SERVICES EVENT LISTENERS END

// CZK EVENT LISTENERS START
czk.addEventListener("click", () => {
  eur.classList.toggle("active");
  document.querySelector(".dropdown__menu").classList.remove("active");
});
// CZK EVENT LISTENERS END

// FLAG EVENT LISTENERS START
czechFlag.addEventListener("click", () => {
  engFlag.classList.toggle("active");
  document.querySelector(".dropdown__menu").classList.remove("active");
});
// FLAG EVENT LISTENERS END

const mediaQueryList = window.matchMedia("(max-width: 960px)");

function screenTest(e) {
  if (e.matches) {
    eur.classList.remove("active");
    engFlag.classList.remove("active");
    document.querySelector(".dropdown__menu").classList.remove("active");
  } else {
  }
}
mediaQueryList.addListener(screenTest);

// MQ AND EVENTLISTENER EUR AND ENG FLAG END

// DROPDOWN CLASS ACTIVE REMOVE WHEN HOVER ON COL 1 COL 2 COL 3 NAV START
const closeServicesDropdown = function () {
  servicesDropdown.classList.remove("active");
  document.querySelector(".undernav__bg").classList.remove("active");
  undernavText.classList.remove("active");
};

document
  .querySelector(".logo")
  .addEventListener("mouseenter", closeServicesDropdown);
//COL 1
//COL 2
document
  .querySelector(".cenik")
  .addEventListener("mouseenter", closeServicesDropdown);

document
  .querySelector(".faq")
  .addEventListener("mouseenter", closeServicesDropdown);
document
  .querySelector(".blog")
  .addEventListener("mouseenter", closeServicesDropdown);
document
  .querySelector(".kontakt")
  .addEventListener("mouseenter", closeServicesDropdown);
//COL 2
//COL 3
document
  .querySelector(".cart")
  .addEventListener("mouseenter", closeServicesDropdown);

czk.addEventListener("mouseenter", closeServicesDropdown);
eur.addEventListener("mouseenter", closeServicesDropdown);
czechFlag.addEventListener("mouseenter", closeServicesDropdown);
engFlag.addEventListener("mouseenter", closeServicesDropdown);
menu.addEventListener("mouseenter", closeServicesDropdown);

//COL 3
// DROPDOWN CLASS ACTIVE REMOVE WHEN HOVER ON COL 1 COL 2 COL 3 NAV END

document
  .querySelector(".form")
  .addEventListener("mouseenter", closeServicesDropdown);

// MENU CLICK EUR ENG REMOVE START
menu.addEventListener("click", () => {
  eur.classList.remove("active");
  engFlag.classList.remove("active");
});
// MENU CLICK EUR ENG REMOVE END

// MENU CLICK EVENTLISTENER START

menu.addEventListener("click", () => {
  document.querySelector(".dropdown__menu").classList.toggle("active");
});

// MENU CLICK EVENTLISTENER END

// MENU BUTTON COLOR FILL START

document.querySelector(".col__3--link.menu").addEventListener("click", () => {
  document.querySelector(".col__3--link.menu").classList.toggle("active");
});

// MENU BUTTON COLOR FILL END

// MENU ACTIVATE EVENTLISTENER START

document.querySelector(".col__3--link.menu").addEventListener("click", (xx) => {
  document.querySelector(".mobile__menu").classList.toggle("active");

  if (document.querySelector(".dropdown__eur--mobile.active")) {
    document.querySelector(".dropdown__eur--mobile").classList.remove("active");
  }
  if (document.querySelector(".dropdown__eng--mobile.active")) {
    document.querySelector(".dropdown__eng--mobile").classList.remove("active");
  }
  if (document.querySelector(".dropdown__menu--mobile.active")) {
    document
      .querySelector(".dropdown__menu--mobile")
      .classList.remove("active");
  }
  if (document.querySelector(".col__3--links--mobile.active")) {
    document.querySelector(".col__3--links--mobile").classList.remove("active");
  }
  if (document.querySelector(".btn--mobile.active")) {
    document.querySelector(".btn--mobile").classList.remove("active");
  }
});

// MENU ACTIVATE EVENTLISTENER END

// MQ CANCELING MENU AND BTN FILL START

const mediaQueryList2 = window.matchMedia("(min-width: 961px)");

function screenTest(e) {
  if (e.matches) {
    document.querySelector(".mobile__menu").classList.remove("active");
    document.querySelector(".col__3--link.menu").classList.remove("active");
    document.querySelector(".btn--mobile").classList.remove("active");
  } else {
  }
}
mediaQueryList2.addListener(screenTest);

// MQ CANCELING MENU AND BTN FILL END

//MOBILE MENU CZK FLAG ACCOUNT START

document.querySelector(".czk--mobile").addEventListener("click", () => {
  document.querySelector(".dropdown__eur--mobile").classList.toggle("active");
});
document.querySelector(".flag--mobile").addEventListener("click", () => {
  document.querySelector(".dropdown__eng--mobile").classList.toggle("active");
});
//MOBILE MENU CZK FLAG ACCOUNT END

// MOBILE ACCOUNT LOGIN OPEN START

document.querySelector(".btn--mobile").addEventListener("click", () => {
  document.querySelector(".dropdown__menu--mobile").classList.toggle("active");
  document.querySelector(".col__3--links--mobile").classList.toggle("active");
  document.querySelector(".btn--mobile").classList.toggle("active");
});

// MOBILE ACCOUNT LOGIN OPEN END

// MENU MOBILE ACCOUNT CZK FLAG REMOVE START

document.querySelector(".btn--mobile").addEventListener("click", () => {
  if (document.querySelector(".dropdown__eur--mobile.active")) {
    document.querySelector(".dropdown__eur--mobile").classList.remove("active");
  }
  if (document.querySelector(".dropdown__eng--mobile.active")) {
    document.querySelector(".dropdown__eng--mobile").classList.remove("active");
  }
});

// MENU MOBILE ACCOUNT CZK FLAG REMOVE END

// SLUZBY SUBCLASSES OPENER START

document
  .querySelector(".mobile__menu--sluzby--565")
  .addEventListener("click", () => {
    document
      .querySelector(".mobile__menu--kamzasilame--hidden")
      .classList.toggle("active");
    document
      .querySelector(".mobile__menu--cozasilame--hidden")
      .classList.toggle("active");
    document
      .querySelector(".mobile__menu--preprava--hidden")
      .classList.toggle("active");
    document
      .querySelector(".mobile__menu--dopravci--hidden")
      .classList.toggle("active");
  });

// SLUZBY SUBCLASSES OPENER END

// SUBCLASSES OPENER START

const chevronUp = document.querySelectorAll(".flex-mob");

for (let z = 0; z < chevronUp.length; z++) {
  chevronUp[z].addEventListener("click", () => {
    for (let y = 0; y < chevronUp.length; y++) {
      if (y === z) {
        continue;
      }

      document
        .querySelector(".a__container--" + (y + 1))
        .classList.remove("active");
    }

    document
      .querySelector(".a__container--" + (z + 1))
      .classList.toggle("active");
  });
}

// SUBCLASSES OPENER END

// MOBILE MENU 565 PX CZK CZ FLAG ACCOUNT START

// MOBILE MENU OVERFLOW HIDDEN 565 PX START

// MOBILE MENU OVERFLOW HIDDEN 565 PX END

document.querySelector(".czk--mobile--565").addEventListener("click", () => {
  document
    .querySelector(".dropdown__eur--mobile--565")
    .classList.toggle("active");
});
document.querySelector(".flag--mobile--565").addEventListener("click", () => {
  document
    .querySelector(".dropdown__eng--mobile--565")
    .classList.toggle("active");
});

// MOBILE MENU 565 PX CZK CZ FLAG ACCOUNT END

// MOBILE MENU 565 PX ACCOUNT POP UP START

document.querySelector(".btn--mobile--565").addEventListener("click", () => {
  document
    .querySelector(".dropdown__menu--mobile--565")
    .classList.toggle("active");

  document.querySelector(".overlay").classList.toggle("active");

  document.getElementById("body").style.overflow = "hidden";
});

// MOBILE MENU 565 PX ACCOUNT POP UP END

// OVERFLOW FOR BODY WHEN MENU CLICKED

document.querySelector(".col__3--link.menu").addEventListener("click", () => {
  if (document.querySelector(".col__3--link.menu.active")) {
    document.getElementById("body").style.overflow = "hidden";
  } else {
    document.getElementById("body").style.overflow = "visible";
  }
});

const mediaQueryList3 = window.matchMedia("(max-width: 960px)");

function screenTest(e) {
  if (e.matches) {
    document.querySelector(".mobile__menu").classList.remove("active");
    document.getElementById("body").style.overflow = "visible";
  } else {
  }
}
mediaQueryList3.addListener(screenTest);

// OVERFLOW FOR BODY WHEN MENU CLICKED

// SELECT2 START

$(document).ready(function () {
  $(".selectFirst").select2();
  $(".selectSecond").select2();
});

// SELECT2 END

// FIRST PAGE END ************************************************************************

// CLOSING ELEMENTS ON CLICK OUTSIDE
// MENU LOGIN
document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__menu").contains(e.target) &&
    e.target !== document.querySelector(".col__3--link.btn") &&
    e.target !== document.querySelector(".user__header") &&
    e.target !== document.querySelector(".ucet__span")
  ) {
    document.querySelector(".dropdown__menu").classList.remove("active");
  }
});

// CZK FLAG DROPDOWN
document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eur").contains(e.target) &&
    e.target !== document.querySelector(".czk") &&
    e.target !== document.querySelector(".arrow__czk") &&
    e.target !== document.querySelector(".czk__span")
  ) {
    document.querySelector(".dropdown__eur").classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eng").contains(e.target) &&
    e.target !== document.querySelector(".col__3--link.flag") &&
    e.target !== document.querySelector(".arrow__flag") &&
    e.target !== document.querySelector(".flag__header")
  ) {
    document.querySelector(".dropdown__eng").classList.remove("active");
  }
});

//

// LOGIN MOBILE MENU

document.addEventListener("click", (e) => {
  if (
    !document
      .querySelector(".dropdown__menu--mobile--565")
      .contains(e.target) &&
    e.target !== document.querySelector(".btn--mobile--565") &&
    e.target !== document.querySelector(".btn--mobile--565--span") &&
    e.target !== document.querySelector(".user__header--565")
  ) {
    document
      .querySelector(".dropdown__menu--mobile--565")
      .classList.remove("active");

    document.querySelector(".overlay").classList.remove("active");
  }
});

if (!document.querySelector(".col__3--link.menu.active")) {
  document.getElementById("body").style.overflow = "visible";
}

// LOGIN MOBILE MENU CZK EUR

//EUR
document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eur--mobile--565").contains(e.target) &&
    e.target !== document.querySelector(".arrow__down--czk--mobile--565") &&
    e.target !== document.querySelector(".czk--mobile--565--span") &&
    e.target !== document.querySelector(".czk--mobile--565")
  ) {
    document
      .querySelector(".dropdown__eur--mobile--565")
      .classList.remove("active");
  }
});
//CZK
document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eng--mobile--565").contains(e.target) &&
    e.target !== document.querySelector(".arrow__down--eng--mobile--565") &&
    e.target !== document.querySelector(".flag__mobile--565--img")
  ) {
    document
      .querySelector(".dropdown__eng--mobile--565")
      .classList.remove("active");
  }
});

// LOGIN TABLET VIEW
// MENU
document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__menu--mobile").contains(e.target) &&
    e.target !== document.querySelector(".btn--mobile") &&
    e.target !== document.querySelector(".user__header--mobile") &&
    e.target !== document.querySelector(".user__header--mobile--span")
  ) {
    document
      .querySelector(".dropdown__menu--mobile")
      .classList.remove("active");

    document
      .querySelector(".col__3--link.btn--mobile")
      .classList.remove("active");
    document.querySelector(".col__3--links--mobile").classList.remove("active");
  }
});

// CZK

document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eur--mobile").contains(e.target) &&
    e.target !== document.querySelector(".czk--mobile") &&
    e.target !== document.querySelector(".czk__mobile--span") &&
    e.target !== document.querySelector(".arrow__down--czk--mobile")
  ) {
    document.querySelector(".dropdown__eur--mobile").classList.remove("active");
  }
});

// FLAG

document.addEventListener("click", (e) => {
  if (
    !document.querySelector(".dropdown__eng--mobile").contains(e.target) &&
    e.target !== document.querySelector(".flag--mobile") &&
    e.target !== document.querySelector(".flag--mobile--select") &&
    e.target !== document.querySelector(".arrow__down--flag--mobile")
  ) {
    document.querySelector(".dropdown__eng--mobile").classList.remove("active");
  }
});

// REMOVING BODY OVERFLOW HIDDEN WHEN CLICKING ON A LINK IN MOBILE MENU

//CENIK
document.querySelector(".cenik__a").addEventListener("click", () => {
  document.getElementById("body").style.overflow = "visible";
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".mobile__menu").classList.remove("active");
});
//FAQ
document.querySelector(".faq__a-2").addEventListener("click", () => {
  document.getElementById("body").style.overflow = "visible";
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".mobile__menu").classList.remove("active");
});
//BLOG
document.querySelector(".blog__a").addEventListener("click", () => {
  document.getElementById("body").style.overflow = "visible";
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".mobile__menu").classList.remove("active");
});
//KONTAKT
document.querySelector(".kontakt__a").addEventListener("click", () => {
  document.getElementById("body").style.overflow = "visible";
  document.querySelector(".menu").classList.remove("active");
  document.querySelector(".mobile__menu").classList.remove("active");
});
