const sluzby = document.querySelector(".services");
const servicesDropdown = document.querySelector(".services__dropdown");
const undernavText = document.querySelector(".undernav__text");
const undernavBg = document.querySelector(".undernav__bg");
const czechFlag = document.querySelector(".flag");
const czk = document.querySelector(".czk");
const engFlag = document.querySelector(".dropdown__eng");
const eur = document.querySelector(".dropdown__eur");
const menu = document.querySelector(".btn");

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

// MQ AND EVENTLISTENER EUR AND ENG FLAG START

// const mediaQueryList = window.matchMedia("(max-width: 960px)");

// function screenTest(e) {
//   if (e.matches) {
//     engFlag.classList.remove("active");
//     eur.classList.remove("active");
//     document.querySelector(".dropdown__menu").classList.remove("active");
//   } else {
//   }
// }
// mediaQueryList.addListener(screenTest);

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

document.querySelector(".col__3--link.menu").addEventListener("click", () => {
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

// MENU MOBILE ACCOUNT CZK FLAG REMOVE START
