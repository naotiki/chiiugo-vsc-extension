(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i2;
  var interfaceMeta = kotlin_kotlin.$_$.b2;
  var VOID = kotlin_kotlin.$_$.d3;
  var setMetadataFor = kotlin_kotlin.$_$.j2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var asList = kotlin_kotlin.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.t;
  var THROW_CCE = kotlin_kotlin.$_$.w2;
  var Entry = kotlin_kotlin.$_$.w;
  var isInterface = kotlin_kotlin.$_$.d2;
  var classMeta = kotlin_kotlin.$_$.u1;
  var emptyList = kotlin_kotlin.$_$.f1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.z2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var zip = kotlin_kotlin.$_$.q1;
  var toMap = kotlin_kotlin.$_$.n1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var toString = kotlin_kotlin.$_$.n2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m;
  var mapCapacity = kotlin_kotlin.$_$.j1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.p2;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y1;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j;
  var captureStack = kotlin_kotlin.$_$.t1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.l;
  var IllegalArgumentException = kotlin_kotlin.$_$.u2;
  var isBlank = kotlin_kotlin.$_$.r2;
  var equals = kotlin_kotlin.$_$.w1;
  var toList = kotlin_kotlin.$_$.m1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g;
  var toHashSet = kotlin_kotlin.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.e1;
  var toBooleanArray = kotlin_kotlin.$_$.k1;
  var withIndex = kotlin_kotlin.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d;
  var to = kotlin_kotlin.$_$.c3;
  var lazy_0 = kotlin_kotlin.$_$.a3;
  var contentEquals = kotlin_kotlin.$_$.b1;
  var until = kotlin_kotlin.$_$.o2;
  var joinToString = kotlin_kotlin.$_$.i1;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var ensureNotNull = kotlin_kotlin.$_$.y2;
  var getStringHashCode = kotlin_kotlin.$_$.z1;
  var hashCode = kotlin_kotlin.$_$.a2;
  var Collection = kotlin_kotlin.$_$.v;
  var isObject = kotlin_kotlin.$_$.e2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  var arrayIterator = kotlin_kotlin.$_$.r1;
  var fillArrayVal = kotlin_kotlin.$_$.x1;
  var booleanArray = kotlin_kotlin.$_$.s1;
  var emptyMap = kotlin_kotlin.$_$.g1;
  var contentHashCode = kotlin_kotlin.$_$.c1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.r;
  var isByteArray = kotlin_kotlin.$_$.c2;
  var Char = kotlin_kotlin.$_$.s2;
  var get_indices = kotlin_kotlin.$_$.h1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [SerializationStrategy]);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  function decodeSequentially() {
    return false;
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  function beginCollection(descriptor, collectionSize) {
    return this.ga(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.e8(this, value);
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [SerializationStrategy]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [SerializationStrategy]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [SerializationStrategy]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [SerializationStrategy, PrimitiveArraySerializer]);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [SerializationStrategy]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [SerializationStrategy]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [SerializationStrategy]);
  setMetadataFor(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', classMeta);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [SerializationStrategy]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, 0);
  //endregion
  function SerializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.f8(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.g8());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.i8_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = this$0.l8_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.s().f();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$1 = element.t();
        var name = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$2 = element.v();
        var serializer = tmp$ret$2;
        $this$buildSerialDescriptor.u8(name, serializer.d8());
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u8('type', serializer(StringCompanionObject_getInstance()).d8());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.h8_1.q5() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.u8('value', elementDescriptor);
      $this$buildSerialDescriptor.o8_1 = this$0.i8_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.v8_1 = $tmp0_groupingBy;
  }
  protoOf(_no_name_provided__qut3iv).w8 = function () {
    return this.v8_1.f();
  };
  protoOf(_no_name_provided__qut3iv).x8 = function (element) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    tmp$ret$0 = element.v().d8().y8();
    return tmp$ret$0;
  };
  protoOf(_no_name_provided__qut3iv).z8 = function (element) {
    return this.x8((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.h8_1 = baseClass;
    this.i8_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.j8_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.h8_1.q5() + ' should be marked @Serializable');
    }
    this.k8_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.aggregate' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.groupingBy' call
    var tmp0_groupingBy = this.k8_1.s();
    tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_groupingBy);
    var tmp4_aggregate = tmp$ret$0;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.aggregateTo' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    var tmp3_aggregateTo = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.iterator' call
    var tmp1_iterator = tmp4_aggregate.w8();
    tmp$ret$2 = tmp1_iterator;
    var tmp0_iterator = tmp$ret$2;
    while (tmp0_iterator.g()) {
      var e = tmp0_iterator.h();
      var key = tmp4_aggregate.z8(e);
      var accumulator = tmp3_aggregateTo.d1(key);
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp5__anonymous__kpxxpo = accumulator == null ? !tmp3_aggregateTo.b1(key) : false;
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var tmp0_error = "Multiple sealed subclasses of '" + this.h8_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.t() + "', '" + e.t() + "'");
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
      tmp$ret$3 = e;
      var tmp2_set = tmp$ret$3;
      tmp3_aggregateTo.z1(key, tmp2_set);
    }
    tmp$ret$4 = tmp3_aggregateTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp8_mapValues = tmp$ret$5;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp7_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp8_mapValues.i()));
    var tmp$ret$8;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp6_associateByTo = tmp8_mapValues.s();
    var tmp0_iterator_0 = tmp6_associateByTo.f();
    while (tmp0_iterator_0.g()) {
      var element = tmp0_iterator_0.h();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$6 = element.t();
      var tmp_2 = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      tmp$ret$7 = element.v().v();
      tmp7_mapValuesTo.z1(tmp_2, tmp$ret$7);
    }
    tmp$ret$8 = tmp7_mapValuesTo;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp_1.l8_1 = tmp$ret$10;
  }
  protoOf(SealedClassSerializer).g8 = function () {
    return this.h8_1;
  };
  protoOf(SealedClassSerializer).d8 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.j8_1.v();
    return tmp$ret$0;
  };
  protoOf(SealedClassSerializer).f8 = function (encoder, value) {
    var tmp0_elvis_lhs = this.k8_1.d1(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).f8.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.d8();
    }, null);
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.i() === 1 ? "Field '" + missingFields.i1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
    this.a9_1 = missingFields;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.c9_1 = $this_elementDescriptors;
    this.b9_1 = $this_elementDescriptors.d9();
  }
  protoOf(elementDescriptors$1$1).g = function () {
    return this.b9_1 > 0;
  };
  protoOf(elementDescriptors$1$1).h = function () {
    var tmp = this.c9_1.d9();
    var tmp0_this = this;
    var tmp1 = tmp0_this.b9_1;
    tmp0_this.b9_1 = tmp1 - 1 | 0;
    return this.c9_1.e9(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.f9_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).f = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.f9_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.p8_1.i(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.m8_1 = serialName;
    this.n8_1 = false;
    this.o8_1 = emptyList();
    this.p8_1 = ArrayList_init_$Create$();
    this.q8_1 = HashSet_init_$Create$();
    this.r8_1 = ArrayList_init_$Create$();
    this.s8_1 = ArrayList_init_$Create$();
    this.t8_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).g9 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.q8_1.e(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered in " + this.m8_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.p8_1;
    tmp1_plusAssign.e(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.r8_1;
    tmp2_plusAssign.e(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.s8_1;
    tmp3_plusAssign.e(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.t8_1;
    tmp4_plusAssign.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).u8 = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.g9(elementName, descriptor, annotations, isOptional);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.g9.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.s9_1.v();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.r9_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.t9(it) + ': ' + this$0.e9(it).y8();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.h9_1 = serialName;
    this.i9_1 = kind;
    this.j9_1 = elementsCount;
    this.k9_1 = builder.o8_1;
    this.l9_1 = toHashSet(builder.p8_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.p8_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.m9_1 = tmp$ret$0;
    this.n9_1 = compactArray(builder.r8_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.s8_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.o9_1 = tmp$ret$1;
    this.p9_1 = toBooleanArray(builder.t8_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = withIndex(this.m9_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.o1_1, item.n1_1);
      tmp0_mapTo.e(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.q9_1 = toMap(tmp$ret$4);
    this.r9_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.s9_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).y8 = function () {
    return this.h9_1;
  };
  protoOf(SerialDescriptorImpl).u9 = function () {
    return this.i9_1;
  };
  protoOf(SerialDescriptorImpl).d9 = function () {
    return this.j9_1;
  };
  protoOf(SerialDescriptorImpl).t9 = function (index) {
    return getChecked(this.m9_1, index);
  };
  protoOf(SerialDescriptorImpl).v9 = function (index) {
    return getChecked(this.o9_1, index);
  };
  protoOf(SerialDescriptorImpl).e9 = function (index) {
    return getChecked(this.n9_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.y8() === other.y8())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.r9_1, tmp0__anonymous__q1qw7t.r9_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.d9() === other.d9())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.d9();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.e9(index).y8() === other.e9(index).y8())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.e9(index).u9(), other.e9(index).u9())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.j9_1);
    var tmp_0 = this.h9_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).q5());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).e8 = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.d8();
    var composite = encoder.ga(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.ja(this.d8(), 0, actualSerializer.d8().y8());
    var tmp = this.d8();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.ka(tmp, 1, tmp$ret$0, value);
    composite.w9(tmp0_encodeStructure);
  };
  protoOf(AbstractPolymorphicSerializer).f8 = function (encoder, value) {
    return encoder.ca().la(this.g8(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.q5();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.q5() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.q5() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).y8 = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.sa_1 = primitive.y8() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).y8 = function () {
    return this.sa_1;
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.oa_1 = elementDescriptor;
    this.pa_1 = 1;
  }
  protoOf(ListLikeDescriptor).u9 = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).d9 = function () {
    return this.pa_1;
  };
  protoOf(ListLikeDescriptor).t9 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).v9 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.y8() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).e9 = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.y8() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.oa_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.oa_1, other.oa_1) ? this.y8() === other.y8() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.oa_1), 31) + getStringHashCode(this.y8()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.y8() + '(' + this.oa_1 + ')';
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ua_1 = new LinkedHashSetClassDesc(eSerializer.d8());
  }
  protoOf(LinkedHashSetSerializer).d8 = function () {
    return this.ua_1;
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).wa = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(CollectionSerializer).ab = function (_this__u8e3s4) {
    return this.wa((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).xa = function (_this__u8e3s4) {
    return _this__u8e3s4.f();
  };
  protoOf(CollectionSerializer).bb = function (_this__u8e3s4) {
    return this.xa((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer() {
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ya_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).za = function (encoder, value) {
    var size = this.ab(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.d8();
    var composite = encoder.ha(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.bb(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ka(this.d8(), index, this.ya_1, iterator.h());
      }
       while (inductionVariable < size);
    composite.w9(tmp0_encodeCollection);
  };
  protoOf(CollectionLikeSerializer).e8 = function (encoder, value) {
    return this.za(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function AbstractCollectionSerializer() {
  }
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.db_1 = new PrimitiveArrayDescriptor(primitiveSerializer.d8());
  }
  protoOf(PrimitiveArraySerializer).d8 = function () {
    return this.db_1;
  };
  protoOf(PrimitiveArraySerializer).eb = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  protoOf(PrimitiveArraySerializer).bb = function (_this__u8e3s4) {
    return this.eb((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).gb = function (encoder, value) {
    var size = this.ab(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.db_1;
    var composite = encoder.ha(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.fb(composite, value, size);
    composite.w9(tmp0_encodeCollection);
  };
  protoOf(PrimitiveArraySerializer).e8 = function (encoder, value) {
    return this.gb(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).za = function (encoder, value) {
    return this.gb(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.ib_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.o8_1 = this$0.ib_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.hb_1 = objectInstance;
    this.ib_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.jb_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).d8 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.jb_1.v();
    return tmp$ret$0;
  };
  protoOf(ObjectSerializer).e8 = function (encoder, value) {
    encoder.ga(this.d8()).w9(this.d8());
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.d8();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.l();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.t9(i);
          missingFields.e(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.y8());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.tb_1.v();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.vb_1.v();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ob_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.ob_1[i];
        indices.z1(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lb_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wb();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lb_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xb();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.g()) {
          var item = tmp0_iterator.h();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.d8();
          tmp0_mapTo.e(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.yb());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.t9(i) + ': ' + this$0.e9(i).y8();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.kb_1 = serialName;
    this.lb_1 = generatedSerializer;
    this.mb_1 = elementsCount;
    this.nb_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.mb_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ob_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.mb_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.pb_1 = tmp$ret$2;
    this.qb_1 = null;
    this.rb_1 = booleanArray(this.mb_1);
    this.sb_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.tb_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.ub_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.vb_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).y8 = function () {
    return this.kb_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).d9 = function () {
    return this.mb_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).u9 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).yb = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.ub_1.v();
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).zb = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.nb_1 = tmp0_this.nb_1 + 1 | 0;
    this.ob_1[tmp0_this.nb_1] = name;
    this.rb_1[this.nb_1] = isOptional;
    this.pb_1[this.nb_1] = null;
    if (this.nb_1 === (this.mb_1 - 1 | 0)) {
      this.sb_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).e9 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).d8();
  };
  protoOf(PluginGeneratedSerialDescriptor).v9 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.pb_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).t9 = function (index) {
    return getChecked(this.ob_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.y8() === other.y8())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.yb(), tmp0__anonymous__q1qw7t.yb());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.d9() === other.d9())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.d9();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.e9(index).y8() === other.e9(index).y8())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.e9(index).u9(), other.e9(index).u9())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.mb_1);
    var tmp_0 = this.y8() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.y8());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.y8();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.f();
    while (tmp0_iterator_0.g()) {
      var element_0 = tmp0_iterator_0.h();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp1__anonymous__uwfjfc = accumulator_0;
      var tmp_0 = imul(31, tmp1__anonymous__uwfjfc);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.u9();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.yb();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(ByteCompanionObject_getInstance()));
  }
  protoOf(ByteArraySerializer_0).cc = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ab = function (_this__u8e3s4) {
    return this.cc((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).dc = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ec(this.db_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).fb = function (encoder, content, size) {
    return this.dc(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.fc_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).d8 = function () {
    return this.fc_1;
  };
  protoOf(StringSerializer).gc = function (encoder, value) {
    return encoder.fa(value);
  };
  protoOf(StringSerializer).e8 = function (encoder, value) {
    return this.gc(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.hc_1 = new PrimitiveSerialDescriptor('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).d8 = function () {
    return this.hc_1;
  };
  protoOf(CharSerializer).ic = function (encoder, value) {
    return encoder.ea(value);
  };
  protoOf(CharSerializer).e8 = function (encoder, value) {
    return this.ic(encoder, value instanceof Char ? value.m2_1 : THROW_CCE());
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.jc_1 = new PrimitiveSerialDescriptor('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).d8 = function () {
    return this.jc_1;
  };
  protoOf(ByteSerializer).kc = function (encoder, value) {
    return encoder.da(value);
  };
  protoOf(ByteSerializer).e8 = function (encoder, value) {
    return this.kc(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.lc_1 = serialName;
    this.mc_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).y8 = function () {
    return this.lc_1;
  };
  protoOf(PrimitiveSerialDescriptor).u9 = function () {
    return this.mc_1;
  };
  protoOf(PrimitiveSerialDescriptor).d9 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).t9 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).e9 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).v9 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.lc_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.lc_1 === other.lc_1 ? equals(this.mc_1, other.mc_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.lc_1) + imul(31, this.mc_1.hashCode()) | 0;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u8('key', $keySerializer.d8());
      $this$buildSerialDescriptor.u8('value', $valueSerializer.d8());
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.pc_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).d8 = function () {
    return this.pc_1;
  };
  protoOf(MapEntrySerializer_0).qc = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(MapEntrySerializer_0).rc = function (_this__u8e3s4) {
    return this.qc((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).sc = function (_this__u8e3s4) {
    return _this__u8e3s4.v();
  };
  protoOf(MapEntrySerializer_0).tc = function (_this__u8e3s4) {
    return this.sc((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.uc_1 = keySerializer;
    this.vc_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).wc = function (encoder, value) {
    var structuredEncoder = encoder.ga(this.d8());
    structuredEncoder.ka(this.d8(), 0, this.uc_1, this.rc(value));
    structuredEncoder.ka(this.d8(), 1, this.vc_1, this.tc(value));
    structuredEncoder.w9(this.d8());
  };
  protoOf(KeyValueSerializer).e8 = function (encoder, value) {
    return this.wc(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.xc_1 = class2ContextualFactory;
    this.yc_1 = polyBase2Serializers;
    this.zc_1 = polyBase2DefaultSerializerProvider;
    this.ad_1 = polyBase2NamedSerializers;
    this.bd_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).la = function (baseClass, value) {
    if (!baseClass.r5(value))
      return null;
    var tmp0_safe_receiver = this.yc_1.d1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.zc_1.d1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ObjectSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = SerializationException_init_$Create$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CLASS_getInstance;
  _.$_$.g = LIST_getInstance;
  _.$_$.h = MAP_getInstance;
  _.$_$.i = OBJECT_getInstance;
  _.$_$.j = CharSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = ByteArraySerializer;
  _.$_$.m = MapEntrySerializer;
  _.$_$.n = SetSerializer;
  _.$_$.o = PolymorphicKind;
  _.$_$.p = PrimitiveKind;
  _.$_$.q = beginCollection;
  _.$_$.r = encodeSerializableValue;
  _.$_$.s = Encoder;
  _.$_$.t = typeParametersSerializers;
  _.$_$.u = GeneratedSerializer;
  _.$_$.v = MapLikeSerializer;
  _.$_$.w = PluginGeneratedSerialDescriptor;
  _.$_$.x = throwMissingFieldException;
  _.$_$.y = EmptySerializersModule_0;
  _.$_$.z = SerializationStrategy;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
