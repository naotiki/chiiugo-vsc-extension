(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlinx-serialization-kotlinx-serialization-cbor-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-cbor-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-cbor-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-cbor-js-ir.js.map
