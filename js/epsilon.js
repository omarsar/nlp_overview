// Application Code.
var anchorSelector = '.main-content-source h2, ' +
                     '.main-content-source h3, ' +
                     '.main-content-source h4, ' +
                     '.main-content-source h5, ' +
                     '.main-content-source h6 ';

addAnchors(anchorSelector);

$(document).ready(function() {
  $('#menu-toggle').sidr();
});