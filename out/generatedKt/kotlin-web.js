(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-web'] = factory(typeof this['kotlin-web'] === 'undefined' ? {} : this['kotlin-web']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-web.js.map
