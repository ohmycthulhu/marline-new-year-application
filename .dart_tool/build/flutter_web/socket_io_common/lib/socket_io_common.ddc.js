define(['dart_sdk', 'packages/logging/logging'], function(dart_sdk, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging = packages__logging__logging.logging;
  const socket_io_common = Object.create(dart.library);
  const parser = Object.create(dart.library);
  const event_emitter = Object.create(dart.library);
  const binary = Object.create(dart.library);
  const wtf8 = Object.create(dart.library);
  const parser$ = Object.create(dart.library);
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $_set = dartx._set;
  const $isNotEmpty = dartx.isNotEmpty;
  const $substring = dartx.substring;
  const $forEach = dartx.forEach;
  const $remove = dartx.remove;
  const $putIfAbsent = dartx.putIfAbsent;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $cast = dartx.cast;
  const $toLowerCase = dartx.toLowerCase;
  const $toInt = dartx.toInt;
  const $codeUnitAt = dartx.codeUnitAt;
  const $asUint8List = dartx.asUint8List;
  const $setAll = dartx.setAll;
  const $buffer = dartx.buffer;
  const $codeUnits = dartx.codeUnits;
  const $toString = dartx.toString;
  const $sublist = dartx.sublist;
  const $any = dartx.any;
  const $map = dartx.map;
  const $_equals = dartx._equals;
  const $skip = dartx.skip;
  const $toList = dartx.toList;
  const $getRange = dartx.getRange;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ListOfdynamicTodynamic = () => (ListOfdynamicTodynamic = dart.constFn(core.List$(dynamicTodynamic())))();
  let IdentityMapOfString$ListOfdynamicTodynamic = () => (IdentityMapOfString$ListOfdynamicTodynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfdynamicTodynamic())))();
  let FnToNull = () => (FnToNull = dart.constFn(dart.fnType(core.Null, [dynamicTodynamic()])))();
  let JSArrayOfdynamicTodynamic = () => (JSArrayOfdynamicTodynamic = dart.constFn(_interceptors.JSArray$(dynamicTodynamic())))();
  let VoidToListOfdynamicTodynamic = () => (VoidToListOfdynamicTodynamic = dart.constFn(dart.fnType(ListOfdynamicTodynamic(), [])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let dynamicAndFnToNull = () => (dynamicAndFnToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic], [dynamicAnddynamicTodynamic()])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let ListTodynamic = () => (ListTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.List])))();
  let dynamicAndFnTodynamic = () => (dynamicAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], [dynamicAnddynamicTodynamic()])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.OPEN",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.CLOSE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.PING",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.PONG",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.MESSAGE",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.UPGRADE",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: parser$.PacketType.prototype,
        [_name$]: "PacketType.NOOP",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], parser$.PacketType);
    },
    get C8() {
      return C8 = dart.fn(parser$.PacketParser.encodeOneBinaryPacket, dynamicAndFnTodynamic());
    },
    get C9() {
      return C9 = dart.constMap(core.String, core.String, ["type", "error", "data", "parser error"]);
    },
    get C10() {
      return C10 = dart.constList(["open", "close", "ping", "pong", "message", "upgrade", "noop"], core.String);
    },
    get C11() {
      return C11 = dart.constMap(core.String, core.int, ["open", 0, "close", 1, "ping", 2, "pong", 3, "message", 4, "upgrade", 5, "noop", 6]);
    }
  });
  parser.Encoder = class Encoder extends core.Object {
    encode(obj, callback) {
      parser.Encoder._logger.fine("encoding packet " + dart.str(obj));
      if (5 === dart.dsend(obj, '_get', ["type"]) || 6 === dart.dsend(obj, '_get', ["type"])) {
        parser.Encoder.encodeAsBinary(obj, callback);
      } else {
        let encoding = parser.Encoder.encodeAsString(obj);
        dart.dcall(callback, [JSArrayOfString().of([encoding])]);
      }
    }
    static encodeAsString(obj) {
      let str = dart.str(dart.dsend(obj, '_get', ["type"]));
      if (5 === dart.dsend(obj, '_get', ["type"]) || 6 === dart.dsend(obj, '_get', ["type"])) {
        str = str + (dart.str(dart.dsend(obj, '_get', ["attachments"])) + "-");
      }
      if (dart.dsend(obj, '_get', ["nsp"]) != null && "/" !== dart.dsend(obj, '_get', ["nsp"])) {
        str = str + dart.notNull(core.String._check(dart.dsend(dart.dsend(obj, '_get', ["nsp"]), '+', [","])));
      }
      if (null != dart.dsend(obj, '_get', ["id"])) {
        str = str + dart.str(dart.dsend(obj, '_get', ["id"]));
      }
      if (null != dart.dsend(obj, '_get', ["data"])) {
        str = str + dart.notNull(convert.json.encode(dart.dsend(obj, '_get', ["data"])));
      }
      parser.Encoder._logger.fine("encoded " + dart.str(obj) + " as " + str);
      return str;
    }
    static encodeAsBinary(obj, callback) {
      let writeEncoding = dart.fn(bloblessData => {
        let t0;
        let deconstruction = binary.Binary.deconstructPacket(core.Map._check(bloblessData));
        let pack = parser.Encoder.encodeAsString(deconstruction[$_get]("packet"));
        let buffers = deconstruction[$_get]("buffers");
        dart.dcall(callback, [(t0 = JSArrayOfString().of([pack]), t0[$addAll](IterableOfString()._check(buffers)), t0)]);
      }, dynamicToNull());
      writeEncoding(obj);
    }
  };
  (parser.Encoder.new = function() {
    ;
  }).prototype = parser.Encoder.prototype;
  dart.addTypeTests(parser.Encoder);
  dart.setMethodSignature(parser.Encoder, () => ({
    __proto__: dart.getMethods(parser.Encoder.__proto__),
    encode: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(parser.Encoder, "package:socket_io_common/src/parser/parser.dart");
  dart.defineLazy(parser.Encoder, {
    /*parser.Encoder._logger*/get _logger() {
      return logging.Logger.new("socket_io:parser.Encoder");
    }
  });
  const _events = dart.privateName(event_emitter, "_events");
  const _eventsOnce = dart.privateName(event_emitter, "_eventsOnce");
  event_emitter.EventEmitter = class EventEmitter extends core.Object {
    emit(event, data) {
      let t1, t1$;
      if (data === void 0) data = null;
      let list0 = this[_events][$_get](event);
      let list = list0 != null ? core.List.from(list0) : null;
      t1 = list;
      t1 == null ? null : t1[$forEach](dart.fn(handler => {
        dart.dcall(handler, [data]);
      }, dynamicToNull()));
      t1$ = this[_eventsOnce][$remove](event);
      t1$ == null ? null : t1$[$forEach](dart.fn(handler => {
        handler(data);
      }, FnToNull()));
    }
    on(event, handler) {
      this[_events][$putIfAbsent](event, dart.fn(() => JSArrayOfdynamicTodynamic().of([]), VoidToListOfdynamicTodynamic()));
      this[_events][$_get](event)[$add](handler);
    }
    once(event, handler) {
      this[_eventsOnce][$putIfAbsent](event, dart.fn(() => JSArrayOfdynamicTodynamic().of([]), VoidToListOfdynamicTodynamic()));
      this[_eventsOnce][$_get](event)[$add](handler);
    }
    off(event, handler) {
      let t1, t1$, t1$0, t1$1;
      if (handler === void 0) handler = null;
      if (handler != null) {
        t1 = this[_events][$_get](event);
        t1 == null ? null : t1[$remove](handler);
        t1$ = this[_eventsOnce][$_get](event);
        t1$ == null ? null : t1$[$remove](handler);
        if (dart.equals((t1$0 = this[_events][$_get](event), t1$0 == null ? null : t1$0[$isEmpty]), true)) {
          this[_events][$remove](event);
        }
        if (dart.equals((t1$1 = this[_eventsOnce][$_get](event), t1$1 == null ? null : t1$1[$isEmpty]), true)) {
          this[_eventsOnce][$remove](event);
        }
      } else {
        this[_events][$remove](event);
        this[_eventsOnce][$remove](event);
      }
    }
    clearListeners() {
      this[_events] = new (IdentityMapOfString$ListOfdynamicTodynamic()).new();
      this[_eventsOnce] = new (IdentityMapOfString$ListOfdynamicTodynamic()).new();
    }
    hasListeners(event) {
      let t1, t1$;
      return dart.equals((t1 = this[_events][$_get](event), t1 == null ? null : t1[$isNotEmpty]), true) || dart.equals((t1$ = this[_eventsOnce][$_get](event), t1$ == null ? null : t1$[$isNotEmpty]), true);
    }
  };
  (event_emitter.EventEmitter.new = function() {
    this[_events] = null;
    this[_eventsOnce] = null;
    this[_events] = new (IdentityMapOfString$ListOfdynamicTodynamic()).new();
    this[_eventsOnce] = new (IdentityMapOfString$ListOfdynamicTodynamic()).new();
  }).prototype = event_emitter.EventEmitter.prototype;
  dart.addTypeTests(event_emitter.EventEmitter);
  dart.setMethodSignature(event_emitter.EventEmitter, () => ({
    __proto__: dart.getMethods(event_emitter.EventEmitter.__proto__),
    emit: dart.fnType(dart.void, [core.String], [dart.dynamic]),
    on: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [dart.dynamic])]),
    once: dart.fnType(dart.void, [core.String, dart.fnType(dart.dynamic, [dart.dynamic])]),
    off: dart.fnType(dart.void, [core.String], [dart.fnType(dart.dynamic, [dart.dynamic])]),
    clearListeners: dart.fnType(dart.void, []),
    hasListeners: dart.fnType(core.bool, [core.String])
  }));
  dart.setLibraryUri(event_emitter.EventEmitter, "package:socket_io_common/src/util/event_emitter.dart");
  dart.setFieldSignature(event_emitter.EventEmitter, () => ({
    __proto__: dart.getFields(event_emitter.EventEmitter.__proto__),
    [_events]: dart.fieldType(core.Map$(core.String, core.List$(dart.fnType(dart.dynamic, [dart.dynamic])))),
    [_eventsOnce]: dart.fieldType(core.Map$(core.String, core.List$(dart.fnType(dart.dynamic, [dart.dynamic]))))
  }));
  const reconstructor = dart.privateName(parser, "Decoder.reconstructor");
  parser.Decoder = class Decoder extends event_emitter.EventEmitter {
    get reconstructor() {
      return this[reconstructor];
    }
    set reconstructor(value) {
      this[reconstructor] = value;
    }
    add(obj) {
      let packet = null;
      if (typeof obj == 'string') {
        packet = parser.Decoder.decodeString(obj);
        if (5 === dart.dsend(packet, '_get', ["type"]) || 6 === dart.dsend(packet, '_get', ["type"])) {
          this.reconstructor = new parser.BinaryReconstructor.new(packet);
          if (dart.equals(dart.dsend(dart.dload(this.reconstructor, 'reconPack'), '_get', ["attachments"]), 0)) {
            this.emit("decoded", packet);
          }
        } else {
          this.emit("decoded", packet);
        }
      } else if (obj != null && typed_data.ByteBuffer.is(obj) || typed_data.Uint8List.is(obj) || core.Map.is(obj) && obj[$_get]("base64") != null) {
        if (this.reconstructor == null) {
          dart.throw(new core.UnsupportedError.new("got binary data when not reconstructing a packet"));
        } else {
          packet = dart.dsend(this.reconstructor, 'takeBinaryData', [obj]);
          if (packet != null) {
            this.reconstructor = null;
            this.emit("decoded", packet);
          }
        }
      } else {
        dart.throw(new core.UnsupportedError.new("Unknown type: " + dart.notNull(core.String._check(obj))));
      }
    }
    static decodeString(str) {
      let t0, t1, t0$, t0$0, t1$, t0$1, t0$2;
      let i = 0;
      let endLen = str.length - 1;
      let p = new (IdentityMapOfString$dynamic()).from(["type", core.num.parse(str[$_get](0))]);
      if (null == parser.PacketTypes[$_get](core.int._check(p[$_get]("type")))) return parser.error();
      if (5 === p[$_get]("type") || 6 === p[$_get]("type")) {
        let buf = "";
        while (str[$_get](i = i + 1) !== "-") {
          buf = buf + str[$_get](i);
          if (i === endLen) break;
        }
        if (buf !== dart.str((t0 = core.num.tryParse(buf), t0 == null ? -1 : t0)) || str[$_get](i) !== "-") {
          dart.throw(new core.ArgumentError.new("Illegal attachments"));
        }
        p[$_set]("attachments", core.num.parse(buf));
      }
      if (str.length > i + 1 && "/" === str[$_get](i + 1)) {
        p[$_set]("nsp", "");
        while ((i = i + 1) > 0) {
          let c = str[$_get](i);
          if ("," === c) break;
          t0$ = p;
          t1 = "nsp";
          t0$[$_set](t1, dart.dsend(t0$[$_get](t1), '+', [c]));
          if (i === endLen) break;
        }
      } else {
        p[$_set]("nsp", "/");
      }
      let next = i < endLen - 1 ? str[$_get](i + 1) : null;
      if (dart.equals((t0$0 = next, t0$0 == null ? null : t0$0[$isNotEmpty]), true) && dart.str(core.num.tryParse(next)) === next) {
        p[$_set]("id", "");
        while ((i = i + 1) > 0) {
          let c = str[$_get](i);
          if (null === c || dart.str(core.num.tryParse(c)) !== c) {
            i = i - 1;
            break;
          }
          t0$1 = p;
          t1$ = "id";
          t0$1[$_set](t1$, dart.dsend(t0$1[$_get](t1$), '+', [str[$_get](i)]));
          if (i === endLen - 1) break;
        }
      }
      if (i < endLen - 1 && dart.equals((t0$2 = str[$_get](i = i + 1), t0$2 === null ? null : t0$2[$isNotEmpty]), true)) {
        p = MapOfString$dynamic()._check(parser.Decoder.tryParse(p, str[$substring](i)));
      }
      return p;
    }
    static tryParse(p, str) {
      try {
        dart.dsend(p, '_set', ["data", convert.json.decode(core.String._check(str))]);
      } catch (e$) {
        let e = dart.getThrown(e$);
        return parser.error();
      }
      return p;
    }
    destroy() {
      if (this.reconstructor != null) {
        dart.dsend(this.reconstructor, 'finishedReconstruction', []);
      }
    }
  };
  (parser.Decoder.new = function() {
    this[reconstructor] = null;
    parser.Decoder.__proto__.new.call(this);
    ;
  }).prototype = parser.Decoder.prototype;
  dart.addTypeTests(parser.Decoder);
  dart.setMethodSignature(parser.Decoder, () => ({
    __proto__: dart.getMethods(parser.Decoder.__proto__),
    add: dart.fnType(dart.dynamic, [dart.dynamic]),
    destroy: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(parser.Decoder, "package:socket_io_common/src/parser/parser.dart");
  dart.setFieldSignature(parser.Decoder, () => ({
    __proto__: dart.getFields(parser.Decoder.__proto__),
    reconstructor: dart.fieldType(dart.dynamic)
  }));
  const reconPack = dart.privateName(parser, "BinaryReconstructor.reconPack");
  const buffers = dart.privateName(parser, "BinaryReconstructor.buffers");
  parser.BinaryReconstructor = class BinaryReconstructor extends core.Object {
    get reconPack() {
      return this[reconPack];
    }
    set reconPack(value) {
      this[reconPack] = value;
    }
    get buffers() {
      return this[buffers];
    }
    set buffers(value) {
      this[buffers] = value;
    }
    takeBinaryData(binData) {
      this.buffers[$add](binData);
      if (core.identical(this.buffers[$length], this.reconPack[$_get]("attachments"))) {
        let packet = binary.Binary.reconstructPacket(this.reconPack, this.buffers[$cast](ListOfint()));
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  };
  (parser.BinaryReconstructor.new = function(packet) {
    this[reconPack] = null;
    this[buffers] = null;
    this.reconPack = core.Map._check(packet);
    this.buffers = [];
  }).prototype = parser.BinaryReconstructor.prototype;
  dart.addTypeTests(parser.BinaryReconstructor);
  dart.setMethodSignature(parser.BinaryReconstructor, () => ({
    __proto__: dart.getMethods(parser.BinaryReconstructor.__proto__),
    takeBinaryData: dart.fnType(dart.dynamic, [dart.dynamic]),
    finishedReconstruction: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(parser.BinaryReconstructor, "package:socket_io_common/src/parser/parser.dart");
  dart.setFieldSignature(parser.BinaryReconstructor, () => ({
    __proto__: dart.getFields(parser.BinaryReconstructor.__proto__),
    reconPack: dart.fieldType(core.Map),
    buffers: dart.fieldType(core.List)
  }));
  parser.error = function error() {
    return new _js_helper.LinkedMap.from(["type", 4, "data", "parser error"]);
  };
  dart.defineLazy(parser, {
    /*parser.CONNECT*/get CONNECT() {
      return 0;
    },
    /*parser.DISCONNECT*/get DISCONNECT() {
      return 1;
    },
    /*parser.EVENT*/get EVENT() {
      return 2;
    },
    /*parser.ACK*/get ACK() {
      return 3;
    },
    /*parser.ERROR*/get ERROR() {
      return 4;
    },
    /*parser.BINARY_EVENT*/get BINARY_EVENT() {
      return 5;
    },
    /*parser.BINARY_ACK*/get BINARY_ACK() {
      return 6;
    },
    /*parser.PacketTypes*/get PacketTypes() {
      return JSArrayOfString().of(["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"]);
    },
    set PacketTypes(_) {}
  });
  binary.Binary = class Binary extends core.Object {
    static deconstructPacket(packet) {
      let buffers = JSArrayOfint().of([]);
      packet[$_set]("data", binary.Binary._deconstructPacket(packet[$_get]("data"), buffers));
      packet[$_set]("attachments", buffers[$length]);
      let result = new (IdentityMapOfString$Object()).from(["packet", packet, "buffers", buffers]);
      return result;
    }
    static _deconstructPacket(data, buffers) {
      if (data == null) return null;
      if (typed_data.Uint8List.is(data)) {
        let placeholder = new (IdentityMapOfString$Object()).from([binary.Binary.KEY_PLACEHOLDER, true, binary.Binary.KEY_NUM, buffers[$length]]);
        buffers[$add](data);
        return placeholder;
      } else if (core.List.is(data)) {
        let newData = [];
        let _data = data;
        let len = _data[$length];
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          newData[$add](binary.Binary._deconstructPacket(_data[$_get](i), buffers));
        }
        return newData;
      } else if (core.Map.is(data)) {
        let newData = new _js_helper.LinkedMap.new();
        let _data = data;
        data[$forEach](dart.fn((k, v) => {
          newData[$_set](k, binary.Binary._deconstructPacket(_data[$_get](k), buffers));
        }, dynamicAnddynamicToNull()));
        return newData;
      }
      return data;
    }
    static reconstructPacket(packet, buffers) {
      packet[$_set]("data", binary.Binary._reconstructPacket(packet[$_get]("data"), buffers));
      packet[$_set]("attachments", -1);
      return packet;
    }
    static _reconstructPacket(data, buffers) {
      if (core.List.is(data)) {
        let _data = data;
        let i = 0;
        _data[$forEach](dart.fn(v => {
          let t1;
          _data[$_set]((t1 = i, i = t1 + 1, t1), binary.Binary._reconstructPacket(v, buffers));
        }, dynamicToNull()));
        return _data;
      } else if (core.Map.is(data)) {
        let _data = data;
        if (dart.str(_data[$_get](binary.Binary.KEY_PLACEHOLDER))[$toLowerCase]() === "true") {
          let knum = _data[$_get](binary.Binary.KEY_NUM);
          let num = core.int.is(knum) ? knum : core.int.parse(core.String._check(_data[$_get](binary.Binary.KEY_NUM)))[$toInt]();
          return dart.notNull(num) >= 0 && dart.notNull(num) < dart.notNull(buffers[$length]) ? buffers[$_get](num) : null;
        }
        data[$forEach](dart.fn((key, value) => {
          _data[$_set](key, binary.Binary._reconstructPacket(value, buffers));
        }, dynamicAnddynamicToNull()));
        return _data;
      }
      return data;
    }
  };
  (binary.Binary.new = function() {
    ;
  }).prototype = binary.Binary.prototype;
  dart.addTypeTests(binary.Binary);
  dart.setLibraryUri(binary.Binary, "package:socket_io_common/src/parser/binary.dart");
  dart.defineLazy(binary.Binary, {
    /*binary.Binary.KEY_PLACEHOLDER*/get KEY_PLACEHOLDER() {
      return "_placeholder";
    },
    /*binary.Binary.KEY_NUM*/get KEY_NUM() {
      return "num";
    }
  });
  wtf8.WTF8 = class WTF8 extends core.Object {
    static encode(string) {
      let codePoints = wtf8.WTF8._ucs2decode(string);
      let length = codePoints[$length];
      let index = -1;
      let codePoint = null;
      let byteString = "";
      while ((index = index + 1) < dart.notNull(length)) {
        codePoint = codePoints[$_get](index);
        byteString = byteString + dart.notNull(core.String._check(wtf8.WTF8._encodeCodePoint(core.int._check(codePoint))));
      }
      return byteString;
    }
    static _ucs2decode(string) {
      let t1, t1$;
      let output = JSArrayOfint().of([]);
      let counter = 0;
      let length = string.length;
      let value = null;
      let extra = null;
      while (counter < length) {
        value = string[$codeUnitAt]((t1 = counter, counter = t1 + 1, t1));
        if (dart.dtest(dart.dsend(value, '>=', [55296])) && dart.dtest(dart.dsend(value, '<=', [56319])) && counter < length) {
          extra = string[$codeUnitAt]((t1$ = counter, counter = t1$ + 1, t1$));
          if (dart.equals(dart.dsend(extra, '&', [64512]), 56320)) {
            output[$add](core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(value, '&', [1023]), '<<', [10]), '+', [dart.dsend(extra, '&', [1023])]), '+', [65536])));
          } else {
            output[$add](core.int._check(value));
            counter = counter - 1;
          }
        } else {
          output[$add](core.int._check(value));
        }
      }
      return output;
    }
    static _encodeCodePoint(codePoint) {
      if ((dart.notNull(codePoint) & 4294967168) === 0) {
        return core.String.fromCharCode(codePoint);
      }
      let symbol = "";
      if ((dart.notNull(codePoint) & 4294965248) === 0) {
        symbol = core.String.fromCharCode(dart.notNull(codePoint) >> 6 & 31 | 192);
      } else if ((dart.notNull(codePoint) & 4294901760) === 0) {
        symbol = core.String.fromCharCode(dart.notNull(codePoint) >> 12 & 15 | 224);
        symbol = dart.notNull(symbol) + dart.notNull(core.String._check(wtf8.WTF8._createByte(codePoint, 6)));
      } else if ((dart.notNull(codePoint) & 4292870144) === 0) {
        symbol = core.String.fromCharCode(dart.notNull(codePoint) >> 18 & 7 | 240);
        symbol = dart.notNull(symbol) + dart.notNull(core.String._check(wtf8.WTF8._createByte(codePoint, 12)));
        symbol = dart.notNull(symbol) + dart.notNull(core.String._check(wtf8.WTF8._createByte(codePoint, 6)));
      }
      symbol = dart.notNull(symbol) + dart.notNull(core.String.fromCharCode(dart.notNull(codePoint) & 63 | 128));
      return symbol;
    }
    static _createByte(codePoint, shift) {
      return core.String.fromCharCode(core.int._check(dart.dsend(dart.dsend(dart.dsend(codePoint, '>>', [shift]), '&', [63]), '|', [128])));
    }
  };
  (wtf8.WTF8.new = function() {
    ;
  }).prototype = wtf8.WTF8.prototype;
  dart.addTypeTests(wtf8.WTF8);
  dart.setLibraryUri(wtf8.WTF8, "package:socket_io_common/src/engine/parser/wtf8.dart");
  const _name$ = dart.privateName(parser$, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  parser$.PacketType = class PacketType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (parser$.PacketType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = parser$.PacketType.prototype;
  dart.addTypeTests(parser$.PacketType);
  dart.setLibraryUri(parser$.PacketType, "package:socket_io_common/src/engine/parser/parser.dart");
  dart.setFieldSignature(parser$.PacketType, () => ({
    __proto__: dart.getFields(parser$.PacketType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(parser$.PacketType, ['toString']);
  parser$.PacketType.OPEN = C0 || CT.C0;
  parser$.PacketType.CLOSE = C1 || CT.C1;
  parser$.PacketType.PING = C2 || CT.C2;
  parser$.PacketType.PONG = C3 || CT.C3;
  parser$.PacketType.MESSAGE = C4 || CT.C4;
  parser$.PacketType.UPGRADE = C5 || CT.C5;
  parser$.PacketType.NOOP = C6 || CT.C6;
  parser$.PacketType.values = C7 || CT.C7;
  let C8;
  let C9;
  parser$.PacketParser = class PacketParser extends core.Object {
    static encodePacket(packet, opts) {
      let supportsBinary = opts && 'supportsBinary' in opts ? opts.supportsBinary : null;
      let utf8encode = opts && 'utf8encode' in opts ? opts.utf8encode : false;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let fromClient = opts && 'fromClient' in opts ? opts.fromClient : false;
      if (core.Function.is(supportsBinary)) {
        callback = dynamicTodynamic()._check(supportsBinary);
        supportsBinary = null;
      }
      if (core.Function.is(utf8encode)) {
        callback = dynamicTodynamic()._check(utf8encode);
        utf8encode = null;
      }
      if (packet[$_get]("data") != null) {
        if (typed_data.Uint8List.is(packet[$_get]("data"))) {
          return core.String._check(parser$.PacketParser.encodeBuffer(packet, supportsBinary, callback, {fromClient: fromClient}));
        } else if (core.Map.is(packet[$_get]("data")) && dart.dsend(packet[$_get]("data"), '_get', ["buffer"]) != null && typed_data.ByteBuffer.is(dart.dsend(packet[$_get]("data"), '_get', ["buffer"]))) {
          packet[$_set]("data", typed_data.ByteBuffer.as(dart.dsend(packet[$_get]("data"), '_get', ["buffer"]))[$asUint8List]());
          return core.String._check(parser$.PacketParser.encodeBuffer(packet, supportsBinary, callback, {fromClient: fromClient}));
        } else if (typed_data.ByteBuffer.is(packet[$_get]("data"))) {
          packet[$_set]("data", typed_data.ByteBuffer.as(packet[$_get]("data"))[$asUint8List]());
          return core.String._check(parser$.PacketParser.encodeBuffer(packet, supportsBinary, callback, {fromClient: fromClient}));
        }
      }
      let encoded = dart.str(parser$.PacketTypeMap[$_get](packet[$_get]("type")));
      if (packet[$_get]("data") != null) {
        encoded = encoded + dart.notNull(dart.equals(utf8encode, true) ? wtf8.WTF8.encode(dart.str(packet[$_get]("data"))) : dart.str(packet[$_get]("data")));
      }
      return core.String._check(callback(encoded));
    }
    static encodeBuffer(packet, supportsBinary, callback, opts) {
      let t2, t1;
      let fromClient = opts && 'fromClient' in opts ? opts.fromClient : false;
      if (!dart.dtest(supportsBinary)) {
        return parser$.PacketParser.encodeBase64Packet(packet, callback);
      }
      let data = dart.dsend(packet, '_get', ["data"]);
      let newData = _native_typed_data.NativeUint8List.new(core.int._check(dart.dsend(dart.dload(data, 'length'), '+', [1])));
      t1 = newData;
      t1[$setAll](0, (t2 = JSArrayOfint().of([parser$.PacketTypeMap[$_get](dart.dsend(packet, '_get', ["type"]))]), t2[$length] = 1, t2));
      t1[$setAll](1, IterableOfint()._check(data));
      t1;
      if (dart.dtest(fromClient)) {
        return dart.dcall(callback, [newData[$buffer]]);
      } else {
        return dart.dcall(callback, [newData]);
      }
    }
    static encodeBase64Packet(packet, callback) {
      let message = "b" + dart.str(parser$.PacketTypeMap[$_get](dart.dsend(packet, '_get', ["type"])));
      message = message + dart.notNull(convert.base64.encode(dart.toString(dart.dload(packet, 'data'))[$codeUnits]));
      return dart.dcall(callback, [message]);
    }
    static decodePacket(data, opts) {
      let binaryType = opts && 'binaryType' in opts ? opts.binaryType : null;
      let utf8decode = opts && 'utf8decode' in opts ? opts.utf8decode : null;
      let type = null;
      if (typeof data == 'string') {
        type = data[$_get](0);
        if (dart.equals(type, "b")) {
          return parser$.PacketParser.decodeBase64Packet(data[$substring](1), core.String._check(binaryType));
        }
        if (dart.equals(utf8decode, true)) {
          try {
            data = convert.utf8.decode(ListOfint()._check(dart.dload(data, 'codeUnits')));
          } catch (e$) {
            let e = dart.getThrown(e$);
            return parser$.PacketParser.ERROR;
          }
        }
        if (dart.str(core.num.parse(core.String._check(type))) !== type || parser$.PacketTypeList[$_get](dart.asInt(type = core.num.parse(core.String._check(type)))) == null) {
          return parser$.PacketParser.ERROR;
        }
        if (data.length > 1) {
          return new (IdentityMapOfString$String()).from(["type", parser$.PacketTypeList[$_get](core.int._check(type)), "data", data[$substring](1)]);
        } else {
          return new (IdentityMapOfString$String()).from(["type", parser$.PacketTypeList[$_get](core.int._check(type))]);
        }
      }
      if (dart.equals(binaryType, "arraybuffer")) {
        let intArray = typed_data.ByteBuffer.as(data)[$asUint8List]();
        type = intArray[$_get](0);
        return new (IdentityMapOfString$Object()).from(["type", parser$.PacketTypeList[$_get](core.int._check(type)), "data", intArray[$sublist](0)]);
      }
      type = dart.dsend(data, '_get', [0]);
      return new (IdentityMapOfString$dynamic()).from(["type", parser$.PacketTypeList[$_get](core.int._check(type)), "data", dart.dsend(data, 'sublist', [1])]);
    }
    static decodeBase64Packet(msg, binaryType) {
      let type = parser$.PacketTypeList[$_get](msg[$codeUnitAt](0));
      let data = convert.base64.decode(convert.utf8.decode(msg[$substring](1)[$codeUnits]));
      if (binaryType === "arraybuffer") {
        let abv = _native_typed_data.NativeUint8List.new(data[$length]);
        for (let i = 0; i < dart.notNull(abv[$length]); i = i + 1) {
          abv[$_set](i, data[$_get](i));
        }
        return new (IdentityMapOfString$Object()).from(["type", type, "data", abv[$buffer]]);
      }
      return new (IdentityMapOfString$Object()).from(["type", type, "data", data]);
    }
    static hasBinary(packets) {
      return packets[$any](dart.fn(map => {
        let data = dart.dsend(map, '_get', ["data"]);
        return data != null && typed_data.ByteBuffer.is(data);
      }, dynamicTobool()));
    }
    static encodePayload(packets, opts) {
      let supportsBinary = opts && 'supportsBinary' in opts ? opts.supportsBinary : false;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (dart.test(supportsBinary) && dart.dtest(parser$.PacketParser.hasBinary(packets))) {
        return parser$.PacketParser.encodePayloadAsBinary(packets, callback);
      }
      if (dart.test(packets[$isEmpty])) {
        return callback("0:");
      }
      let encodeOne = dart.fn((packet, doneCallback) => {
        if (doneCallback === void 0) doneCallback = null;
        parser$.PacketParser.encodePacket(core.Map._check(packet), {supportsBinary: supportsBinary, utf8encode: false, callback: dart.fn(message => {
            doneCallback(null, parser$.PacketParser._setLengthHeader(message));
          }, dynamicToNull())});
      }, dynamicAndFnToNull());
      parser$.PacketParser.map(packets, encodeOne, dart.fn((err, results) => callback(dart.dsend(results, 'join', [""])), dynamicAnddynamicTodynamic()));
    }
    static _setLengthHeader(message) {
      return dart.str(dart.dload(message, 'length')) + ":" + dart.str(message);
    }
    static map(ary, each, done) {
      let result = [];
      async.Future.wait(dart.dynamic, ary[$map](async.Future, dart.fn(e => async.Future.microtask(dart.fn(() => each(e, dart.fn((err, msg) => {
        result[$add](msg);
      }, dynamicAnddynamicToNull())), VoidTodynamic())), dynamicToFuture()))).then(dart.dynamic, dart.fn(r => done(null, result), ListTodynamic()));
    }
    static decodePayload(data, opts) {
      let binaryType = opts && 'binaryType' in opts ? opts.binaryType : false;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(typeof data == 'string')) {
        return parser$.PacketParser.decodePayloadAsBinary(ListOfint()._check(data), {binaryType: binaryType, callback: callback});
      }
      if (dart.equals(data, "")) {
        return callback(dart.wrapType(core.Error), 0, 1);
      }
      let length = "";
      let n = null;
      let msg = null;
      let packet = null;
      for (let i = 0, l = dart.dload(data, 'length'); i < dart.notNull(core.num._check(l)); i = i + 1) {
        let chr = dart.dsend(data, '_get', [i]);
        if (!dart.equals(chr, ":")) {
          length = length + dart.notNull(core.String._check(chr));
          continue;
        }
        if (length[$isEmpty] || length !== dart.str(n = core.num.tryParse(length))) {
          return callback(parser$.PacketParser.ERROR, 0, 1);
        }
        msg = dart.dsend(data, 'substring', [i + 1, i + 1 + dart.notNull(core.num._check(n))]);
        if (length !== dart.str(dart.dload(msg, 'length'))) {
          return callback(parser$.PacketParser.ERROR, 0, 1);
        }
        if (dart.dtest(dart.dload(msg, 'isNotEmpty'))) {
          packet = parser$.PacketParser.decodePacket(msg, {binaryType: binaryType, utf8decode: false});
          if (core.identical(parser$.PacketParser.ERROR[$_get]("type"), dart.dsend(packet, '_get', ["type"])) && core.identical(parser$.PacketParser.ERROR[$_get]("data"), dart.dsend(packet, '_get', ["data"]))) {
            return callback(parser$.PacketParser.ERROR, 0, 1);
          }
          let more = callback(packet, i + dart.notNull(core.num._check(n)), l);
          if (false[$_equals](more)) return null;
        }
        i = dart.asInt(i + dart.notNull(core.num._check(n)));
        length = "";
      }
      if (length[$isNotEmpty]) {
        return callback(parser$.PacketParser.ERROR, 0, 1);
      }
    }
    static decodePayloadAsBinary(data, opts) {
      let binaryType = opts && 'binaryType' in opts ? opts.binaryType : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      let bufferTail = data;
      let buffers = [];
      let i = null;
      while (dart.notNull(bufferTail[$length]) > 0) {
        let strLen = "";
        let isString = bufferTail[$_get](0) === 0;
        for (let t2 = i = 1;; i = dart.dsend(i, '+', [1])) {
          if (bufferTail[$_get](core.int._check(i)) === 255) break;
          if (strLen.length > 310) {
            return callback(parser$.PacketParser.ERROR, 0, 1);
          }
          strLen = strLen + dart.str(bufferTail[$_get](core.int._check(i)));
        }
        bufferTail = bufferTail[$skip](strLen.length + 1)[$toList]();
        let msgLength = core.int.parse(strLen);
        let msg = bufferTail[$getRange](1, dart.notNull(msgLength) + 1);
        if (isString[$_equals](true)) msg = core.String.fromCharCodes(IterableOfint()._check(msg));
        buffers[$add](msg);
        bufferTail = bufferTail[$skip](dart.notNull(msgLength) + 1)[$toList]();
      }
      let total = buffers[$length];
      for (let t3 = i = 0; dart.dtest(dart.dsend(i, '<', [total])); i = dart.dsend(i, '+', [1])) {
        let buffer = buffers[$_get](core.int._check(i));
        callback(parser$.PacketParser.decodePacket(buffer, {binaryType: binaryType, utf8decode: true}), i, total);
      }
    }
    static encodePayloadAsBinary(packets, callback) {
      if (callback === void 0) callback = null;
      if (dart.test(packets[$isEmpty])) {
        return callback(_native_typed_data.NativeUint8List.new(0));
      }
      parser$.PacketParser.map(packets, C8 || CT.C8, dart.fn((err, results) => {
        let list = [];
        dart.dsend(results, 'forEach', [dart.fn(e => list[$addAll](core.Iterable._check(e)), dynamicTovoid())]);
        return callback(list);
      }, dynamicAnddynamicTodynamic()));
    }
    static encodeOneBinaryPacket(p, doneCallback) {
      if (doneCallback === void 0) doneCallback = null;
      let onBinaryPacketEncode = dart.fn(packet => {
        let t4, t4$;
        let encodingLength = dart.str(dart.dload(packet, 'length'));
        let sizeBuffer = null;
        if (typeof packet == 'string') {
          sizeBuffer = _native_typed_data.NativeUint8List.new(encodingLength.length + 2);
          dart.dsend(sizeBuffer, '_set', [0, 0]);
          for (let i = 0; i < encodingLength.length; i = i + 1) {
            dart.dsend(sizeBuffer, '_set', [i + 1, core.int.parse(encodingLength[$_get](i))]);
          }
          dart.dsend(sizeBuffer, '_set', [dart.dsend(dart.dload(sizeBuffer, 'length'), '-', [1]), 255]);
          return doneCallback(null, (t4 = core.List.from(core.Iterable._check(sizeBuffer)), t4[$addAll](parser$.PacketParser.stringToBuffer(packet)), t4));
        }
        sizeBuffer = _native_typed_data.NativeUint8List.new(encodingLength.length + 2);
        dart.dsend(sizeBuffer, '_set', [0, 1]);
        for (let i = 0; i < encodingLength.length; i = i + 1) {
          dart.dsend(sizeBuffer, '_set', [i + 1, core.int.parse(encodingLength[$_get](i))]);
        }
        dart.dsend(sizeBuffer, '_set', [dart.dsend(dart.dload(sizeBuffer, 'length'), '-', [1]), 255]);
        doneCallback(null, (t4$ = core.List.from(core.Iterable._check(sizeBuffer)), t4$[$addAll](core.Iterable._check(packet)), t4$));
      }, dynamicTodynamic());
      parser$.PacketParser.encodePacket(core.Map._check(p), {supportsBinary: true, utf8encode: true, callback: onBinaryPacketEncode});
    }
    static stringToBuffer(string) {
      let buf = _native_typed_data.NativeUint8List.new(string.length);
      for (let i = 0, l = string.length; i < l; i = i + 1) {
        buf[$_set](i, string[$codeUnitAt](i));
      }
      return buf;
    }
  };
  (parser$.PacketParser.new = function() {
    ;
  }).prototype = parser$.PacketParser.prototype;
  dart.addTypeTests(parser$.PacketParser);
  dart.setLibraryUri(parser$.PacketParser, "package:socket_io_common/src/engine/parser/parser.dart");
  dart.defineLazy(parser$.PacketParser, {
    /*parser$.PacketParser.ERROR*/get ERROR() {
      return C9 || CT.C9;
    }
  });
  let C10;
  let C11;
  dart.defineLazy(parser$, {
    /*parser$.protocol*/get protocol() {
      return 3;
    },
    /*parser$.PacketTypeList*/get PacketTypeList() {
      return C10 || CT.C10;
    },
    /*parser$.PacketTypeMap*/get PacketTypeMap() {
      return C11 || CT.C11;
    }
  });
  dart.trackLibraries("packages/socket_io_common/socket_io_common", {
    "package:socket_io_common/socket_io_common.dart": socket_io_common,
    "package:socket_io_common/src/parser/parser.dart": parser,
    "package:socket_io_common/src/util/event_emitter.dart": event_emitter,
    "package:socket_io_common/src/parser/binary.dart": binary,
    "package:socket_io_common/src/engine/parser/wtf8.dart": wtf8,
    "package:socket_io_common/src/engine/parser/parser.dart": parser$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/parser/parser.dart","src/util/event_emitter.dart","src/parser/binary.dart","src/engine/parser/wtf8.dart","src/engine/parser/parser.dart"],"names":[],"mappings":"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","file":"socket_io_common.ddc.js"}');
  // Exports:
  return {
    socket_io_common: socket_io_common,
    src__parser__parser: parser,
    src__util__event_emitter: event_emitter,
    src__parser__binary: binary,
    src__engine__parser__wtf8: wtf8,
    src__engine__parser__parser: parser$
  };
});

//# sourceMappingURL=socket_io_common.ddc.js.map
