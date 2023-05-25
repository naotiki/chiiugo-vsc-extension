(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var protoOf = kotlin_kotlin.$_$.i2;
  var objectMeta = kotlin_kotlin.$_$.h2;
  var VOID = kotlin_kotlin.$_$.d3;
  var setMetadataFor = kotlin_kotlin.$_$.j2;
  var classMeta = kotlin_kotlin.$_$.u1;
  var Unit_getInstance = kotlin_kotlin.$_$.u;
  var Long = kotlin_kotlin.$_$.v2;
  var Enum = kotlin_kotlin.$_$.t2;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var equals = kotlin_kotlin.$_$.w1;
  var toLong = kotlin_kotlin.$_$.l2;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.s;
  var THROW_CCE = kotlin_kotlin.$_$.w2;
  var MapLikeSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var MapEntrySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Map = kotlin_kotlin.$_$.x;
  var isInterface = kotlin_kotlin.$_$.d2;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q;
  var isByteArray = kotlin_kotlin.$_$.c2;
  var ByteArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var copyOf = kotlin_kotlin.$_$.d1;
  var longArray = kotlin_kotlin.$_$.f2;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var encodeToByteArray = kotlin_kotlin.$_$.q2;
  var takeHighestOneBit = kotlin_kotlin.$_$.b3;
  var arrayCopy = kotlin_kotlin.$_$.y;
  var countLeadingZeroBits = kotlin_kotlin.$_$.x2;
  var toByte = kotlin_kotlin.$_$.k2;
  var toShort = kotlin_kotlin.$_$.m2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ProtoBuf, 'ProtoBuf', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, ProtoBuf);
  setMetadataFor(ProtoIntegerType, 'ProtoIntegerType', classMeta, Enum);
  setMetadataFor(ProtoNumber, 'ProtoNumber', classMeta);
  setMetadataFor(ProtoType, 'ProtoType', classMeta);
  setMetadataFor(ProtoPacked, 'ProtoPacked', classMeta);
  setMetadataFor(ProtobufTaggedBase, 'ProtobufTaggedBase', classMeta);
  setMetadataFor(ProtobufTaggedEncoder, 'ProtobufTaggedEncoder', classMeta, ProtobufTaggedBase, [ProtobufTaggedBase, Encoder]);
  setMetadataFor(ProtobufEncoder, 'ProtobufEncoder', classMeta, ProtobufTaggedEncoder);
  setMetadataFor(NestedRepeatedEncoder, 'NestedRepeatedEncoder', classMeta, ProtobufEncoder);
  setMetadataFor(PackedArrayEncoder, 'PackedArrayEncoder', classMeta, NestedRepeatedEncoder);
  setMetadataFor(RepeatedEncoder, 'RepeatedEncoder', classMeta, ProtobufEncoder);
  setMetadataFor(ObjectEncoder, 'ObjectEncoder', classMeta, ProtobufEncoder);
  setMetadataFor(MapRepeatedEncoder, 'MapRepeatedEncoder', classMeta, ObjectEncoder);
  setMetadataFor(NullableMode, 'NullableMode', classMeta, Enum);
  setMetadataFor(ProtobufWriter, 'ProtobufWriter', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ByteArrayOutput, 'ByteArrayOutput', classMeta);
  //endregion
  function Default() {
    Default_instance = this;
    ProtoBuf.call(this, false, EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function ProtoBuf(encodeDefaults, serializersModule) {
    Default_getInstance();
    this.cd_1 = encodeDefaults;
    this.dd_1 = serializersModule;
  }
  protoOf(ProtoBuf).ca = function () {
    return this.dd_1;
  };
  protoOf(ProtoBuf).ed = function (serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.d8());
    encoder.ia(serializer, value);
    return output.nd();
  };
  var ProtoIntegerType_DEFAULT_instance;
  var ProtoIntegerType_SIGNED_instance;
  var ProtoIntegerType_FIXED_instance;
  var ProtoIntegerType_entriesInitialized;
  function ProtoIntegerType_initEntries() {
    if (ProtoIntegerType_entriesInitialized)
      return Unit_getInstance();
    ProtoIntegerType_entriesInitialized = true;
    ProtoIntegerType_DEFAULT_instance = new ProtoIntegerType('DEFAULT', 0, new Long(0, 0));
    ProtoIntegerType_SIGNED_instance = new ProtoIntegerType('SIGNED', 1, new Long(0, 2));
    ProtoIntegerType_FIXED_instance = new ProtoIntegerType('FIXED', 2, new Long(0, 4));
  }
  function ProtoIntegerType(name, ordinal, signature) {
    Enum.call(this, name, ordinal);
    this.qd_1 = signature;
  }
  function ProtoNumber() {
  }
  function ProtoType() {
  }
  function ProtoPacked() {
  }
  function ProtoIntegerType_DEFAULT_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_DEFAULT_instance;
  }
  function ProtoIntegerType_SIGNED_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_SIGNED_instance;
  }
  function ProtoIntegerType_FIXED_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_FIXED_instance;
  }
  function get_isPacked(_this__u8e3s4) {
    return !_this__u8e3s4.z7(new Long(0, 1)).equals(new Long(0, 0));
  }
  function get_isPackable(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.u9();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, STRING_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = !(tmp0_subject instanceof PrimitiveKind);
    }
    if (tmp_0) {
      tmp = false;
    } else {
      tmp = true;
    }
    return tmp;
  }
  function get_integerType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.z7(new Long(0, 2147483646));
    return tmp0_subject.equals(ProtoIntegerType_DEFAULT_getInstance().qd_1) ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject.equals(ProtoIntegerType_SIGNED_getInstance().qd_1) ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
  }
  function extractParameters(_this__u8e3s4, index) {
    var annotations = _this__u8e3s4.v9(index);
    var protoId = index + 1 | 0;
    var format = ProtoIntegerType_DEFAULT_getInstance();
    var protoPacked = false;
    var inductionVariable = 0;
    var last = annotations.i() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var annotation = annotations.i1(i);
        if (annotation instanceof ProtoNumber) {
          protoId = annotation.sd_1;
        } else {
          if (annotation instanceof ProtoType) {
            format = annotation.rd_1;
          } else {
            if (annotation instanceof ProtoPacked) {
              protoPacked = true;
            }
          }
        }
      }
       while (inductionVariable <= last);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = protoId;
    var tmp1_ProtoDesc = format;
    var tmp2_ProtoDesc = protoPacked;
    var packedBits = tmp2_ProtoDesc ? new Long(0, 1) : new Long(0, 0);
    var signature = tmp1_ProtoDesc.qd_1.a8(packedBits);
    tmp$ret$0 = signature.a8(toLong(tmp0_ProtoDesc));
    return tmp$ret$0;
  }
  function get_SIZE_DELIMITED() {
    return SIZE_DELIMITED;
  }
  var SIZE_DELIMITED;
  function get_i32() {
    return i32;
  }
  var i32;
  function get_VARINT() {
    return VARINT;
  }
  var VARINT;
  function PackedArrayEncoder(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    NestedRepeatedEncoder.call(this, proto, writer, curTag, descriptor, stream);
  }
  protoOf(PackedArrayEncoder).ce = function (_this__u8e3s4, index) {
    return get_MISSING_TAG();
  };
  protoOf(PackedArrayEncoder).ha = function (descriptor, collectionSize) {
    throw SerializationException_init_$Create$('Packing only supports primitive number types');
  };
  protoOf(PackedArrayEncoder).ga = function (descriptor) {
    throw SerializationException_init_$Create$('Packing only supports primitive number types');
  };
  protoOf(PackedArrayEncoder).de = function (tag, value) {
    throw SerializationException_init_$Create$('Packing only supports primitive number types');
  };
  function serializeByteArray($this, value) {
    var tag = $this.ze();
    if (tag.equals(get_MISSING_TAG())) {
      $this.jd_1.ef(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.z7(toLong(IntCompanionObject_getInstance().MAX_VALUE)).c8();
      $this.jd_1.df(value, tmp$ret$0);
    }
  }
  function serializeMap($this, serializer, value) {
    var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
    var mapEntrySerial = MapEntrySerializer(casted.ff_1, casted.gf_1);
    var tmp = SetSerializer(mapEntrySerial);
    tmp.e8($this, ((!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE()).s());
  }
  function ProtobufEncoder(proto, writer, descriptor) {
    ProtobufTaggedEncoder.call(this);
    this.id_1 = proto;
    this.jd_1 = writer;
    this.kd_1 = descriptor;
  }
  protoOf(ProtobufEncoder).ca = function () {
    return this.id_1.ca();
  };
  protoOf(ProtobufEncoder).ha = function (descriptor, collectionSize) {
    var tmp0_subject = descriptor.u9();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.ye();
      var tmp_0;
      if (get_isPacked(tag) ? get_isPackable(descriptor.e9(0)) : false) {
        tmp_0 = new PackedArrayEncoder(this.id_1, this.jd_1, this.ye(), descriptor);
      } else {
        if (tag.equals(get_MISSING_TAG())) {
          this.jd_1.hf(collectionSize);
        }
        var tmp_1;
        if ((equals(this.kd_1.u9(), LIST_getInstance()) ? !tag.equals(get_MISSING_TAG()) : false) ? !equals(this.kd_1, descriptor) : false) {
          tmp_1 = new NestedRepeatedEncoder(this.id_1, this.jd_1, tag, descriptor);
        } else {
          tmp_1 = new RepeatedEncoder(this.id_1, this.jd_1, tag, descriptor);
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.id_1, this.xe(), this.jd_1, descriptor);
    } else {
      throw SerializationException_init_$Create$('This serial kind is not supported as collection: ' + descriptor);
    }
    return tmp;
  };
  protoOf(ProtobufEncoder).ga = function (descriptor) {
    var tmp0_subject = descriptor.u9();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tmp_0;
      if (get_isPackable(descriptor.e9(0)) ? get_isPacked(this.ye()) : false) {
        tmp_0 = new PackedArrayEncoder(this.id_1, this.jd_1, this.ye(), descriptor);
      } else {
        tmp_0 = new RepeatedEncoder(this.id_1, this.jd_1, this.ye(), descriptor);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_1) {
        var tag = this.ye();
        tmp = (tag.equals(get_MISSING_TAG()) ? equals(descriptor, this.kd_1) : false) ? this : new ObjectEncoder(this.id_1, this.ye(), this.jd_1, VOID, descriptor);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.id_1, this.ye(), this.jd_1, descriptor);
        } else {
          throw SerializationException_init_$Create$('This serial kind is not supported as structure: ' + descriptor);
        }
      }
    }
    return tmp;
  };
  protoOf(ProtobufEncoder).oe = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.jd_1.hf(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.z7(toLong(IntCompanionObject_getInstance().MAX_VALUE)).c8();
      this.jd_1.if(value, tmp$ret$0, get_integerType(tag));
    }
  };
  protoOf(ProtobufEncoder).pe = function (tag, value) {
    return this.oe(tag, value);
  };
  protoOf(ProtobufEncoder).qe = function (tag, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.oe(tag, tmp$ret$0);
  };
  protoOf(ProtobufEncoder).de = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.jd_1.kf(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.z7(toLong(IntCompanionObject_getInstance().MAX_VALUE)).c8();
      this.jd_1.jf(value, tmp$ret$0);
    }
  };
  protoOf(ProtobufEncoder).ce = function (_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  };
  protoOf(ProtobufEncoder).ia = function (serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_getInstance();
    } else {
      if (equals(serializer.d8(), ByteArraySerializer().d8())) {
        serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
        tmp = Unit_getInstance();
      } else {
        serializer.e8(this, value);
        tmp = Unit_getInstance();
      }
    }
    return tmp;
  };
  function NestedRepeatedEncoder(proto, writer, curTag, descriptor, stream) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    ProtobufEncoder.call(this, proto, new ProtobufWriter(stream), descriptor);
    this.ke_1 = writer;
    this.le_1 = curTag;
    this.me_1 = stream;
  }
  protoOf(NestedRepeatedEncoder).ce = function (_this__u8e3s4, index) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = ProtoIntegerType_DEFAULT_getInstance();
    tmp$ret$0 = tmp0_ProtoDesc.qd_1.a8(new Long(1, 0));
    return tmp$ret$0;
  };
  protoOf(NestedRepeatedEncoder).ne = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp0__get_protoId__2ceqo8 = this.le_1;
    tmp$ret$0 = tmp0__get_protoId__2ceqo8.z7(toLong(IntCompanionObject_getInstance().MAX_VALUE)).c8();
    this.ke_1.lf(this.me_1, tmp$ret$0);
  };
  function RepeatedEncoder(proto, writer, curTag, descriptor) {
    ProtobufEncoder.call(this, proto, writer, descriptor);
    this.sf_1 = curTag;
  }
  protoOf(RepeatedEncoder).ce = function (_this__u8e3s4, index) {
    return this.sf_1;
  };
  function MapRepeatedEncoder(proto, parentTag, parentWriter, descriptor) {
    ObjectEncoder.call(this, proto, parentTag, parentWriter, VOID, descriptor);
  }
  protoOf(MapRepeatedEncoder).ce = function (_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp0_ProtoDesc = get_integerType(this.ig_1);
      tmp$ret$0 = tmp0_ProtoDesc.qd_1.a8(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp1_ProtoDesc = get_integerType(this.ig_1);
      tmp$ret$1 = tmp1_ProtoDesc.qd_1.a8(new Long(2, 0));
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  function ObjectEncoder(proto, parentTag, parentWriter, stream, descriptor) {
    stream = stream === VOID ? new ByteArrayOutput() : stream;
    ProtobufEncoder.call(this, proto, new ProtobufWriter(stream), descriptor);
    this.ig_1 = parentTag;
    this.jg_1 = parentWriter;
    this.kg_1 = stream;
  }
  protoOf(ObjectEncoder).ne = function (descriptor) {
    if (!this.ig_1.equals(get_MISSING_TAG())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp0__get_protoId__2ceqo8 = this.ig_1;
      tmp$ret$0 = tmp0__get_protoId__2ceqo8.z7(toLong(IntCompanionObject_getInstance().MAX_VALUE)).c8();
      this.jg_1.lf(this.kg_1, tmp$ret$0);
    } else {
      this.jg_1.lg(this.kg_1);
    }
  };
  function get_MISSING_TAG() {
    return MISSING_TAG;
  }
  var MISSING_TAG;
  function expand($this) {
    $this.ve_1 = copyOf($this.ve_1, imul($this.ve_1.length, 2));
  }
  function ProtobufTaggedBase() {
    this.ve_1 = longArray(8);
    this.we_1 = -1;
  }
  protoOf(ProtobufTaggedBase).xe = function () {
    return this.ve_1[this.we_1];
  };
  protoOf(ProtobufTaggedBase).ye = function () {
    return this.we_1 === -1 ? new Long(19500, 0) : this.ve_1[this.we_1];
  };
  protoOf(ProtobufTaggedBase).ze = function () {
    var tmp;
    if (this.we_1 === -1) {
      tmp = new Long(19500, 0);
    } else {
      var tmp_0 = this.ve_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.we_1;
      tmp0_this.we_1 = tmp1 - 1 | 0;
      tmp = tmp_0[tmp1];
    }
    return tmp;
  };
  protoOf(ProtobufTaggedBase).af = function (tag) {
    if (tag.equals(new Long(19500, 0)))
      return Unit_getInstance();
    var tmp0_this = this;
    tmp0_this.we_1 = tmp0_this.we_1 + 1 | 0;
    var idx = tmp0_this.we_1;
    if (this.we_1 >= this.ve_1.length) {
      expand(this);
    }
    this.ve_1[idx] = tag;
  };
  protoOf(ProtobufTaggedBase).bf = function () {
    if (this.we_1 >= 0) {
      var tmp = this.ve_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.we_1;
      tmp0_this.we_1 = tmp1 - 1 | 0;
      return tmp[tmp1];
    }
    throw SerializationException_init_$Create$('No tag in stack for requested element');
  };
  var NullableMode_ACCEPTABLE_instance;
  var NullableMode_OPTIONAL_instance;
  var NullableMode_COLLECTION_instance;
  var NullableMode_NOT_NULL_instance;
  var NullableMode_entriesInitialized;
  function NullableMode_initEntries() {
    if (NullableMode_entriesInitialized)
      return Unit_getInstance();
    NullableMode_entriesInitialized = true;
    NullableMode_ACCEPTABLE_instance = new NullableMode('ACCEPTABLE', 0);
    NullableMode_OPTIONAL_instance = new NullableMode('OPTIONAL', 1);
    NullableMode_COLLECTION_instance = new NullableMode('COLLECTION', 2);
    NullableMode_NOT_NULL_instance = new NullableMode('NOT_NULL', 3);
  }
  function NullableMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function NullableMode_NOT_NULL_getInstance() {
    NullableMode_initEntries();
    return NullableMode_NOT_NULL_instance;
  }
  function ProtobufTaggedEncoder() {
    ProtobufTaggedBase.call(this);
    this.te_1 = NullableMode_NOT_NULL_getInstance();
  }
  protoOf(ProtobufTaggedEncoder).da = function (value) {
    this.pe(this.ze(), value);
  };
  protoOf(ProtobufTaggedEncoder).ea = function (value) {
    this.qe(this.ze(), value);
  };
  protoOf(ProtobufTaggedEncoder).fa = function (value) {
    this.de(this.ze(), value);
  };
  protoOf(ProtobufTaggedEncoder).w9 = function (descriptor) {
    if (this.we_1 >= 0) {
      this.bf();
    }
    this.ne(descriptor);
  };
  protoOf(ProtobufTaggedEncoder).ne = function (descriptor) {
  };
  protoOf(ProtobufTaggedEncoder).ec = function (descriptor, index, value) {
    return this.pe(this.ce(descriptor, index), value);
  };
  protoOf(ProtobufTaggedEncoder).ue = function (descriptor, index, value) {
    return this.qe(this.ce(descriptor, index), value);
  };
  protoOf(ProtobufTaggedEncoder).ja = function (descriptor, index, value) {
    return this.de(this.ce(descriptor, index), value);
  };
  protoOf(ProtobufTaggedEncoder).ka = function (descriptor, index, serializer, value) {
    this.te_1 = NullableMode_NOT_NULL_getInstance();
    this.af(this.ce(descriptor, index));
    this.ia(serializer, value);
  };
  function encode32(_this__u8e3s4, $this, number, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.p2_1;
    switch (tmp0) {
      case 2:
        $this.cf_1.hf(reverseBytes(number));
        ;
        break;
      case 0:
        _this__u8e3s4.mg(toLong(number));
        ;
        break;
      case 1:
        _this__u8e3s4.ng(number << 1 ^ number >> 31);
        ;
        break;
    }
  }
  function encode32$default(_this__u8e3s4, $this, number, format, $super) {
    format = format === VOID ? ProtoIntegerType_DEFAULT_getInstance() : format;
    return encode32(_this__u8e3s4, $this, number, format);
  }
  function ProtobufWriter(out) {
    this.cf_1 = out;
  }
  protoOf(ProtobufWriter).df = function (bytes, tag) {
    encode32$default(this.cf_1, this, tag << 3 | get_SIZE_DELIMITED());
    this.ef(bytes);
  };
  protoOf(ProtobufWriter).ef = function (bytes) {
    encode32$default(this.cf_1, this, bytes.length);
    this.cf_1.og(bytes);
  };
  protoOf(ProtobufWriter).lf = function (output, tag) {
    encode32$default(this.cf_1, this, tag << 3 | get_SIZE_DELIMITED());
    this.lg(output);
  };
  protoOf(ProtobufWriter).lg = function (output) {
    encode32$default(this.cf_1, this, output.pg());
    this.cf_1.qg(output);
  };
  protoOf(ProtobufWriter).if = function (value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i32() : get_VARINT();
    encode32$default(this.cf_1, this, tag << 3 | wireType);
    encode32(this.cf_1, this, value, format);
  };
  protoOf(ProtobufWriter).hf = function (value) {
    encode32$default(this.cf_1, this, value);
  };
  protoOf(ProtobufWriter).jf = function (value, tag) {
    var bytes = encodeToByteArray(value);
    this.df(bytes, tag);
  };
  protoOf(ProtobufWriter).kf = function (value) {
    var bytes = encodeToByteArray(value);
    this.ef(bytes);
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 65;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.Companion.VAR_INT_LENGTHS.<anonymous>' call
      tmp$ret$0 = (63 - tmp_3 | 0) / 7 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rg_1 = tmp_2;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ensureCapacity($this, elementsToAppend) {
    if (($this.md_1 + elementsToAppend | 0) <= $this.ld_1.length) {
      return Unit_getInstance();
    }
    var newArray = new Int8Array(takeHighestOneBit($this.md_1 + elementsToAppend | 0) << 1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.ld_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newArray;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newArray;
    $this.ld_1 = newArray;
  }
  function encodeVarint($this, value, length) {
    var current = value;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.ld_1[$this.md_1 + i | 0] = current.z7(new Long(127, 0)).a8(new Long(128, 0)).b8();
        current = current.y7(7);
      }
       while (inductionVariable < length);
    $this.ld_1[$this.md_1 + length | 0] = current.b8();
    var tmp1_this = $this;
    tmp1_this.md_1 = tmp1_this.md_1 + (length + 1 | 0) | 0;
  }
  function varIntLength($this, value) {
    return Companion_getInstance().rg_1[countLeadingZeroBits(value)];
  }
  function ByteArrayOutput() {
    Companion_getInstance();
    this.ld_1 = new Int8Array(32);
    this.md_1 = 0;
  }
  protoOf(ByteArrayOutput).pg = function () {
    return this.md_1;
  };
  protoOf(ByteArrayOutput).nd = function () {
    var newArray = new Int8Array(this.md_1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.ld_1;
    var tmp1_copyInto = this.md_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newArray;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newArray;
    return newArray;
  };
  protoOf(ByteArrayOutput).og = function (buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_getInstance();
    }
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.ld_1;
    var tmp1_copyInto = this.md_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = buffer;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, 0, count);
    tmp$ret$4 = tmp0_copyInto;
    var tmp0_this = this;
    tmp0_this.md_1 = tmp0_this.md_1 + count | 0;
  };
  protoOf(ByteArrayOutput).qg = function (output) {
    var count = output.pg();
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = output.ld_1;
    var tmp1_copyInto = this.ld_1;
    var tmp2_copyInto = this.md_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp2_copyInto, 0, count);
    tmp$ret$4 = tmp1_copyInto;
    var tmp0_this = this;
    tmp0_this.md_1 = tmp0_this.md_1 + count | 0;
  };
  protoOf(ByteArrayOutput).hf = function (intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.ld_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this.md_1;
        tmp1_this.md_1 = tmp2 + 1 | 0;
        tmp[tmp2] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  };
  protoOf(ByteArrayOutput).ng = function (value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.ld_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.md_1;
      tmp0_this.md_1 = tmp1 + 1 | 0;
      tmp[tmp1] = toByte(value);
      return Unit_getInstance();
    }
    var length = varIntLength(this, toLong(value));
    encodeVarint(this, toLong(value), length);
  };
  protoOf(ByteArrayOutput).mg = function (value) {
    var length = varIntLength(this, value);
    ensureCapacity(this, length + 1 | 0);
    encodeVarint(this, value, length);
  };
  function reverseBytes(_this__u8e3s4) {
    return reverseBytes_0(toShort(_this__u8e3s4 & 65535)) << 16 | reverseBytes_0(toShort(_this__u8e3s4 >>> 16 | 0)) & 65535;
  }
  function reverseBytes_0(_this__u8e3s4) {
    return toShort((_this__u8e3s4 & 255) << 8 | ((_this__u8e3s4 & 65535) >>> 8 | 0));
  }
  //region block: post-declaration
  protoOf(ProtobufTaggedEncoder).ha = beginCollection;
  protoOf(ProtobufTaggedEncoder).ia = encodeSerializableValue;
  //endregion
  //region block: init
  SIZE_DELIMITED = 2;
  i32 = 5;
  VARINT = 0;
  MISSING_TAG = new Long(19500, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-protobuf-js-ir.js.map
