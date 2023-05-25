(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-node'] = factory(typeof this['kotlin-node'] === 'undefined' ? {} : this['kotlin-node']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-node.js.map
