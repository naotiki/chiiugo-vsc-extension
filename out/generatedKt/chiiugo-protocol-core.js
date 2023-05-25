(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'node:net', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlinx-serialization-kotlinx-serialization-protobuf-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('node:net'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-protobuf-js-ir.js'));
  else {
    if (typeof this['node:net'] === 'undefined') {
      throw new Error("Error loading module 'chiiugo-protocol-core'. Its dependency 'node:net' was not found. Please, check whether 'node:net' is loaded prior to 'chiiugo-protocol-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'chiiugo-protocol-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'chiiugo-protocol-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'chiiugo-protocol-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'chiiugo-protocol-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'chiiugo-protocol-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir' is loaded prior to 'chiiugo-protocol-core'.");
    }
    root['chiiugo-protocol-core'] = factory(typeof this['chiiugo-protocol-core'] === 'undefined' ? {} : this['chiiugo-protocol-core'], this['node:net'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir']);
  }
}(this, function (_, $module$node_net_6t8z7r, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_protobuf) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var connect = $module$node_net_6t8z7r.connect;
  var protoOf = kotlin_kotlin.$_$.i2;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var VOID = kotlin_kotlin.$_$.d3;
  var setMetadataFor = kotlin_kotlin.$_$.j2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.w2;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.g2;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var CharSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.o;
  var getKClass = kotlin_kotlin.$_$.b;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.z1;
  var classMeta = kotlin_kotlin.$_$.u1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.z2;
  var Char = kotlin_kotlin.$_$.s2;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.p;
  var equals = kotlin_kotlin.$_$.w1;
  var hashCode = kotlin_kotlin.$_$.a2;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_protobuf.$_$.a;
  var defineProp = kotlin_kotlin.$_$.v1;
  var toTypedArray = kotlin_kotlin.$_$.o1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Event, 'Event', classMeta, VOID, VOID, VOID, {0: Companion_getInstance_6});
  setMetadataFor(OpenProject, 'OpenProject', classMeta, Event, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(CloseProject, 'CloseProject', objectMeta, Event, VOID, VOID, {0: CloseProject_getInstance});
  setMetadataFor(StartBuild, 'StartBuild', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(SuccessBuild, 'SuccessBuild', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(FailedBuild, 'FailedBuild', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Typed, 'Typed', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(OpenFile, 'OpenFile', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(CloseFile, 'CloseFile', classMeta, Event, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(FileTypeData, 'FileTypeData', classMeta, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ServerProtocol, 'ServerProtocol', classMeta, VOID, VOID, VOID, {0: Companion_getInstance_9});
  setMetadataFor(Hello, 'Hello', objectMeta, ServerProtocol, VOID, VOID, {0: Hello_getInstance});
  setMetadataFor(SendEvent, 'SendEvent', classMeta, ServerProtocol, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(End, 'End', objectMeta, ServerProtocol, VOID, VOID, {0: End_getInstance});
  setMetadataFor(Error_0, 'Error', objectMeta, ServerProtocol, VOID, VOID, {0: Error_getInstance});
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Client, 'Client', classMeta);
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.OpenProject', this, 1);
    tmp0_serialDesc.zb('projectName', false);
    this.sg_1 = tmp0_serialDesc;
  }
  protoOf($serializer).d8 = function () {
    return this.sg_1;
  };
  protoOf($serializer).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer).tg = function (decoder) {
    var tmp0_desc = this.sg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ga(tmp0_desc);
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return OpenProject_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).ug = function (encoder, value) {
    var tmp0_desc = this.sg_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.projectName);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer).e8 = function (encoder, value) {
    return this.ug(encoder, value instanceof OpenProject ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function OpenProject_init_$Init$(seen1, projectName, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().sg_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.projectName = projectName;
    return $this;
  }
  function OpenProject_init_$Create$(seen1, projectName, serializationConstructorMarker) {
    return OpenProject_init_$Init$(seen1, projectName, serializationConstructorMarker, objectCreate(protoOf(OpenProject)));
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.vg_1.v();
  }
  function Event$CloseProject$_anonymous__cj42gc() {
    var tmp = CloseProject_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return ObjectSerializer_init_$Create$('Event.CloseProject', tmp, tmp$ret$2);
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.StartBuild', this, 1);
    tmp0_serialDesc.zb('buildId', false);
    this.wg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).d8 = function () {
    return this.wg_1;
  };
  protoOf($serializer_0).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_0).tg = function (decoder) {
    var tmp0_desc = this.wg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ga(tmp0_desc);
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return StartBuild_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).xg = function (encoder, value) {
    var tmp0_desc = this.wg_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.buildId);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_0).e8 = function (encoder, value) {
    return this.xg(encoder, value instanceof StartBuild ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function StartBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().wg_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.buildId = buildId;
    return $this;
  }
  function StartBuild_init_$Create$(seen1, buildId, serializationConstructorMarker) {
    return StartBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, objectCreate(protoOf(StartBuild)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.SuccessBuild', this, 1);
    tmp0_serialDesc.zb('buildId', false);
    this.yg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).d8 = function () {
    return this.yg_1;
  };
  protoOf($serializer_1).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_1).tg = function (decoder) {
    var tmp0_desc = this.yg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ga(tmp0_desc);
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return SuccessBuild_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).zg = function (encoder, value) {
    var tmp0_desc = this.yg_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.buildId);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_1).e8 = function (encoder, value) {
    return this.zg(encoder, value instanceof SuccessBuild ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function SuccessBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().yg_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.buildId = buildId;
    return $this;
  }
  function SuccessBuild_init_$Create$(seen1, buildId, serializationConstructorMarker) {
    return SuccessBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, objectCreate(protoOf(SuccessBuild)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.FailedBuild', this, 1);
    tmp0_serialDesc.zb('buildId', false);
    this.ah_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).d8 = function () {
    return this.ah_1;
  };
  protoOf($serializer_2).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_2).tg = function (decoder) {
    var tmp0_desc = this.ah_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ga(tmp0_desc);
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return FailedBuild_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_2).bh = function (encoder, value) {
    var tmp0_desc = this.ah_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.buildId);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_2).e8 = function (encoder, value) {
    return this.bh(encoder, value instanceof FailedBuild ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function FailedBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().ah_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.buildId = buildId;
    return $this;
  }
  function FailedBuild_init_$Create$(seen1, buildId, serializationConstructorMarker) {
    return FailedBuild_init_$Init$(seen1, buildId, serializationConstructorMarker, objectCreate(protoOf(FailedBuild)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).serializer = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.Typed', this, 1);
    tmp0_serialDesc.zb('char', false);
    this.ch_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).d8 = function () {
    return this.ch_1;
  };
  protoOf($serializer_3).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [CharSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_3).tg = function (decoder) {
    var tmp0_desc = this.ch_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = _Char___init__impl__6a9atx(0);
    var tmp5_input = decoder.ga(tmp0_desc);
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.z9(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z9(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return Typed_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_3).dh = function (encoder, value) {
    var tmp0_desc = this.ch_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ue(tmp0_desc, 0, value.char);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_3).e8 = function (encoder, value) {
    return this.dh(encoder, value instanceof Typed ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Typed_init_$Init$(seen1, char, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().ch_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.char = char;
    return $this;
  }
  function Typed_init_$Create$(seen1, char, serializationConstructorMarker) {
    return Typed_init_$Init$(seen1, char, serializationConstructorMarker, objectCreate(protoOf(Typed)));
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).serializer = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.OpenFile', this, 2);
    tmp0_serialDesc.zb('fileName', false);
    tmp0_serialDesc.zb('fileTypeData', false);
    this.eh_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).d8 = function () {
    return this.eh_1;
  };
  protoOf($serializer_4).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), $serializer_getInstance_6()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_4).tg = function (decoder) {
    var tmp0_desc = this.eh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ga(tmp0_desc);
    if (tmp6_input.x9()) {
      tmp4_local0 = tmp6_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ba(tmp0_desc, 1, $serializer_getInstance_6(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ba(tmp0_desc, 1, $serializer_getInstance_6(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.w9(tmp0_desc);
    return OpenFile_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).fh = function (encoder, value) {
    var tmp0_desc = this.eh_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.fileName);
    tmp1_output.ka(tmp0_desc, 1, $serializer_getInstance_6(), value.fileTypeData);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_4).e8 = function (encoder, value) {
    return this.fh(encoder, value instanceof OpenFile ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function OpenFile_init_$Init$(seen1, fileName, fileTypeData, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_4().eh_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.fileName = fileName;
    $this.fileTypeData = fileTypeData;
    return $this;
  }
  function OpenFile_init_$Create$(seen1, fileName, fileTypeData, serializationConstructorMarker) {
    return OpenFile_init_$Init$(seen1, fileName, fileTypeData, serializationConstructorMarker, objectCreate(protoOf(OpenFile)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).serializer = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Event.CloseFile', this, 2);
    tmp0_serialDesc.zb('fileName', false);
    tmp0_serialDesc.zb('fileTypeData', false);
    this.gh_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).d8 = function () {
    return this.gh_1;
  };
  protoOf($serializer_5).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), $serializer_getInstance_6()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_5).tg = function (decoder) {
    var tmp0_desc = this.gh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.ga(tmp0_desc);
    if (tmp6_input.x9()) {
      tmp4_local0 = tmp6_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ba(tmp0_desc, 1, $serializer_getInstance_6(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ba(tmp0_desc, 1, $serializer_getInstance_6(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.w9(tmp0_desc);
    return CloseFile_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).hh = function (encoder, value) {
    var tmp0_desc = this.gh_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.fileName);
    tmp1_output.ka(tmp0_desc, 1, $serializer_getInstance_6(), value.fileTypeData);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_5).e8 = function (encoder, value) {
    return this.hh(encoder, value instanceof CloseFile ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function CloseFile_init_$Init$(seen1, fileName, fileTypeData, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_5().gh_1);
    }
    Event_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.fileName = fileName;
    $this.fileTypeData = fileTypeData;
    return $this;
  }
  function CloseFile_init_$Create$(seen1, fileName, fileTypeData, serializationConstructorMarker) {
    return CloseFile_init_$Init$(seen1, fileName, fileTypeData, serializationConstructorMarker, objectCreate(protoOf(CloseFile)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.ih_1.v();
  }
  function Event$Companion$_anonymous__dd2uyz() {
    var tmp = getKClass(Event);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(CloseFile), getKClass(CloseProject), getKClass(FailedBuild), getKClass(OpenFile), getKClass(OpenProject), getKClass(StartBuild), getKClass(SuccessBuild), getKClass(Typed)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = $serializer_getInstance_5();
    var tmp_2 = CloseProject_getInstance();
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = [];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp1_arrayOf = [tmp_1, ObjectSerializer_init_$Create$('Event.CloseProject', tmp_2, tmp$ret$5), $serializer_getInstance_2(), $serializer_getInstance_4(), $serializer_getInstance(), $serializer_getInstance_0(), $serializer_getInstance_1(), $serializer_getInstance_3()];
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = tmp1_arrayOf;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp_3 = tmp$ret$8;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return SealedClassSerializer_init_$Create$('Event', tmp, tmp_0, tmp_3, tmp$ret$11);
  }
  function OpenProject(projectName) {
    Companion_getInstance();
    Event.call(this);
    this.projectName = projectName;
  }
  protoOf(OpenProject).jh = function () {
    return this.projectName;
  };
  protoOf(OpenProject).x1 = function () {
    return this.projectName;
  };
  protoOf(OpenProject).kh = function (projectName) {
    return new OpenProject(projectName);
  };
  protoOf(OpenProject).copy = function (projectName, $super) {
    projectName = projectName === VOID ? this.projectName : projectName;
    return this.kh(projectName);
  };
  protoOf(OpenProject).toString = function () {
    return 'OpenProject(projectName=' + this.projectName + ')';
  };
  protoOf(OpenProject).hashCode = function () {
    return getStringHashCode(this.projectName);
  };
  protoOf(OpenProject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenProject))
      return false;
    var tmp0_other_with_cast = other instanceof OpenProject ? other : THROW_CCE();
    if (!(this.projectName === tmp0_other_with_cast.projectName))
      return false;
    return true;
  };
  function CloseProject() {
    CloseProject_instance = this;
    Event.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.vg_1 = lazy(tmp_0, Event$CloseProject$_anonymous__cj42gc);
  }
  protoOf(CloseProject).serializer = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(CloseProject).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var CloseProject_instance;
  function CloseProject_getInstance() {
    if (CloseProject_instance == null)
      new CloseProject();
    return CloseProject_instance;
  }
  function StartBuild(buildId) {
    Companion_getInstance_0();
    Event.call(this);
    this.buildId = buildId;
  }
  protoOf(StartBuild).mh = function () {
    return this.buildId;
  };
  protoOf(StartBuild).x1 = function () {
    return this.buildId;
  };
  protoOf(StartBuild).kh = function (buildId) {
    return new StartBuild(buildId);
  };
  protoOf(StartBuild).copy = function (buildId, $super) {
    buildId = buildId === VOID ? this.buildId : buildId;
    return this.kh(buildId);
  };
  protoOf(StartBuild).toString = function () {
    return 'StartBuild(buildId=' + this.buildId + ')';
  };
  protoOf(StartBuild).hashCode = function () {
    return getStringHashCode(this.buildId);
  };
  protoOf(StartBuild).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StartBuild))
      return false;
    var tmp0_other_with_cast = other instanceof StartBuild ? other : THROW_CCE();
    if (!(this.buildId === tmp0_other_with_cast.buildId))
      return false;
    return true;
  };
  function SuccessBuild(buildId) {
    Companion_getInstance_1();
    Event.call(this);
    this.buildId = buildId;
  }
  protoOf(SuccessBuild).mh = function () {
    return this.buildId;
  };
  protoOf(SuccessBuild).x1 = function () {
    return this.buildId;
  };
  protoOf(SuccessBuild).kh = function (buildId) {
    return new SuccessBuild(buildId);
  };
  protoOf(SuccessBuild).copy = function (buildId, $super) {
    buildId = buildId === VOID ? this.buildId : buildId;
    return this.kh(buildId);
  };
  protoOf(SuccessBuild).toString = function () {
    return 'SuccessBuild(buildId=' + this.buildId + ')';
  };
  protoOf(SuccessBuild).hashCode = function () {
    return getStringHashCode(this.buildId);
  };
  protoOf(SuccessBuild).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuccessBuild))
      return false;
    var tmp0_other_with_cast = other instanceof SuccessBuild ? other : THROW_CCE();
    if (!(this.buildId === tmp0_other_with_cast.buildId))
      return false;
    return true;
  };
  function FailedBuild(buildId) {
    Companion_getInstance_2();
    Event.call(this);
    this.buildId = buildId;
  }
  protoOf(FailedBuild).mh = function () {
    return this.buildId;
  };
  protoOf(FailedBuild).x1 = function () {
    return this.buildId;
  };
  protoOf(FailedBuild).kh = function (buildId) {
    return new FailedBuild(buildId);
  };
  protoOf(FailedBuild).copy = function (buildId, $super) {
    buildId = buildId === VOID ? this.buildId : buildId;
    return this.kh(buildId);
  };
  protoOf(FailedBuild).toString = function () {
    return 'FailedBuild(buildId=' + this.buildId + ')';
  };
  protoOf(FailedBuild).hashCode = function () {
    return getStringHashCode(this.buildId);
  };
  protoOf(FailedBuild).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FailedBuild))
      return false;
    var tmp0_other_with_cast = other instanceof FailedBuild ? other : THROW_CCE();
    if (!(this.buildId === tmp0_other_with_cast.buildId))
      return false;
    return true;
  };
  function Typed(char) {
    Companion_getInstance_3();
    Event.call(this);
    this.char = char;
  }
  protoOf(Typed).nh = function () {
    return this.char;
  };
  protoOf(Typed).oh = function () {
    return this.char;
  };
  protoOf(Typed).ph = function (char) {
    return new Typed(char);
  };
  protoOf(Typed).copy = function (char, $super) {
    char = char === VOID ? this.char : char;
    return this.ph(char);
  };
  protoOf(Typed).toString = function () {
    return 'Typed(char=' + new Char(this.char) + ')';
  };
  protoOf(Typed).hashCode = function () {
    return Char__hashCode_impl_otmys(this.char);
  };
  protoOf(Typed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typed))
      return false;
    var tmp0_other_with_cast = other instanceof Typed ? other : THROW_CCE();
    if (!equals(new Char(this.char), new Char(tmp0_other_with_cast.char)))
      return false;
    return true;
  };
  function OpenFile(fileName, fileTypeData) {
    Companion_getInstance_4();
    Event.call(this);
    this.fileName = fileName;
    this.fileTypeData = fileTypeData;
  }
  protoOf(OpenFile).qh = function () {
    return this.fileName;
  };
  protoOf(OpenFile).rh = function () {
    return this.fileTypeData;
  };
  protoOf(OpenFile).x1 = function () {
    return this.fileName;
  };
  protoOf(OpenFile).y1 = function () {
    return this.fileTypeData;
  };
  protoOf(OpenFile).sh = function (fileName, fileTypeData) {
    return new OpenFile(fileName, fileTypeData);
  };
  protoOf(OpenFile).copy = function (fileName, fileTypeData, $super) {
    fileName = fileName === VOID ? this.fileName : fileName;
    fileTypeData = fileTypeData === VOID ? this.fileTypeData : fileTypeData;
    return this.sh(fileName, fileTypeData);
  };
  protoOf(OpenFile).toString = function () {
    return 'OpenFile(fileName=' + this.fileName + ', fileTypeData=' + this.fileTypeData + ')';
  };
  protoOf(OpenFile).hashCode = function () {
    var result = getStringHashCode(this.fileName);
    result = imul(result, 31) + this.fileTypeData.hashCode() | 0;
    return result;
  };
  protoOf(OpenFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpenFile))
      return false;
    var tmp0_other_with_cast = other instanceof OpenFile ? other : THROW_CCE();
    if (!(this.fileName === tmp0_other_with_cast.fileName))
      return false;
    if (!this.fileTypeData.equals(tmp0_other_with_cast.fileTypeData))
      return false;
    return true;
  };
  function CloseFile(fileName, fileTypeData) {
    Companion_getInstance_5();
    Event.call(this);
    this.fileName = fileName;
    this.fileTypeData = fileTypeData;
  }
  protoOf(CloseFile).qh = function () {
    return this.fileName;
  };
  protoOf(CloseFile).rh = function () {
    return this.fileTypeData;
  };
  protoOf(CloseFile).x1 = function () {
    return this.fileName;
  };
  protoOf(CloseFile).y1 = function () {
    return this.fileTypeData;
  };
  protoOf(CloseFile).sh = function (fileName, fileTypeData) {
    return new CloseFile(fileName, fileTypeData);
  };
  protoOf(CloseFile).copy = function (fileName, fileTypeData, $super) {
    fileName = fileName === VOID ? this.fileName : fileName;
    fileTypeData = fileTypeData === VOID ? this.fileTypeData : fileTypeData;
    return this.sh(fileName, fileTypeData);
  };
  protoOf(CloseFile).toString = function () {
    return 'CloseFile(fileName=' + this.fileName + ', fileTypeData=' + this.fileTypeData + ')';
  };
  protoOf(CloseFile).hashCode = function () {
    var result = getStringHashCode(this.fileName);
    result = imul(result, 31) + this.fileTypeData.hashCode() | 0;
    return result;
  };
  protoOf(CloseFile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseFile))
      return false;
    var tmp0_other_with_cast = other instanceof CloseFile ? other : THROW_CCE();
    if (!(this.fileName === tmp0_other_with_cast.fileName))
      return false;
    if (!this.fileTypeData.equals(tmp0_other_with_cast.fileTypeData))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ih_1 = lazy(tmp_0, Event$Companion$_anonymous__dd2uyz);
  }
  protoOf(Companion_6).serializer = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_6).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Event_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function Event_init_$Create$(seen1, serializationConstructorMarker) {
    return Event_init_$Init$(seen1, serializationConstructorMarker, objectCreate(protoOf(Event)));
  }
  function Event() {
    Companion_getInstance_6();
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).serializer = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('FileTypeData', this, 3);
    tmp0_serialDesc.zb('idName', false);
    tmp0_serialDesc.zb('displayName', false);
    tmp0_serialDesc.zb('fileTypeExtension', false);
    this.th_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).d8 = function () {
    return this.th_1;
  };
  protoOf($serializer_6).wb = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_6).tg = function (decoder) {
    var tmp0_desc = this.th_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.ga(tmp0_desc);
    if (tmp7_input.x9()) {
      tmp4_local0 = tmp7_input.aa(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.aa(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.aa(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.aa(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.aa(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.aa(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.w9(tmp0_desc);
    return FileTypeData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).uh = function (encoder, value) {
    var tmp0_desc = this.th_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    tmp1_output.ja(tmp0_desc, 0, value.idName);
    tmp1_output.ja(tmp0_desc, 1, value.displayName);
    tmp1_output.ja(tmp0_desc, 2, value.fileTypeExtension);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_6).e8 = function (encoder, value) {
    return this.uh(encoder, value instanceof FileTypeData ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function FileTypeData_init_$Init$(seen1, idName, displayName, fileTypeExtension, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_6().th_1);
    }
    $this.idName = idName;
    $this.displayName = displayName;
    $this.fileTypeExtension = fileTypeExtension;
    return $this;
  }
  function FileTypeData_init_$Create$(seen1, idName, displayName, fileTypeExtension, serializationConstructorMarker) {
    return FileTypeData_init_$Init$(seen1, idName, displayName, fileTypeExtension, serializationConstructorMarker, objectCreate(protoOf(FileTypeData)));
  }
  function FileTypeData(idName, displayName, fileTypeExtension) {
    Companion_getInstance_7();
    this.idName = idName;
    this.displayName = displayName;
    this.fileTypeExtension = fileTypeExtension;
  }
  protoOf(FileTypeData).vh = function () {
    return this.idName;
  };
  protoOf(FileTypeData).wh = function () {
    return this.displayName;
  };
  protoOf(FileTypeData).xh = function () {
    return this.fileTypeExtension;
  };
  protoOf(FileTypeData).x1 = function () {
    return this.idName;
  };
  protoOf(FileTypeData).y1 = function () {
    return this.displayName;
  };
  protoOf(FileTypeData).yh = function () {
    return this.fileTypeExtension;
  };
  protoOf(FileTypeData).zh = function (idName, displayName, fileTypeExtension) {
    return new FileTypeData(idName, displayName, fileTypeExtension);
  };
  protoOf(FileTypeData).copy = function (idName, displayName, fileTypeExtension, $super) {
    idName = idName === VOID ? this.idName : idName;
    displayName = displayName === VOID ? this.displayName : displayName;
    fileTypeExtension = fileTypeExtension === VOID ? this.fileTypeExtension : fileTypeExtension;
    return this.zh(idName, displayName, fileTypeExtension);
  };
  protoOf(FileTypeData).toString = function () {
    return 'FileTypeData(idName=' + this.idName + ', displayName=' + this.displayName + ', fileTypeExtension=' + this.fileTypeExtension + ')';
  };
  protoOf(FileTypeData).hashCode = function () {
    var result = getStringHashCode(this.idName);
    result = imul(result, 31) + getStringHashCode(this.displayName) | 0;
    result = imul(result, 31) + getStringHashCode(this.fileTypeExtension) | 0;
    return result;
  };
  protoOf(FileTypeData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FileTypeData))
      return false;
    var tmp0_other_with_cast = other instanceof FileTypeData ? other : THROW_CCE();
    if (!(this.idName === tmp0_other_with_cast.idName))
      return false;
    if (!(this.displayName === tmp0_other_with_cast.displayName))
      return false;
    if (!(this.fileTypeExtension === tmp0_other_with_cast.fileTypeExtension))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.ai_1.v();
  }
  function ServerProtocol$Hello$_anonymous__ebp2fi() {
    var tmp = Hello_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return ObjectSerializer_init_$Create$('ServerProtocol.Hello', tmp, tmp$ret$2);
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [Companion_getInstance_6().serializer()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.bi_1 = tmp$ret$2;
  }
  protoOf(Companion_8).serializer = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ServerProtocol.SendEvent', this, 1);
    tmp0_serialDesc.zb('event', false);
    this.ci_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).d8 = function () {
    return this.ci_1;
  };
  protoOf($serializer_7).wb = function () {
    var tmp0_cached = Companion_getInstance_8().bi_1;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [tmp0_cached[0]];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  protoOf($serializer_7).tg = function (decoder) {
    var tmp0_desc = this.ci_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.ga(tmp0_desc);
    var tmp6_cached = Companion_getInstance_8().bi_1;
    if (tmp5_input.x9()) {
      tmp4_local0 = tmp5_input.ba(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y9(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ba(tmp0_desc, 0, tmp6_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.w9(tmp0_desc);
    return SendEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_7).di = function (encoder, value) {
    var tmp0_desc = this.ci_1;
    var tmp1_output = encoder.ga(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().bi_1;
    tmp1_output.ka(tmp0_desc, 0, tmp2_cached[0], value.event);
    tmp1_output.w9(tmp0_desc);
  };
  protoOf($serializer_7).e8 = function (encoder, value) {
    return this.di(encoder, value instanceof SendEvent ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function SendEvent_init_$Init$(seen1, event, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_7().ci_1);
    }
    ServerProtocol_init_$Init$(seen1, serializationConstructorMarker, $this);
    $this.event = event;
    return $this;
  }
  function SendEvent_init_$Create$(seen1, event, serializationConstructorMarker) {
    return SendEvent_init_$Init$(seen1, event, serializationConstructorMarker, objectCreate(protoOf(SendEvent)));
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.ei_1.v();
  }
  function ServerProtocol$End$_anonymous__bb4qpx() {
    var tmp = End_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return ObjectSerializer_init_$Create$('ServerProtocol.End', tmp, tmp$ret$2);
  }
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.fi_1.v();
  }
  function ServerProtocol$Error$_anonymous__a8xahk() {
    var tmp = Error_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return ObjectSerializer_init_$Create$('ServerProtocol.Error', tmp, tmp$ret$2);
  }
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.gi_1.v();
  }
  function ServerProtocol$Companion$_anonymous__an3ufo() {
    var tmp = getKClass(ServerProtocol);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [getKClass(End), getKClass(Error_0), getKClass(Hello), getKClass(SendEvent)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    var tmp$ret$14;
    // Inline function 'kotlin.arrayOf' call
    var tmp_1 = End_getInstance();
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = [];
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var tmp_2 = ObjectSerializer_init_$Create$('ServerProtocol.End', tmp_1, tmp$ret$5);
    var tmp_3 = Error_getInstance();
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = [];
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    var tmp_4 = ObjectSerializer_init_$Create$('ServerProtocol.Error', tmp_3, tmp$ret$8);
    var tmp_5 = Hello_getInstance();
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp1_arrayOf = [tmp_2, tmp_4, ObjectSerializer_init_$Create$('ServerProtocol.Hello', tmp_5, tmp$ret$11), $serializer_getInstance_7()];
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = tmp1_arrayOf;
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    var tmp_6 = tmp$ret$14;
    var tmp$ret$17;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$16;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$15;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$15 = [];
    tmp$ret$16 = tmp$ret$15;
    tmp$ret$17 = tmp$ret$16;
    return SealedClassSerializer_init_$Create$('ServerProtocol', tmp, tmp_0, tmp_6, tmp$ret$17);
  }
  function Hello() {
    Hello_instance = this;
    ServerProtocol.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ai_1 = lazy(tmp_0, ServerProtocol$Hello$_anonymous__ebp2fi);
  }
  protoOf(Hello).serializer = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Hello).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Hello_instance;
  function Hello_getInstance() {
    if (Hello_instance == null)
      new Hello();
    return Hello_instance;
  }
  function SendEvent(event) {
    Companion_getInstance_8();
    ServerProtocol.call(this);
    this.event = event;
  }
  protoOf(SendEvent).hi = function () {
    return this.event;
  };
  protoOf(SendEvent).x1 = function () {
    return this.event;
  };
  protoOf(SendEvent).ii = function (event) {
    return new SendEvent(event);
  };
  protoOf(SendEvent).copy = function (event, $super) {
    event = event === VOID ? this.event : event;
    return this.ii(event);
  };
  protoOf(SendEvent).toString = function () {
    return 'SendEvent(event=' + this.event + ')';
  };
  protoOf(SendEvent).hashCode = function () {
    return hashCode(this.event);
  };
  protoOf(SendEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SendEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SendEvent ? other : THROW_CCE();
    if (!equals(this.event, tmp0_other_with_cast.event))
      return false;
    return true;
  };
  function End() {
    End_instance = this;
    ServerProtocol.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ei_1 = lazy(tmp_0, ServerProtocol$End$_anonymous__bb4qpx);
  }
  protoOf(End).serializer = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(End).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var End_instance;
  function End_getInstance() {
    if (End_instance == null)
      new End();
    return End_instance;
  }
  function Error_0() {
    Error_instance = this;
    ServerProtocol.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fi_1 = lazy(tmp_0, ServerProtocol$Error$_anonymous__a8xahk);
  }
  protoOf(Error_0).serializer = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Error_0).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Error_instance;
  function Error_getInstance() {
    if (Error_instance == null)
      new Error_0();
    return Error_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.gi_1 = lazy(tmp_0, ServerProtocol$Companion$_anonymous__an3ufo);
  }
  protoOf(Companion_9).serializer = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_9).lh = function (typeParamsSerializers) {
    return this.serializer();
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ServerProtocol_init_$Init$(seen1, serializationConstructorMarker, $this) {
    return $this;
  }
  function ServerProtocol_init_$Create$(seen1, serializationConstructorMarker) {
    return ServerProtocol_init_$Init$(seen1, serializationConstructorMarker, objectCreate(protoOf(ServerProtocol)));
  }
  function ServerProtocol() {
    Companion_getInstance_9();
  }
  function convertByteArray(serverProtocol) {
    return addHeader(Default_getInstance().ed(Companion_getInstance_9().serializer(), serverProtocol));
  }
  function get_PORT() {
    return PORT;
  }
  var PORT;
  function get_HeaderSize() {
    return HeaderSize;
  }
  var HeaderSize;
  function addHeader(byteArray) {
    var arrayBuffer = new ArrayBuffer(get_HeaderSize() + byteArray.length | 0);
    var tmp$ret$2;
    // Inline function 'kotlin.run' call
    var tmp0_run = new DataView(arrayBuffer);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'addHeader.<anonymous>' call
    tmp0_run.setInt32(0, byteArray.length);
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var indexedObject = byteArray;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'addHeader.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      tmp0_run.setInt8(get_HeaderSize() + tmp0__anonymous__q1qw7t | 0, item);
    }
    var tmp = 0;
    var tmp_0 = tmp0_run.byteLength;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'addHeader.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_run.getInt8(tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    tmp$ret$1 = tmp_1;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function Client$socket$lambda() {
    console.log('Connected');
    return Unit_getInstance();
  }
  function Client$lambda(it) {
    console.log('Received DATA');
    console.dir(it);
    return Unit_getInstance();
  }
  function Client() {
    var tmp = this;
    var tmp_0 = get_PORT();
    tmp.socket = connect(tmp_0, 'localhost', Client$socket$lambda);
    var tmp_1 = (/*union*/{OCSP_REQUEST: 'OCSPRequest', OCSP_RESPONSE: 'OCSPResponse', SIGCONT: 'SIGCONT', SIGINT: 'SIGINT', SIGTSTP: 'SIGTSTP', ABORT: 'abort', ABORTED: 'aborted', ALTSVC: 'altsvc', BEFORE_EXIT: 'beforeExit', CHANGE: 'change', CHECK_CONTINUE: 'checkContinue', CHECK_EXPECTATION: 'checkExpectation', CLIENT_ERROR: 'clientError', CLOSE: 'close', CONNECT: 'connect', CONNECTION: 'connection', CONTINUE: 'continue', DATA: 'data', DISCONNECT: 'disconnect', DRAIN: 'drain', DROP: 'drop', DROP_REQUEST: 'dropRequest', END: 'end', ERROR: 'error', EXIT: 'exit', FINISH: 'finish', FORK: 'fork', FRAME_ERROR: 'frameError', GOAWAY: 'goaway', HEADERS: 'headers', HISTORY: 'history', INFORMATION: 'information', INSPECTOR_NOTIFICATION: 'inspectorNotification', KEYLOG: 'keylog', LINE: 'line', LISTENING: 'listening', LOCAL_SETTINGS: 'localSettings', LOOKUP: 'lookup', MESSAGE: 'message', MESSAGE_ERROR: 'messageerror', MULTIPLE_RESOLVES: 'multipleResolves', NEW_SESSION: 'newSession', ONLINE: 'online', OPEN: 'open', ORIGIN: 'origin', PAUSE: 'pause', PING: 'ping', PIPE: 'pipe', PUSH: 'push', READABLE: 'readable', READY: 'ready', REJECTION_HANDLED: 'rejectionHandled', REMOTE_SETTINGS: 'remoteSettings', REQUEST: 'request', RESET: 'reset', RESIZE: 'resize', RESPONSE: 'response', RESUME: 'resume', RESUME_SESSION: 'resumeSession', SECURE_CONNECT: 'secureConnect', SECURE_CONNECTION: 'secureConnection', SESSION: 'session', SESSION_ERROR: 'sessionError', SETUP: 'setup', SOCKET: 'socket', SPAWN: 'spawn', STREAM: 'stream', STREAM_CLOSED: 'streamClosed', TIMEOUT: 'timeout', TLS_CLIENT_ERROR: 'tlsClientError', TRAILERS: 'trailers', UNCAUGHT_EXCEPTION: 'uncaughtException', UNCAUGHT_EXCEPTION_MONITOR: 'uncaughtExceptionMonitor', UNHANDLED_REJECTION: 'unhandledRejection', UNKNOWN_PROTOCOL: 'unknownProtocol', UNPIPE: 'unpipe', UPGRADE: 'upgrade', WANT_TRAILERS: 'wantTrailers', WARNING: 'warning', WORKER: 'worker'}/*union*/).DATA;
    this.socket.on(tmp_1, Client$lambda);
  }
  protoOf(Client).ji = function () {
    return this.socket;
  };
  protoOf(Client).send = function (v) {
    this.socket.write(new Uint8Array(toTypedArray(convertByteArray(v))));
  };
  //region block: post-declaration
  protoOf($serializer).xb = typeParametersSerializers;
  protoOf($serializer_0).xb = typeParametersSerializers;
  protoOf($serializer_1).xb = typeParametersSerializers;
  protoOf($serializer_2).xb = typeParametersSerializers;
  protoOf($serializer_3).xb = typeParametersSerializers;
  protoOf($serializer_4).xb = typeParametersSerializers;
  protoOf($serializer_5).xb = typeParametersSerializers;
  protoOf($serializer_6).xb = typeParametersSerializers;
  protoOf($serializer_7).xb = typeParametersSerializers;
  //endregion
  //region block: init
  PORT = 3245;
  HeaderSize = 4;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    _.Event = Event;
    _.Event.Event_init_$Create$ = Event_init_$Create$;
    _.Event.OpenProject = OpenProject;
    _.Event.OpenProject.OpenProject_init_$Create$ = OpenProject_init_$Create$;
    defineProp(_.Event.OpenProject, 'Companion', Companion_getInstance);
    defineProp(_.Event.OpenProject, '$serializer', $serializer_getInstance);
    defineProp(_.Event, 'CloseProject', CloseProject_getInstance);
    _.Event.StartBuild = StartBuild;
    _.Event.StartBuild.StartBuild_init_$Create$ = StartBuild_init_$Create$;
    defineProp(_.Event.StartBuild, 'Companion', Companion_getInstance_0);
    defineProp(_.Event.StartBuild, '$serializer', $serializer_getInstance_0);
    _.Event.SuccessBuild = SuccessBuild;
    _.Event.SuccessBuild.SuccessBuild_init_$Create$ = SuccessBuild_init_$Create$;
    defineProp(_.Event.SuccessBuild, 'Companion', Companion_getInstance_1);
    defineProp(_.Event.SuccessBuild, '$serializer', $serializer_getInstance_1);
    _.Event.FailedBuild = FailedBuild;
    _.Event.FailedBuild.FailedBuild_init_$Create$ = FailedBuild_init_$Create$;
    defineProp(_.Event.FailedBuild, 'Companion', Companion_getInstance_2);
    defineProp(_.Event.FailedBuild, '$serializer', $serializer_getInstance_2);
    _.Event.Typed = Typed;
    _.Event.Typed.Typed_init_$Create$ = Typed_init_$Create$;
    defineProp(_.Event.Typed, 'Companion', Companion_getInstance_3);
    defineProp(_.Event.Typed, '$serializer', $serializer_getInstance_3);
    _.Event.OpenFile = OpenFile;
    _.Event.OpenFile.OpenFile_init_$Create$ = OpenFile_init_$Create$;
    defineProp(_.Event.OpenFile, 'Companion', Companion_getInstance_4);
    defineProp(_.Event.OpenFile, '$serializer', $serializer_getInstance_4);
    _.Event.CloseFile = CloseFile;
    _.Event.CloseFile.CloseFile_init_$Create$ = CloseFile_init_$Create$;
    defineProp(_.Event.CloseFile, 'Companion', Companion_getInstance_5);
    defineProp(_.Event.CloseFile, '$serializer', $serializer_getInstance_5);
    defineProp(_.Event, 'Companion', Companion_getInstance_6);
    _.FileTypeData = FileTypeData;
    _.FileTypeData.FileTypeData_init_$Create$ = FileTypeData_init_$Create$;
    defineProp(_.FileTypeData, 'Companion', Companion_getInstance_7);
    defineProp(_.FileTypeData, '$serializer', $serializer_getInstance_6);
    _.ServerProtocol = ServerProtocol;
    _.ServerProtocol.ServerProtocol_init_$Create$ = ServerProtocol_init_$Create$;
    defineProp(_.ServerProtocol, 'Hello', Hello_getInstance);
    _.ServerProtocol.SendEvent = SendEvent;
    _.ServerProtocol.SendEvent.SendEvent_init_$Create$ = SendEvent_init_$Create$;
    defineProp(_.ServerProtocol.SendEvent, 'Companion', Companion_getInstance_8);
    defineProp(_.ServerProtocol.SendEvent, '$serializer', $serializer_getInstance_7);
    defineProp(_.ServerProtocol, 'End', End_getInstance);
    defineProp(_.ServerProtocol, 'Error', Error_getInstance);
    defineProp(_.ServerProtocol, 'Companion', Companion_getInstance_9);
    _.convertByteArray = convertByteArray;
    defineProp(_, 'PORT', get_PORT);
    defineProp(_, 'HeaderSize', get_HeaderSize);
    _.Client = Client;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=chiiugo-protocol-core.js.map
