(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-js.js.map
