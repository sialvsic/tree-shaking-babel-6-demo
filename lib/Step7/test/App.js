'use strict';

var _components = require('./components');

var appleModel = new _components.Apple({
  model: 'IphoneX'
}).getModel();

console.log(appleModel);