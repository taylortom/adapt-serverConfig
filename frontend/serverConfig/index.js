// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Origin = require('core/origin');
  var ServerConfigView = require('./views/serverConfigView');

  var TITLE = 'Server Config';
  var CLASSNAME = 'serverConfig';

  Origin.on('globalMenu:' + CLASSNAME + ':open', function() {
    Origin.router.navigateTo(CLASSNAME);
  });

  Origin.on('origin:dataReady login:changed', function() {
    var permissions = ["*/*:create","*/*:read","*/*:update","*/*:delete"];
    Origin.permissions.addRoute(CLASSNAME, permissions);
    if (Origin.permissions.hasPermissions(permissions)) {
      Origin.globalMenu.addItem({
        "location": "global",
        "text": TITLE,
        "icon": "fa-file-text ",
        "callbackEvent": CLASSNAME + ":open"
      });
    }
  });

  Origin.on('router:' + CLASSNAME, function(location, subLocation, action) {
    Origin.trigger('sidebar:views:remove');
    Origin.trigger('location:title:update', { title: TITLE });
    Origin.contentPane.setView(ServerConfigView);
  });
});
