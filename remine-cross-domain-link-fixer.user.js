// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: https://addons.mozilla.org/en-US/firefox/addon/748
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Redmine Cross Domain Link Fixer
// @description   make redmine links to canvas domains handle all the x-domain stuff for you
// ==/UserScript==

var X_DOMAIN_STRING = 'cross_domain_login=siteadmin.instructure.com'

if( document.URL.match(/redmine.instructure.com/) ){
  var links = document.getElementById('content').getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.protocol === "https:" && link.host.match(/.instructure.com$/)) {
      if (link.search) {
        link.search = link.search + '&' + X_DOMAIN_STRING
      } else {
        link.search = X_DOMAIN_STRING
      }
    }
  }
}
