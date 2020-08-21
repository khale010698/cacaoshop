var CONSTANT = {
  IS_SIDEBAR_OPEN: 0
};
const MAIN = {
  COMMON: {
    toggleSidebar: (t) => {
      if (CONSTANT.IS_SIDEBAR_OPEN === 1) {
        $('body').removeClass('noscroll');
        $("#sidebar").animate({ left: '-100%' }, 250);
        CONSTANT.IS_SIDEBAR_OPEN = 0;
      } else {
        $('body').addClass('noscroll');
        $("#sidebar").animate({ left: '0' }, 250);
        CONSTANT.IS_SIDEBAR_OPEN = 1;
      }
    },
    redirect: (uri) => {
      window.location.href = uri;
    }
  },
};
$("#btnToggleSidebar").click(function () {
  MAIN.COMMON.toggleSidebar(this);
});
// var prefix = "/cacao-shop";
var prefix = "";
$('#btnBackToHomeFavorite').click(function () {MAIN.COMMON.redirect(prefix + '/index.html');});
$('#logoBackToHome').click(function () {MAIN.COMMON.redirect(prefix + '/index.html');});
$('#btnBackToHomeSuccess').click(function () {MAIN.COMMON.redirect(prefix + '/index.html');});
$('#aboutUsMenu').click(function () {MAIN.COMMON.redirect(prefix + '/aboutus.html');});
$('#btnAboutUsIndex').click(function () {MAIN.COMMON.redirect(prefix + '/aboutus.html');});
$('#newsMenu').click(function () {MAIN.COMMON.redirect(prefix + '/news.html');});
$('#btnNewsIndex').click(function () {MAIN.COMMON.redirect(prefix + '/news.html');});
$('#contactMenu').click(function () {MAIN.COMMON.redirect(prefix + '/contact.html');});
$('#btnRemoveCart').click(function () {MAIN.COMMON.redirect(prefix + '/cart-empty.html');});
$('#btnCartBuy').click(function () {MAIN.COMMON.redirect(prefix + '/order.html');});
$('#btnCartHeader').click(function () {MAIN.COMMON.redirect(prefix + '/cart.html');});
$('#btnFavoriteHeader').click(function () {MAIN.COMMON.redirect(prefix + '/favorite.html');});
$('#btnOrder').click(function () {MAIN.COMMON.redirect(prefix + '/success.html');});
$('#btnQuickBuy3').click(function () {MAIN.COMMON.redirect(prefix + '/cart.html');});
$('#btnQuickBuy2').click(function () {MAIN.COMMON.redirect(prefix + '/cart.html');});
$('#btnQuickBuy3').click(function () {MAIN.COMMON.redirect(prefix + '/cart.html');});
$('#btnBotCacao').click(function () {MAIN.COMMON.redirect(prefix + '/listproduct.html');});
$('#btnMoreProductIndex').click(function () {MAIN.COMMON.redirect(prefix + '/listproduct.html');});
