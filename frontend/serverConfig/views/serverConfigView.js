// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require){
  var Backbone = require('backbone');
  var Origin = require('core/origin');
  var OriginView = require('core/views/originView');

  var ServerLogView = OriginView.extend({
    tagName: 'div',
    className: 'serverConfig form-container-style',

    preRender: function() {
      this.model = new Backbone.Model(Origin.constants);
    },

    postRender: function() {
      this.setViewToReady();
    }
  }, {
    template: 'serverConfig'
  });

  return ServerLogView;
});
