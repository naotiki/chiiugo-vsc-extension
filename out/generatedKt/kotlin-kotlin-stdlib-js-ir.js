//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Collection, 'Collection', interfaceMeta);
  setMetadataFor(AbstractCollection, 'AbstractCollection', classMeta, VOID, [Collection]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Map, 'Map', interfaceMeta);
  setMetadataFor(AbstractMap, 'AbstractMap', classMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(List, 'List', interfaceMeta, VOID, [Collection]);
  setMetadataFor(EmptyList, 'EmptyList', objectMeta, VOID, [List]);
  setMetadataFor(EmptyIterator, 'EmptyIterator', objectMeta);
  setMetadataFor(ArrayAsCollection, 'ArrayAsCollection', classMeta, VOID, [Collection]);
  setMetadataFor(IndexedValue, 'IndexedValue', classMeta);
  setMetadataFor(IndexingIterable, 'IndexingIterable', classMeta);
  setMetadataFor(IndexingIterator, 'IndexingIterator', classMeta);
  setMetadataFor(EmptyMap, 'EmptyMap', objectMeta, VOID, [Map]);
  setMetadataFor(IntIterator, 'IntIterator', classMeta);
  setMetadataFor(Set, 'Set', interfaceMeta, VOID, [Collection]);
  setMetadataFor(EmptySet, 'EmptySet', objectMeta, VOID, [Set]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(IntProgression, 'IntProgression', classMeta);
  setMetadataFor(IntRange, 'IntRange', classMeta, IntProgression);
  setMetadataFor(IntProgressionIterator, 'IntProgressionIterator', classMeta, IntIterator);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Enum, 'Enum', classMeta);
  setMetadataFor(LazyThreadSafetyMode, 'LazyThreadSafetyMode', classMeta, Enum);
  setMetadataFor(UnsafeLazyImpl, 'UnsafeLazyImpl', classMeta);
  setMetadataFor(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE', objectMeta);
  setMetadataFor(Pair, 'Pair', classMeta);
  setMetadataFor(CharSequence, 'CharSequence', interfaceMeta);
  setMetadataFor(Number_0, 'Number', classMeta);
  setMetadataFor(Unit, 'Unit', objectMeta);
  setMetadataFor(ByteCompanionObject, 'ByteCompanionObject', objectMeta);
  setMetadataFor(IntCompanionObject, 'IntCompanionObject', objectMeta);
  setMetadataFor(StringCompanionObject, 'StringCompanionObject', objectMeta);
  setMetadataFor(AbstractMutableCollection, 'AbstractMutableCollection', classMeta, AbstractCollection, [AbstractCollection, Collection]);
  setMetadataFor(IteratorImpl, 'IteratorImpl', classMeta);
  setMetadataFor(AbstractMutableList, 'AbstractMutableList', classMeta, AbstractMutableCollection, [AbstractMutableCollection, List, Collection]);
  setMetadataFor(AbstractMutableMap$keys$1$iterator$1, VOID, classMeta);
  setMetadataFor(Entry, 'Entry', interfaceMeta);
  setMetadataFor(MutableEntry, 'MutableEntry', interfaceMeta, VOID, [Entry]);
  setMetadataFor(SimpleEntry, 'SimpleEntry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(AbstractMutableSet, 'AbstractMutableSet', classMeta, AbstractMutableCollection, [AbstractMutableCollection, Set, Collection]);
  setMetadataFor(AbstractEntrySet, 'AbstractEntrySet', classMeta, AbstractMutableSet);
  setMetadataFor(AbstractMutableMap$keys$1, VOID, classMeta, AbstractMutableSet);
  setMetadataFor(AbstractMutableMap, 'AbstractMutableMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(ArrayList, 'ArrayList', classMeta, AbstractMutableList, [AbstractMutableList, List, Collection]);
  setMetadataFor(HashCode, 'HashCode', objectMeta);
  setMetadataFor(EntrySet, 'EntrySet', classMeta, AbstractEntrySet);
  setMetadataFor(HashMap, 'HashMap', classMeta, AbstractMutableMap, [AbstractMutableMap, Map]);
  setMetadataFor(HashSet, 'HashSet', classMeta, AbstractMutableSet, [AbstractMutableSet, Set, Collection]);
  setMetadataFor(InternalHashCodeMap$iterator$1, VOID, classMeta);
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsDeleteProperty' call
    delete result['foo'];
    tmp$ret$0 = Unit_getInstance();
    return result;
  }
  setMetadataFor(InternalMap, 'InternalMap', interfaceMeta);
  setMetadataFor(InternalHashCodeMap, 'InternalHashCodeMap', classMeta, VOID, [InternalMap]);
  setMetadataFor(EntryIterator, 'EntryIterator', classMeta);
  setMetadataFor(ChainEntry, 'ChainEntry', classMeta, SimpleEntry);
  setMetadataFor(EntrySet_0, 'EntrySet', classMeta, AbstractEntrySet);
  setMetadataFor(LinkedHashMap, 'LinkedHashMap', classMeta, HashMap, [HashMap, Map]);
  setMetadataFor(KClass, 'KClass', interfaceMeta);
  setMetadataFor(KClassImpl, 'KClassImpl', classMeta, VOID, [KClass]);
  setMetadataFor(PrimitiveKClassImpl, 'PrimitiveKClassImpl', classMeta, KClassImpl);
  setMetadataFor(NothingKClassImpl, 'NothingKClassImpl', objectMeta, KClassImpl);
  setMetadataFor(ErrorKClass, 'ErrorKClass', classMeta, VOID, [KClass]);
  setMetadataFor(SimpleKClassImpl, 'SimpleKClassImpl', classMeta, KClassImpl);
  setMetadataFor(KProperty1, 'KProperty1', interfaceMeta);
  setMetadataFor(PrimitiveClasses, 'PrimitiveClasses', objectMeta);
  setMetadataFor(Exception, 'Exception', classMeta, Error);
  setMetadataFor(CharacterCodingException, 'CharacterCodingException', classMeta, Exception);
  setMetadataFor(StringBuilder, 'StringBuilder', classMeta, VOID, [CharSequence]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Char, 'Char', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(arrayIterator$1, VOID, classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Long, 'Long', classMeta, Number_0);
  setMetadataFor(RuntimeException, 'RuntimeException', classMeta, Exception);
  setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, RuntimeException);
  setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, RuntimeException);
  setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, RuntimeException);
  setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, RuntimeException);
  setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, RuntimeException);
  setMetadataFor(ArithmeticException, 'ArithmeticException', classMeta, RuntimeException);
  setMetadataFor(NullPointerException, 'NullPointerException', classMeta, RuntimeException);
  setMetadataFor(ClassCastException, 'ClassCastException', classMeta, RuntimeException);
  setMetadataFor(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', classMeta, RuntimeException);
  //endregion
  function toList(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4[0]);
      default:
        return toMutableList(_this__u8e3s4);
    }
  }
  function withIndex(_this__u8e3s4) {
    return new IndexingIterable(withIndex$lambda(_this__u8e3s4));
  }
  function get_indices(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex(_this__u8e3s4));
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function toMutableList(_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asCollection(_this__u8e3s4));
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function contains(_this__u8e3s4, element) {
    return indexOf(_this__u8e3s4, element) >= 0;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.a(prefix);
    var count = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function zip(_this__u8e3s4, other) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.zip' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = _this__u8e3s4.length;
    var tmp1_minOf = other.length;
    tmp$ret$0 = Math.min(tmp0_minOf, tmp1_minOf);
    var size = tmp$ret$0;
    var list = ArrayList_init_$Create$_0(size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.zip.<anonymous>' call
        var tmp2__anonymous__z9zvc9 = _this__u8e3s4[i];
        var tmp3__anonymous__ufb84q = other[i];
        tmp$ret$1 = to(tmp2__anonymous__z9zvc9, tmp3__anonymous__ufb84q);
        list.e(tmp$ret$1);
      }
       while (inductionVariable < size);
    tmp$ret$2 = list;
    return tmp$ret$2;
  }
  function withIndex$lambda($this_withIndex) {
    return function () {
      return arrayIterator($this_withIndex);
    };
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.a(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.f();
    $l$loop: while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function toHashSet(_this__u8e3s4) {
    return toCollection(_this__u8e3s4, HashSet_init_$Create$_0(mapCapacity(collectionSizeOrDefault(_this__u8e3s4, 12))));
  }
  function toBooleanArray(_this__u8e3s4) {
    var result = booleanArray(_this__u8e3s4.i());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function toCollection(_this__u8e3s4, destination) {
    var tmp0_iterator = _this__u8e3s4.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      destination.e(item);
    }
    return destination;
  }
  function until(_this__u8e3s4, to) {
    if (to <= IntCompanionObject_getInstance().MIN_VALUE)
      return Companion_getInstance_2().j_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).k = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.f();
      while (tmp0_iterator.g()) {
        var element_0 = tmp0_iterator.h();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        tmp$ret$1 = equals(element_0, element);
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).m = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.k(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).l = function () {
    return this.i() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return copyToArrayImpl(this);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).n = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion).o = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion).p = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  protoOf(Companion).q = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.f();
    while (tmp0_iterator.g()) {
      var e = tmp0_iterator.h();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion).r = function (c, other) {
    if (!(c.i() === other.i()))
      return false;
    var otherIterator = other.f();
    var tmp0_iterator = c.f();
    while (tmp0_iterator.g()) {
      var elem = tmp0_iterator.h();
      var elemOther = otherIterator.h();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.s();
      var tmp0_iterator = tmp0_firstOrNull.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        tmp$ret$0 = equals(element.t(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).u = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryHashCode.<anonymous>' call
    var tmp2_safe_receiver = e.t();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp0_safe_receiver = e.v();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(Companion_0).w = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryToString.<anonymous>' call
    tmp$ret$0 = toString_1(e.t()) + '=' + toString_1(e.v());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(Companion_0).x = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals(e.t(), other.t()) ? equals(e.v(), other.v()) : false;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.a1(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this.y_1 = null;
    this.z_1 = null;
  }
  protoOf(AbstractMap).b1 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  protoOf(AbstractMap).c1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.t();
    var value = entry.v();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).d1(key);
    var ourValue = tmp$ret$0;
    if (!equals(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).b1(key);
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  protoOf(AbstractMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    if (!(this.i() === other.i()))
      return false;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = other.s();
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        tmp$ret$1 = this.c1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMap).d1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(AbstractMap).hashCode = function () {
    return hashCode(this.s());
  };
  protoOf(AbstractMap).l = function () {
    return this.i() === 0;
  };
  protoOf(AbstractMap).i = function () {
    return this.s().i();
  };
  protoOf(AbstractMap).toString = function () {
    var tmp = this.s();
    return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
  };
  protoOf(AbstractMap).a1 = function (entry) {
    return toString(this, entry.t()) + '=' + toString(this, entry.v());
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).e1 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_1).f1 = function (c, other) {
    if (!(c.i() === other.i()))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsAll' call
    tmp$ret$0 = c.m(other);
    return tmp$ret$0;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.g1_1 = new Long(-1478467534, -1720727600);
  }
  protoOf(EmptyList).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyList).hashCode = function () {
    return 1;
  };
  protoOf(EmptyList).toString = function () {
    return '[]';
  };
  protoOf(EmptyList).i = function () {
    return 0;
  };
  protoOf(EmptyList).l = function () {
    return true;
  };
  protoOf(EmptyList).h1 = function (elements) {
    return elements.l();
  };
  protoOf(EmptyList).m = function (elements) {
    return this.h1(elements);
  };
  protoOf(EmptyList).i1 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  protoOf(EmptyList).f = function () {
    return EmptyIterator_getInstance();
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  protoOf(EmptyIterator).g = function () {
    return false;
  };
  protoOf(EmptyIterator).h = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.i() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function asCollection(_this__u8e3s4) {
    return new ArrayAsCollection(_this__u8e3s4, false);
  }
  function ArrayAsCollection(values, isVarargs) {
    this.j1_1 = values;
    this.k1_1 = isVarargs;
  }
  protoOf(ArrayAsCollection).i = function () {
    return this.j1_1.length;
  };
  protoOf(ArrayAsCollection).l = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = this.j1_1;
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    return tmp$ret$0;
  };
  protoOf(ArrayAsCollection).l1 = function (element) {
    return contains(this.j1_1, element);
  };
  protoOf(ArrayAsCollection).m1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.ArrayAsCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.l1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArrayAsCollection).m = function (elements) {
    return this.m1(elements);
  };
  protoOf(ArrayAsCollection).f = function () {
    return arrayIterator(this.j1_1);
  };
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function IndexedValue(index, value) {
    this.n1_1 = index;
    this.o1_1 = value;
  }
  protoOf(IndexedValue).toString = function () {
    return 'IndexedValue(index=' + this.n1_1 + ', value=' + this.o1_1 + ')';
  };
  protoOf(IndexedValue).hashCode = function () {
    var result = this.n1_1;
    result = imul(result, 31) + (this.o1_1 == null ? 0 : hashCode(this.o1_1)) | 0;
    return result;
  };
  protoOf(IndexedValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndexedValue))
      return false;
    var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
    if (!(this.n1_1 === tmp0_other_with_cast.n1_1))
      return false;
    if (!equals(this.o1_1, tmp0_other_with_cast.o1_1))
      return false;
    return true;
  };
  function collectionSizeOrDefault(_this__u8e3s4, default_0) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.i();
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function IndexingIterable(iteratorFactory) {
    this.p1_1 = iteratorFactory;
  }
  protoOf(IndexingIterable).f = function () {
    return new IndexingIterator(this.p1_1());
  };
  function IndexingIterator(iterator) {
    this.q1_1 = iterator;
    this.r1_1 = 0;
  }
  protoOf(IndexingIterator).g = function () {
    return this.q1_1.g();
  };
  protoOf(IndexingIterator).h = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.r1_1;
    tmp0_this.r1_1 = tmp1 + 1 | 0;
    return new IndexedValue(checkIndexOverflow(tmp1), this.q1_1.h());
  };
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  }
  function toMap(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp0_subject = _this__u8e3s4.i();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.i1(0);
          } else {
            tmp_0 = _this__u8e3s4.f().h();
          }

          tmp = mapOf(tmp_0);
          break;
        default:
          tmp = toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$_0(mapCapacity(_this__u8e3s4.i())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyMap(toMap_0(_this__u8e3s4, LinkedHashMap_init_$Create$()));
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.s1_1 = new Long(-888910638, 1920087921);
  }
  protoOf(EmptyMap).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyMap).hashCode = function () {
    return 0;
  };
  protoOf(EmptyMap).toString = function () {
    return '{}';
  };
  protoOf(EmptyMap).i = function () {
    return 0;
  };
  protoOf(EmptyMap).l = function () {
    return true;
  };
  protoOf(EmptyMap).t1 = function (key) {
    return false;
  };
  protoOf(EmptyMap).b1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    return this.t1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).u1 = function (key) {
    return null;
  };
  protoOf(EmptyMap).d1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    return this.u1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).s = function () {
    return EmptySet_getInstance();
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_0(_this__u8e3s4, destination) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.toMap.<anonymous>' call
    putAll_0(destination, _this__u8e3s4);
    tmp$ret$0 = destination;
    return tmp$ret$0;
  }
  function optimizeReadOnlyMap(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.i();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        var tmp$ret$0;
        // Inline function 'kotlin.collections.toSingletonMapOrSelf' call
        tmp$ret$0 = _this__u8e3s4;

        tmp = tmp$ret$0;
        break;
      default:
        tmp = _this__u8e3s4;
        break;
    }
    return tmp;
  }
  function putAll(_this__u8e3s4, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.x1();
      var value = tmp1_loop_parameter.y1();
      _this__u8e3s4.z1(key, value);
    }
  }
  function putAll_0(_this__u8e3s4, pairs) {
    var tmp0_iterator = pairs.f();
    while (tmp0_iterator.g()) {
      var tmp1_loop_parameter = tmp0_iterator.h();
      var key = tmp1_loop_parameter.x1();
      var value = tmp1_loop_parameter.y1();
      _this__u8e3s4.z1(key, value);
    }
  }
  function hashMapOf(pairs) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HashMap_init_$Create$_1(mapCapacity(pairs.length));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.hashMapOf.<anonymous>' call
    putAll(tmp0_apply, pairs);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function IntIterator() {
  }
  protoOf(IntIterator).h = function () {
    return this.a2();
  };
  function EmptySet() {
    EmptySet_instance = this;
    this.b2_1 = new Long(1993859828, 793161749);
  }
  protoOf(EmptySet).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptySet).hashCode = function () {
    return 0;
  };
  protoOf(EmptySet).toString = function () {
    return '[]';
  };
  protoOf(EmptySet).i = function () {
    return 0;
  };
  protoOf(EmptySet).l = function () {
    return true;
  };
  protoOf(EmptySet).h1 = function (elements) {
    return elements.l();
  };
  protoOf(EmptySet).m = function (elements) {
    return this.h1(elements);
  };
  protoOf(EmptySet).f = function () {
    return EmptyIterator_getInstance();
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.j_1 = new IntRange(1, 0);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_2();
    IntProgression.call(this, start, endInclusive, 1);
  }
  protoOf(IntRange).l = function () {
    return this.f2_1 > this.g2_1;
  };
  protoOf(IntRange).equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.l() ? other.l() : false) ? true : this.f2_1 === other.f2_1 ? this.g2_1 === other.g2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntRange).hashCode = function () {
    return this.l() ? -1 : imul(31, this.f2_1) + this.g2_1 | 0;
  };
  protoOf(IntRange).toString = function () {
    return '' + this.f2_1 + '..' + this.g2_1;
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.i2_1 = step;
    this.j2_1 = last;
    this.k2_1 = this.i2_1 > 0 ? first <= last : first >= last;
    this.l2_1 = this.k2_1 ? first : this.j2_1;
  }
  protoOf(IntProgressionIterator).g = function () {
    return this.k2_1;
  };
  protoOf(IntProgressionIterator).a2 = function () {
    var value = this.l2_1;
    if (value === this.j2_1) {
      if (!this.k2_1)
        throw NoSuchElementException_init_$Create$();
      this.k2_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.l2_1 = tmp0_this.l2_1 + this.i2_1 | 0;
    }
    return value;
  };
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_3();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance().MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.f2_1 = start;
    this.g2_1 = getProgressionLastElement(start, endInclusive, step);
    this.h2_1 = step;
  }
  protoOf(IntProgression).f = function () {
    return new IntProgressionIterator(this.f2_1, this.g2_1, this.h2_1);
  };
  protoOf(IntProgression).l = function () {
    return this.h2_1 > 0 ? this.f2_1 > this.g2_1 : this.f2_1 < this.g2_1;
  };
  protoOf(IntProgression).equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.l() ? other.l() : false) ? true : (this.f2_1 === other.f2_1 ? this.g2_1 === other.g2_1 : false) ? this.h2_1 === other.h2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntProgression).hashCode = function () {
    return this.l() ? -1 : imul(31, imul(31, this.f2_1) + this.g2_1 | 0) + this.h2_1 | 0;
  };
  protoOf(IntProgression).toString = function () {
    return this.h2_1 > 0 ? '' + this.f2_1 + '..' + this.g2_1 + ' step ' + this.h2_1 : '' + this.f2_1 + ' downTo ' + this.g2_1 + ' step ' + (-this.h2_1 | 0);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.a(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.a(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.n2(element.m2_1);
        } else {
          _this__u8e3s4.a(toString_1(element));
        }
      }
    }
  }
  function get_lastIndex_1(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function get_indices_0(_this__u8e3s4) {
    return numberRangeToNumber(0, charSequenceLength(_this__u8e3s4) - 1 | 0);
  }
  var LazyThreadSafetyMode_SYNCHRONIZED_instance;
  var LazyThreadSafetyMode_PUBLICATION_instance;
  var LazyThreadSafetyMode_NONE_instance;
  var LazyThreadSafetyMode_entriesInitialized;
  function LazyThreadSafetyMode_initEntries() {
    if (LazyThreadSafetyMode_entriesInitialized)
      return Unit_getInstance();
    LazyThreadSafetyMode_entriesInitialized = true;
    LazyThreadSafetyMode_SYNCHRONIZED_instance = new LazyThreadSafetyMode('SYNCHRONIZED', 0);
    LazyThreadSafetyMode_PUBLICATION_instance = new LazyThreadSafetyMode('PUBLICATION', 1);
    LazyThreadSafetyMode_NONE_instance = new LazyThreadSafetyMode('NONE', 2);
  }
  function LazyThreadSafetyMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function UnsafeLazyImpl(initializer) {
    this.r2_1 = initializer;
    this.s2_1 = UNINITIALIZED_VALUE_getInstance();
  }
  protoOf(UnsafeLazyImpl).v = function () {
    if (this.s2_1 === UNINITIALIZED_VALUE_getInstance()) {
      this.s2_1 = ensureNotNull(this.r2_1)();
      this.r2_1 = null;
    }
    var tmp = this.s2_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(UnsafeLazyImpl).t2 = function () {
    return !(this.s2_1 === UNINITIALIZED_VALUE_getInstance());
  };
  protoOf(UnsafeLazyImpl).toString = function () {
    return this.t2() ? toString_1(this.v()) : 'Lazy value not initialized yet.';
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function LazyThreadSafetyMode_PUBLICATION_getInstance() {
    LazyThreadSafetyMode_initEntries();
    return LazyThreadSafetyMode_PUBLICATION_instance;
  }
  function Pair(first, second) {
    this.v1_1 = first;
    this.w1_1 = second;
  }
  protoOf(Pair).toString = function () {
    return '(' + this.v1_1 + ', ' + this.w1_1 + ')';
  };
  protoOf(Pair).x1 = function () {
    return this.v1_1;
  };
  protoOf(Pair).y1 = function () {
    return this.w1_1;
  };
  protoOf(Pair).hashCode = function () {
    var result = this.v1_1 == null ? 0 : hashCode(this.v1_1);
    result = imul(result, 31) + (this.w1_1 == null ? 0 : hashCode(this.w1_1)) | 0;
    return result;
  };
  protoOf(Pair).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals(this.v1_1, tmp0_other_with_cast.v1_1))
      return false;
    if (!equals(this.w1_1, tmp0_other_with_cast.w1_1))
      return false;
    return true;
  };
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function CharSequence() {
  }
  function Number_0() {
  }
  function Unit() {
    Unit_instance = this;
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function ByteCompanionObject() {
    ByteCompanionObject_instance = this;
    this.MIN_VALUE = -128;
    this.MAX_VALUE = 127;
    this.SIZE_BYTES = 1;
    this.SIZE_BITS = 8;
  }
  protoOf(ByteCompanionObject).w2 = function () {
    return this.MIN_VALUE;
  };
  protoOf(ByteCompanionObject).x2 = function () {
    return this.MAX_VALUE;
  };
  protoOf(ByteCompanionObject).y2 = function () {
    return this.SIZE_BYTES;
  };
  protoOf(ByteCompanionObject).z2 = function () {
    return this.SIZE_BITS;
  };
  var ByteCompanionObject_instance;
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null)
      new ByteCompanionObject();
    return ByteCompanionObject_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE = -2147483648;
    this.MAX_VALUE = 2147483647;
    this.SIZE_BYTES = 4;
    this.SIZE_BITS = 32;
  }
  protoOf(IntCompanionObject).w2 = function () {
    return this.MIN_VALUE;
  };
  protoOf(IntCompanionObject).x2 = function () {
    return this.MAX_VALUE;
  };
  protoOf(IntCompanionObject).y2 = function () {
    return this.SIZE_BYTES;
  };
  protoOf(IntCompanionObject).z2 = function () {
    return this.SIZE_BITS;
  };
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    var array = tmp$ret$0;
    var iterator = collection.f();
    while (iterator.g()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.h());
    }
    return array;
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function copyToArray(collection) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = collection;
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = collection;
      var tmp0_unsafeCast = tmp$ret$1.toArray();
      tmp$ret$2 = tmp0_unsafeCast;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = copyToArrayImpl(collection);
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_unsafeCast;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function arrayCopy(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().p(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().p(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (isView(destination) ? isView(source) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = source;
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = destination;
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).a3 = function () {
  };
  function IteratorImpl($outer) {
    this.d3_1 = $outer;
    this.b3_1 = 0;
    this.c3_1 = -1;
  }
  protoOf(IteratorImpl).g = function () {
    return this.b3_1 < this.d3_1.i();
  };
  protoOf(IteratorImpl).h = function () {
    if (!this.g())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.b3_1;
    tmp0_this.b3_1 = tmp1 + 1 | 0;
    tmp.c3_1 = tmp1;
    return this.d3_1.i1(this.c3_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.e3_1 = 0;
  }
  protoOf(AbstractMutableList).e = function (element) {
    this.a3();
    this.f3(this.i(), element);
    return true;
  };
  protoOf(AbstractMutableList).f = function () {
    return new IteratorImpl(this);
  };
  protoOf(AbstractMutableList).k = function (element) {
    return this.g3(element) >= 0;
  };
  protoOf(AbstractMutableList).g3 = function (element) {
    var inductionVariable = 0;
    var last = get_lastIndex_0(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.i1(index), element)) {
          return index;
        }
      }
       while (!(index === last));
    return -1;
  };
  protoOf(AbstractMutableList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_getInstance().r(this, other);
  };
  protoOf(AbstractMutableList).hashCode = function () {
    return Companion_getInstance().q(this);
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.h3_1 = $entryIterator;
  }
  protoOf(AbstractMutableMap$keys$1$iterator$1).g = function () {
    return this.h3_1.g();
  };
  protoOf(AbstractMutableMap$keys$1$iterator$1).h = function () {
    return this.h3_1.h().t();
  };
  function SimpleEntry(key, value) {
    this.i3_1 = key;
    this.j3_1 = value;
  }
  protoOf(SimpleEntry).t = function () {
    return this.i3_1;
  };
  protoOf(SimpleEntry).v = function () {
    return this.j3_1;
  };
  protoOf(SimpleEntry).k3 = function (newValue) {
    var oldValue = this.j3_1;
    this.j3_1 = newValue;
    return oldValue;
  };
  protoOf(SimpleEntry).hashCode = function () {
    return Companion_getInstance_0().u(this);
  };
  protoOf(SimpleEntry).toString = function () {
    return Companion_getInstance_0().w(this);
  };
  protoOf(SimpleEntry).equals = function (other) {
    return Companion_getInstance_0().x(this, other);
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractEntrySet).k = function (element) {
    return this.l3(element);
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.m3_1 = this$0;
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMutableMap$keys$1).n3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  protoOf(AbstractMutableMap$keys$1).e = function (element) {
    return this.n3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AbstractMutableMap$keys$1).o3 = function (element) {
    return this.m3_1.b1(element);
  };
  protoOf(AbstractMutableMap$keys$1).k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.o3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AbstractMutableMap$keys$1).f = function () {
    var entryIterator = this.m3_1.s().f();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  protoOf(AbstractMutableMap$keys$1).i = function () {
    return this.m3_1.i();
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.r3_1 = null;
    this.s3_1 = null;
  }
  protoOf(AbstractMutableMap).t3 = function () {
    if (this.r3_1 == null) {
      var tmp = this;
      tmp.r3_1 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this.r3_1);
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_1().f1(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_getInstance_1().e1(this);
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(elements);
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_getInstance().n(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_getInstance().o(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.c_1 = array;
    this.d_1 = false;
  }
  protoOf(ArrayList).i = function () {
    return this.c_1.length;
  };
  protoOf(ArrayList).i1 = function (index) {
    var tmp = this.c_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).e = function (element) {
    this.a3();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.c_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.e3_1;
    tmp0_this.e3_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).f3 = function (index, element) {
    this.a3();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.c_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.e3_1;
    tmp0_this.e3_1 = tmp1 + 1 | 0;
  };
  protoOf(ArrayList).g3 = function (element) {
    return indexOf(this.c_1, element);
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.c_1);
  };
  protoOf(ArrayList).u3 = function () {
    return [].slice.call(this.c_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.u3();
  };
  protoOf(ArrayList).a3 = function () {
    if (this.d_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashCode() {
    HashCode_instance = this;
  }
  protoOf(HashCode).v3 = function (value1, value2) {
    return equals(value1, value2);
  };
  protoOf(HashCode).w3 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EntrySet($outer) {
    this.x3_1 = $outer;
    AbstractEntrySet.call(this);
  }
  protoOf(EntrySet).y3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  protoOf(EntrySet).e = function (element) {
    return this.y3((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet).l3 = function (element) {
    return this.x3_1.c1(element);
  };
  protoOf(EntrySet).f = function () {
    return this.x3_1.d4_1.f();
  };
  protoOf(EntrySet).i = function () {
    return this.x3_1.i();
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.d4_1 = internalMap;
    $this.e4_1 = internalMap.g4();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = initialCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = loadFactor >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(HashMap)));
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashMap)));
  }
  protoOf(HashMap).b1 = function (key) {
    return this.d4_1.o3(key);
  };
  protoOf(HashMap).s = function () {
    if (this.f4_1 == null) {
      this.f4_1 = this.h4();
    }
    return ensureNotNull(this.f4_1);
  };
  protoOf(HashMap).h4 = function () {
    return new EntrySet(this);
  };
  protoOf(HashMap).d1 = function (key) {
    return this.d4_1.d1(key);
  };
  protoOf(HashMap).z1 = function (key, value) {
    return this.d4_1.z1(key, value);
  };
  protoOf(HashMap).i = function () {
    return this.d4_1.i();
  };
  function HashMap() {
    this.f4_1 = null;
  }
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.i4_1 = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.i4_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_1(initialCapacity, $this) {
    HashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_1(initialCapacity, objectCreate(protoOf(HashSet)));
  }
  protoOf(HashSet).e = function (element) {
    var old = this.i4_1.z1(element, this);
    return old == null;
  };
  protoOf(HashSet).k = function (element) {
    return this.i4_1.b1(element);
  };
  protoOf(HashSet).l = function () {
    return this.i4_1.l();
  };
  protoOf(HashSet).f = function () {
    return this.i4_1.t3().f();
  };
  protoOf(HashSet).i = function () {
    return this.i4_1.i();
  };
  function HashSet() {
  }
  function computeNext($this) {
    if ($this.m4_1 != null ? $this.n4_1 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = $this.m4_1;
      tmp$ret$0 = tmp0_unsafeCast;
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.o4_1 = tmp0_this.o4_1 + 1 | 0;
      if (tmp0_this.o4_1 < chainSize)
        return 0;
    }
    var tmp1_this = $this;
    tmp1_this.l4_1 = tmp1_this.l4_1 + 1 | 0;
    if (tmp1_this.l4_1 < $this.k4_1.length) {
      $this.m4_1 = $this.q4_1.s4_1[$this.k4_1[$this.l4_1]];
      var tmp = $this;
      var tmp_0 = $this.m4_1;
      tmp.n4_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.o4_1 = 0;
      return 0;
    } else {
      $this.m4_1 = null;
      return 1;
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.r4_1.w3(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.r4_1.v3(entry.t(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      var chain = chainOrEntry;
      return findEntryInChain(chain, $this, key);
    }
  }
  function findEntryInChain(_this__u8e3s4, $this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.InternalHashCodeMap.findEntryInChain.<anonymous>' call
        tmp$ret$0 = $this.r4_1.v3(element.t(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.s4_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.q4_1 = this$0;
    this.j4_1 = -1;
    this.k4_1 = Object.keys(this$0.s4_1);
    this.l4_1 = -1;
    this.m4_1 = null;
    this.n4_1 = false;
    this.o4_1 = -1;
    this.p4_1 = null;
  }
  protoOf(InternalHashCodeMap$iterator$1).g = function () {
    if (this.j4_1 === -1)
      this.j4_1 = computeNext(this);
    return this.j4_1 === 0;
  };
  protoOf(InternalHashCodeMap$iterator$1).h = function () {
    if (!this.g())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.n4_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.m4_1;
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0[this.o4_1];
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = this.m4_1;
      tmp$ret$1 = tmp1_unsafeCast;
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.p4_1 = lastEntry;
    this.j4_1 = -1;
    return lastEntry;
  };
  function InternalHashCodeMap(equality) {
    this.r4_1 = equality;
    this.s4_1 = this.u4();
    this.t4_1 = 0;
  }
  protoOf(InternalHashCodeMap).g4 = function () {
    return this.r4_1;
  };
  protoOf(InternalHashCodeMap).i = function () {
    return this.t4_1;
  };
  protoOf(InternalHashCodeMap).z1 = function (key, value) {
    var hashCode = this.r4_1.w3(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.s4_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.r4_1.v3(entry.t(), key)) {
          return entry.k3(value);
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [entry, new SimpleEntry(key, value)];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          this.s4_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.t4_1;
          tmp0_this.t4_1 = tmp1 + 1 | 0;
          return null;
        }
      } else {
        var chain = chainOrEntry;
        var entry_0 = findEntryInChain(chain, this, key);
        if (!(entry_0 == null)) {
          return entry_0.k3(value);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = chain;
        tmp$ret$3.push(new SimpleEntry(key, value));
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.t4_1;
    tmp2_this.t4_1 = tmp3 + 1 | 0;
    return null;
  };
  protoOf(InternalHashCodeMap).o3 = function (key) {
    return !(getEntry(this, key) == null);
  };
  protoOf(InternalHashCodeMap).d1 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(InternalHashCodeMap).f = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  function InternalMap() {
  }
  function EntryIterator($outer) {
    this.x4_1 = $outer;
    this.v4_1 = null;
    this.w4_1 = null;
    this.w4_1 = this.x4_1.i5_1.f5_1;
  }
  protoOf(EntryIterator).g = function () {
    return !(this.w4_1 === null);
  };
  protoOf(EntryIterator).h = function () {
    if (!this.g())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.w4_1);
    this.v4_1 = current;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = current.l5_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.EntryIterator.next.<anonymous>' call
    tmp$ret$0 = !(tmp0_takeIf === this.x4_1.i5_1.f5_1);
    if (tmp$ret$0) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$1 = tmp_0;
    tmp.w4_1 = tmp$ret$1;
    return current;
  };
  function ChainEntry($outer, key, value) {
    this.n5_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.l5_1 = null;
    this.m5_1 = null;
  }
  protoOf(ChainEntry).k3 = function (newValue) {
    this.n5_1.a3();
    return protoOf(SimpleEntry).k3.call(this, newValue);
  };
  function EntrySet_0($outer) {
    this.i5_1 = $outer;
    AbstractEntrySet.call(this);
  }
  protoOf(EntrySet_0).y3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  protoOf(EntrySet_0).e = function (element) {
    return this.y3((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet_0).l3 = function (element) {
    return this.i5_1.c1(element);
  };
  protoOf(EntrySet_0).f = function () {
    return new EntryIterator(this);
  };
  protoOf(EntrySet_0).i = function () {
    return this.i5_1.i();
  };
  function addToEnd(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.l5_1 == null ? _this__u8e3s4.m5_1 == null : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_2(message));
    }
    var _head = $this.f5_1;
    if (_head == null) {
      $this.f5_1 = _this__u8e3s4;
      _this__u8e3s4.l5_1 = _this__u8e3s4;
      _this__u8e3s4.m5_1 = _this__u8e3s4;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.checkNotNull' call
      var tmp1_checkNotNull = _head.m5_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_checkNotNull == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          tmp$ret$1 = 'Required value was null.';
          var message_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString_2(message_0));
        } else {
          tmp$ret$2 = tmp1_checkNotNull;
          break $l$block;
        }
      }
      tmp$ret$3 = tmp$ret$2;
      var _tail = tmp$ret$3;
      _this__u8e3s4.m5_1 = _tail;
      _this__u8e3s4.l5_1 = _head;
      _head.m5_1 = _this__u8e3s4;
      _tail.l5_1 = _this__u8e3s4;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this.g5_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(objectCreate(protoOf(LinkedHashMap)));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.g5_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
  }
  protoOf(LinkedHashMap).b1 = function (key) {
    return this.g5_1.b1(key);
  };
  protoOf(LinkedHashMap).h4 = function () {
    return new EntrySet_0(this);
  };
  protoOf(LinkedHashMap).d1 = function (key) {
    var tmp0_safe_receiver = this.g5_1.d1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(LinkedHashMap).z1 = function (key, value) {
    this.a3();
    var old = this.g5_1.d1(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.g5_1.z1(key, newEntry);
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.k3(value);
    }
  };
  protoOf(LinkedHashMap).i = function () {
    return this.g5_1.i();
  };
  protoOf(LinkedHashMap).a3 = function () {
    if (this.h5_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.f5_1 = null;
    this.h5_1 = false;
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      IntCompanionObject_getInstance();
      var tmp_0 = 32 - 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp$ret$0 = clz32(_this__u8e3s4);
      tmp = 1 << (tmp_0 - tmp$ret$0 | 0);
    }
    return tmp;
  }
  function countLeadingZeroBits(_this__u8e3s4) {
    var high = _this__u8e3s4.p5_1;
    var tmp;
    if (high === 0) {
      IntCompanionObject_getInstance();
      var tmp$ret$0;
      // Inline function 'kotlin.countLeadingZeroBits' call
      var tmp0_countLeadingZeroBits = _this__u8e3s4.o5_1;
      tmp$ret$0 = clz32(tmp0_countLeadingZeroBits);
      tmp = 32 + tmp$ret$0 | 0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp$ret$1 = clz32(high);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.s5_1 = jClass;
  }
  protoOf(KClassImpl).t5 = function () {
    return this.s5_1;
  };
  protoOf(KClassImpl).equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this.t5(), other.t5());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KClassImpl).hashCode = function () {
    var tmp0_safe_receiver = this.q5();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(KClassImpl).toString = function () {
    return 'class ' + this.q5();
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.v5_1 = givenSimpleName;
    this.w5_1 = isInstanceFunction;
  }
  protoOf(PrimitiveKClassImpl).equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return protoOf(KClassImpl).equals.call(this, other) ? this.v5_1 === other.v5_1 : false;
  };
  protoOf(PrimitiveKClassImpl).q5 = function () {
    return this.v5_1;
  };
  protoOf(PrimitiveKClassImpl).r5 = function (value) {
    return this.w5_1(value);
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.y5_1 = 'Nothing';
  }
  protoOf(NothingKClassImpl).q5 = function () {
    return this.y5_1;
  };
  protoOf(NothingKClassImpl).r5 = function (value) {
    return false;
  };
  protoOf(NothingKClassImpl).t5 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  protoOf(NothingKClassImpl).equals = function (other) {
    return other === this;
  };
  protoOf(NothingKClassImpl).hashCode = function () {
    return 0;
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  protoOf(ErrorKClass).q5 = function () {
    throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
  };
  protoOf(ErrorKClass).r5 = function (value) {
    throw IllegalStateException_init_$Create$("Can's check isInstance on ErrorKClass");
  };
  protoOf(ErrorKClass).equals = function (other) {
    return other === this;
  };
  protoOf(ErrorKClass).hashCode = function () {
    return 0;
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = jClass;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    var tmp0_unsafeCast = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp.a6_1 = tmp$ret$1;
  }
  protoOf(SimpleKClassImpl).q5 = function () {
    return this.a6_1;
  };
  protoOf(SimpleKClassImpl).r5 = function (value) {
    return jsIsType(value, this.t5());
  };
  function KProperty1() {
  }
  function get_functionClasses() {
    _init_properties_primitives_kt__3fums4();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return isObject(it);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = it;
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp_0 = tmp$ret$0;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_0 = Number;
    tmp$ret$1 = tmp0_unsafeCast_0;
    var tmp_2 = tmp$ret$1;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_1 = Boolean;
    tmp$ret$2 = tmp0_unsafeCast_1;
    var tmp_4 = tmp$ret$2;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_2 = Number;
    tmp$ret$3 = tmp0_unsafeCast_2;
    var tmp_6 = tmp$ret$3;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_3 = Number;
    tmp$ret$4 = tmp0_unsafeCast_3;
    var tmp_8 = tmp$ret$4;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_4 = Number;
    tmp$ret$5 = tmp0_unsafeCast_4;
    var tmp_10 = tmp$ret$5;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_5 = Number;
    tmp$ret$6 = tmp0_unsafeCast_5;
    var tmp_12 = tmp$ret$6;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_6 = Number;
    tmp$ret$7 = tmp0_unsafeCast_6;
    var tmp_14 = tmp$ret$7;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_7 = Array;
    tmp$ret$8 = tmp0_unsafeCast_7;
    var tmp_16 = tmp$ret$8;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_8 = String;
    tmp$ret$9 = tmp0_unsafeCast_8;
    var tmp_18 = tmp$ret$9;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_9 = Error;
    tmp$ret$10 = tmp0_unsafeCast_9;
    var tmp_20 = tmp$ret$10;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    var tmp$ret$11;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_10 = Array;
    tmp$ret$11 = tmp0_unsafeCast_10;
    var tmp_22 = tmp$ret$11;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    var tmp$ret$12;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_11 = Uint16Array;
    tmp$ret$12 = tmp0_unsafeCast_11;
    var tmp_24 = tmp$ret$12;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_12 = Int8Array;
    tmp$ret$13 = tmp0_unsafeCast_12;
    var tmp_26 = tmp$ret$13;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    var tmp$ret$14;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_13 = Int16Array;
    tmp$ret$14 = tmp0_unsafeCast_13;
    var tmp_28 = tmp$ret$14;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    var tmp$ret$15;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_14 = Int32Array;
    tmp$ret$15 = tmp0_unsafeCast_14;
    var tmp_30 = tmp$ret$15;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    var tmp$ret$16;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_15 = Array;
    tmp$ret$16 = tmp0_unsafeCast_15;
    var tmp_32 = tmp$ret$16;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    var tmp$ret$17;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_16 = Float32Array;
    tmp$ret$17 = tmp0_unsafeCast_16;
    var tmp_34 = tmp$ret$17;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    var tmp$ret$18;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast_17 = Float64Array;
    tmp$ret$18 = tmp0_unsafeCast_17;
    var tmp_36 = tmp$ret$18;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  protoOf(PrimitiveClasses).b6 = function () {
    return this.anyClass;
  };
  protoOf(PrimitiveClasses).c6 = function () {
    return this.numberClass;
  };
  protoOf(PrimitiveClasses).d6 = function () {
    return this.nothingClass;
  };
  protoOf(PrimitiveClasses).e6 = function () {
    return this.booleanClass;
  };
  protoOf(PrimitiveClasses).f6 = function () {
    return this.byteClass;
  };
  protoOf(PrimitiveClasses).g6 = function () {
    return this.shortClass;
  };
  protoOf(PrimitiveClasses).h6 = function () {
    return this.intClass;
  };
  protoOf(PrimitiveClasses).i6 = function () {
    return this.floatClass;
  };
  protoOf(PrimitiveClasses).j6 = function () {
    return this.doubleClass;
  };
  protoOf(PrimitiveClasses).k6 = function () {
    return this.arrayClass;
  };
  protoOf(PrimitiveClasses).l6 = function () {
    return this.stringClass;
  };
  protoOf(PrimitiveClasses).m6 = function () {
    return this.throwableClass;
  };
  protoOf(PrimitiveClasses).n6 = function () {
    return this.booleanArrayClass;
  };
  protoOf(PrimitiveClasses).o6 = function () {
    return this.charArrayClass;
  };
  protoOf(PrimitiveClasses).p6 = function () {
    return this.byteArrayClass;
  };
  protoOf(PrimitiveClasses).q6 = function () {
    return this.shortArrayClass;
  };
  protoOf(PrimitiveClasses).r6 = function () {
    return this.intArrayClass;
  };
  protoOf(PrimitiveClasses).s6 = function () {
    return this.longArrayClass;
  };
  protoOf(PrimitiveClasses).t6 = function () {
    return this.floatArrayClass;
  };
  protoOf(PrimitiveClasses).u6 = function () {
    return this.doubleArrayClass;
  };
  protoOf(PrimitiveClasses).functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = Function;
      tmp$ret$0 = tmp0_unsafeCast;
      var tmp_0 = tmp$ret$0;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_asDynamic = get_functionClasses();
      tmp$ret$1 = tmp1_asDynamic;
      tmp$ret$1[arity] = result;
      tmp$ret$2 = result;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function _init_properties_primitives_kt__3fums4() {
    if (properties_initialized_primitives_kt_jle18u) {
    } else {
      properties_initialized_primitives_kt_jle18u = true;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = jClass;
      tmp$ret$1 = tmp$ret$0;
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = jClass;
      tmp$ret$3 = tmp$ret$2;
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = NothingKClassImpl_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp1_unsafeCast = new ErrorKClass();
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_unsafeCast;
        tmp$ret$3 = tmp$ret$2;

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = PrimitiveClasses_getInstance().stringClass;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = jClass;
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.jsBitwiseOr' call
        tmp$ret$0 = e | 0;
        var tmp0_asDynamic = tmp$ret$0;
        tmp$ret$1 = tmp0_asDynamic;

        if (tmp$ret$1 === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = e;

        tmp = tmp_1.functionClass(tmp$ret$2.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass1(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast = tmp;
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp1_unsafeCast;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function CharacterCodingException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, CharacterCodingException);
  }
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.x6_1 = !(content === undefined) ? content : '';
  }
  protoOf(StringBuilder).u2 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.x6_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  protoOf(StringBuilder).v2 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.x6_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_1(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.u2() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StringBuilder).n2 = function (value) {
    var tmp0_this = this;
    tmp0_this.x6_1 = tmp0_this.x6_1 + new Char(value);
    return this;
  };
  protoOf(StringBuilder).a = function (value) {
    var tmp0_this = this;
    tmp0_this.x6_1 = tmp0_this.x6_1 + toString_1(value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.x6_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.uppercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toUpperCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this__u8e3s4) {
    return isWhitespaceImpl(_this__u8e3s4);
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function compareTo(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    _init_properties_string_kt__3w3j69();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.minOf' call
      tmp$ret$0 = Math.min(n1, n2);
      var min = tmp$ret$0;
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charSequenceGet(_this__u8e3s4, index);
          var otherChar = charSequenceGet(other, index);
          if (!equals(new Char(thisChar), new Char(otherChar))) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!equals(new Char(thisChar), new Char(otherChar))) {
              var tmp$ret$4;
              // Inline function 'kotlin.text.lowercaseChar' call
              var tmp2_lowercaseChar = thisChar;
              var tmp$ret$3;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$2;
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$1;
              // Inline function 'kotlin.js.asDynamic' call
              var tmp0_asDynamic = toString_0(tmp2_lowercaseChar);
              tmp$ret$1 = tmp0_asDynamic;
              var tmp1_unsafeCast = tmp$ret$1.toLowerCase();
              tmp$ret$2 = tmp1_unsafeCast;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = charSequenceGet(tmp$ret$3, 0);
              thisChar = tmp$ret$4;
              var tmp$ret$8;
              // Inline function 'kotlin.text.lowercaseChar' call
              var tmp5_lowercaseChar = otherChar;
              var tmp$ret$7;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$6;
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp$ret$5;
              // Inline function 'kotlin.js.asDynamic' call
              var tmp3_asDynamic = toString_0(tmp5_lowercaseChar);
              tmp$ret$5 = tmp3_asDynamic;
              var tmp4_unsafeCast = tmp$ret$5.toLowerCase();
              tmp$ret$6 = tmp4_unsafeCast;
              tmp$ret$7 = tmp$ret$6;
              tmp$ret$8 = charSequenceGet(tmp$ret$7, 0);
              otherChar = tmp$ret$8;
              if (!equals(new Char(thisChar), new Char(otherChar))) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo_0(_this__u8e3s4, other);
    }
  }
  function encodeToByteArray(_this__u8e3s4) {
    _init_properties_string_kt__3w3j69();
    return encodeUtf8(_this__u8e3s4, 0, _this__u8e3s4.length, false);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.y6_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).z6 = function (a, b) {
    return this.y6_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.z6(a, b);
  };
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    _init_properties_string_kt__3w3j69();
    return compareTo(a, b, true);
  }
  var properties_initialized_string_kt_4g1sj;
  function _init_properties_string_kt__3w3j69() {
    if (properties_initialized_string_kt_4g1sj) {
    } else {
      properties_initialized_string_kt_4g1sj = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function isBlank(_this__u8e3s4) {
    var tmp;
    if (charSequenceLength(_this__u8e3s4) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = get_indices_0(_this__u8e3s4);
        var tmp_0;
        if (isInterface(tmp0_all, Collection)) {
          tmp_0 = tmp0_all.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var inductionVariable = tmp0_all.f2_1;
        var last = tmp0_all.g2_1;
        if (inductionVariable <= last)
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'kotlin.text.isBlank.<anonymous>' call
            tmp$ret$1 = isWhitespace(charSequenceGet(_this__u8e3s4, element));
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
           while (!(element === last));
        tmp$ret$0 = true;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function get_REPLACEMENT_BYTE_SEQUENCE() {
    _init_properties_utf8Encoding_kt__9thjs4();
    return REPLACEMENT_BYTE_SEQUENCE;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function encodeUtf8(string, startIndex, endIndex, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    // Inline function 'kotlin.require' call
    var tmp0_require = (startIndex >= 0 ? endIndex <= string.length : false) ? startIndex <= endIndex : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    var bytes = new Int8Array(imul(endIndex - startIndex | 0, 3));
    var byteIndex = 0;
    var charIndex = startIndex;
    while (charIndex < endIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      var tmp0 = charIndex;
      charIndex = tmp0 + 1 | 0;
      var tmp1__get_code__adl84j = charSequenceGet(string, tmp0);
      tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      var code = tmp$ret$1;
      if (code < 128) {
        var tmp1 = byteIndex;
        byteIndex = tmp1 + 1 | 0;
        bytes[tmp1] = toByte(code);
      } else if (code < 2048) {
        var tmp2 = byteIndex;
        byteIndex = tmp2 + 1 | 0;
        bytes[tmp2] = toByte(code >> 6 | 192);
        var tmp3 = byteIndex;
        byteIndex = tmp3 + 1 | 0;
        bytes[tmp3] = toByte(code & 63 | 128);
      } else if (code < 55296 ? true : code >= 57344) {
        var tmp4 = byteIndex;
        byteIndex = tmp4 + 1 | 0;
        bytes[tmp4] = toByte(code >> 12 | 224);
        var tmp5 = byteIndex;
        byteIndex = tmp5 + 1 | 0;
        bytes[tmp5] = toByte(code >> 6 & 63 | 128);
        var tmp6 = byteIndex;
        byteIndex = tmp6 + 1 | 0;
        bytes[tmp6] = toByte(code & 63 | 128);
      } else {
        var codePoint = codePointFromSurrogate(string, code, charIndex, endIndex, throwOnMalformed);
        if (codePoint <= 0) {
          var tmp7 = byteIndex;
          byteIndex = tmp7 + 1 | 0;
          bytes[tmp7] = get_REPLACEMENT_BYTE_SEQUENCE()[0];
          var tmp8 = byteIndex;
          byteIndex = tmp8 + 1 | 0;
          bytes[tmp8] = get_REPLACEMENT_BYTE_SEQUENCE()[1];
          var tmp9 = byteIndex;
          byteIndex = tmp9 + 1 | 0;
          bytes[tmp9] = get_REPLACEMENT_BYTE_SEQUENCE()[2];
        } else {
          var tmp10 = byteIndex;
          byteIndex = tmp10 + 1 | 0;
          bytes[tmp10] = toByte(codePoint >> 18 | 240);
          var tmp11 = byteIndex;
          byteIndex = tmp11 + 1 | 0;
          bytes[tmp11] = toByte(codePoint >> 12 & 63 | 128);
          var tmp12 = byteIndex;
          byteIndex = tmp12 + 1 | 0;
          bytes[tmp12] = toByte(codePoint >> 6 & 63 | 128);
          var tmp13 = byteIndex;
          byteIndex = tmp13 + 1 | 0;
          bytes[tmp13] = toByte(codePoint & 63 | 128);
          var tmp14 = charIndex;
          charIndex = tmp14 + 1 | 0;
        }
      }
    }
    return bytes.length === byteIndex ? bytes : copyOf_0(bytes, byteIndex);
  }
  function malformed(size, index, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    if (throwOnMalformed)
      throw new CharacterCodingException('Malformed sequence starting at ' + (index - 1 | 0));
    return -size | 0;
  }
  function codePointFromSurrogate(string, high, index, endIndex, throwOnMalformed) {
    _init_properties_utf8Encoding_kt__9thjs4();
    if (!(55296 <= high ? high <= 56319 : false) ? true : index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(string, index);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var low = tmp$ret$0;
    if (!(56320 <= low ? low <= 57343 : false)) {
      return malformed(0, index, throwOnMalformed);
    }
    return 65536 + ((high & 1023) << 10) | 0 | low & 1023;
  }
  var properties_initialized_utf8Encoding_kt_eee1vq;
  function _init_properties_utf8Encoding_kt__9thjs4() {
    if (properties_initialized_utf8Encoding_kt_eee1vq) {
    } else {
      properties_initialized_utf8Encoding_kt_eee1vq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT_BYTE_SEQUENCE = tmp$ret$0;
    }
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    var tmp = _Char___init__impl__6a9atx(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    var tmp = $this.m2_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char ? other.m2_1 : THROW_CCE());
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.m2_1);
  }
  function Char__hashCode_impl_otmys($this) {
    return _get_value__a43j40($this);
  }
  function toString_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = String.fromCharCode(_get_value__a43j40($this));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.a7_1 = _Char___init__impl__6a9atx(0);
    this.b7_1 = _Char___init__impl__6a9atx(65535);
    this.c7_1 = _Char___init__impl__6a9atx(55296);
    this.d7_1 = _Char___init__impl__6a9atx(56319);
    this.e7_1 = _Char___init__impl__6a9atx(56320);
    this.f7_1 = _Char___init__impl__6a9atx(57343);
    this.g7_1 = _Char___init__impl__6a9atx(55296);
    this.h7_1 = _Char___init__impl__6a9atx(57343);
    this.i7_1 = 2;
    this.j7_1 = 16;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Char(value) {
    Companion_getInstance_4();
    this.m2_1 = value;
  }
  protoOf(Char).k7 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.m2_1, other);
  };
  protoOf(Char).l7 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  protoOf(Char).equals = function (other) {
    return Char__equals_impl_x6719k(this.m2_1, other);
  };
  protoOf(Char).hashCode = function () {
    return Char__hashCode_impl_otmys(this.m2_1);
  };
  protoOf(Char).toString = function () {
    return toString_0(this.m2_1);
  };
  function List() {
  }
  function Collection() {
  }
  function Set() {
  }
  function Entry() {
  }
  function Map() {
  }
  function MutableEntry() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_5();
    this.o2_1 = name;
    this.p2_1 = ordinal;
  }
  protoOf(Enum).q2 = function (other) {
    return compareTo_0(this.p2_1, other.p2_1);
  };
  protoOf(Enum).l7 = function (other) {
    return this.q2(other instanceof Enum ? other : THROW_CCE());
  };
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.o2_1;
  };
  function toString_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var indexedObject = interfaces;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var i = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp2_safe_receiver = iid;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.implement.<anonymous>' call
        tmp$ret$0 = bitMaskWith(tmp2_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var intArray = new Int32Array((activeBit >> 5) + 1 | 0);
    var numberIndex = activeBit >> 5;
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = capacity;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.js.compositeBitMask.<anonymous>' call
      var result = 0;
      var indexedObject = masks;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var mask = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_2 < mask.length) {
          result = result | mask[tmp_2];
        }
      }
      tmp$ret$0 = result;
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function booleanArray(size) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'withType' call
    var tmp0_withType = fillArrayVal(Array(size), false);
    tmp0_withType.$type$ = 'BooleanArray';
    tmp$ret$0 = tmp0_withType;
    var tmp1_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp1_unsafeCast;
    return tmp$ret$1;
  }
  function longArray(size) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'withType' call
    var tmp0_withType = fillArrayVal(Array(size), new Long(0, 0));
    tmp0_withType.$type$ = 'LongArray';
    tmp$ret$0 = tmp0_withType;
    var tmp1_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp1_unsafeCast;
    return tmp$ret$1;
  }
  function arrayIterator$1($array) {
    this.n7_1 = $array;
    this.m7_1 = 0;
  }
  protoOf(arrayIterator$1).g = function () {
    return !(this.m7_1 === this.n7_1.length);
  };
  protoOf(arrayIterator$1).h = function () {
    var tmp;
    if (!(this.m7_1 === this.n7_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m7_1;
      tmp0_this.m7_1 = tmp1 + 1 | 0;
      tmp = this.n7_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.m7_1);
    }
    return tmp;
  };
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp$ret$0 = obj | 0;
    var tmp0_unsafeCast = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2 === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (properties_initialized_bitUtils_kt_i2bo3e) {
    } else {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new Float64Array(get_buf());
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = new Float32Array(get_buf());
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = new Int32Array(get_buf());
      var tmp$ret$0_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_1 = tmp0_unsafeCast_1;
      tmp$ret$1_1 = tmp$ret$0_1;
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_2;
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      tmp$ret$0_2 = !(get_bufInt32()[0] === 0) ? 1 : 0;
      tmp$ret$1_2 = tmp$ret$0_2;
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      // Inline function 'kotlin.Char' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.charCodeAt(index);
      tmp$ret$1 = tmp0_unsafeCast;
      var tmp3_Char = tmp$ret$1;
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      Companion_getInstance_4();
      var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      if (tmp3_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_4();
        var tmp2__get_code__cifwzm = _Char___init__impl__6a9atx(65535);
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
        tmp_0 = tmp3_Char > tmp$ret$3;
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp3_Char);
      }
      tmp$ret$4 = numberToChar(tmp3_Char);
      tmp = tmp$ret$4;
    } else {
      tmp = a.v2(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.length;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.u2();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function contentEqualsInternal(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var a = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = other;
    var b = tmp$ret$1;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString$lambda(it) {
    return toString_2(it);
  }
  function compareTo_0(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.o7());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.l7(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsIn' call
    var tmp0_jsIn = 'kotlinHashCodeValue$';
    var tmp1_jsIn = obj;
    tmp$ret$0 = tmp0_jsIn in tmp1_jsIn;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp2_jsBitwiseOr = Math.random() * 4.294967296E9;
      tmp$ret$1 = tmp2_jsBitwiseOr | 0;
      var hash = tmp$ret$1;
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp3_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$2 = tmp3_unsafeCast;
    return tmp$ret$2;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = 1;
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = 1;
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.unsafeCast' call
        tmp$ret$0 = obj;

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = str;
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    return Object.create(proto);
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('lateinit property ' + name + ' has not been initialized');
  }
  function lazy(mode, initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function lazy_0(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp$ret$0 = dst;
    var arr = tmp$ret$0;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = source.slice(0, newSize);
    tmp$ret$0 = tmp0_unsafeCast;
    var result = tmp$ret$0;
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = result;
      tmp$ret$1.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }
    return result;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.p7_1 = new Long(0, -2147483648);
    this.q7_1 = new Long(-1, 2147483647);
    this.r7_1 = 8;
    this.s7_1 = 64;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Long(low, high) {
    Companion_getInstance_6();
    Number_0.call(this);
    this.o5_1 = low;
    this.p5_1 = high;
  }
  protoOf(Long).t7 = function (other) {
    return compare(this, other);
  };
  protoOf(Long).l7 = function (other) {
    return this.t7(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).u7 = function (other) {
    return add(this, other);
  };
  protoOf(Long).v7 = function (other) {
    return divide(this, other);
  };
  protoOf(Long).w7 = function () {
    return this.x7().u7(new Long(1, 0));
  };
  protoOf(Long).y7 = function (bitCount) {
    return shiftRightUnsigned(this, bitCount);
  };
  protoOf(Long).z7 = function (other) {
    return new Long(this.o5_1 & other.o5_1, this.p5_1 & other.p5_1);
  };
  protoOf(Long).a8 = function (other) {
    return new Long(this.o5_1 | other.o5_1, this.p5_1 | other.p5_1);
  };
  protoOf(Long).x7 = function () {
    return new Long(~this.o5_1, ~this.p5_1);
  };
  protoOf(Long).b8 = function () {
    return toByte(this.o5_1);
  };
  protoOf(Long).c8 = function () {
    return this.o5_1;
  };
  protoOf(Long).o7 = function () {
    return toNumber(this);
  };
  protoOf(Long).valueOf = function () {
    return this.o7();
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode_0(this);
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  function get_ZERO() {
    _init_properties_longjs_kt__tqrzid();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longjs_kt__tqrzid();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    var a48 = _this__u8e3s4.p5_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.p5_1 & 65535;
    var a16 = _this__u8e3s4.o5_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.o5_1 & 65535;
    var b48 = other.p5_1 >>> 16 | 0;
    var b32 = other.p5_1 & 65535;
    var b16 = other.o5_1 >>> 16 | 0;
    var b00 = other.o5_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return add(_this__u8e3s4, other.w7());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.p5_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.p5_1 & 65535;
    var a16 = _this__u8e3s4.o5_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.o5_1 & 65535;
    var b48 = other.p5_1 >>> 16 | 0;
    var b32 = other.p5_1 & 65535;
    var b16 = other.o5_1 >>> 16 | 0;
    var b00 = other.o5_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.v7(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.v7(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).v7(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).v7(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.v7(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.o5_1 << numBits_0, _this__u8e3s4.p5_1 << numBits_0 | (_this__u8e3s4.o5_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.o5_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.o5_1 >>> numBits_0 | 0 | _this__u8e3s4.p5_1 << (32 - numBits_0 | 0), _this__u8e3s4.p5_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.p5_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.p5_1 >= 0 ? 0 : -1);
      }
    }
  }
  function shiftRightUnsigned(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.o5_1 >>> numBits_0 | 0 | _this__u8e3s4.p5_1 << (32 - numBits_0 | 0), _this__u8e3s4.p5_1 >>> numBits_0 | 0);
      } else {
        var tmp;
        if (numBits_0 === 32) {
          tmp = new Long(_this__u8e3s4.p5_1, 0);
        } else {
          tmp = new Long(_this__u8e3s4.p5_1 >>> (numBits_0 - 32 | 0) | 0, 0);
        }
        return tmp;
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.p5_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.p5_1 === other.p5_1 ? _this__u8e3s4.o5_1 === other.o5_1 : false;
  }
  function hashCode_0(l) {
    _init_properties_longjs_kt__tqrzid();
    return l.o5_1 ^ l.p5_1;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longjs_kt__tqrzid();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.v7(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).c8();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.v7(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).c8();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    _init_properties_longjs_kt__tqrzid();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.p5_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.p5_1 === 0 ? _this__u8e3s4.o5_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return (_this__u8e3s4.o5_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.w7();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longjs_kt__tqrzid();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp0_jsBitwiseOr = value % twoPwr32;
      tmp$ret$0 = tmp0_jsBitwiseOr | 0;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp1_jsBitwiseOr = value / twoPwr32;
      tmp$ret$1 = tmp1_jsBitwiseOr | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.o5_1 >= 0 ? _this__u8e3s4.o5_1 : 4.294967296E9 + _this__u8e3s4.o5_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function _init_properties_longjs_kt__tqrzid() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function toByte(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 24 >> 24;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.c8();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2.147483647E9) {
      tmp = 2147483647;
    } else if (a < -2.147483648E9) {
      tmp = -2147483648;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp$ret$0 = a | 0;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toShort(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 16 >> 16;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = numberToInt(a);
    tmp$ret$0 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function toLong(a) {
    return fromInt(a);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function get_propertyRefClassMetadataCache() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return classMeta(VOID, VOID, VOID, VOID);
  }
  function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata, imask) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    obj.$imask$ = imask;
    return obj;
  }
  function getKPropMetadata(paramCount, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
  }
  function getInterfaceMaskFor(obj, superType) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [superType];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = implement(tmp$ret$2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function _init_properties_reflectRuntime_kt__5r4uu3() {
    if (properties_initialized_reflectRuntime_kt_inkhwd) {
    } else {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      var tmp$ret$11;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp0_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_arrayOf;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$5;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_arrayOf;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      var tmp$ret$8;
      // Inline function 'kotlin.arrayOf' call
      var tmp2_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp2_arrayOf;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      var tmp3_arrayOf = [tmp, tmp_0, tmp$ret$8];
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = tmp3_arrayOf;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      propertyRefClassMetadataCache = tmp$ret$11;
    }
  }
  function classMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function createMetadata(kind, name, associatedObjectKey, associatedObjects, suspendArity, iid) {
    var undef = VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, iid: iid};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var tmp0_elvis_lhs = suspendArity;
    var metadata = metadataConstructor(name, associatedObjectKey, associatedObjects, tmp0_elvis_lhs == null ? [] : tmp0_elvis_lhs);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj.$imask$;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = obj;
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = true;
        break;
      case 'number':
        tmp = true;
        break;
      case 'boolean':
        tmp = true;
        break;
      case 'function':
        tmp = true;
        break;
      default:
        var tmp$ret$0;
        // Inline function 'kotlin.js.jsInstanceOf' call
        var tmp0_jsInstanceOf = Object;
        tmp$ret$0 = obj instanceof tmp0_jsInstanceOf;

        tmp = tmp$ret$0;
        break;
    }
    return tmp;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Int8Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    return tmp$ret$0;
  }
  function isShortArray(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Int16Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    return tmp$ret$0;
  }
  function isCharArray(a) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Uint16Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    if (tmp$ret$0) {
      tmp = a.$type$ === 'CharArray';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isIntArray(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Int32Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    return tmp$ret$0;
  }
  function isFloatArray(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Float32Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    return tmp$ret$0;
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsInstanceOf' call
    var tmp0_jsInstanceOf = Float64Array;
    tmp$ret$0 = a instanceof tmp0_jsInstanceOf;
    return tmp$ret$0;
  }
  function interfaceMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId());
  }
  function generateInterfaceId() {
    if (!!(iid == null)) {
      iid = 0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = get_iid();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    iid = tmp$ret$1 + 1 | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp1_unsafeCast = get_iid();
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function get_iid() {
    var tmp = iid;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('iid');
    }
  }
  var iid;
  function objectMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('object', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function jsIsType(obj, jsClass) {
    if (jsClass === Object) {
      return isObject(obj);
    }
    if ((obj == null ? true : jsClass == null) ? true : !(typeof obj === 'object') ? !(typeof obj === 'function') : false) {
      return false;
    }
    var tmp;
    if (typeof jsClass === 'function') {
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsInstanceOf' call
      tmp$ret$0 = obj instanceof jsClass;
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      return true;
    }
    var proto = jsGetPrototypeOf(jsClass);
    var tmp0_safe_receiver = proto;
    var constructor = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
    var tmp_0;
    if (constructor != null) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsIn' call
      var tmp0_jsIn = '$metadata$';
      var tmp1_jsIn = constructor;
      tmp$ret$1 = tmp0_jsIn in tmp1_jsIn;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var metadata = constructor.$metadata$;
      if (metadata.kind === 'object') {
        return obj === jsClass;
      }
    }
    var klassMetadata = jsClass.$metadata$;
    if (klassMetadata == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.js.jsInstanceOf' call
      tmp$ret$2 = obj instanceof jsClass;
      return tmp$ret$2;
    }
    if (klassMetadata.kind === 'interface') {
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = klassMetadata.iid;
      tmp$ret$3 = tmp2_unsafeCast;
      var tmp1_elvis_lhs = tmp$ret$3;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var iid = tmp_1;
      return isInterfaceImpl(obj, iid);
    }
    return false;
  }
  function jsGetPrototypeOf(jsClass) {
    return Object.getPrototypeOf(jsClass);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (properties_initialized_void_kt_e4ret2) {
    } else {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function asList(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    return new ArrayList(tmp$ret$1);
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newSize >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    var tmp$ret$1;
    // Inline function 'withType' call
    var tmp1_withType = arrayCopyResize(_this__u8e3s4, newSize, new Long(0, 0));
    tmp1_withType.$type$ = 'LongArray';
    tmp$ret$1 = tmp1_withType;
    return tmp$ret$1;
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newSize >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      tmp$ret$0 = 'Invalid new array size: ' + newSize + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return fillFrom(_this__u8e3s4, new Int8Array(newSize));
  }
  function contentEquals(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function contentHashCode(_this__u8e3s4) {
    return contentHashCodeInternal(_this__u8e3s4);
  }
  function toTypedArray(_this__u8e3s4) {
    return [].slice.call(_this__u8e3s4);
  }
  function isWhitespaceImpl(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
    var ch = tmp$ret$0;
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, objectCreate(protoOf(ArithmeticException)));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, objectCreate(protoOf(UninitializedPropertyAccessException)));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  //region block: post-declaration
  protoOf(InternalHashCodeMap).u4 = createJsMap;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getKClassFromExpression;
  _.$_$.b = getKClass;
  _.$_$.c = LazyThreadSafetyMode_PUBLICATION_getInstance;
  _.$_$.d = ArrayList_init_$Create$_0;
  _.$_$.e = ArrayList_init_$Create$;
  _.$_$.f = HashMap_init_$Create$;
  _.$_$.g = HashSet_init_$Create$;
  _.$_$.h = LinkedHashMap_init_$Create$_0;
  _.$_$.i = LinkedHashMap_init_$Create$;
  _.$_$.j = IllegalArgumentException_init_$Init$;
  _.$_$.k = IllegalArgumentException_init_$Create$;
  _.$_$.l = IllegalArgumentException_init_$Init$_0;
  _.$_$.m = IllegalStateException_init_$Create$;
  _.$_$.n = IndexOutOfBoundsException_init_$Create$;
  _.$_$.o = _Char___init__impl__6a9atx;
  _.$_$.p = Char__hashCode_impl_otmys;
  _.$_$.q = Char__toInt_impl_vasixd;
  _.$_$.r = ByteCompanionObject_getInstance;
  _.$_$.s = IntCompanionObject_getInstance;
  _.$_$.t = StringCompanionObject_getInstance;
  _.$_$.u = Unit_getInstance;
  _.$_$.v = Collection;
  _.$_$.w = Entry;
  _.$_$.x = Map;
  _.$_$.y = arrayCopy;
  _.$_$.z = asList;
  _.$_$.a1 = collectionSizeOrDefault;
  _.$_$.b1 = contentEquals;
  _.$_$.c1 = contentHashCode;
  _.$_$.d1 = copyOf;
  _.$_$.e1 = copyToArray;
  _.$_$.f1 = emptyList;
  _.$_$.g1 = emptyMap;
  _.$_$.h1 = get_indices;
  _.$_$.i1 = joinToString_0;
  _.$_$.j1 = mapCapacity;
  _.$_$.k1 = toBooleanArray;
  _.$_$.l1 = toHashSet;
  _.$_$.m1 = toList;
  _.$_$.n1 = toMap;
  _.$_$.o1 = toTypedArray;
  _.$_$.p1 = withIndex;
  _.$_$.q1 = zip;
  _.$_$.r1 = arrayIterator;
  _.$_$.s1 = booleanArray;
  _.$_$.t1 = captureStack;
  _.$_$.u1 = classMeta;
  _.$_$.v1 = defineProp;
  _.$_$.w1 = equals;
  _.$_$.x1 = fillArrayVal;
  _.$_$.y1 = getPropertyCallableRef;
  _.$_$.z1 = getStringHashCode;
  _.$_$.a2 = hashCode;
  _.$_$.b2 = interfaceMeta;
  _.$_$.c2 = isByteArray;
  _.$_$.d2 = isInterface;
  _.$_$.e2 = isObject;
  _.$_$.f2 = longArray;
  _.$_$.g2 = objectCreate;
  _.$_$.h2 = objectMeta;
  _.$_$.i2 = protoOf;
  _.$_$.j2 = setMetadataFor;
  _.$_$.k2 = toByte;
  _.$_$.l2 = toLong;
  _.$_$.m2 = toShort;
  _.$_$.n2 = toString_2;
  _.$_$.o2 = until;
  _.$_$.p2 = KProperty1;
  _.$_$.q2 = encodeToByteArray;
  _.$_$.r2 = isBlank;
  _.$_$.s2 = Char;
  _.$_$.t2 = Enum;
  _.$_$.u2 = IllegalArgumentException;
  _.$_$.v2 = Long;
  _.$_$.w2 = THROW_CCE;
  _.$_$.x2 = countLeadingZeroBits;
  _.$_$.y2 = ensureNotNull;
  _.$_$.z2 = lazy;
  _.$_$.a3 = lazy_0;
  _.$_$.b3 = takeHighestOneBit;
  _.$_$.c3 = to;
  _.$_$.d3 = VOID;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map
