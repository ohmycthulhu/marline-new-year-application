define(['dart_sdk', 'packages/socket_io_common/socket_io_common', 'packages/logging/logging'], function(dart_sdk, packages__socket_io_common__socket_io_common, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const event_emitter = packages__socket_io_common__socket_io_common.src__util__event_emitter;
  const parser = packages__socket_io_common__socket_io_common.src__parser__parser;
  const parser$ = packages__socket_io_common__socket_io_common.src__engine__parser__parser;
  const logging = packages__logging__logging.logging;
  const socket$ = Object.create(dart.library);
  const on = Object.create(dart.library);
  const manager = Object.create(dart.library);
  const socket$0 = Object.create(dart.library);
  const transports = Object.create(dart.library);
  const xhr_transport = Object.create(dart.library);
  const polling_transport = Object.create(dart.library);
  const transport$ = Object.create(dart.library);
  const parseqs = Object.create(dart.library);
  const websocket_transport = Object.create(dart.library);
  const jsonp_transport = Object.create(dart.library);
  const socket_io_client = Object.create(dart.library);
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $contains = dartx.contains;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $first = dartx.first;
  const $sublist = dartx.sublist;
  const $remove = dartx.remove;
  const $keys = dartx.keys;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $containsKey = dartx.containsKey;
  const $removeAt = dartx.removeAt;
  const $floor = dartx.floor;
  const $toString = dartx.toString;
  const $replaceFirst = dartx.replaceFirst;
  const $removeRange = dartx.removeRange;
  const $_equals = dartx._equals;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $location = dartx.location;
  const $toRadixString = dartx.toRadixString;
  const $forEach = dartx.forEach;
  const $onReadyStateChange = dartx.onReadyStateChange;
  const $response = dartx.response;
  const $onOpen = dartx.onOpen;
  const $onClose = dartx.onClose;
  const $onMessage = dartx.onMessage;
  const $data = dartx.data;
  const $onError = dartx.onError;
  const $createElement = dartx.createElement;
  const $head = dartx.head;
  const $append = dartx.append;
  const $position = dartx.position;
  const $top = dartx.top;
  const $left = dartx.left;
  const $setAttribute = dartx.setAttribute;
  const $onLoad = dartx.onLoad;
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let IdentityMapOfString$Socket = () => (IdentityMapOfString$Socket = dart.constFn(_js_helper.IdentityMap$(core.String, socket$.Socket)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull$ = () => (dynamicToNull$ = dart.constFn(dart.fnType(core.Null, [], [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let JSArrayOfMapOfString$String = () => (JSArrayOfMapOfString$String = dart.constFn(_interceptors.JSArray$(MapOfString$String())))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let dynamicAnddynamicAnddynamicTobool = () => (dynamicAnddynamicAnddynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  let CloseEventTodynamic = () => (CloseEventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.CloseEvent])))();
  let MessageEventTodynamic = () => (MessageEventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.MessageEvent])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["connect", "connect_error", "connect_timeout", "connecting", "disconnect", "error", "reconnect", "reconnect_attempt", "reconnect_failed", "reconnect_error", "reconnecting", "ping", "pong"], dart.dynamic);
    }
  });
  const nsp$ = dart.privateName(socket$, "Socket.nsp");
  const opts$ = dart.privateName(socket$, "Socket.opts");
  const io$ = dart.privateName(socket$, "Socket.io");
  const json = dart.privateName(socket$, "Socket.json");
  const ids = dart.privateName(socket$, "Socket.ids");
  const acks = dart.privateName(socket$, "Socket.acks");
  const connected = dart.privateName(socket$, "Socket.connected");
  const disconnected = dart.privateName(socket$, "Socket.disconnected");
  const sendBuffer = dart.privateName(socket$, "Socket.sendBuffer");
  const receiveBuffer = dart.privateName(socket$, "Socket.receiveBuffer");
  const query = dart.privateName(socket$, "Socket.query");
  const subs = dart.privateName(socket$, "Socket.subs");
  const flags = dart.privateName(socket$, "Socket.flags");
  const id = dart.privateName(socket$, "Socket.id");
  socket$.Socket = class Socket extends event_emitter.EventEmitter {
    get nsp() {
      return this[nsp$];
    }
    set nsp(value) {
      this[nsp$] = value;
    }
    get opts() {
      return this[opts$];
    }
    set opts(value) {
      this[opts$] = value;
    }
    get io() {
      return this[io$];
    }
    set io(value) {
      this[io$] = value;
    }
    get json() {
      return this[json];
    }
    set json(value) {
      this[json] = value;
    }
    get ids() {
      return this[ids];
    }
    set ids(value) {
      this[ids] = value;
    }
    get acks() {
      return this[acks];
    }
    set acks(value) {
      this[acks] = value;
    }
    get connected() {
      return this[connected];
    }
    set connected(value) {
      this[connected] = value;
    }
    get disconnected() {
      return this[disconnected];
    }
    set disconnected(value) {
      this[disconnected] = value;
    }
    get sendBuffer() {
      return this[sendBuffer];
    }
    set sendBuffer(value) {
      this[sendBuffer] = value;
    }
    get receiveBuffer() {
      return this[receiveBuffer];
    }
    set receiveBuffer(value) {
      this[receiveBuffer] = value;
    }
    get query() {
      return this[query];
    }
    set query(value) {
      this[query] = value;
    }
    get subs() {
      return this[subs];
    }
    set subs(value) {
      this[subs] = value;
    }
    get flags() {
      return this[flags];
    }
    set flags(value) {
      this[flags] = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    subEvents() {
      let t0;
      if (dart.equals((t0 = this.subs, t0 == null ? null : t0[$isEmpty]), true)) return;
      let io = this.io;
      this.subs = [on.on(io, "open", dart.bind(this, 'onopen')), on.on(io, "packet", dart.bind(this, 'onpacket')), on.on(io, "close", dart.bind(this, 'onclose'))];
    }
    open() {
      return this.connect();
    }
    connect() {
      if (dart.equals(this.connected, true)) return this;
      this.subEvents();
      this.io.open();
      if ("open" === this.io.readyState) this.onopen();
      this.emit("connecting");
      return this;
    }
    send(args) {
      this.emit("message", args);
      return this;
    }
    emit(event, data) {
      if (data === void 0) data = null;
      this.emitWithAck(event, data);
    }
    emitWithBinary(event, data) {
      if (data === void 0) data = null;
      this.emitWithAck(event, data, {binary: true});
    }
    emitWithAck(event, data, opts$) {
      let t0, t0$;
      let ack = opts$ && 'ack' in opts$ ? opts$.ack : null;
      let binary = opts$ && 'binary' in opts$ ? opts$.binary : false;
      if (dart.test(socket$.EVENTS[$contains](event))) {
        super.emit(event, data);
      } else {
        let sendData = [event];
        if (core.Iterable.is(data)) {
          sendData[$addAll](data);
        } else if (data != null) {
          sendData[$add](data);
        }
        let packet = new (IdentityMapOfString$Object()).from(["type", dart.test(binary) ? 5 : 2, "data", sendData, "options", new (IdentityMapOfString$bool()).from(["compress", dart.equals((t0 = this.flags, t0 == null ? null : t0[$isNotEmpty]), true) && dart.dtest(this.flags[$_get]("compress"))])]);
        if (ack != null) {
          socket$._logger.fine("emitting packet with ack id " + dart.str(this.ids));
          this.acks[$_set](dart.str(this.ids), ack);
          packet[$_set]("id", dart.str((t0$ = this.ids, this.ids = dart.notNull(t0$) + 1, t0$)));
        }
        if (dart.equals(this.connected, true)) {
          this.packet(packet);
        } else {
          this.sendBuffer[$add](packet);
        }
        this.flags = null;
      }
    }
    packet(packet) {
      packet[$_set]("nsp", this.nsp);
      this.io.packet(packet);
    }
    onopen(_) {
      let t0;
      if (_ === void 0) _ = null;
      socket$._logger.fine("transport is open - connecting");
      if ("/" !== this.nsp) {
        if (dart.equals((t0 = this.query, t0 == null ? null : t0[$isNotEmpty]), true)) {
          this.packet(new _js_helper.LinkedMap.from(["type", 0, "query", this.query]));
        } else {
          this.packet(new _js_helper.LinkedMap.from(["type", 0]));
        }
      }
    }
    onclose(reason) {
      socket$._logger.fine("close (" + dart.str(reason) + ")");
      this.emit("disconnecting", reason);
      this.connected = false;
      this.disconnected = true;
      this.id = null;
      this.emit("disconnect", reason);
    }
    onpacket(packet) {
      if (!dart.equals(dart.dsend(packet, '_get', ["nsp"]), this.nsp)) return;
      switch (dart.dsend(packet, '_get', ["type"])) {
        case 0:
        {
          this.onconnect();
          break;
        }
        case 2:
        {
          this.onevent(core.Map._check(packet));
          break;
        }
        case 5:
        {
          this.onevent(core.Map._check(packet));
          break;
        }
        case 3:
        {
          this.onack(core.Map._check(packet));
          break;
        }
        case 6:
        {
          this.onack(core.Map._check(packet));
          break;
        }
        case 1:
        {
          this.ondisconnect();
          break;
        }
        case 4:
        {
          this.emit("error", dart.dsend(packet, '_get', ["data"]));
          break;
        }
      }
    }
    onevent(packet) {
      let t0;
      let args = core.List._check((t0 = packet[$_get]("data"), t0 == null ? [] : t0));
      if (null != packet[$_get]("id")) {
        args[$add](this.ack(packet[$_get]("id")));
      }
      if (dart.equals(this.connected, true)) {
        if (dart.notNull(args[$length]) > 2) {
          core.Function.apply(dart.bind(this, 'emit', super.emit), [args[$first], args[$sublist](1)]);
        } else {
          core.Function.apply(dart.bind(this, 'emit', super.emit), args);
        }
      } else {
        this.receiveBuffer[$add](args);
      }
    }
    ack(id) {
      let sent = false;
      return dart.fn(_ => {
        if (sent) return;
        sent = true;
        socket$._logger.fine("sending ack " + dart.str(_));
        this.packet(new _js_helper.LinkedMap.from(["type", 3, "id", id, "data", [_]]));
      }, dynamicToNull());
    }
    onack(packet) {
      let ack = this.acks[$remove](packet[$_get]("id"));
      if (core.Function.is(ack)) {
        socket$._logger.fine("calling ack " + dart.str(packet[$_get]("id")) + " with " + dart.str(packet[$_get]("data")));
        let args = core.List.as(packet[$_get]("data"));
        if (dart.notNull(args[$length]) > 1) {
          core.Function.apply(ack, [args]);
        } else {
          core.Function.apply(ack, args);
        }
      } else {
        socket$._logger.fine("bad ack " + dart.str(packet[$_get]("id")));
      }
    }
    onconnect() {
      this.connected = true;
      this.disconnected = false;
      this.emit("connect");
      this.emitBuffered();
    }
    emitBuffered() {
      let i = null;
      for (let t0 = i = 0; dart.dtest(dart.dsend(i, '<', [this.receiveBuffer[$length]])); i = dart.dsend(i, '+', [1])) {
        let args = core.List._check(this.receiveBuffer[$_get](core.int._check(i)));
        if (dart.notNull(args[$length]) > 2) {
          core.Function.apply(dart.bind(this, 'emit', super.emit), [args[$first], args[$sublist](1)]);
        } else {
          core.Function.apply(dart.bind(this, 'emit', super.emit), args);
        }
      }
      this.receiveBuffer = [];
      for (let t1 = i = 0; dart.dtest(dart.dsend(i, '<', [this.sendBuffer[$length]])); i = dart.dsend(i, '+', [1])) {
        this.packet(core.Map._check(this.sendBuffer[$_get](core.int._check(i))));
      }
      this.sendBuffer = [];
    }
    ondisconnect() {
      socket$._logger.fine("server disconnect (" + dart.str(this.nsp) + ")");
      this.destroy();
      this.onclose("io server disconnect");
    }
    destroy() {
      let t2;
      if (dart.equals((t2 = this.subs, t2 == null ? null : t2[$isNotEmpty]), true)) {
        for (let i = 0; i < dart.notNull(this.subs[$length]); i = i + 1) {
          dart.dsend(this.subs[$_get](i), 'destroy', []);
        }
        this.subs = null;
      }
      this.io.destroy(this);
    }
    close() {
      return this.disconnect();
    }
    disconnect() {
      if (dart.equals(this.connected, true)) {
        socket$._logger.fine("performing disconnect (" + dart.str(this.nsp) + ")");
        this.packet(new _js_helper.LinkedMap.from(["type", 1]));
      }
      this.destroy();
      if (dart.equals(this.connected, true)) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    compress(compress) {
      let t2;
      this.flags = (t2 = this.flags, t2 == null ? this.flags = new _js_helper.LinkedMap.new() : t2);
      this.flags[$_set]("compress", compress);
      return this;
    }
  };
  (socket$.Socket.new = function(io, nsp, opts) {
    this[json] = null;
    this[ids] = null;
    this[acks] = null;
    this[connected] = null;
    this[disconnected] = null;
    this[sendBuffer] = null;
    this[receiveBuffer] = null;
    this[query] = null;
    this[subs] = null;
    this[flags] = null;
    this[id] = null;
    this[io$] = io;
    this[nsp$] = nsp;
    this[opts$] = opts;
    socket$.Socket.__proto__.new.call(this);
    this.json = this;
    this.ids = 0;
    this.acks = new _js_helper.LinkedMap.new();
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.connected = false;
    this.disconnected = true;
    if (this.opts != null) {
      this.query = core.String._check(this.opts[$_get]("query"));
    }
    if (dart.test(this.io.autoConnect)) this.open();
  }).prototype = socket$.Socket.prototype;
  dart.addTypeTests(socket$.Socket);
  dart.setMethodSignature(socket$.Socket, () => ({
    __proto__: dart.getMethods(socket$.Socket.__proto__),
    subEvents: dart.fnType(dart.dynamic, []),
    open: dart.fnType(dart.dynamic, []),
    connect: dart.fnType(dart.dynamic, []),
    send: dart.fnType(dart.dynamic, [core.List]),
    emitWithBinary: dart.fnType(dart.void, [core.String], [dart.dynamic]),
    emitWithAck: dart.fnType(dart.void, [core.String, dart.dynamic], {ack: core.Function, binary: core.bool}, {}),
    packet: dart.fnType(dart.dynamic, [core.Map]),
    onopen: dart.fnType(dart.dynamic, [], [dart.dynamic]),
    onclose: dart.fnType(dart.dynamic, [dart.dynamic]),
    onpacket: dart.fnType(dart.dynamic, [dart.dynamic]),
    onevent: dart.fnType(dart.dynamic, [core.Map]),
    ack: dart.fnType(core.Function, [dart.dynamic]),
    onack: dart.fnType(dart.dynamic, [core.Map]),
    onconnect: dart.fnType(dart.dynamic, []),
    emitBuffered: dart.fnType(dart.dynamic, []),
    ondisconnect: dart.fnType(dart.dynamic, []),
    destroy: dart.fnType(dart.dynamic, []),
    close: dart.fnType(dart.dynamic, []),
    disconnect: dart.fnType(dart.dynamic, []),
    compress: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setLibraryUri(socket$.Socket, "package:socket_io_client/src/socket.dart");
  dart.setFieldSignature(socket$.Socket, () => ({
    __proto__: dart.getFields(socket$.Socket.__proto__),
    nsp: dart.fieldType(core.String),
    opts: dart.fieldType(core.Map),
    io: dart.fieldType(manager.Manager),
    json: dart.fieldType(socket$.Socket),
    ids: dart.fieldType(core.num),
    acks: dart.fieldType(core.Map),
    connected: dart.fieldType(core.bool),
    disconnected: dart.fieldType(core.bool),
    sendBuffer: dart.fieldType(core.List),
    receiveBuffer: dart.fieldType(core.List),
    query: dart.fieldType(core.String),
    subs: dart.fieldType(core.List),
    flags: dart.fieldType(core.Map),
    id: dart.fieldType(core.String)
  }));
  let C0;
  dart.defineLazy(socket$, {
    /*socket$.EVENTS*/get EVENTS() {
      return C0 || CT.C0;
    },
    /*socket$._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:Socket");
    }
  });
  const callback$ = dart.privateName(on, "Destroyable.callback");
  on.Destroyable = class Destroyable extends core.Object {
    get callback() {
      return this[callback$];
    }
    set callback(value) {
      this[callback$] = value;
    }
    destroy() {
      return dart.dsend(this, 'callback', []);
    }
  };
  (on.Destroyable.new = function(callback) {
    this[callback$] = callback;
    ;
  }).prototype = on.Destroyable.prototype;
  dart.addTypeTests(on.Destroyable);
  dart.setMethodSignature(on.Destroyable, () => ({
    __proto__: dart.getMethods(on.Destroyable.__proto__),
    destroy: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(on.Destroyable, "package:socket_io_client/src/on.dart");
  dart.setFieldSignature(on.Destroyable, () => ({
    __proto__: dart.getFields(on.Destroyable.__proto__),
    callback: dart.fieldType(core.Function)
  }));
  on.on = function on$(obj, ev, fn) {
    obj.on(ev, fn);
    return new on.Destroyable.new(dart.fn(() => obj.off(ev, fn), VoidTovoid()));
  };
  const _reconnection = dart.privateName(manager, "_reconnection");
  const _reconnectionAttempts = dart.privateName(manager, "_reconnectionAttempts");
  const _reconnectionDelay = dart.privateName(manager, "_reconnectionDelay");
  const _randomizationFactor = dart.privateName(manager, "_randomizationFactor");
  const _reconnectionDelayMax = dart.privateName(manager, "_reconnectionDelayMax");
  const _timeout = dart.privateName(manager, "_timeout");
  const nsps = dart.privateName(manager, "Manager.nsps");
  const subs$ = dart.privateName(manager, "Manager.subs");
  const options$ = dart.privateName(manager, "Manager.options");
  const backoff = dart.privateName(manager, "Manager.backoff");
  const readyState = dart.privateName(manager, "Manager.readyState");
  const uri$ = dart.privateName(manager, "Manager.uri");
  const connecting = dart.privateName(manager, "Manager.connecting");
  const lastPing = dart.privateName(manager, "Manager.lastPing");
  const encoding = dart.privateName(manager, "Manager.encoding");
  const packetBuffer = dart.privateName(manager, "Manager.packetBuffer");
  const reconnecting = dart.privateName(manager, "Manager.reconnecting");
  const engine = dart.privateName(manager, "Manager.engine");
  const encoder = dart.privateName(manager, "Manager.encoder");
  const decoder = dart.privateName(manager, "Manager.decoder");
  const autoConnect = dart.privateName(manager, "Manager.autoConnect");
  const skipReconnect = dart.privateName(manager, "Manager.skipReconnect");
  manager.Manager = class Manager extends event_emitter.EventEmitter {
    get nsps() {
      return this[nsps];
    }
    set nsps(value) {
      this[nsps] = value;
    }
    get subs() {
      return this[subs$];
    }
    set subs(value) {
      this[subs$] = value;
    }
    get options() {
      return this[options$];
    }
    set options(value) {
      this[options$] = value;
    }
    get backoff() {
      return this[backoff];
    }
    set backoff(value) {
      this[backoff] = value;
    }
    get readyState() {
      return this[readyState];
    }
    set readyState(value) {
      this[readyState] = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      this[uri$] = value;
    }
    get connecting() {
      return this[connecting];
    }
    set connecting(value) {
      this[connecting] = value;
    }
    get lastPing() {
      return this[lastPing];
    }
    set lastPing(value) {
      this[lastPing] = value;
    }
    get encoding() {
      return this[encoding];
    }
    set encoding(value) {
      this[encoding] = value;
    }
    get packetBuffer() {
      return this[packetBuffer];
    }
    set packetBuffer(value) {
      this[packetBuffer] = value;
    }
    get reconnecting() {
      return this[reconnecting];
    }
    set reconnecting(value) {
      this[reconnecting] = value;
    }
    get engine() {
      return this[engine];
    }
    set engine(value) {
      this[engine] = value;
    }
    get encoder() {
      return this[encoder];
    }
    set encoder(value) {
      this[encoder] = value;
    }
    get decoder() {
      return this[decoder];
    }
    set decoder(value) {
      this[decoder] = value;
    }
    get autoConnect() {
      return this[autoConnect];
    }
    set autoConnect(value) {
      this[autoConnect] = value;
    }
    get skipReconnect() {
      return this[skipReconnect];
    }
    set skipReconnect(value) {
      this[skipReconnect] = value;
    }
    emitAll(event, data) {
      if (data === void 0) data = null;
      this.emit(event, data);
      for (let nsp of this.nsps[$keys]) {
        this.nsps[$_get](nsp).emit(event, data);
      }
    }
    updateSocketIds() {
      for (let nsp of this.nsps[$keys]) {
        this.nsps[$_get](nsp).id = this.generateId(nsp);
      }
    }
    generateId(nsp) {
      if (nsp[$startsWith]("/")) nsp = nsp[$substring](1);
      return (nsp[$isEmpty] ? "" : dart.notNull(nsp) + "#") + dart.notNull(this.engine.id);
    }
    get reconnection() {
      return this[_reconnection];
    }
    set reconnection(v) {
      return this[_reconnection] = v;
    }
    get reconnectionAttempts() {
      return this[_reconnectionAttempts];
    }
    set reconnectionAttempts(v) {
      return this[_reconnectionAttempts] = v;
    }
    get reconnectionDelay() {
      return this[_reconnectionDelay];
    }
    set reconnectionDelay(v) {
      return this[_reconnectionDelay] = v;
    }
    get randomizationFactor() {
      return this[_randomizationFactor];
    }
    set randomizationFactor(v) {
      this[_randomizationFactor] = v;
      if (this.backoff != null) this.backoff.jitter = v;
    }
    get reconnectionDelayMax() {
      return this[_reconnectionDelayMax];
    }
    set reconnectionDelayMax(v) {
      this[_reconnectionDelayMax] = v;
      if (this.backoff != null) this.backoff.max = v;
    }
    get timeout() {
      return this[_timeout];
    }
    set timeout(v) {
      return this[_timeout] = v;
    }
    maybeReconnectOnOpen() {
      if (!dart.test(this.reconnecting) && dart.test(this[_reconnection]) && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    open(opts$) {
      let callback = opts$ && 'callback' in opts$ ? opts$.callback : null;
      let opts = opts$ && 'opts' in opts$ ? opts$.opts : null;
      return this.connect({callback: callback, opts: opts});
    }
    connect(opts$) {
      let callback = opts$ && 'callback' in opts$ ? opts$.callback : null;
      let opts = opts$ && 'opts' in opts$ ? opts$.opts : null;
      manager._logger.fine("readyState " + dart.str(this.readyState));
      if (this.readyState[$contains]("open")) return this;
      manager._logger.fine("opening " + dart.str(this.uri));
      this.engine = new socket$0.Socket.new(this.uri, this.options);
      let socket = this.engine;
      this.readyState = "opening";
      this.skipReconnect = false;
      let openSub = on.on(socket, "open", dart.fn(_ => {
        this.onopen();
        if (callback != null) dart.dcall(callback, []);
      }, dynamicToNull()));
      let errorSub = on.on(socket, "error", dart.fn(data => {
        manager._logger.fine("connect_error");
        this.cleanup();
        this.readyState = "closed";
        this.emitAll("connect_error", data);
        if (callback != null) {
          dart.dcall(callback, [new (IdentityMapOfString$dynamic()).from(["error", "Connection error", "data", data])]);
        } else {
          this.maybeReconnectOnOpen();
        }
      }, dynamicToNull()));
      if (this[_timeout] != null) {
        let timeout = this[_timeout];
        manager._logger.fine("connect attempt will timeout after " + dart.str(timeout));
        let timer = async.Timer.new(new core.Duration.new({milliseconds: dart.asInt(timeout)}), dart.fn(() => {
          manager._logger.fine("connect attempt timed out after " + dart.str(timeout));
          dart.dsend(openSub, 'destroy', []);
          socket.close();
          socket.emit("error", "timeout");
          this.emitAll("connect_timeout", timeout);
        }, VoidToNull()));
        this.subs[$add](new on.Destroyable.new(dart.fn(() => {
          let t2;
          t2 = timer;
          return t2 == null ? null : t2.cancel();
        }, VoidTovoid())));
      }
      this.subs[$add](openSub);
      this.subs[$add](errorSub);
      return this;
    }
    onopen(_) {
      if (_ === void 0) _ = null;
      manager._logger.fine("open");
      this.cleanup();
      this.readyState = "open";
      this.emit("open");
      let socket = this.engine;
      this.subs[$add](on.on(socket, "data", dart.bind(this, 'ondata')));
      this.subs[$add](on.on(socket, "ping", dart.bind(this, 'onping')));
      this.subs[$add](on.on(socket, "pong", dart.bind(this, 'onpong')));
      this.subs[$add](on.on(socket, "error", dart.bind(this, 'onerror')));
      this.subs[$add](on.on(socket, "close", dart.bind(this, 'onclose')));
      this.subs[$add](on.on(this.decoder, "decoded", dart.bind(this, 'ondecoded')));
    }
    onping(_) {
      if (_ === void 0) _ = null;
      this.lastPing = new core.DateTime.now().millisecondsSinceEpoch;
      this.emitAll("ping");
    }
    onpong(_) {
      if (_ === void 0) _ = null;
      this.emitAll("pong", dart.notNull(new core.DateTime.now().millisecondsSinceEpoch) - dart.notNull(this.lastPing));
    }
    ondata(data) {
      this.decoder.add(data);
    }
    ondecoded(packet) {
      this.emit("packet", packet);
    }
    onerror(err) {
      manager._logger.fine("error " + dart.str(err));
      this.emitAll("error", err);
    }
    socket(nsp, opts) {
      let socket = this.nsps[$_get](nsp);
      let onConnecting = dart.fn(_ => {
        if (_ === void 0) _ = null;
        if (!dart.test(this.connecting[$contains](socket))) {
          this.connecting[$add](socket);
        }
      }, dynamicToNull$());
      if (socket == null) {
        socket = new socket$.Socket.new(this, nsp, opts);
        this.nsps[$_set](nsp, socket);
        socket.on("connecting", onConnecting);
        socket.on("connect", dart.fn(_ => {
          socket.id = this.generateId(nsp);
        }, dynamicToNull()));
        if (dart.test(this.autoConnect)) {
          onConnecting();
        }
      }
      return socket;
    }
    destroy(socket) {
      this.connecting[$remove](socket);
      if (dart.test(this.connecting[$isNotEmpty])) return;
      this.close();
    }
    packet(packet) {
      let t3, t2;
      manager._logger.fine("writing packet " + dart.str(packet));
      if (dart.test(packet[$containsKey]("query")) && dart.equals(packet[$_get]("type"), 0)) {
        t2 = packet;
        t3 = "nsp";
        t2[$_set](t3, dart.dsend(t2[$_get](t3), '+', ["?" + dart.str(packet[$_get]("query"))]));
      }
      if (!dart.equals(this.encoding, true)) {
        this.encoding = true;
        this.encoder.encode(packet, dart.fn(encodedPackets => {
          for (let i = 0; i < dart.notNull(core.num._check(dart.dload(encodedPackets, 'length'))); i = i + 1) {
            this.engine.write(dart.dsend(encodedPackets, '_get', [i]), packet[$_get]("options"));
          }
          this.encoding = false;
          this.processPacketQueue();
        }, dynamicToNull()));
      } else {
        this.packetBuffer[$add](packet);
      }
    }
    processPacketQueue() {
      if (dart.test(this.packetBuffer[$isNotEmpty]) && !dart.equals(this.encoding, true)) {
        let pack = this.packetBuffer[$removeAt](0);
        this.packet(core.Map._check(pack));
      }
    }
    cleanup() {
      manager._logger.fine("cleanup");
      let subsLength = this.subs[$length];
      for (let i = 0; i < dart.notNull(subsLength); i = i + 1) {
        let sub = this.subs[$removeAt](0);
        dart.dsend(sub, 'destroy', []);
      }
      this.packetBuffer = [];
      this.encoding = false;
      this.lastPing = null;
      this.decoder.destroy();
    }
    close() {
      return this.disconnect();
    }
    disconnect() {
      let t2;
      manager._logger.fine("disconnect");
      this.skipReconnect = true;
      this.reconnecting = false;
      if ("opening" === this.readyState) {
        this.cleanup();
      }
      this.backoff.reset();
      this.readyState = "closed";
      t2 = this.engine;
      t2 == null ? null : t2.close();
    }
    onclose(error) {
      manager._logger.fine("onclose");
      this.cleanup();
      this.backoff.reset();
      this.readyState = "closed";
      this.emit("close", dart.dsend(error, '_get', ["reason"]));
      if (dart.test(this[_reconnection]) && !dart.test(this.skipReconnect)) {
        this.reconnect();
      }
    }
    reconnect() {
      if (dart.test(this.reconnecting) || dart.test(this.skipReconnect)) return this;
      if (dart.notNull(this.backoff.attempts) >= dart.notNull(this[_reconnectionAttempts])) {
        manager._logger.fine("reconnect failed");
        this.backoff.reset();
        this.emitAll("reconnect_failed");
        this.reconnecting = false;
      } else {
        let delay = this.backoff.duration;
        manager._logger.fine("will wait %dms before reconnect attempt", delay);
        this.reconnecting = true;
        let timer = async.Timer.new(new core.Duration.new({milliseconds: dart.asInt(delay)}), dart.fn(() => {
          if (dart.test(this.skipReconnect)) return;
          manager._logger.fine("attempting reconnect");
          this.emitAll("reconnect_attempt", this.backoff.attempts);
          this.emitAll("reconnecting", this.backoff.attempts);
          if (dart.test(this.skipReconnect)) return;
          this.open({callback: dart.fn(err => {
              if (err === void 0) err = null;
              if (err != null) {
                manager._logger.fine("reconnect attempt error");
                this.reconnecting = false;
                this.reconnect();
                this.emitAll("reconnect_error", dart.dsend(err, '_get', ["data"]));
              } else {
                manager._logger.fine("reconnect success");
                this.onreconnect();
              }
            }, dynamicToNull$())});
        }, VoidToNull()));
        this.subs[$add](new on.Destroyable.new(dart.fn(() => timer.cancel(), VoidTovoid())));
      }
    }
    onreconnect() {
      let attempt = this.backoff.attempts;
      this.reconnecting = false;
      this.backoff.reset();
      this.updateSocketIds();
      this.emitAll("reconnect", attempt);
    }
  };
  (manager.Manager.new = function(opts$) {
    let t2, t3, t2$, t2$0, t2$1, t2$2, t2$3, t2$4;
    let uri = opts$ && 'uri' in opts$ ? opts$.uri : null;
    let options = opts$ && 'options' in opts$ ? opts$.options : null;
    this[nsps] = null;
    this[subs$] = null;
    this[options$] = null;
    this[_reconnection] = null;
    this[_reconnectionAttempts] = null;
    this[_reconnectionDelay] = null;
    this[_randomizationFactor] = null;
    this[_reconnectionDelayMax] = null;
    this[_timeout] = null;
    this[backoff] = null;
    this[readyState] = null;
    this[uri$] = null;
    this[connecting] = null;
    this[lastPing] = null;
    this[encoding] = null;
    this[packetBuffer] = null;
    this[reconnecting] = false;
    this[engine] = null;
    this[encoder] = null;
    this[decoder] = null;
    this[autoConnect] = null;
    this[skipReconnect] = null;
    manager.Manager.__proto__.new.call(this);
    options = (t2 = options, t2 == null ? new _js_helper.LinkedMap.new() : t2);
    t2$ = options;
    t3 = "path";
    t2$[$_get](t3) == null ? t2$[$_set](t3, "/socket.io") : null;
    this.nsps = new (IdentityMapOfString$Socket()).new();
    this.subs = [];
    this.options = options;
    this.reconnection = !dart.equals(options[$_get]("reconnection"), false);
    this.reconnectionAttempts = core.num._check((t2$0 = options[$_get]("reconnectionAttempts"), t2$0 == null ? 1 / 0 : t2$0));
    this.reconnectionDelay = core.num._check((t2$1 = options[$_get]("reconnectionDelay"), t2$1 == null ? 1000 : t2$1));
    this.reconnectionDelayMax = core.num._check((t2$2 = options[$_get]("reconnectionDelayMax"), t2$2 == null ? 5000 : t2$2));
    this.randomizationFactor = core.num._check((t2$3 = options[$_get]("randomizationFactor"), t2$3 == null ? 0.5 : t2$3));
    this.backoff = new manager._Backoff.new({min: this.reconnectionDelay, max: this.reconnectionDelayMax, jitter: this.randomizationFactor});
    this.timeout = core.num._check((t2$4 = options[$_get]("timeout"), t2$4 == null ? 20000 : t2$4));
    this.readyState = "closed";
    this.uri = core.String._check(uri);
    this.connecting = [];
    this.lastPing = null;
    this.encoding = false;
    this.packetBuffer = [];
    this.encoder = new parser.Encoder.new();
    this.decoder = new parser.Decoder.new();
    this.autoConnect = !dart.equals(options[$_get]("autoConnect"), false);
    if (dart.test(this.autoConnect)) this.open();
  }).prototype = manager.Manager.prototype;
  dart.addTypeTests(manager.Manager);
  dart.setMethodSignature(manager.Manager, () => ({
    __proto__: dart.getMethods(manager.Manager.__proto__),
    emitAll: dart.fnType(dart.void, [core.String], [dart.dynamic]),
    updateSocketIds: dart.fnType(dart.void, []),
    generateId: dart.fnType(core.String, [core.String]),
    maybeReconnectOnOpen: dart.fnType(dart.dynamic, []),
    open: dart.fnType(dart.dynamic, [], {callback: dart.dynamic, opts: core.Map}, {}),
    connect: dart.fnType(dart.dynamic, [], {callback: dart.dynamic, opts: core.Map}, {}),
    onopen: dart.fnType(dart.dynamic, [], [dart.dynamic]),
    onping: dart.fnType(dart.dynamic, [], [dart.dynamic]),
    onpong: dart.fnType(dart.dynamic, [], [dart.dynamic]),
    ondata: dart.fnType(dart.dynamic, [dart.dynamic]),
    ondecoded: dart.fnType(dart.dynamic, [dart.dynamic]),
    onerror: dart.fnType(dart.dynamic, [dart.dynamic]),
    socket: dart.fnType(socket$.Socket, [core.String, core.Map]),
    destroy: dart.fnType(dart.dynamic, [dart.dynamic]),
    packet: dart.fnType(dart.dynamic, [core.Map]),
    processPacketQueue: dart.fnType(dart.dynamic, []),
    cleanup: dart.fnType(dart.dynamic, []),
    close: dart.fnType(dart.dynamic, []),
    disconnect: dart.fnType(dart.dynamic, []),
    onclose: dart.fnType(dart.dynamic, [dart.dynamic]),
    reconnect: dart.fnType(dart.dynamic, []),
    onreconnect: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(manager.Manager, () => ({
    __proto__: dart.getGetters(manager.Manager.__proto__),
    reconnection: core.bool,
    reconnectionAttempts: core.num,
    reconnectionDelay: core.num,
    randomizationFactor: core.num,
    reconnectionDelayMax: core.num,
    timeout: core.num
  }));
  dart.setSetterSignature(manager.Manager, () => ({
    __proto__: dart.getSetters(manager.Manager.__proto__),
    reconnection: core.bool,
    reconnectionAttempts: core.num,
    reconnectionDelay: core.num,
    randomizationFactor: core.num,
    reconnectionDelayMax: core.num,
    timeout: core.num
  }));
  dart.setLibraryUri(manager.Manager, "package:socket_io_client/src/manager.dart");
  dart.setFieldSignature(manager.Manager, () => ({
    __proto__: dart.getFields(manager.Manager.__proto__),
    nsps: dart.fieldType(core.Map$(core.String, socket$.Socket)),
    subs: dart.fieldType(core.List),
    options: dart.fieldType(core.Map),
    [_reconnection]: dart.fieldType(core.bool),
    [_reconnectionAttempts]: dart.fieldType(core.num),
    [_reconnectionDelay]: dart.fieldType(core.num),
    [_randomizationFactor]: dart.fieldType(core.num),
    [_reconnectionDelayMax]: dart.fieldType(core.num),
    [_timeout]: dart.fieldType(core.num),
    backoff: dart.fieldType(manager._Backoff),
    readyState: dart.fieldType(core.String),
    uri: dart.fieldType(core.String),
    connecting: dart.fieldType(core.List),
    lastPing: dart.fieldType(core.num),
    encoding: dart.fieldType(core.bool),
    packetBuffer: dart.fieldType(core.List),
    reconnecting: dart.fieldType(core.bool),
    engine: dart.fieldType(socket$0.Socket),
    encoder: dart.fieldType(parser.Encoder),
    decoder: dart.fieldType(parser.Decoder),
    autoConnect: dart.fieldType(core.bool),
    skipReconnect: dart.fieldType(core.bool)
  }));
  const _jitter = dart.privateName(manager, "_jitter");
  const _ms = dart.privateName(manager, "_ms");
  const _max = dart.privateName(manager, "_max");
  const _factor = dart.privateName(manager, "_factor");
  manager._Backoff = class _Backoff extends core.Object {
    get duration() {
      let t2;
      let ms = dart.notNull(this[_ms]) * math.pow(this[_factor], (t2 = this.attempts, this.attempts = dart.notNull(t2) + 1, t2));
      if (dart.notNull(this[_jitter]) > 0) {
        let rand = math.Random.new().nextDouble();
        let deviation = (dart.notNull(rand) * dart.notNull(this[_jitter]) * ms)[$floor]();
        ms = ((dart.notNull(rand) * 10)[$floor]() & 1) === 0 ? ms - deviation : ms + deviation;
      }
      return math.max(core.num, math.min(core.num, ms, this[_max]), 0);
    }
    reset() {
      this.attempts = 0;
    }
    set min(min) {
      return this[_ms] = core.num._check(min);
    }
    set max(max) {
      return this[_max] = core.num._check(max);
    }
    set jitter(jitter) {
      return this[_jitter] = core.num._check(jitter);
    }
  };
  (manager._Backoff.new = function(opts$) {
    let min = opts$ && 'min' in opts$ ? opts$.min : 100;
    let max = opts$ && 'max' in opts$ ? opts$.max : 10000;
    let jitter = opts$ && 'jitter' in opts$ ? opts$.jitter : 0;
    let factor = opts$ && 'factor' in opts$ ? opts$.factor : 2;
    this[_jitter] = null;
    this.attempts = null;
    this[_ms] = core.num._check(min);
    this[_max] = core.num._check(max);
    this[_factor] = core.num._check(factor);
    this[_jitter] = core.num._check(dart.dtest(dart.dsend(jitter, '>', [0])) && dart.dtest(dart.dsend(jitter, '<=', [1])) ? jitter : 0);
    this.attempts = 0;
  }).prototype = manager._Backoff.prototype;
  dart.addTypeTests(manager._Backoff);
  dart.setMethodSignature(manager._Backoff, () => ({
    __proto__: dart.getMethods(manager._Backoff.__proto__),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(manager._Backoff, () => ({
    __proto__: dart.getGetters(manager._Backoff.__proto__),
    duration: core.num
  }));
  dart.setSetterSignature(manager._Backoff, () => ({
    __proto__: dart.getSetters(manager._Backoff.__proto__),
    min: dart.dynamic,
    max: dart.dynamic,
    jitter: dart.dynamic
  }));
  dart.setLibraryUri(manager._Backoff, "package:socket_io_client/src/manager.dart");
  dart.setFieldSignature(manager._Backoff, () => ({
    __proto__: dart.getFields(manager._Backoff.__proto__),
    [_ms]: dart.fieldType(core.num),
    [_max]: dart.fieldType(core.num),
    [_factor]: dart.fieldType(core.num),
    [_jitter]: dart.fieldType(core.num),
    attempts: dart.fieldType(core.num)
  }));
  dart.defineLazy(manager, {
    /*manager._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:Manager");
    }
  });
  const opts$0 = dart.privateName(socket$0, "Socket.opts");
  const uri$0 = dart.privateName(socket$0, "Socket.uri");
  const secure = dart.privateName(socket$0, "Socket.secure");
  const agent = dart.privateName(socket$0, "Socket.agent");
  const hostname = dart.privateName(socket$0, "Socket.hostname");
  const port = dart.privateName(socket$0, "Socket.port");
  const query$ = dart.privateName(socket$0, "Socket.query");
  const upgrade = dart.privateName(socket$0, "Socket.upgrade");
  const path = dart.privateName(socket$0, "Socket.path");
  const forceJSONP = dart.privateName(socket$0, "Socket.forceJSONP");
  const jsonp = dart.privateName(socket$0, "Socket.jsonp");
  const forceBase64 = dart.privateName(socket$0, "Socket.forceBase64");
  const enablesXDR = dart.privateName(socket$0, "Socket.enablesXDR");
  const timestampParam = dart.privateName(socket$0, "Socket.timestampParam");
  const timestampRequests = dart.privateName(socket$0, "Socket.timestampRequests");
  const transports$ = dart.privateName(socket$0, "Socket.transports");
  const transportOptions = dart.privateName(socket$0, "Socket.transportOptions");
  const readyState$ = dart.privateName(socket$0, "Socket.readyState");
  const writeBuffer = dart.privateName(socket$0, "Socket.writeBuffer");
  const prevBufferLen = dart.privateName(socket$0, "Socket.prevBufferLen");
  const policyPort = dart.privateName(socket$0, "Socket.policyPort");
  const rememberUpgrade = dart.privateName(socket$0, "Socket.rememberUpgrade");
  const binaryType = dart.privateName(socket$0, "Socket.binaryType");
  const onlyBinaryUpgrades = dart.privateName(socket$0, "Socket.onlyBinaryUpgrades");
  const perMessageDeflate = dart.privateName(socket$0, "Socket.perMessageDeflate");
  const id$ = dart.privateName(socket$0, "Socket.id");
  const upgrades = dart.privateName(socket$0, "Socket.upgrades");
  const pingInterval = dart.privateName(socket$0, "Socket.pingInterval");
  const pingTimeout = dart.privateName(socket$0, "Socket.pingTimeout");
  const pingIntervalTimer = dart.privateName(socket$0, "Socket.pingIntervalTimer");
  const pingTimeoutTimer = dart.privateName(socket$0, "Socket.pingTimeoutTimer");
  const requestTimeout = dart.privateName(socket$0, "Socket.requestTimeout");
  const transport = dart.privateName(socket$0, "Socket.transport");
  const supportsBinary = dart.privateName(socket$0, "Socket.supportsBinary");
  const upgrading = dart.privateName(socket$0, "Socket.upgrading");
  const extraHeaders = dart.privateName(socket$0, "Socket.extraHeaders");
  socket$0.Socket = class Socket extends event_emitter.EventEmitter {
    get opts() {
      return this[opts$0];
    }
    set opts(value) {
      this[opts$0] = value;
    }
    get uri() {
      return this[uri$0];
    }
    set uri(value) {
      this[uri$0] = value;
    }
    get secure() {
      return this[secure];
    }
    set secure(value) {
      this[secure] = value;
    }
    get agent() {
      return this[agent];
    }
    set agent(value) {
      this[agent] = value;
    }
    get hostname() {
      return this[hostname];
    }
    set hostname(value) {
      this[hostname] = value;
    }
    get port() {
      return this[port];
    }
    set port(value) {
      this[port] = value;
    }
    get query() {
      return this[query$];
    }
    set query(value) {
      this[query$] = value;
    }
    get upgrade() {
      return this[upgrade];
    }
    set upgrade(value) {
      this[upgrade] = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      this[path] = value;
    }
    get forceJSONP() {
      return this[forceJSONP];
    }
    set forceJSONP(value) {
      this[forceJSONP] = value;
    }
    get jsonp() {
      return this[jsonp];
    }
    set jsonp(value) {
      this[jsonp] = value;
    }
    get forceBase64() {
      return this[forceBase64];
    }
    set forceBase64(value) {
      this[forceBase64] = value;
    }
    get enablesXDR() {
      return this[enablesXDR];
    }
    set enablesXDR(value) {
      this[enablesXDR] = value;
    }
    get timestampParam() {
      return this[timestampParam];
    }
    set timestampParam(value) {
      this[timestampParam] = value;
    }
    get timestampRequests() {
      return this[timestampRequests];
    }
    set timestampRequests(value) {
      this[timestampRequests] = value;
    }
    get transports() {
      return this[transports$];
    }
    set transports(value) {
      this[transports$] = value;
    }
    get transportOptions() {
      return this[transportOptions];
    }
    set transportOptions(value) {
      this[transportOptions] = value;
    }
    get readyState() {
      return this[readyState$];
    }
    set readyState(value) {
      this[readyState$] = value;
    }
    get writeBuffer() {
      return this[writeBuffer];
    }
    set writeBuffer(value) {
      this[writeBuffer] = value;
    }
    get prevBufferLen() {
      return this[prevBufferLen];
    }
    set prevBufferLen(value) {
      this[prevBufferLen] = value;
    }
    get policyPort() {
      return this[policyPort];
    }
    set policyPort(value) {
      this[policyPort] = value;
    }
    get rememberUpgrade() {
      return this[rememberUpgrade];
    }
    set rememberUpgrade(value) {
      this[rememberUpgrade] = value;
    }
    get binaryType() {
      return this[binaryType];
    }
    set binaryType(value) {
      this[binaryType] = value;
    }
    get onlyBinaryUpgrades() {
      return this[onlyBinaryUpgrades];
    }
    set onlyBinaryUpgrades(value) {
      this[onlyBinaryUpgrades] = value;
    }
    get perMessageDeflate() {
      return this[perMessageDeflate];
    }
    set perMessageDeflate(value) {
      this[perMessageDeflate] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get upgrades() {
      return this[upgrades];
    }
    set upgrades(value) {
      this[upgrades] = value;
    }
    get pingInterval() {
      return this[pingInterval];
    }
    set pingInterval(value) {
      this[pingInterval] = value;
    }
    get pingTimeout() {
      return this[pingTimeout];
    }
    set pingTimeout(value) {
      this[pingTimeout] = value;
    }
    get pingIntervalTimer() {
      return this[pingIntervalTimer];
    }
    set pingIntervalTimer(value) {
      this[pingIntervalTimer] = value;
    }
    get pingTimeoutTimer() {
      return this[pingTimeoutTimer];
    }
    set pingTimeoutTimer(value) {
      this[pingTimeoutTimer] = value;
    }
    get requestTimeout() {
      return this[requestTimeout];
    }
    set requestTimeout(value) {
      this[requestTimeout] = value;
    }
    get transport() {
      return this[transport];
    }
    set transport(value) {
      this[transport] = value;
    }
    get supportsBinary() {
      return this[supportsBinary];
    }
    set supportsBinary(value) {
      this[supportsBinary] = value;
    }
    get upgrading() {
      return this[upgrading];
    }
    set upgrading(value) {
      this[upgrading] = value;
    }
    get extraHeaders() {
      return this[extraHeaders];
    }
    set extraHeaders(value) {
      this[extraHeaders] = value;
    }
    createTransport(name, options) {
      let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7, t2$8, t2$9, t2$10, t2$11, t2$12, t2$13;
      if (options === void 0) options = null;
      {
        socket$0._logger.fine("creating transport \"" + dart.str(name) + "\"");
        let query = collection.LinkedHashMap.from(this.query);
        query[$_set]("EIO", parser$.protocol);
        query[$_set]("transport", name);
        let options = (t2 = this.transportOptions[$_get](name), t2 == null ? new _js_helper.LinkedMap.new() : t2);
        if (this.id != null) query[$_set]("sid", this.id);
        let transport = transports.Transports.newInstance(core.String._check(name), new (IdentityMapOfString$dynamic()).from(["query", query, "socket", this, "agent", (t2$ = dart.dsend(options, '_get', ["agent"]), t2$ == null ? this.agent : t2$), "hostname", (t2$0 = dart.dsend(options, '_get', ["hostname"]), t2$0 == null ? this.hostname : t2$0), "port", (t2$1 = dart.dsend(options, '_get', ["port"]), t2$1 == null ? this.port : t2$1), "secure", (t2$2 = dart.dsend(options, '_get', ["secure"]), t2$2 == null ? this.secure : t2$2), "path", (t2$3 = dart.dsend(options, '_get', ["path"]), t2$3 == null ? this.path : t2$3), "forceJSONP", (t2$4 = dart.dsend(options, '_get', ["forceJSONP"]), t2$4 == null ? this.forceJSONP : t2$4), "jsonp", (t2$5 = dart.dsend(options, '_get', ["jsonp"]), t2$5 == null ? this.jsonp : t2$5), "forceBase64", (t2$6 = dart.dsend(options, '_get', ["forceBase64"]), t2$6 == null ? this.forceBase64 : t2$6), "enablesXDR", (t2$7 = dart.dsend(options, '_get', ["enablesXDR"]), t2$7 == null ? this.enablesXDR : t2$7), "timestampRequests", (t2$8 = dart.dsend(options, '_get', ["timestampRequests"]), t2$8 == null ? this.timestampRequests : t2$8), "timestampParam", (t2$9 = dart.dsend(options, '_get', ["timestampParam"]), t2$9 == null ? this.timestampParam : t2$9), "policyPort", (t2$10 = dart.dsend(options, '_get', ["policyPort"]), t2$10 == null ? this.policyPort : t2$10), "perMessageDeflate", (t2$11 = dart.dsend(options, '_get', ["perMessageDeflate"]), t2$11 == null ? this.perMessageDeflate : t2$11), "extraHeaders", (t2$12 = dart.dsend(options, '_get', ["extraHeaders"]), t2$12 == null ? this.extraHeaders : t2$12), "requestTimeout", (t2$13 = dart.dsend(options, '_get', ["requestTimeout"]), t2$13 == null ? this.requestTimeout : t2$13), "protocols", dart.dsend(options, '_get', ["protocols"])]));
        return transport;
      }
    }
    open() {
      let transport = null;
      if (this.rememberUpgrade != null && dart.test(socket$0.Socket.priorWebsocketSuccess) && dart.test(this.transports[$contains]("websocket"))) {
        transport = "websocket";
      } else if (dart.test(this.transports[$isEmpty])) {
        async.Timer.run(dart.fn(() => this.emit("error", "No transports available"), VoidTovoid()));
        return;
      } else {
        transport = this.transports[$_get](0);
      }
      this.readyState = "opening";
      try {
        transport = this.createTransport(transport);
      } catch (e$) {
        let e = dart.getThrown(e$);
        this.transports[$removeAt](0);
        this.open();
        return;
      }
      dart.dsend(transport, 'open', []);
      this.setTransport(transport);
    }
    setTransport(transport) {
      let t3, t3$, t3$0;
      socket$0._logger.fine("setting transport " + dart.str((t3 = transport, t3 == null ? null : dart.dload(t3, 'name'))));
      if (this.transport != null) {
        socket$0._logger.fine("clearing existing transport " + dart.str((t3$ = this.transport, t3$ == null ? null : t3$.name)));
        this.transport.clearListeners();
      }
      this.transport = transport$.Transport._check(transport);
      t3$0 = transport;
      dart.dsend(t3$0, 'on', ["drain", dart.fn(_ => this.onDrain(), dynamicTodynamic())]);
      dart.dsend(t3$0, 'on', ["packet", dart.fn(packet => this.onPacket(core.Map._check(packet)), dynamicTodynamic())]);
      dart.dsend(t3$0, 'on', ["error", dart.fn(e => this.onError(e), dynamicTodynamic())]);
      dart.dsend(t3$0, 'on', ["close", dart.fn(_ => this.onClose("transport close"), dynamicTodynamic())]);
      t3$0;
    }
    probe(name) {
      socket$0._logger.fine("probing transport \"" + dart.str(name) + "\"");
      let transport = this.createTransport(name, new (IdentityMapOfString$bool()).from(["probe", true]));
      let failed = false;
      let cleanup = null;
      socket$0.Socket.priorWebsocketSuccess = false;
      let onTransportOpen = dart.fn(_ => {
        if (dart.equals(this.onlyBinaryUpgrades, true)) {
          let upgradeLosesBinary = dart.equals(this.supportsBinary, false) && dart.dtest(dart.dload(transport, 'supportsBinary'));
          failed = failed || upgradeLosesBinary;
        }
        if (failed) return;
        socket$0._logger.fine("probe transport \"" + dart.str(name) + "\" opened");
        dart.dsend(transport, 'send', [JSArrayOfMapOfString$String().of([new (IdentityMapOfString$String()).from(["type", "ping", "data", "probe"])])]);
        dart.dsend(transport, 'once', ["packet", dart.fn(msg => {
            let t3;
            if (failed) return;
            if ("pong" === dart.dsend(msg, '_get', ["type"]) && "probe" === dart.dsend(msg, '_get', ["data"])) {
              socket$0._logger.fine("probe transport \"" + dart.str(name) + "\" pong");
              this.upgrading = true;
              this.emit("upgrading", transport);
              if (transport == null) return;
              socket$0.Socket.priorWebsocketSuccess = "websocket" === dart.dload(transport, 'name');
              socket$0._logger.fine("pausing current transport \"" + dart.str((t3 = transport, t3 == null ? null : dart.dload(t3, 'name'))) + "\"");
              if (polling_transport.PollingTransport.is(this.transport)) {
                polling_transport.PollingTransport.as(this.transport).pause(dart.fn(() => {
                  if (failed) return;
                  if ("closed" === this.readyState) return;
                  socket$0._logger.fine("changing transport and sending upgrade packet");
                  dart.dcall(cleanup, []);
                  this.setTransport(transport);
                  dart.dsend(transport, 'send', [JSArrayOfMapOfString$String().of([new (IdentityMapOfString$String()).from(["type", "upgrade"])])]);
                  this.emit("upgrade", transport);
                  transport = null;
                  this.upgrading = false;
                  this.flush();
                }, VoidToNull()));
              }
            } else {
              socket$0._logger.fine("probe transport \"" + dart.str(name) + "\" failed");
              this.emit("upgradeError", new (IdentityMapOfString$dynamic()).from(["error", "probe error", "transport", dart.dload(transport, 'name')]));
            }
          }, dynamicToNull())]);
      }, dynamicToNull());
      let freezeTransport = dart.fn(() => {
        if (failed) return;
        failed = true;
        dart.dcall(cleanup, []);
        dart.dsend(transport, 'close', []);
        transport = null;
      }, VoidToNull());
      let onerror = dart.fn(err => {
        let oldTransport = transport;
        freezeTransport();
        socket$0._logger.fine("probe transport \"" + dart.str(name) + "\" failed because of error: " + dart.str(err));
        this.emit("upgradeError", new (IdentityMapOfString$dynamic()).from(["error", "probe error: " + dart.str(err), "transport", dart.dload(oldTransport, 'name')]));
      }, dynamicToNull());
      let onTransportClose = dart.fn(_ => onerror("transport closed"), dynamicToNull());
      let onclose = dart.fn(_ => onerror("socket closed"), dynamicToNull());
      let onupgrade = dart.fn(to => {
        let t3, t3$;
        if (transport != null && !dart.equals(dart.dload(to, 'name'), dart.dload(transport, 'name'))) {
          socket$0._logger.fine("\"" + dart.str((t3 = to, t3 == null ? null : dart.dload(t3, 'name'))) + "\" works - aborting \"" + dart.str((t3$ = transport, t3$ == null ? null : dart.dload(t3$, 'name'))) + "\"");
          freezeTransport();
        }
      }, dynamicToNull());
      cleanup = dart.fn(() => {
        dart.dsend(transport, 'off', ["open", onTransportOpen]);
        dart.dsend(transport, 'off', ["error", onerror]);
        dart.dsend(transport, 'off', ["close", onTransportClose]);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      }, VoidToNull());
      dart.dsend(transport, 'once', ["open", onTransportOpen]);
      dart.dsend(transport, 'once', ["error", onerror]);
      dart.dsend(transport, 'once', ["close", onTransportClose]);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      dart.dsend(transport, 'open', []);
    }
    onOpen() {
      socket$0._logger.fine("socket open");
      this.readyState = "open";
      socket$0.Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emit("open");
      this.flush();
      if ("open" === this.readyState && dart.equals(this.upgrade, true) && polling_transport.PollingTransport.is(this.transport)) {
        socket$0._logger.fine("starting upgrade probes");
        for (let i = 0, l = this.upgrades[$length]; i < dart.notNull(l); i = i + 1) {
          this.probe(this.upgrades[$_get](i));
        }
      }
    }
    onPacket(packet) {
      let t3;
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        let type = packet[$_get]("type");
        let data = packet[$_get]("data");
        socket$0._logger.fine("socket receive: type \"" + dart.str(type) + "\", data \"" + dart.str(data) + "\"");
        this.emit("packet", packet);
        this.emit("heartbeat");
        switch (type) {
          case "open":
          {
            this.onHandshake(core.Map._check(convert.json.decode(core.String._check((t3 = data, t3 == null ? "null" : t3)))));
            break;
          }
          case "pong":
          {
            this.setPing();
            this.emit("pong");
            break;
          }
          case "error":
          {
            this.onError(new (IdentityMapOfString$dynamic()).from(["error", "server error", "code", data]));
            break;
          }
          case "message":
          {
            this.emit("data", data);
            this.emit("message", data);
            break;
          }
        }
      } else {
        socket$0._logger.fine("packet received with socket readyState \"" + dart.str(this.readyState) + "\"");
      }
    }
    onHandshake(data) {
      this.emit("handshake", data);
      this.id = core.String._check(data[$_get]("sid"));
      this.transport.query[$_set]("sid", data[$_get]("sid"));
      this.upgrades = core.List._check(this.filterUpgrades(core.List._check(data[$_get]("upgrades"))));
      this.pingInterval = core.int._check(data[$_get]("pingInterval"));
      this.pingTimeout = core.int._check(data[$_get]("pingTimeout"));
      this.onOpen();
      if ("closed" === this.readyState) return;
      this.setPing();
      this.off("heartbeat", dart.bind(this, 'onHeartbeat'));
      this.on("heartbeat", dart.bind(this, 'onHeartbeat'));
    }
    onHeartbeat(timeout) {
      let t3, t3$;
      t3 = this.pingTimeoutTimer;
      t3 == null ? null : t3.cancel();
      this.pingTimeoutTimer = async.Timer.new(new core.Duration.new({milliseconds: core.int._check((t3$ = timeout, t3$ == null ? dart.notNull(this.pingInterval) + dart.notNull(this.pingTimeout) : t3$))}), dart.fn(() => {
        if ("closed" === this.readyState) return;
        this.onClose("ping timeout");
      }, VoidToNull()));
    }
    setPing() {
      let t3;
      t3 = this.pingIntervalTimer;
      t3 == null ? null : t3.cancel();
      this.pingIntervalTimer = async.Timer.new(new core.Duration.new({milliseconds: this.pingInterval}), dart.fn(() => {
        socket$0._logger.fine("writing ping packet - expecting pong within " + dart.str(this.pingTimeout) + "ms");
        this.ping();
        this.onHeartbeat(this.pingTimeout);
      }, VoidToNull()));
    }
    ping() {
      this.sendPacket({type: "ping", callback: dart.fn(_ => this.emit("ping"), dynamicTovoid())});
    }
    onDrain() {
      this.writeBuffer[$removeRange](0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (dart.test(this.writeBuffer[$isEmpty])) {
        this.emit("drain");
      } else {
        this.flush();
      }
    }
    flush() {
      if ("closed" !== this.readyState && dart.equals(this.transport.writable, true) && !dart.equals(this.upgrading, true) && dart.test(this.writeBuffer[$isNotEmpty])) {
        socket$0._logger.fine("flushing " + dart.str(this.writeBuffer[$length]) + " packets in socket");
        this.transport.send(this.writeBuffer);
        this.prevBufferLen = this.writeBuffer[$length];
        this.emit("flush");
      }
    }
    write(msg, options, fn) {
      if (fn === void 0) fn = null;
      return this.send(msg, options, fn);
    }
    send(msg, options, fn) {
      if (fn === void 0) fn = null;
      this.sendPacket({type: "message", data: msg, options: options, callback: fn});
    }
    sendPacket(opts$) {
      let t3;
      let type = opts$ && 'type' in opts$ ? opts$.type : null;
      let data = opts$ && 'data' in opts$ ? opts$.data : null;
      let options = opts$ && 'options' in opts$ ? opts$.options : null;
      let callback = opts$ && 'callback' in opts$ ? opts$.callback : null;
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = (t3 = options, t3 == null ? new _js_helper.LinkedMap.new() : t3);
      dart.dsend(options, '_set', ["compress", !false[$_equals](dart.dsend(options, '_get', ["compress"]))]);
      let packet = new (IdentityMapOfString$dynamic()).from(["type", type, "data", data, "options", options]);
      this.emit("packetCreate", packet);
      this.writeBuffer[$add](packet);
      if (callback != null) this.once("flush", callback);
      this.flush();
    }
    close() {
      let close = dart.fn(() => {
        this.onClose("forced close");
        socket$0._logger.fine("socket closing - telling transport to close");
        this.transport.close();
      }, VoidToNull());
      let temp = null;
      let cleanupAndClose = dart.fn(_ => {
        this.off("upgrade", dynamicTodynamic()._check(temp));
        this.off("upgradeError", dynamicTodynamic()._check(temp));
        close();
      }, dynamicToNull());
      temp = cleanupAndClose;
      let waitForUpgrade = dart.fn(() => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      }, VoidToNull());
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (dart.test(this.writeBuffer[$isNotEmpty])) {
          this.once("drain", dart.fn(_ => {
            if (dart.equals(this.upgrading, true)) {
              waitForUpgrade();
            } else {
              close();
            }
          }, dynamicToNull()));
        } else if (dart.equals(this.upgrading, true)) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    onError(err) {
      socket$0._logger.fine("socket error " + dart.str(err));
      socket$0.Socket.priorWebsocketSuccess = false;
      this.emit("error", err);
      this.onClose("transport error", err);
    }
    onClose(reason, desc) {
      let t3, t3$;
      if (desc === void 0) desc = null;
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        socket$0._logger.fine("socket close with reason: \"" + dart.str(reason) + "\"");
        t3 = this.pingIntervalTimer;
        t3 == null ? null : t3.cancel();
        t3$ = this.pingTimeoutTimer;
        t3$ == null ? null : t3$.cancel();
        this.transport.off("close");
        this.transport.close();
        this.transport.clearListeners();
        this.readyState = "closed";
        this.id = null;
        this.emit("close", new (IdentityMapOfString$dynamic()).from(["reason", reason, "desc", desc]));
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    filterUpgrades(upgrades) {
      return this.transports[$where](dart.fn(_ => upgrades[$contains](_), StringTobool()))[$toList]();
    }
  };
  (socket$0.Socket.new = function(uri, opts) {
    let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4, t2$5, t2$6, t2$7;
    this[opts$0] = null;
    this[uri$0] = null;
    this[secure] = null;
    this[agent] = null;
    this[hostname] = null;
    this[port] = null;
    this[query$] = null;
    this[upgrade] = null;
    this[path] = null;
    this[forceJSONP] = null;
    this[jsonp] = null;
    this[forceBase64] = null;
    this[enablesXDR] = null;
    this[timestampParam] = null;
    this[timestampRequests] = null;
    this[transports$] = null;
    this[transportOptions] = null;
    this[readyState$] = null;
    this[writeBuffer] = null;
    this[prevBufferLen] = null;
    this[policyPort] = null;
    this[rememberUpgrade] = null;
    this[binaryType] = null;
    this[onlyBinaryUpgrades] = null;
    this[perMessageDeflate] = null;
    this[id$] = null;
    this[upgrades] = null;
    this[pingInterval] = null;
    this[pingTimeout] = null;
    this[pingIntervalTimer] = null;
    this[pingTimeoutTimer] = null;
    this[requestTimeout] = null;
    this[transport] = null;
    this[supportsBinary] = null;
    this[upgrading] = null;
    this[extraHeaders] = null;
    socket$0.Socket.__proto__.new.call(this);
    opts = (t2 = opts, t2 == null ? new _js_helper.LinkedMap.new() : t2);
    if (uri[$isNotEmpty]) {
      this.uri = core.Uri.parse(uri);
      opts[$_set]("hostname", this.uri.host);
      opts[$_set]("secure", this.uri.scheme === "https" || this.uri.scheme === "wss");
      opts[$_set]("port", this.uri.port);
      if (dart.test(this.uri.hasQuery)) opts[$_set]("query", this.uri.query);
    } else if (dart.test(opts[$containsKey]("host"))) {
      opts[$_set]("hostname", core.Uri.parse(core.String._check(opts[$_get]("host"))).host);
    }
    this.secure = core.bool._check(opts[$_get]("secure"));
    if (opts[$_get]("hostname") != null && !dart.test(opts[$containsKey]("port"))) {
      opts[$_set]("port", dart.test(this.secure) ? "443" : "80");
    }
    this.agent = core.bool._check((t2$ = opts[$_get]("agent"), t2$ == null ? false : t2$));
    this.hostname = core.String._check(opts[$_get]("hostname"));
    this.port = core.int._check(opts[$_get]("port"));
    let query = (t2$0 = opts[$_get]("query"), t2$0 == null ? new _js_helper.LinkedMap.new() : t2$0);
    if (typeof query == 'string') {
      this.query = core.Map._check(parseqs.decode(query));
    } else if (core.Map.is(query)) {
      this.query = query;
    }
    this.upgrade = !dart.equals(opts[$_get]("upgrade"), false);
    this.path = dart.toString((t2$1 = opts[$_get]("path"), t2$1 == null ? "/engine.io" : t2$1))[$replaceFirst](core.RegExp.new("\\/$"), "") + "/";
    this.forceJSONP = dart.equals(opts[$_get]("forceJSONP"), true);
    this.jsonp = !dart.equals(opts[$_get]("jsonp"), false);
    this.forceBase64 = dart.equals(opts[$_get]("forceBase64"), true);
    this.enablesXDR = dart.equals(opts[$_get]("enablesXDR"), true);
    this.timestampParam = core.String._check((t2$2 = opts[$_get]("timestampParam"), t2$2 == null ? "t" : t2$2));
    this.timestampRequests = opts[$_get]("timestampRequests");
    this.transports = ListOfString()._check((t2$3 = opts[$_get]("transports"), t2$3 == null ? JSArrayOfString().of(["polling", "websocket"]) : t2$3));
    this.transportOptions = core.Map._check((t2$4 = opts[$_get]("transportOptions"), t2$4 == null ? new _js_helper.LinkedMap.new() : t2$4));
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.policyPort = core.int._check((t2$5 = opts[$_get]("policyPort"), t2$5 == null ? 843 : t2$5));
    this.rememberUpgrade = core.bool._check((t2$6 = opts[$_get]("rememberUpgrade"), t2$6 == null ? false : t2$6));
    this.binaryType = null;
    this.onlyBinaryUpgrades = core.bool._check(opts[$_get]("onlyBinaryUpgrades"));
    if (!dart.test(opts[$containsKey]("perMessageDeflate")) || dart.equals(opts[$_get]("perMessageDeflate"), true)) {
      this.perMessageDeflate = core.Map._check(core.Map.is(opts[$_get]("perMessageDeflate")) ? opts[$_get]("perMessageDeflate") : new _js_helper.LinkedMap.new());
      if (!dart.test(this.perMessageDeflate[$containsKey]("threshold"))) {
        this.perMessageDeflate[$_set]("threshold", 1024);
      }
    }
    this.extraHeaders = core.Map._check((t2$7 = opts[$_get]("extraHeaders"), t2$7 == null ? new (IdentityMapOfString$dynamic()).new() : t2$7));
    this.open();
  }).prototype = socket$0.Socket.prototype;
  dart.addTypeTests(socket$0.Socket);
  dart.setMethodSignature(socket$0.Socket, () => ({
    __proto__: dart.getMethods(socket$0.Socket.__proto__),
    createTransport: dart.fnType(dart.dynamic, [dart.dynamic], [dart.dynamic]),
    open: dart.fnType(dart.dynamic, []),
    setTransport: dart.fnType(dart.dynamic, [dart.dynamic]),
    probe: dart.fnType(dart.dynamic, [dart.dynamic]),
    onOpen: dart.fnType(dart.dynamic, []),
    onPacket: dart.fnType(dart.dynamic, [core.Map]),
    onHandshake: dart.fnType(dart.dynamic, [core.Map]),
    onHeartbeat: dart.fnType(dart.dynamic, [dart.dynamic]),
    setPing: dart.fnType(dart.dynamic, []),
    ping: dart.fnType(dart.dynamic, []),
    onDrain: dart.fnType(dart.dynamic, []),
    flush: dart.fnType(dart.dynamic, []),
    write: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.fnType(dart.dynamic, [dart.dynamic])]),
    send: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.fnType(dart.dynamic, [dart.dynamic])]),
    sendPacket: dart.fnType(dart.dynamic, [], {callback: dart.fnType(dart.dynamic, [dart.dynamic]), data: dart.dynamic, options: dart.dynamic, type: dart.dynamic}, {}),
    close: dart.fnType(dart.dynamic, []),
    onError: dart.fnType(dart.dynamic, [dart.dynamic]),
    onClose: dart.fnType(dart.dynamic, [dart.dynamic], [dart.dynamic]),
    filterUpgrades: dart.fnType(dart.dynamic, [core.List])
  }));
  dart.setLibraryUri(socket$0.Socket, "package:socket_io_client/src/engine/socket.dart");
  dart.setFieldSignature(socket$0.Socket, () => ({
    __proto__: dart.getFields(socket$0.Socket.__proto__),
    opts: dart.fieldType(core.Map),
    uri: dart.fieldType(core.Uri),
    secure: dart.fieldType(core.bool),
    agent: dart.fieldType(core.bool),
    hostname: dart.fieldType(core.String),
    port: dart.fieldType(core.int),
    query: dart.fieldType(core.Map),
    upgrade: dart.fieldType(core.bool),
    path: dart.fieldType(core.String),
    forceJSONP: dart.fieldType(core.bool),
    jsonp: dart.fieldType(core.bool),
    forceBase64: dart.fieldType(core.bool),
    enablesXDR: dart.fieldType(core.bool),
    timestampParam: dart.fieldType(core.String),
    timestampRequests: dart.fieldType(dart.dynamic),
    transports: dart.fieldType(core.List$(core.String)),
    transportOptions: dart.fieldType(core.Map),
    readyState: dart.fieldType(core.String),
    writeBuffer: dart.fieldType(core.List),
    prevBufferLen: dart.fieldType(core.int),
    policyPort: dart.fieldType(core.int),
    rememberUpgrade: dart.fieldType(core.bool),
    binaryType: dart.fieldType(dart.dynamic),
    onlyBinaryUpgrades: dart.fieldType(core.bool),
    perMessageDeflate: dart.fieldType(core.Map),
    id: dart.fieldType(core.String),
    upgrades: dart.fieldType(core.List),
    pingInterval: dart.fieldType(core.int),
    pingTimeout: dart.fieldType(core.int),
    pingIntervalTimer: dart.fieldType(async.Timer),
    pingTimeoutTimer: dart.fieldType(async.Timer),
    requestTimeout: dart.fieldType(core.int),
    transport: dart.fieldType(transport$.Transport),
    supportsBinary: dart.fieldType(core.bool),
    upgrading: dart.fieldType(core.bool),
    extraHeaders: dart.fieldType(core.Map)
  }));
  dart.defineLazy(socket$0.Socket, {
    /*socket$0.Socket.priorWebsocketSuccess*/get priorWebsocketSuccess() {
      return false;
    },
    set priorWebsocketSuccess(_) {},
    /*socket$0.Socket.protocol*/get protocol() {
      return parser$.protocol;
    },
    set protocol(_) {}
  });
  dart.defineLazy(socket$0, {
    /*socket$0._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:engine.Socket");
    }
  });
  transports.Transports = class Transports extends core.Object {
    static upgradesTo(from) {
      if ("polling" === from) {
        return JSArrayOfString().of(["websocket"]);
      }
      return JSArrayOfString().of([]);
    }
    static newInstance(name, options) {
      if ("websocket" === name) {
        return new websocket_transport.WebSocketTransport.new(core.Map._check(options));
      } else if ("polling" === name) {
        if (!dart.equals(dart.dsend(options, '_get', ["forceJSONP"]), true)) {
          return new xhr_transport.XHRTransport.new(core.Map._check(options));
        } else {
          if (!dart.equals(dart.dsend(options, '_get', ["jsonp"]), false)) return new jsonp_transport.JSONPTransport.new(core.Map._check(options));
          dart.throw(new core.StateError.new("JSONP disabled"));
        }
      } else {
        dart.throw(new core.UnsupportedError.new("Unknown transport " + dart.str(name)));
      }
    }
  };
  (transports.Transports.new = function() {
    ;
  }).prototype = transports.Transports.prototype;
  dart.addTypeTests(transports.Transports);
  dart.setLibraryUri(transports.Transports, "package:socket_io_client/src/engine/transport/transports.dart");
  const path$ = dart.privateName(transport$, "Transport.path");
  const hostname$ = dart.privateName(transport$, "Transport.hostname");
  const port$ = dart.privateName(transport$, "Transport.port");
  const secure$ = dart.privateName(transport$, "Transport.secure");
  const query$0 = dart.privateName(transport$, "Transport.query");
  const timestampParam$ = dart.privateName(transport$, "Transport.timestampParam");
  const timestampRequests$ = dart.privateName(transport$, "Transport.timestampRequests");
  const readyState$0 = dart.privateName(transport$, "Transport.readyState");
  const agent$ = dart.privateName(transport$, "Transport.agent");
  const socket = dart.privateName(transport$, "Transport.socket");
  const enablesXDR$ = dart.privateName(transport$, "Transport.enablesXDR");
  const writable = dart.privateName(transport$, "Transport.writable");
  const name = dart.privateName(transport$, "Transport.name");
  const supportsBinary$ = dart.privateName(transport$, "Transport.supportsBinary");
  transport$.Transport = class Transport extends event_emitter.EventEmitter {
    get path() {
      return this[path$];
    }
    set path(value) {
      this[path$] = value;
    }
    get hostname() {
      return this[hostname$];
    }
    set hostname(value) {
      this[hostname$] = value;
    }
    get port() {
      return this[port$];
    }
    set port(value) {
      this[port$] = value;
    }
    get secure() {
      return this[secure$];
    }
    set secure(value) {
      this[secure$] = value;
    }
    get query() {
      return this[query$0];
    }
    set query(value) {
      this[query$0] = value;
    }
    get timestampParam() {
      return this[timestampParam$];
    }
    set timestampParam(value) {
      this[timestampParam$] = value;
    }
    get timestampRequests() {
      return this[timestampRequests$];
    }
    set timestampRequests(value) {
      this[timestampRequests$] = value;
    }
    get readyState() {
      return this[readyState$0];
    }
    set readyState(value) {
      this[readyState$0] = value;
    }
    get agent() {
      return this[agent$];
    }
    set agent(value) {
      this[agent$] = value;
    }
    get socket() {
      return this[socket];
    }
    set socket(value) {
      this[socket] = value;
    }
    get enablesXDR() {
      return this[enablesXDR$];
    }
    set enablesXDR(value) {
      this[enablesXDR$] = value;
    }
    get writable() {
      return this[writable];
    }
    set writable(value) {
      this[writable] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$];
    }
    set supportsBinary(value) {
      this[supportsBinary$] = value;
    }
    onError(msg, desc) {
      if (desc === void 0) desc = null;
      if (dart.test(this.hasListeners("error"))) {
        this.emit("error", new (IdentityMapOfString$dynamic()).from(["msg", msg, "desc", desc, "type", "TransportError"]));
      } else {
        transport$.Transport._logger.fine("ignored transport error " + dart.str(msg) + " (" + dart.str(desc) + ")");
      }
    }
    open() {
      if ("closed" === this.readyState || "" === this.readyState) {
        this.readyState = "opening";
        this.doOpen();
      }
    }
    close() {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.doClose();
        this.onClose();
      }
    }
    send(packets) {
      if ("open" === this.readyState) {
        this.write(packets);
      } else {
        dart.throw(new core.StateError.new("Transport not open"));
      }
    }
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      this.emit("open");
    }
    onData(data) {
      let packet = parser$.PacketParser.decodePacket(data, {binaryType: this.socket.binaryType});
      this.onPacket(packet);
    }
    onPacket(packet) {
      this.emit("packet", packet);
    }
    onClose() {
      this.readyState = "closed";
      this.emit("close");
    }
  };
  (transport$.Transport.new = function(opts) {
    this[path$] = null;
    this[hostname$] = null;
    this[port$] = null;
    this[secure$] = null;
    this[query$0] = null;
    this[timestampParam$] = null;
    this[timestampRequests$] = null;
    this[readyState$0] = null;
    this[agent$] = null;
    this[socket] = null;
    this[enablesXDR$] = null;
    this[writable] = null;
    this[name] = null;
    this[supportsBinary$] = null;
    transport$.Transport.__proto__.new.call(this);
    this.path = core.String._check(opts[$_get]("path"));
    this.hostname = core.String._check(opts[$_get]("hostname"));
    this.port = core.int._check(opts[$_get]("port"));
    this.secure = core.bool._check(opts[$_get]("secure"));
    this.query = core.Map._check(opts[$_get]("query"));
    this.timestampParam = core.String._check(opts[$_get]("timestampParam"));
    this.timestampRequests = core.bool._check(opts[$_get]("timestampRequests"));
    this.readyState = "";
    this.agent = core.bool._check(opts[$_get]("agent || false"));
    this.socket = socket$0.Socket._check(opts[$_get]("socket"));
    this.enablesXDR = core.bool._check(opts[$_get]("enablesXDR"));
  }).prototype = transport$.Transport.prototype;
  dart.addTypeTests(transport$.Transport);
  dart.setMethodSignature(transport$.Transport, () => ({
    __proto__: dart.getMethods(transport$.Transport.__proto__),
    onError: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic]),
    open: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, []),
    send: dart.fnType(dart.dynamic, [core.List]),
    onOpen: dart.fnType(dart.dynamic, []),
    onData: dart.fnType(dart.dynamic, [dart.dynamic]),
    onPacket: dart.fnType(dart.dynamic, [dart.dynamic]),
    onClose: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(transport$.Transport, "package:socket_io_client/src/engine/transport/transport.dart");
  dart.setFieldSignature(transport$.Transport, () => ({
    __proto__: dart.getFields(transport$.Transport.__proto__),
    path: dart.fieldType(core.String),
    hostname: dart.fieldType(core.String),
    port: dart.fieldType(core.int),
    secure: dart.fieldType(core.bool),
    query: dart.fieldType(core.Map),
    timestampParam: dart.fieldType(core.String),
    timestampRequests: dart.fieldType(core.bool),
    readyState: dart.fieldType(core.String),
    agent: dart.fieldType(core.bool),
    socket: dart.fieldType(socket$0.Socket),
    enablesXDR: dart.fieldType(core.bool),
    writable: dart.fieldType(core.bool),
    name: dart.fieldType(core.String),
    supportsBinary: dart.fieldType(core.bool)
  }));
  dart.defineLazy(transport$.Transport, {
    /*transport$.Transport._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:transport.Transport");
    },
    set _logger(_) {}
  });
  const name$ = dart.privateName(polling_transport, "PollingTransport.name");
  const supportsBinary$0 = dart.privateName(polling_transport, "PollingTransport.supportsBinary");
  const polling = dart.privateName(polling_transport, "PollingTransport.polling");
  polling_transport.PollingTransport = class PollingTransport extends transport$.Transport {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$0];
    }
    set supportsBinary(value) {
      this[supportsBinary$0] = value;
    }
    get polling() {
      return this[polling];
    }
    set polling(value) {
      this[polling] = value;
    }
    doOpen() {
      this.poll();
    }
    pause(onPause) {
      let self = this;
      this.readyState = "pausing";
      let pause = dart.fn(() => {
        polling_transport._logger.fine("paused");
        self.readyState = "paused";
        dart.dcall(onPause, []);
      }, VoidToNull());
      if (dart.equals(this.polling, true) || !dart.equals(this.writable, true)) {
        let total = 0;
        if (dart.equals(this.polling, true)) {
          polling_transport._logger.fine("we are currently polling - waiting to pause");
          total = total + 1;
          this.once("pollComplete", dart.fn(_ => {
            polling_transport._logger.fine("pre-pause polling complete");
            if ((total = total - 1) === 0) pause();
          }, dynamicToNull()));
        }
        if (!dart.equals(this.writable, true)) {
          polling_transport._logger.fine("we are currently writing - waiting to pause");
          total = total + 1;
          this.once("drain", dart.fn(_ => {
            polling_transport._logger.fine("pre-pause writing complete");
            if ((total = total - 1) === 0) pause();
          }, dynamicToNull()));
        }
      } else {
        pause();
      }
    }
    poll() {
      polling_transport._logger.fine("polling");
      this.polling = true;
      this.doPoll();
      this.emit("poll");
    }
    onData(data) {
      let self = this;
      polling_transport._logger.fine("polling got data " + dart.str(data));
      let callback = dart.fn((packet, index, total) => {
        if (index === void 0) index = null;
        if (total === void 0) total = null;
        if ("opening" === self.readyState) {
          self.onOpen();
        }
        if ("close" === dart.dsend(packet, '_get', ["type"])) {
          self.onClose();
          return false;
        }
        self.onPacket(packet);
        return null;
      }, dynamicAnddynamicAnddynamicTobool());
      parser$.PacketParser.decodePayload(data, {binaryType: core.bool._check(this.socket.binaryType), callback: callback});
      if ("closed" !== this.readyState) {
        this.polling = false;
        this.emit("pollComplete");
        if ("open" === this.readyState) {
          this.poll();
        } else {
          polling_transport._logger.fine("ignoring poll - transport state \"" + dart.str(this.readyState) + "\"");
        }
      }
    }
    doClose() {
      let self = this;
      let close = dart.fn(_ => {
        if (_ === void 0) _ = null;
        polling_transport._logger.fine("writing close packet");
        self.write([new (IdentityMapOfString$String()).from(["type", "close"])]);
      }, dynamicToNull$());
      if ("open" === this.readyState) {
        polling_transport._logger.fine("transport open - closing");
        close();
      } else {
        polling_transport._logger.fine("transport not open - deferring close");
        this.once("open", close);
      }
    }
    write(packets) {
      let self = this;
      this.writable = false;
      let callbackfn = dart.fn(_ => {
        self.writable = true;
        self.emit("drain");
      }, dynamicToNull());
      parser$.PacketParser.encodePayload(packets, {supportsBinary: this.supportsBinary, callback: dart.fn(data => {
          self.doWrite(data, callbackfn);
        }, dynamicToNull())});
    }
    uri() {
      let t3;
      let query = (t3 = this.query, t3 == null ? new _js_helper.LinkedMap.new() : t3);
      let schema = dart.test(this.secure) ? "https" : "http";
      let port = "";
      if (!dart.equals(this.timestampRequests, false)) {
        query[$_set](this.timestampParam, new core.DateTime.now().millisecondsSinceEpoch[$toRadixString](36));
      }
      if (dart.equals(this.supportsBinary, false) && !dart.test(query[$containsKey]("sid"))) {
        query[$_set]("b64", 1);
      }
      if (this.port != null && ("https" === schema && this.port !== 443 || "http" === schema && this.port !== 80)) {
        port = ":" + dart.str(this.port);
      }
      let queryString = parseqs.encode(query);
      if (dart.dtest(dart.dload(queryString, 'isNotEmpty'))) {
        queryString = "?" + dart.str(queryString);
      }
      let ipv6 = this.hostname[$contains](":");
      return schema + "://" + dart.notNull(ipv6 ? "[" + dart.notNull(this.hostname) + "]" : this.hostname) + port + dart.notNull(this.path) + dart.notNull(core.String._check(queryString));
    }
  };
  (polling_transport.PollingTransport.new = function(opts) {
    this[name$] = "polling";
    this[supportsBinary$0] = null;
    this[polling] = null;
    polling_transport.PollingTransport.__proto__.new.call(this, opts);
    let forceBase64 = opts != null && dart.dtest(opts[$_get]("forceBase64"));
    if (forceBase64) {
      this.supportsBinary = false;
    }
  }).prototype = polling_transport.PollingTransport.prototype;
  dart.addTypeTests(polling_transport.PollingTransport);
  dart.setMethodSignature(polling_transport.PollingTransport, () => ({
    __proto__: dart.getMethods(polling_transport.PollingTransport.__proto__),
    doOpen: dart.fnType(dart.void, []),
    pause: dart.fnType(dart.dynamic, [dart.dynamic]),
    poll: dart.fnType(dart.dynamic, []),
    doClose: dart.fnType(dart.void, []),
    write: dart.fnType(dart.void, [core.List]),
    uri: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(polling_transport.PollingTransport, "package:socket_io_client/src/engine/transport/polling_transport.dart");
  dart.setFieldSignature(polling_transport.PollingTransport, () => ({
    __proto__: dart.getFields(polling_transport.PollingTransport.__proto__),
    name: dart.fieldType(core.String),
    supportsBinary: dart.fieldType(core.bool),
    polling: dart.fieldType(core.bool)
  }));
  const requestTimeout$ = dart.privateName(xhr_transport, "XHRTransport.requestTimeout");
  const xd = dart.privateName(xhr_transport, "XHRTransport.xd");
  const xs = dart.privateName(xhr_transport, "XHRTransport.xs");
  const sendXhr = dart.privateName(xhr_transport, "XHRTransport.sendXhr");
  const pollXhr = dart.privateName(xhr_transport, "XHRTransport.pollXhr");
  const extraHeaders$ = dart.privateName(xhr_transport, "XHRTransport.extraHeaders");
  const supportsBinary$1 = dart.privateName(xhr_transport, "XHRTransport.supportsBinary");
  xhr_transport.XHRTransport = class XHRTransport extends polling_transport.PollingTransport {
    get requestTimeout() {
      return this[requestTimeout$];
    }
    set requestTimeout(value) {
      this[requestTimeout$] = value;
    }
    get xd() {
      return this[xd];
    }
    set xd(value) {
      this[xd] = value;
    }
    get xs() {
      return this[xs];
    }
    set xs(value) {
      this[xs] = value;
    }
    get sendXhr() {
      return this[sendXhr];
    }
    set sendXhr(value) {
      this[sendXhr] = value;
    }
    get pollXhr() {
      return this[pollXhr];
    }
    set pollXhr(value) {
      this[pollXhr] = value;
    }
    get extraHeaders() {
      return this[extraHeaders$];
    }
    set extraHeaders(value) {
      this[extraHeaders$] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$1];
    }
    set supportsBinary(value) {
      this[supportsBinary$1] = value;
    }
    request(opts) {
      let t3, t3$;
      if (opts === void 0) opts = null;
      opts = (t3 = opts, t3 == null ? new _js_helper.LinkedMap.new() : t3);
      opts[$_set]("uri", this.uri());
      opts[$_set]("xd", this.xd);
      opts[$_set]("xs", this.xs);
      opts[$_set]("agent", (t3$ = this.agent, t3$ == null ? false : t3$));
      opts[$_set]("supportsBinary", this.supportsBinary);
      opts[$_set]("enablesXDR", this.enablesXDR);
      opts[$_set]("extraHeaders", this.extraHeaders);
      return new xhr_transport.Request.new(opts);
    }
    doWrite(data, fn) {
      let isBinary = !(typeof data == 'string');
      let req = this.request(new _js_helper.LinkedMap.from(["method", "POST", "data", data, "isBinary", isBinary]));
      dart.dsend(req, 'on', ["success", fn]);
      dart.dsend(req, 'on', ["error", dart.fn(err => {
          this.onError("xhr post error", err);
        }, dynamicToNull())]);
      this.sendXhr = xhr_transport.Request._check(req);
    }
    doPoll() {
      xhr_transport._logger.fine("xhr poll");
      let req = this.request();
      dart.dsend(req, 'on', ["data", dart.fn(data => {
          this.onData(data);
        }, dynamicToNull())]);
      dart.dsend(req, 'on', ["error", dart.fn(err => {
          this.onError("xhr poll error", err);
        }, dynamicToNull())]);
      this.pollXhr = xhr_transport.Request._check(req);
    }
  };
  (xhr_transport.XHRTransport.new = function(opts) {
    let t3;
    this[requestTimeout$] = null;
    this[xd] = null;
    this[xs] = null;
    this[sendXhr] = null;
    this[pollXhr] = null;
    this[extraHeaders$] = null;
    this[supportsBinary$1] = true;
    xhr_transport.XHRTransport.__proto__.new.call(this, opts);
    this.requestTimeout = core.int._check(opts[$_get]("requestTimeout"));
    this.extraHeaders = core.Map._check((t3 = opts[$_get]("extraHeaders"), t3 == null ? new (IdentityMapOfString$dynamic()).new() : t3));
    let isSSL = "https:" === html.window[$location].protocol;
    let port = html.window[$location].port;
    if (port[$isEmpty]) {
      port = isSSL ? "443" : "80";
    }
    this.xd = !dart.equals(opts[$_get]("hostname"), html.window[$location].hostname) || !core.identical(core.int.parse(port), opts[$_get]("port"));
    this.xs = !dart.equals(opts[$_get]("secure"), isSSL);
  }).prototype = xhr_transport.XHRTransport.prototype;
  dart.addTypeTests(xhr_transport.XHRTransport);
  dart.setMethodSignature(xhr_transport.XHRTransport, () => ({
    __proto__: dart.getMethods(xhr_transport.XHRTransport.__proto__),
    request: dart.fnType(dart.dynamic, [], [core.Map]),
    doWrite: dart.fnType(dart.void, [dart.dynamic, dart.dynamic]),
    doPoll: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(xhr_transport.XHRTransport, "package:socket_io_client/src/engine/transport/xhr_transport.dart");
  dart.setFieldSignature(xhr_transport.XHRTransport, () => ({
    __proto__: dart.getFields(xhr_transport.XHRTransport.__proto__),
    requestTimeout: dart.fieldType(core.int),
    xd: dart.fieldType(core.bool),
    xs: dart.fieldType(core.bool),
    sendXhr: dart.fieldType(xhr_transport.Request),
    pollXhr: dart.fieldType(xhr_transport.Request),
    extraHeaders: dart.fieldType(core.Map),
    supportsBinary: dart.fieldType(core.bool)
  }));
  const uri = dart.privateName(xhr_transport, "Request.uri");
  const xd$ = dart.privateName(xhr_transport, "Request.xd");
  const xs$ = dart.privateName(xhr_transport, "Request.xs");
  const async$ = dart.privateName(xhr_transport, "Request.async");
  const data = dart.privateName(xhr_transport, "Request.data");
  const agent$0 = dart.privateName(xhr_transport, "Request.agent");
  const isBinary = dart.privateName(xhr_transport, "Request.isBinary");
  const supportsBinary$2 = dart.privateName(xhr_transport, "Request.supportsBinary");
  const enablesXDR$0 = dart.privateName(xhr_transport, "Request.enablesXDR");
  const requestTimeout$0 = dart.privateName(xhr_transport, "Request.requestTimeout");
  const xhr = dart.privateName(xhr_transport, "Request.xhr");
  const method = dart.privateName(xhr_transport, "Request.method");
  const readyStateChange = dart.privateName(xhr_transport, "Request.readyStateChange");
  const extraHeaders$0 = dart.privateName(xhr_transport, "Request.extraHeaders");
  xhr_transport.Request = class Request extends event_emitter.EventEmitter {
    get uri() {
      return this[uri];
    }
    set uri(value) {
      this[uri] = value;
    }
    get xd() {
      return this[xd$];
    }
    set xd(value) {
      this[xd$] = value;
    }
    get xs() {
      return this[xs$];
    }
    set xs(value) {
      this[xs$] = value;
    }
    get async() {
      return this[async$];
    }
    set async(value) {
      this[async$] = value;
    }
    get data() {
      return this[data];
    }
    set data(value) {
      this[data] = value;
    }
    get agent() {
      return this[agent$0];
    }
    set agent(value) {
      this[agent$0] = value;
    }
    get isBinary() {
      return this[isBinary];
    }
    set isBinary(value) {
      this[isBinary] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$2];
    }
    set supportsBinary(value) {
      this[supportsBinary$2] = value;
    }
    get enablesXDR() {
      return this[enablesXDR$0];
    }
    set enablesXDR(value) {
      this[enablesXDR$0] = value;
    }
    get requestTimeout() {
      return this[requestTimeout$0];
    }
    set requestTimeout(value) {
      this[requestTimeout$0] = value;
    }
    get xhr() {
      return this[xhr];
    }
    set xhr(value) {
      this[xhr] = value;
    }
    get method() {
      return this[method];
    }
    set method(value) {
      this[method] = value;
    }
    get readyStateChange() {
      return this[readyStateChange];
    }
    set readyStateChange(value) {
      this[readyStateChange] = value;
    }
    get extraHeaders() {
      return this[extraHeaders$0];
    }
    set extraHeaders(value) {
      this[extraHeaders$0] = value;
    }
    create() {
      let t3;
      let xhr = this.xhr = html.HttpRequest.new();
      let self = this;
      try {
        xhr_transport._logger.fine("xhr open " + dart.str(this.method) + ": " + dart.str(this.uri));
        xhr.open(this.method, this.uri, {async: this.async});
        try {
          if (dart.equals((t3 = this.extraHeaders, t3 == null ? null : t3[$isNotEmpty]), true)) {
            this.extraHeaders[$forEach](dart.fn((k, v) => {
              xhr.setRequestHeader(core.String._check(k), core.String._check(v));
            }, dynamicAnddynamicToNull()));
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
        }
        if ("POST" === this.method) {
          try {
            if (dart.test(this.isBinary)) {
              xhr.setRequestHeader("Content-type", "application/octet-stream");
            } else {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            }
          } catch (e$0) {
            let e = dart.getThrown(e$0);
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e$1) {
          let e = dart.getThrown(e$1);
        }
        this.readyStateChange = xhr[$onReadyStateChange].listen(dart.fn(evt => {
          if (xhr.readyState === 2) {
            let contentType = null;
            try {
              contentType = xhr.getResponseHeader("Content-Type");
            } catch (e$) {
              let e = dart.getThrown(e$);
            }
            if (dart.equals(contentType, "application/octet-stream")) {
              xhr.responseType = "arraybuffer";
            }
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            self.onLoad();
          } else {
            async.Timer.run(dart.fn(() => self.onError(xhr.status), VoidTodynamic()));
          }
        }, EventToNull()));
        xhr_transport._logger.fine("xhr data " + dart.str(this.data));
        xhr.send(this.data);
      } catch (e$2) {
        let e = dart.getThrown(e$2);
        async.Timer.run(dart.fn(() => this.onError(e), VoidTodynamic()));
        return;
      }
    }
    onSuccess() {
      this.emit("success");
      this.cleanup();
    }
    onData(data) {
      this.emit("data", data);
      this.onSuccess();
    }
    onError(err) {
      this.emit("error", err);
      this.cleanup(true);
    }
    cleanup(fromError) {
      let t8;
      if (fromError === void 0) fromError = null;
      if (this.xhr == null) {
        return;
      }
      if (dart.dtest(this.hasXDR())) {
      } else {
        t8 = this.readyStateChange;
        t8 == null ? null : t8.cancel();
        this.readyStateChange = null;
      }
      if (fromError != null) {
        try {
          this.xhr.abort();
        } catch (e$) {
          let e = dart.getThrown(e$);
        }
      }
      this.xhr = null;
    }
    onLoad() {
      let t10;
      let data = null;
      try {
        let contentType = null;
        try {
          contentType = this.xhr.getResponseHeader("Content-Type");
        } catch (e$) {
          let e = dart.getThrown(e$);
        }
        if (dart.equals(contentType, "application/octet-stream")) {
          data = (t10 = this.xhr[$response], t10 == null ? this.xhr.responseText : t10);
        } else {
          data = this.xhr.responseText;
        }
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        this.onError(e);
      }
      if (null != data) {
        if (typed_data.ByteBuffer.is(data)) data = dart.dsend(data, 'asUint8List', []);
        this.onData(data);
      }
    }
    hasXDR() {
      return false;
    }
    abort() {
      return this.cleanup();
    }
  };
  (xhr_transport.Request.new = function(opts) {
    let t3;
    this[uri] = null;
    this[xd$] = null;
    this[xs$] = null;
    this[async$] = null;
    this[data] = null;
    this[agent$0] = null;
    this[isBinary] = null;
    this[supportsBinary$2] = null;
    this[enablesXDR$0] = null;
    this[requestTimeout$0] = null;
    this[xhr] = null;
    this[method] = null;
    this[readyStateChange] = null;
    this[extraHeaders$0] = null;
    xhr_transport.Request.__proto__.new.call(this);
    this.method = core.String._check((t3 = opts[$_get]("method"), t3 == null ? "GET" : t3));
    this.uri = core.String._check(opts[$_get]("uri"));
    this.xd = dart.equals(opts[$_get]("xd"), true);
    this.xs = dart.equals(opts[$_get]("xs"), true);
    this.async = !dart.equals(opts[$_get]("async"), false);
    this.data = opts[$_get]("data");
    this.agent = core.bool._check(opts[$_get]("agent"));
    this.isBinary = core.bool._check(opts[$_get]("isBinary"));
    this.supportsBinary = core.bool._check(opts[$_get]("supportsBinary"));
    this.enablesXDR = core.bool._check(opts[$_get]("enablesXDR"));
    this.requestTimeout = core.int._check(opts[$_get]("requestTimeout"));
    this.extraHeaders = core.Map._check(opts[$_get]("extraHeaders"));
    this.create();
  }).prototype = xhr_transport.Request.prototype;
  dart.addTypeTests(xhr_transport.Request);
  dart.setMethodSignature(xhr_transport.Request, () => ({
    __proto__: dart.getMethods(xhr_transport.Request.__proto__),
    create: dart.fnType(dart.dynamic, []),
    onSuccess: dart.fnType(dart.dynamic, []),
    onData: dart.fnType(dart.dynamic, [dart.dynamic]),
    onError: dart.fnType(dart.dynamic, [dart.dynamic]),
    cleanup: dart.fnType(dart.dynamic, [], [dart.dynamic]),
    onLoad: dart.fnType(dart.dynamic, []),
    hasXDR: dart.fnType(dart.dynamic, []),
    abort: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(xhr_transport.Request, "package:socket_io_client/src/engine/transport/xhr_transport.dart");
  dart.setFieldSignature(xhr_transport.Request, () => ({
    __proto__: dart.getFields(xhr_transport.Request.__proto__),
    uri: dart.fieldType(core.String),
    xd: dart.fieldType(core.bool),
    xs: dart.fieldType(core.bool),
    async: dart.fieldType(core.bool),
    data: dart.fieldType(dart.dynamic),
    agent: dart.fieldType(core.bool),
    isBinary: dart.fieldType(core.bool),
    supportsBinary: dart.fieldType(core.bool),
    enablesXDR: dart.fieldType(core.bool),
    requestTimeout: dart.fieldType(core.int),
    xhr: dart.fieldType(html.HttpRequest),
    method: dart.fieldType(core.String),
    readyStateChange: dart.fieldType(async.StreamSubscription),
    extraHeaders: dart.fieldType(core.Map)
  }));
  dart.defineLazy(xhr_transport, {
    /*xhr_transport._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:transport.XHRTransport");
    }
  });
  dart.defineLazy(polling_transport, {
    /*polling_transport._logger*/get _logger() {
      return logging.Logger.new("socket_io:transport.PollingTransport");
    }
  });
  parseqs.encode = function encode(obj) {
    let str = "";
    for (let i of obj[$keys]) {
      if (str[$isNotEmpty]) str = str + "&";
      str = str + (dart.notNull(core.Uri.encodeComponent(dart.str(i))) + "=" + dart.notNull(core.Uri.encodeComponent(dart.str(obj[$_get](i)))));
    }
    return str;
  };
  parseqs.decode = function decode(qs) {
    let qry = new _js_helper.LinkedMap.new();
    let pairs = dart.dsend(qs, 'split', ["&"]);
    for (let i = 0, l = dart.dload(pairs, 'length'); i < dart.notNull(core.num._check(l)); i = i + 1) {
      let pair = dart.dsend(dart.dsend(pairs, '_get', [i]), 'split', ["="]);
      qry[$_set](core.Uri.decodeComponent(core.String._check(dart.dsend(pair, '_get', [0]))), core.Uri.decodeComponent(core.String._check(dart.dsend(pair, '_get', [1]))));
    }
    return qry;
  };
  const name$0 = dart.privateName(websocket_transport, "WebSocketTransport.name");
  const protocols = dart.privateName(websocket_transport, "WebSocketTransport.protocols");
  const supportsBinary$3 = dart.privateName(websocket_transport, "WebSocketTransport.supportsBinary");
  const perMessageDeflate$ = dart.privateName(websocket_transport, "WebSocketTransport.perMessageDeflate");
  const ws = dart.privateName(websocket_transport, "WebSocketTransport.ws");
  websocket_transport.WebSocketTransport = class WebSocketTransport extends transport$.Transport {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get protocols() {
      return this[protocols];
    }
    set protocols(value) {
      this[protocols] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$3];
    }
    set supportsBinary(value) {
      this[supportsBinary$3] = value;
    }
    get perMessageDeflate() {
      return this[perMessageDeflate$];
    }
    set perMessageDeflate(value) {
      this[perMessageDeflate$] = value;
    }
    get ws() {
      return this[ws];
    }
    set ws(value) {
      this[ws] = value;
    }
    doOpen() {
      let uri = this.uri();
      let protocols = this.protocols;
      try {
        this.ws = html.WebSocket.new(core.String._check(uri), protocols);
      } catch (e) {
        let err = dart.getThrown(e);
        return this.emit("error", err);
      }
      if (this.ws.binaryType == null) {
        this.supportsBinary = false;
      }
      this.ws.binaryType = "arraybuffer";
      this.addEventListeners();
    }
    addEventListeners() {
      let t12;
      t12 = this.ws;
      t12[$onOpen].listen(dart.fn(_ => this.onOpen(), EventTodynamic()));
      t12[$onClose].listen(dart.fn(_ => this.onClose(), CloseEventTodynamic()));
      t12[$onMessage].listen(dart.fn(evt => this.onData(evt[$data]), MessageEventTodynamic()));
      t12[$onError].listen(dart.fn(e => {
        this.onError("websocket error");
      }, EventToNull()));
      t12;
    }
    write(packets) {
      this.writable = false;
      let done = dart.fn(() => {
        this.emit("flush");
        async.Timer.run(dart.fn(() => {
          this.writable = true;
          this.emit("drain");
        }, VoidToNull()));
      }, VoidToNull());
      let total = packets[$length];
      packets[$forEach](dart.fn(packet => {
        parser$.PacketParser.encodePacket(core.Map._check(packet), {supportsBinary: this.supportsBinary, fromClient: true, callback: dart.fn(data => {
            try {
              this.ws.send(data);
            } catch (e$) {
              let e = dart.getThrown(e$);
              websocket_transport.WebSocketTransport._logger.fine("websocket closed before onclose event");
            }
            if ((total = dart.notNull(total) - 1) === 0) done();
          }, dynamicToNull())});
      }, dynamicToNull()));
    }
    doClose() {
      let t13;
      t13 = this.ws;
      t13 == null ? null : t13.close();
    }
    uri() {
      let t13;
      let query = (t13 = this.query, t13 == null ? new _js_helper.LinkedMap.new() : t13);
      let schema = dart.test(this.secure) ? "wss" : "ws";
      let port = "";
      if (this.port != null && ("wss" === schema && this.port !== 443 || "ws" === schema && this.port !== 80)) {
        port = ":" + dart.str(this.port);
      }
      if (dart.equals(this.timestampRequests, true)) {
        query[$_set](this.timestampParam, new core.DateTime.now().millisecondsSinceEpoch[$toRadixString](36));
      }
      if (dart.equals(this.supportsBinary, false)) {
        query[$_set]("b64", 1);
      }
      let queryString = parseqs.encode(query);
      if (dart.dtest(dart.dload(queryString, 'isNotEmpty'))) {
        queryString = "?" + dart.str(queryString);
      }
      let ipv6 = this.hostname[$contains](":");
      return schema + "://" + dart.notNull(ipv6 ? "[" + dart.notNull(this.hostname) + "]" : this.hostname) + port + dart.notNull(this.path) + dart.notNull(core.String._check(queryString));
    }
  };
  (websocket_transport.WebSocketTransport.new = function(opts) {
    this[name$0] = "websocket";
    this[protocols] = null;
    this[supportsBinary$3] = null;
    this[perMessageDeflate$] = null;
    this[ws] = null;
    websocket_transport.WebSocketTransport.__proto__.new.call(this, opts);
    let forceBase64 = opts != null && dart.dtest(opts[$_get]("forceBase64"));
    this.supportsBinary = !forceBase64;
    this.perMessageDeflate = core.Map._check(opts[$_get]("perMessageDeflate"));
    this.protocols = opts[$_get]("protocols");
  }).prototype = websocket_transport.WebSocketTransport.prototype;
  dart.addTypeTests(websocket_transport.WebSocketTransport);
  dart.setMethodSignature(websocket_transport.WebSocketTransport, () => ({
    __proto__: dart.getMethods(websocket_transport.WebSocketTransport.__proto__),
    doOpen: dart.fnType(dart.void, []),
    addEventListeners: dart.fnType(dart.void, []),
    write: dart.fnType(dart.void, [core.List]),
    doClose: dart.fnType(dart.void, []),
    uri: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(websocket_transport.WebSocketTransport, "package:socket_io_client/src/engine/transport/websocket_transport.dart");
  dart.setFieldSignature(websocket_transport.WebSocketTransport, () => ({
    __proto__: dart.getFields(websocket_transport.WebSocketTransport.__proto__),
    name: dart.fieldType(core.String),
    protocols: dart.fieldType(dart.dynamic),
    supportsBinary: dart.fieldType(core.bool),
    perMessageDeflate: dart.fieldType(core.Map),
    ws: dart.fieldType(html.WebSocket)
  }));
  dart.defineLazy(websocket_transport.WebSocketTransport, {
    /*websocket_transport.WebSocketTransport._logger*/get _logger() {
      return logging.Logger.new("socket_io_client:transport.WebSocketTransport");
    },
    set _logger(_) {}
  });
  const index = dart.privateName(jsonp_transport, "JSONPTransport.index");
  const script = dart.privateName(jsonp_transport, "JSONPTransport.script");
  const form = dart.privateName(jsonp_transport, "JSONPTransport.form");
  const iframe = dart.privateName(jsonp_transport, "JSONPTransport.iframe");
  const area = dart.privateName(jsonp_transport, "JSONPTransport.area");
  const iframeId = dart.privateName(jsonp_transport, "JSONPTransport.iframeId");
  const supportsBinary$4 = dart.privateName(jsonp_transport, "JSONPTransport.supportsBinary");
  jsonp_transport.JSONPTransport = class JSONPTransport extends polling_transport.PollingTransport {
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get script() {
      return this[script];
    }
    set script(value) {
      this[script] = value;
    }
    get form() {
      return this[form];
    }
    set form(value) {
      this[form] = value;
    }
    get iframe() {
      return this[iframe];
    }
    set iframe(value) {
      this[iframe] = value;
    }
    get area() {
      return this[area];
    }
    set area(value) {
      this[area] = value;
    }
    get iframeId() {
      return this[iframeId];
    }
    set iframeId(value) {
      this[iframeId] = value;
    }
    get supportsBinary() {
      return this[supportsBinary$4];
    }
    set supportsBinary(value) {
      this[supportsBinary$4] = value;
    }
    doClose() {
      if (this.script != null) {
        this.script[$remove]();
        this.script = null;
      }
      if (this.form != null) {
        this.form[$remove]();
        this.form = null;
        this.iframe = null;
      }
      super.doClose();
    }
    doPoll() {
      let t13, t13$;
      let script = html.ScriptElement._check(html.document[$createElement]("script"));
      t13 = this.script;
      t13 == null ? null : t13[$remove]();
      this.script = null;
      script.async = true;
      script.src = core.String._check(this.uri());
      script[$onError].listen(dart.fn(e => {
        this.onError("jsonp poll error");
      }, EventToNull()));
      let insertAt = html.ScriptElement._check(html.document.getElementsByTagName("script")[$_get](0));
      if (insertAt != null) {
        insertAt.parentNode.insertBefore(script, insertAt);
      } else {
        (t13$ = html.document[$head], t13$ == null ? html.document.body : t13$)[$append](script);
      }
      this.script = script;
      let isUAgecko = html.window.navigator.userAgent[$contains]("gecko");
      if (isUAgecko) {
        async.Timer.new(new core.Duration.new({milliseconds: 100}), dart.fn(() => {
          let iframe = html.document[$createElement]("iframe");
          html.document.body[$append](iframe);
          iframe[$remove]();
        }, VoidToNull()));
      }
    }
    doWrite(data, fn) {
      if (this.form == null) {
        let form = html.FormElement._check(html.document[$createElement]("form"));
        let area = html.TextAreaElement._check(html.document[$createElement]("textarea"));
        let id = this.iframeId = "eio_iframe_" + dart.str(this.index);
        form.className = "socketio";
        form.style[$position] = "absolute";
        form.style[$top] = "-1000px";
        form.style[$left] = "-1000px";
        form.target = id;
        form.method = "POST";
        form[$setAttribute]("accept-charset", "utf-8");
        area.name = "d";
        form[$append](area);
        html.document.body[$append](form);
        this.form = form;
        this.area = area;
      }
      this.form.action = core.String._check(this.uri());
      let initIframe = dart.fn(() => {
        if (this.iframe != null) {
          try {
            this.iframe[$remove]();
          } catch (e$) {
            let e = dart.getThrown(e$);
            this.onError("jsonp polling iframe removal error", e);
          }
        }
        this.iframe = html.IFrameElement._check(html.document[$createElement]("iframe"));
        this.iframe.name = this.iframeId;
        this.iframe.src = "javascript:0";
        this.iframe.id = this.iframeId;
        this.form[$append](this.iframe);
        this.iframe = this.iframe;
      }, VoidToNull());
      initIframe();
      data = dart.dsend(data, 'replaceAll', [jsonp_transport.rEscapedNewline, "\\\n"]);
      this.area.value = core.String._check(dart.dsend(data, 'replaceAll', [jsonp_transport.rNewline, "\\n"]));
      try {
        this.form.submit();
      } catch (e$) {
        let e = dart.getThrown(e$);
      }
      this.iframe[$onLoad].listen(dart.fn(_ => {
        initIframe();
        dart.dcall(fn, []);
      }, EventToNull()));
    }
  };
  (jsonp_transport.JSONPTransport.new = function(opts) {
    this[index] = null;
    this[script] = null;
    this[form] = null;
    this[iframe] = null;
    this[area] = null;
    this[iframeId] = null;
    this[supportsBinary$4] = false;
    jsonp_transport.JSONPTransport.__proto__.new.call(this, opts);
    this.query == null ? this.query = new _js_helper.LinkedMap.new() : null;
    if (jsonp_transport.callbacks == null) {
      if (js.context._get("___eio") == null) js.context._set("___eio", []);
      jsonp_transport.callbacks = js.context._get("___eio");
    }
    this.index = core.int._check(dart.dload(jsonp_transport.callbacks, 'length'));
    dart.dsend(jsonp_transport.callbacks, 'add', [dart.fn(msg => {
        this.onData(msg);
      }, dynamicToNull())]);
    this.query[$_set]("j", this.index);
  }).prototype = jsonp_transport.JSONPTransport.prototype;
  dart.addTypeTests(jsonp_transport.JSONPTransport);
  dart.setMethodSignature(jsonp_transport.JSONPTransport, () => ({
    __proto__: dart.getMethods(jsonp_transport.JSONPTransport.__proto__),
    doPoll: dart.fnType(dart.void, []),
    doWrite: dart.fnType(dart.void, [dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(jsonp_transport.JSONPTransport, "package:socket_io_client/src/engine/transport/jsonp_transport.dart");
  dart.setFieldSignature(jsonp_transport.JSONPTransport, () => ({
    __proto__: dart.getFields(jsonp_transport.JSONPTransport.__proto__),
    index: dart.fieldType(core.int),
    script: dart.fieldType(html.ScriptElement),
    form: dart.fieldType(html.FormElement),
    iframe: dart.fieldType(html.IFrameElement),
    area: dart.fieldType(html.TextAreaElement),
    iframeId: dart.fieldType(core.String),
    supportsBinary: dart.fieldType(core.bool)
  }));
  dart.defineLazy(jsonp_transport, {
    /*jsonp_transport.rNewline*/get rNewline() {
      return core.RegExp.new("\\n");
    },
    /*jsonp_transport.rEscapedNewline*/get rEscapedNewline() {
      return core.RegExp.new("\\\\n");
    },
    /*jsonp_transport.callbacks*/get callbacks() {
      return null;
    },
    set callbacks(_) {}
  });
  socket_io_client.io = function io(uri, opts) {
    if (opts === void 0) opts = null;
    return socket_io_client._lookup(uri, opts);
  };
  socket_io_client._lookup = function _lookup(uri, opts) {
    let t15, t18, t17, t16, t15$;
    opts = (t15 = opts, t15 == null ? new _js_helper.LinkedMap.new() : t15);
    let parsed = core.Uri.parse(core.String._check(uri));
    let id = dart.str(parsed.scheme) + "://" + dart.str(parsed.host) + ":" + dart.str(parsed.port);
    let path = parsed.path;
    let sameNamespace = dart.test(socket_io_client.cache[$containsKey](id)) && dart.dtest(dart.dsend(dart.dload(socket_io_client.cache[$_get](id), 'nsps'), 'containsKey', [path]));
    let newConnection = dart.equals(dart.dsend(opts, '_get', ["forceNew"]), true) || dart.equals(dart.dsend(opts, '_get', ["force new connection"]), true) || false[$_equals](dart.dsend(opts, '_get', ["multiplex"])) || sameNamespace;
    let io = null;
    if (newConnection) {
      socket_io_client._logger.fine("ignoring socket cache for " + dart.str(uri));
      io = new manager.Manager.new({uri: uri, options: core.Map._check(opts)});
    } else {
      io = (t15$ = socket_io_client.cache, t16 = id, t17 = t15$[$_get](t16), t17 == null ? (t18 = new manager.Manager.new({uri: uri, options: core.Map._check(opts)}), t15$[$_set](t16, t18), t18) : t17);
    }
    if (parsed.query[$isNotEmpty] && dart.dsend(opts, '_get', ["query"]) == null) {
      dart.dsend(opts, '_set', ["query", parsed.query]);
    } else if (opts != null && core.Map.is(dart.dsend(opts, '_get', ["query"]))) {
      dart.dsend(opts, '_set', ["query", parseqs.encode(core.Map._check(dart.dsend(opts, '_get', ["query"])))]);
    }
    return dart.dsend(io, 'socket', [parsed.path[$isEmpty] ? "/" : parsed.path, opts]);
  };
  dart.defineLazy(socket_io_client, {
    /*socket_io_client.protocol*/get protocol() {
      return parser$.protocol;
    },
    /*socket_io_client.cache*/get cache() {
      return new (IdentityMapOfString$dynamic()).new();
    },
    /*socket_io_client._logger*/get _logger() {
      return logging.Logger.new("socket_io_client");
    }
  });
  dart.trackLibraries("packages/socket_io_client/socket_io_client", {
    "package:socket_io_client/src/socket.dart": socket$,
    "package:socket_io_client/src/on.dart": on,
    "package:socket_io_client/src/manager.dart": manager,
    "package:socket_io_client/src/engine/socket.dart": socket$0,
    "package:socket_io_client/src/engine/transport/transports.dart": transports,
    "package:socket_io_client/src/engine/transport/xhr_transport.dart": xhr_transport,
    "package:socket_io_client/src/engine/transport/polling_transport.dart": polling_transport,
    "package:socket_io_client/src/engine/transport/transport.dart": transport$,
    "package:socket_io_client/src/engine/parseqs.dart": parseqs,
    "package:socket_io_client/src/engine/transport/websocket_transport.dart": websocket_transport,
    "package:socket_io_client/src/engine/transport/jsonp_transport.dart": jsonp_transport,
    "package:socket_io_client/socket_io_client.dart": socket_io_client
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/socket.dart","src/on.dart","src/manager.dart","src/engine/socket.dart","src/engine/transport/transports.dart","src/engine/transport/transport.dart","src/engine/transport/polling_transport.dart","src/engine/transport/xhr_transport.dart","src/engine/parseqs.dart","src/engine/transport/websocket_transport.dart","src/engine/transport/jsonp_transport.dart","socket_io_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+CS;;;;;;IACH;;;;;;IAEI;;;;;;IACD;;;;;;IACH;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;IACD;;;;;;IACG;;;;;;;;AAqBL,UAAuB,0CAAd,OAAM,eAAW,OAAM;AAE5B,eAAU;AAKb,MAJI,YAAO,CACV,MAAQ,EAAE,EAAE,kBAAa,kBACzB,MAAQ,EAAE,EAAE,oBAAe,oBAC3B,MAAQ,EAAE,EAAE,mBAAc;IAE9B;;AAMU;IAAS;;AAGjB,UAAmB,YAAV,gBAAa,OAAM,MAAO;AACnB,MAAhB,AAAK;AACS,MAAT,AAAG;AACR,UAAI,AAAO,WAAQ,AAAG,oBAAY,AAAK,AAAQ;AACxB,MAAvB,AAAK,UAAK;AACV,YAAO;IACT;SAOU;AACkB,MAA1B,AAAK,UAAK,WAAW,IAAI;AACzB,YAAO;IACT;SASiB,OAAQ;;AACC,MAAxB,iBAAY,KAAK,EAAE,IAAI;IACzB;mBAE2B,OAAQ;;AACK,MAAtC,iBAAY,KAAK,EAAE,IAAI,WAAU;IACnC;gBAOwB,OAAe;;UACzB;UAAU;AACtB,oBAAI,AAAO,0BAAS,KAAK;AACA,QAAjB,WAAK,KAAK,EAAE,IAAI;;AAEjB,uBAAW,CAAC,KAAK;AACtB,YAAS,iBAAL,IAAI;AACe,UAArB,AAAS,QAAD,UAAQ,IAAI;cACf,KAAI,IAAI,IAAI;AACC,UAAlB,AAAS,QAAD,OAAK,IAAI;;AAGf,qBAAS,yCACX,kBAAQ,MAAM,WACd,QAAQ,QAAQ,EAChB,WAAW,uCACT,YAAmC,AAAQ,2CAA1B,OAAO,kBAAc,oBAAa,AAAK,kBAAC;AAK7D,YAAI,GAAG,IAAI;AACuC,UAAhD,AAAQ,qBAAK,AAAkC,0CAAJ;AACb,UAAzB,AAAI,iBAAc,SAAL,WAAS,GAAG;AACA,UAA9B,AAAM,MAAA,QAAC,MAAuB,UAAJ,gBAAH,+BAAG;;AAG5B,YAAmB,YAAV,gBAAa;AACD,UAAnB,AAAK,YAAO,MAAM;;AAES,UAAtB,AAAW,sBAAI,MAAM;;AAEX,QAAZ,aAAQ;;IAEjB;WAOW;AACe,MAAxB,AAAM,MAAA,QAAC,OAAc;AACC,MAAjB,AAAG,eAAO,MAAM;IACvB;WAMQ;;;AACwC,MAA9C,AAAQ,qBAAK;AAGb,UAAI,QAAY;AACd,YAA2B,2CAAlB,OAAO,kBAAc;AACuB,UAAnD,AAAK,YAAO,+BAAC,WAAiB,SAAc;;AAEd,UAA9B,AAAK,YAAO,+BAAC;;;IAGnB;YAOQ;AACyB,MAA/B,AAAQ,qBAAK,AAAiB,qBAAR,MAAM;AACM,MAAlC,AAAK,UAAK,iBAAiB,MAAM;AACX,MAAjB,iBAAY;AACO,MAAnB,oBAAe;AACN,MAAT,UAAK;AACqB,MAA/B,AAAK,UAAK,cAAc,MAAM;IAChC;aAOS;AACP,uBAAU,WAAN,MAAM,WAAC,SAAe,WAAK;AAE/B,cAAc,WAAN,MAAM,WAAC;;;AAEK,UAAhB,AAAK;AACL;;;;AAGoB,UAApB,AAAK,6BAAQ,MAAM;AACnB;;;;AAGoB,UAApB,AAAK,6BAAQ,MAAM;AACnB;;;;AAGkB,UAAlB,AAAK,2BAAM,MAAM;AACjB;;;;AAGkB,UAAlB,AAAK,2BAAM,MAAM;AACjB;;;;AAGmB,UAAnB,AAAK;AACL;;;;AAGkC,UAAlC,AAAK,UAAK,SAAe,WAAN,MAAM,WAAC;AAC1B;;;IAEN;YAOY;;AACL,mCAAsB,KAAf,AAAM,MAAA,QAAC,eAAD,OAAY;AAG9B,UAAI,QAAQ,AAAM,MAAA,QAAC;AAEe,QAAhC,AAAK,IAAD,OAAK,AAAK,SAAI,AAAM,MAAA,QAAC;;AAI3B,UAAmB,YAAV,gBAAa;AACpB,YAAgB,aAAZ,AAAK,IAAD,aAAU;AACyC,UAAhD,oBAAY,qCAAM,CAAC,AAAK,IAAD,UAAQ,AAAK,IAAD,WAAS;;AAErB,UAAvB,oBAAY,qCAAM,IAAI;;;AAGL,QAAvB,AAAc,yBAAI,IAAI;;IAE/B;QAMa;AACP,iBAAO;AACX,YAAO,SAAC;AAEN,YAAI,IAAI,EAAE;AACC,QAAX,OAAO;AACuB,QAA9B,AAAQ,qBAAK,AAAgB,0BAAF,CAAC;AAM1B,QAJF,YAAO,+BACL,WACA,MAAM,EAAE,EACR,QAAQ,CAAC,CAAC;;IAGhB;UAOU;AACJ,gBAAW,AAAK,mBAAO,AAAM,MAAA,QAAC;AAClC,UAAQ,iBAAJ,GAAG;AACiE,QAAtE,AAAQ,qBAAK,AAAwD,0BAAvC,AAAM,MAAA,QAAC,SAAM,oBAAQ,AAAM,MAAA,QAAC;AAEtD,mBAAsB,aAAf,AAAM,MAAA,QAAC;AAClB,YAAgB,aAAZ,AAAK,IAAD,aAAU;AAEW,UAAlB,oBAAM,GAAG,EAAE,CAAC,IAAI;;AAEA,UAAhB,oBAAM,GAAG,EAAE,IAAI;;;AAGiB,QAA3C,AAAQ,qBAAK,AAA6B,sBAAhB,AAAM,MAAA,QAAC;;IAErC;;AAOuB,MAAhB,iBAAY;AACQ,MAApB,oBAAe;AACA,MAApB,AAAK,UAAK;AACS,MAAnB,AAAK;IACP;;AAOM;AACJ,oBAAK,IAAI,cAAK,WAAF,CAAC,QAAQ,AAAc,gCAAQ,IAAC,WAAD,CAAC;AACrC,oCAAY,AAAa,0CAAC,CAAC;AAChC,YAAgB,aAAZ,AAAK,IAAD,aAAU;AACyC,UAAhD,oBAAY,qCAAM,CAAC,AAAK,IAAD,UAAQ,AAAK,IAAD,WAAS;;AAErB,UAAvB,oBAAY,qCAAM,IAAI;;;AAGZ,MAAlB,qBAAgB;AAErB,oBAAK,IAAI,cAAK,WAAF,CAAC,QAAQ,AAAW,6BAAQ,IAAC,WAAD,CAAC;AACR,QAA/B,AAAK,4BAAY,AAAU,uCAAC,CAAC;;AAEX,MAAf,kBAAa;IACpB;;AAOiD,MAA/C,AAAQ,qBAAK,AAAiC,iCAAN,YAAI;AAC9B,MAAd,AAAK;AAC+B,MAApC,AAAK,aAAQ;IACf;;;AAUE,UAA0B,0CAAjB,OAAM,kBAAc;AAE3B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAQ,AAAK,qBAAQ,IAAA,AAAC,CAAA;AACf,UAAT,WAAR,AAAI,iBAAC,CAAC;;AAEG,QAAX,YAAO;;AAGO,MAAhB,AAAG,gBAAQ;IAClB;;AAOW;IAAY;;AAGrB,UAAmB,YAAV,gBAAa;AAC+B,QAAnD,AAAQ,qBAAK,AAAqC,qCAAN,YAAI;AACf,QAAjC,AAAK,YAAO,+BAAC;;AAID,MAAd,AAAK;AAEL,UAAmB,YAAV,gBAAa;AAEgB,QAApC,AAAK,aAAQ;;AAEf,YAAO;IACT;aAQS;;AACuB,MAAzB,cAAmB,KAAN,kBAAM,OAAN,aAAU;AACK,MAA5B,AAAK,kBAAC,YAAc,QAAQ;AACjC,YAAO;IACT;;iCAjWY,IAAS,KAAU;IAZxB;IACH;IACA;IACC;IACA;IACA;IACA;IACE;IACF;IACD;IACG;IAEK;IAAS;IAAU;AAA/B;AACkB,IAAX,YAAO;AACA,IAAP,WAAM;AACG,IAAT,YAAO;AACW,IAAlB,qBAAgB;AACD,IAAf,kBAAa;AACI,IAAjB,iBAAY;AACO,IAAnB,oBAAe;AACpB,QAAI,aAAQ;AACgB,mBAArB,mBAAQ,AAAI,iBAAC;;AAEpB,kBAAS,AAAG,sBAAa,AAAK,AAAM;EACtC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAnDS,cAAM;;;MAgBJ,eAAO;YAAG,oBAAO;;;;;ICrBnB;;;;;;;AAEI;IAAU;;;IADN;;EAAS;;;;;;;;;;;uBAPZ,KAAY,IAAiB;AAC7B,IAAd,AAAI,GAAD,IAAI,EAAE,EAAE,EAAE;AACb,UAAO,wBAAY,cAAM,AAAI,GAAD,KAAK,EAAE,EAAE,EAAE;EACzC;;;;;;;;;;;;;;;;;;;;;;;;ICkBsB;;;;;;IACf;;;;;;IACD;;;;;;IAQK;;;;;;IACF;;;;;;IACA;;;;;;IACF;;;;;;IACD;;;;;;IACC;;;;;;IACA;;;;;;IACA;;;;;;IAEgB;;;;;;IACb;;;;;;IACA;;;;;;IACH;;;;;;IACA;;;;;;YAqCe,OAAQ;;AACJ,MAAtB,AAAK,UAAK,KAAK,EAAE,IAAI;AACrB,eAAS,MAAY,AAAK;AACQ,QAA3B,AAAI,AAAM,iBAAL,GAAG,OAAO,KAAK,EAAE,IAAI;;IAEnC;;AAQE,eAAS,MAAY,AAAK;AACgB,QAAnC,AAAI,AAAM,iBAAL,GAAG,OAAO,AAAK,gBAAW,GAAG;;IAE3C;eASyB;AACvB,UAAI,AAAI,GAAD,cAAY,MAAM,AAAsB,MAAhB,AAAI,GAAD,aAAW;AAC7C,YAAwC,EAAhC,AAAI,GAAD,aAAW,KAAU,aAAJ,GAAG,IAAG,oBAAa,AAAO;IACxD;;AASyB,YAAK;IAAa;qBACrB;AAAM,YAAK,uBAAgB,CAAC;;;AASlB,YAAK;IAAqB;6BAC7B;AAAM,YAAK,+BAAwB,CAAC;;;AASpC,YAAK;IAAkB;0BAC1B;AAAM,YAAK,4BAAqB,CAAC;;;AAE5B,YAAK;IAAoB;4BAC5B;AACG,MAAxB,6BAAuB,CAAC;AAC7B,UAAS,gBAAW,MAAW,AAAQ,AAAU,sBAAD,CAAC;IACnD;;AASgC,YAAK;IAAqB;6BAC7B;AACG,MAAzB,8BAAwB,CAAC;AAC9B,UAAS,gBAAW,MAAW,AAAQ,AAAO,mBAAD,CAAC;IAChD;;AAQmB,YAAK;IAAQ;gBAChB;AAAM,YAAK,kBAAW,CAAC;;;AAUrC,qBAAU,gCACD,wBACA,AAAQ,AAAS,0BAAG;AAEX,QAAhB,AAAK;;IAET;;UASM;UAAc;AAAU,qCAAkB,QAAQ,QAAQ,IAAI;IAAC;;UAE5D;UAAc;AACiB,MAAtC,AAAQ,qBAAK,AAAwB,yBAAX;AAC1B,UAAS,AAAW,2BAAS,SAAS,MAAO;AAEjB,MAA5B,AAAQ,qBAAK,AAAc,sBAAJ;AACmC,MAArD,cAAuB,wBAAY,UAAU;AAC9C,mBAAc;AACS,MAAtB,kBAAa;AACQ,MAArB,qBAAgB;AAGjB,oBAAU,MAAQ,MAAM,EAAE,QAAQ,QAAC;AAC7B,QAAR;AACA,YAAI,QAAQ,IAAI,MAAc,AAAE,WAAV,QAAQ;;AAI5B,qBAAW,MAAQ,MAAM,EAAE,SAAS,QAAC;AACV,QAA7B,AAAQ,qBAAK;AACJ,QAAT;AACqB,QAArB,kBAAa;AACiB,QAA9B,aAAQ,iBAAiB,IAAI;AAC7B,YAAI,QAAQ,IAAI;AACuC,UAA7C,WAAR,QAAQ,GAAC,0CAAC,SAAS,oBAAoB,QAAQ,IAAI;;AAG7B,UAAtB;;;AAKJ,UAAS,kBAAY;AACf,sBAAe;AACwC,QAA3D,AAAQ,qBAAK,AAA6C,iDAAR,OAAO;AAGrD,oBAAQ,gBAAM,gDAAuB,OAAO,KAAG;AACO,UAAxD,AAAQ,qBAAK,AAA0C,8CAAR,OAAO;AACrC,UAAT,WAAR,OAAO;AACO,UAAd,AAAO,MAAD;AACyB,UAA/B,AAAO,MAAD,MAAM,SAAS;AACc,UAAnC,aAAQ,mBAAmB,OAAO;;AAGa,QAA5C,AAAK,gBAAI,uBAAY;;AAAM,oBAAK;8BAAL,OAAO;;;AAGnB,MAAjB,AAAK,gBAAI,OAAO;AACE,MAAlB,AAAK,gBAAI,QAAQ;AAEtB,YAAO;IACT;WAOQ;;AACc,MAApB,AAAQ,qBAAK;AAGC,MAAd,AAAK;AAGmB,MAAnB,kBAAa;AACD,MAAjB,AAAK,UAAK;AAGN,mBAAc;AACiC,MAA9C,AAAK,gBAAI,MAAQ,MAAM,EAAE,kBAAa;AACQ,MAA9C,AAAK,gBAAI,MAAQ,MAAM,EAAE,kBAAa;AACQ,MAA9C,AAAK,gBAAI,MAAQ,MAAM,EAAE,kBAAa;AACU,MAAhD,AAAK,gBAAI,MAAQ,MAAM,EAAE,mBAAc;AACS,MAAhD,AAAK,gBAAI,MAAQ,MAAM,EAAE,mBAAc;AACmB,MAA1D,AAAK,gBAAI,MAAa,cAAS,qBAAgB;IACtD;WAOQ;;AAC+C,MAAhD,gBAAoB,AAAM;AACX,MAApB,AAAK,aAAQ;IACf;WAOQ;;AACqE,MAA3E,AAAK,aAAQ,QAA8C,aAA7B,AAAM,+DAA8B;IACpE;WAOO;AACiB,MAAjB,AAAQ,iBAAI,IAAI;IACvB;cAOU;AACmB,MAA3B,AAAK,UAAK,UAAU,MAAM;IAC5B;YAOQ;AACoB,MAA1B,AAAQ,qBAAK,AAAY,oBAAJ,GAAG;AACE,MAA1B,AAAK,aAAQ,SAAS,GAAG;IAC3B;WAQqB,KAAS;AACxB,mBAAc,AAAI,iBAAC,GAAG;AAEtB,yBAAe,QAAE;;AACnB,uBAAK,AAAW,2BAAS,MAAM;AACP,UAAtB,AAAW,sBAAI,MAAM;;;AAIzB,UAAI,AAAO,MAAD,IAAI;AACoB,QAAhC,SAAS,uBAAO,MAAM,GAAG,EAAE,IAAI;AACR,QAAlB,AAAI,iBAAC,GAAG,EAAI,MAAM;AACc,QAArC,AAAO,MAAD,IAAI,cAAc,YAAY;AAGlC,QAFF,AAAO,MAAD,IAAI,WAAW,QAAC;AACO,UAA3B,AAAO,MAAD,MAAM,gBAAW,GAAG;;AAG5B,sBAAS;AAEO,UAAd,AAAY,YAAA;;;AAIhB,YAAO,OAAM;IACf;YAOQ;AACwB,MAAzB,AAAW,yBAAO,MAAM;AAC7B,oBAAS,AAAW,+BAAY;AAEpB,MAAZ,AAAK;IACP;WAQW;;AAC6B,MAAtC,AAAQ,qBAAK,AAAwB,6BAAP,MAAM;AACpC,oBAAI,AAAO,MAAD,eAAa,aAA2B,YAAf,AAAM,MAAA,QAAC,SAAW;AACT,aAA1C,MAAM;aAAC;QAAD,cAAQ,WAAR,qBAAW,AAAyB,eAAnB,AAAM,MAAA,QAAC;;AAGhC,uBAAI,eAAY;AAEC,QAAf,gBAAW;AAOT,QANG,AAAQ,oBAAO,MAAM,EAAE,QAAC;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gCAAkB,WAAf,cAAc,eAAS,IAAA,AAAC,CAAA;AACQ,YAAlD,AAAO,kBAAoB,WAAd,cAAc,WAAC,CAAC,IAAG,AAAM,MAAA,QAAC;;AAEzB,UAAhB,gBAAW;AACS,UAApB;;;AAIsB,QAAxB,AAAa,wBAAI,MAAM;;IAE3B;;AASE,oBAAS,AAAa,gDAAmB,eAAY;AAC/C,mBAAY,AAAa,6BAAS;AACrB,QAAjB,AAAK,4BAAO,IAAI;;IAEpB;;AAQyB,MAAvB,AAAQ,qBAAK;AAET,uBAAkB,AAAK;AAC3B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,UAAU,GAAE,IAAA,AAAC,CAAA;AAC3B,kBAAW,AAAK,qBAAS;AAChB,QAAT,WAAJ,GAAG;;AAGiB,MAAjB,oBAAe;AACC,MAAhB,gBAAW;AACI,MAAf,gBAAW;AAEM,MAAjB,AAAQ;IACf;;AAOW;IAAY;;;AAGK,MAA1B,AAAQ,qBAAK;AACY,MAApB,qBAAgB;AACI,MAApB,oBAAe;AACpB,UAAI,AAAU,cAAQ;AAGN,QAAd,AAAK;;AAEa,MAAf,AAAQ;AACa,MAArB,kBAAa;AACE,WAAf;0BAAQ;IACf;YAOQ;AACiB,MAAvB,AAAQ,qBAAK;AAEC,MAAd,AAAK;AACe,MAAf,AAAQ;AACa,MAArB,kBAAa;AACiB,MAAnC,AAAK,UAAK,SAAc,WAAL,KAAK,WAAC;AAEzB,oBAAS,mCAAuB;AACd,QAAhB,AAAK;;IAET;;AAQE,oBAAS,gCAAqB,qBAAe,MAAO;AAEpD,UAA0B,aAAjB,AAAQ,uCAAiB;AACA,QAAhC,AAAQ,qBAAK;AACO,QAAf,AAAQ;AACmB,QAAhC,AAAK,aAAQ;AACY,QAApB,oBAAe;;AAEhB,oBAAa,AAAQ;AACqC,QAA9D,AAAQ,qBAAK,2CAA2C,KAAK;AAErC,QAAnB,oBAAe;AAChB,oBAAQ,gBAAM,gDAAuB,KAAK,KAAG;AAC/C,wBAAI,qBAAe;AAEiB,UAApC,AAAQ,qBAAK;AACiC,UAA9C,aAAQ,qBAAqB,AAAQ;AACI,UAAzC,aAAQ,gBAAgB,AAAQ;AAGhC,wBAAI,qBAAe;AAYjB,UAVF,qBAAe,QAAE;;AACf,kBAAI,GAAG,IAAI;AAC8B,gBAAvC,AAAQ,qBAAK;AACO,gBAApB,oBAAe;AACJ,gBAAX;AACuC,gBAAvC,aAAQ,mBAAsB,WAAH,GAAG,WAAC;;AAEE,gBAAjC,AAAQ,qBAAK;AACA,gBAAb;;;;AAK0C,QAA3C,AAAK,gBAAI,uBAAY,cAAM,AAAM,KAAD;;IAEzC;;AAQM,oBAAe,AAAQ;AACF,MAApB,oBAAe;AACA,MAAf,AAAQ;AACS,MAAtB,AAAK;AAC6B,MAAlC,AAAK,aAAQ,aAAa,OAAO;IACnC;;;;QA1dS;QAAS;IAzBE;IACf;IACD;IAEC;IACD;IACA;IACA;IACA;IACA;IACK;IACF;IACA;IACF;IACD;IACC;IACA;IACA,qBAAe;IAEC;IACb;IACA;IACH;IACA;AAEL;AAC2C,IAAzC,WAAkB,KAAR,OAAO,QAAP,OAA6B;AAEP,UAAhC,OAAO;SAAC;IAAD,AAAS,kBAAA,OAAT,eAAa,gBAAJ;AACF,IAAT,YAAO;AACE,IAAT,YAAO;AACU,IAAjB,eAAU,OAAO;AAC8B,IAA/C,oBAAuC,aAAxB,AAAO,OAAA,QAAC,iBAAmB;AAEO,gCADjD,iBAC+B,OAAhC,AAAO,OAAA,QAAC,iCAAD;AACkD,6BAAxD,iBAAiD,OAA7B,AAAO,OAAA,QAAC,8BAAD,OAAyB;AACU,gCAA9D,iBAAuD,OAAhC,AAAO,OAAA,QAAC,iCAAD,OAA4B;AACC,+BAA3D,iBAAqD,OAA/B,AAAO,OAAA,QAAC,gCAAD,OAA2B;AAIxB,IAHhC,eAAU,+BACD,6BACA,mCACG;AACyB,mBAArC,iBAA6B,OAAnB,AAAO,OAAA,QAAC,oBAAD,OAAe;AACX,IAArB,kBAAa;AACJ,eAAT,mBAAM,GAAG;AACM,IAAf,kBAAa;AACE,IAAf,gBAAW;AACK,IAAhB,gBAAW;AACM,IAAjB,oBAAe;AACI,IAAnB,eAAU;AACS,IAAnB,eAAU;AACmC,IAA7C,mBAAqC,aAAvB,AAAO,OAAA,QAAC,gBAAkB;AAC7C,kBAAS,mBAAa,AAAK,AAAM;EACnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAieM,eAAS,aAAJ,aAAM,SAAS,gBAAsB,oBAAR,mCAAQ;AAC9C,UAAY,aAAR,iBAAU;AACR,mBAAY,AAAS;AACrB,wBAAkC,CAAhB,AAAU,aAAf,IAAI,iBAAG,iBAAU,EAAE;AACiC,QAArE,KAA+B,CAAb,AAAQ,CAAd,aAAL,IAAI,IAAG,gBAAc,OAAM,IAAI,AAAG,EAAD,GAAG,SAAS,GAAG,AAAG,EAAD,GAAG,SAAS;;AAGvE,YAAO,oBAAS,mBAAS,EAAE,EAAE,aAAO;IACtC;;AAQc,MAAZ,gBAAW;IACb;YAOQ;AAAQ,yCAAM,GAAG;;YAOjB;AAAQ,0CAAO,GAAG;;eAOf;AAAW,6CAAU,MAAM;;;;QArD5B;QAAW;QAAa;QAAY;IAH1C;IACA;gBAGM,gBAAE,GAAG;iBACJ,gBAAE,GAAG;oBACF,gBAAE,MAAM;AAC4B,oBAAhD,gBAAqB,WAAJ,WAAP,MAAM,QAAG,mBAAY,WAAP,MAAM,SAAI,OAAI,MAAM,GAAG;AACnC,IAAZ,gBAAW;EACb;;;;;;;;;;;;;;;;;;;;;;;;;;MAxhBW,eAAO;YAAG,oBAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICQxB;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;IACA;;;;;;IACC;;;;;;IACE;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;IACS;;;;;;IACT;;;;;;IACG;;;;;;IACF;;;;;;IACD;;;;;;IACA;;;;;;IACC;;;;;;IACD;;;;;;IACC;;;;;;IACD;;;;;;IACG;;;;;;IACF;;;;;;IACD;;;;;;IACA;;;;;;IACE;;;;;;IACA;;;;;;IACF;;;;;;IACM;;;;;;IACL;;;;;;IACA;;;;;;IACD;;;;;;oBA4HY,MAAO;;;;AACqB,QAA1C,AAAQ,sBAAK,AAA4B,mCAAN,IAAI;AACnC,oBAAY,8BAAU;AAGI,QAA9B,AAAK,KAAA,QAAC,OAAgB;AAGG,QAAzB,AAAK,KAAA,QAAC,aAAe,IAAI;AAGrB,uBAAsC,KAAvB,AAAgB,6BAAC,IAAI,SAAL,OAAU;AAG7C,YAAS,WAAM,MAAM,AAAK,AAAiB,KAAjB,QAAC,OAAc;AAErC,wBAAuB,qDAAY,IAAI,GAAE,0CAC3C,SAAS,KAAK,EACd,UAAU,MACV,UAA0B,MAAV,WAAP,OAAO,WAAC,kBAAD,OAAkB,mBAClC,aAAgC,OAAb,WAAP,OAAO,WAAC,sBAAD,OAAqB,uBACxC,SAAwB,OAAT,WAAP,OAAO,WAAC,kBAAD,OAAiB,mBAChC,WAA4B,OAAX,WAAP,OAAO,WAAC,oBAAD,OAAmB,qBACpC,SAAwB,OAAT,WAAP,OAAO,WAAC,kBAAD,OAAiB,mBAChC,eAAoC,OAAf,WAAP,OAAO,WAAC,wBAAD,OAAuB,yBAC5C,UAA0B,OAAV,WAAP,OAAO,WAAC,mBAAD,OAAkB,oBAClC,gBAAsC,OAAhB,WAAP,OAAO,WAAC,yBAAD,OAAwB,0BAC9C,eAAoC,OAAf,WAAP,OAAO,WAAC,wBAAD,OAAuB,yBAC5C,sBACiC,OAAtB,WAAP,OAAO,WAAC,+BAAD,OAA8B,gCACzC,mBAA4C,OAAnB,WAAP,OAAO,WAAC,4BAAD,OAA2B,6BACpD,eAAoC,QAAf,WAAP,OAAO,WAAC,yBAAD,OAAuB,0BAQ5C,sBACiC,QAAtB,WAAP,OAAO,WAAC,gCAAD,OAA8B,iCACzC,iBAAwC,QAAjB,WAAP,OAAO,WAAC,2BAAD,OAAyB,4BAGhD,mBAA4C,QAAnB,WAAP,OAAO,WAAC,6BAAD,OAA2B,8BACpD,aAAoB,WAAP,OAAO,WAAC;AAGvB,cAAO,UAAS;;IAClB;;AAOM;AACJ,UAAS,wBAAmB,kBACxB,oDACK,AAAW,2BAAS;AACJ,QAAvB,YAAY;YACP,eAAS,AAAW;AAEgC,QAAnD,gBAAI,cAAM,UAAK,SAAS;AAC9B;;AAE8B,QAA9B,YAAiB,AAAU,uBAAC;;AAEH,MAAtB,kBAAa;AAGlB;AAC6C,QAA3C,YAAY,AAAK,qBAAgB,SAAS;;YACnC;AACoB,QAAtB,AAAW,2BAAS;AACd,QAAX,AAAK;AACL;;AAGc,MAAN,WAAV,SAAS;AACmB,MAA5B,AAAK,kBAAa,SAAS;IAC7B;iBAMa;;AACyC,MAApD,AAAQ,sBAAK,AAAsC,sCAAjB,SAAS,eAAT,OAAW;AAE7C,UAAS,kBAAa;AAC+C,QAAnE,AAAQ,sBAAK,AAAqD,+EAAjB,OAAW;AAC7B,QAA1B,AAAU;;AAIS,uBAArB,4BAAY,SAAS;AAOwB,aAJlD,SAAS;MACL,wBAAG,SAAS,QAAC,KAAM;MACnB,wBAAG,UAAU,QAAC,UAAW,8BAAS,MAAM;MACxC,wBAAG,SAAS,QAAC,KAAM,aAAQ,CAAC;MAC5B,wBAAG,SAAS,QAAC,KAAM,aAAQ;;IACjC;UAOM;AACqC,MAAzC,AAAQ,sBAAK,AAA2B,kCAAN,IAAI;AAClC,sBAAY,AAAK,qBAAgB,IAAI,EAAE,uCAAC,SAAS;AACjD,mBAAS;AACT;AACyB,MAA7B,wCAAwB;AAEpB,4BAAkB,QAAC;AACrB,YAAuB,YAAnB,yBAAsB;AACpB,mCACoB,AAAS,YAAxB,qBAAkB,qBAAmB,WAAV,SAAS;AACR,UAArC,SAAS,AAAO,MAAD,IAAI,kBAAkB;;AAEvC,YAAI,MAAM,EAAE;AAEkC,QAA9C,AAAQ,sBAAK,AAAgC,gCAAb,IAAI;AAGlC,QAFQ,WAAV,SAAS,WAAM,kCACb,yCAAC,QAAQ,QAAQ,QAAQ;AAmCzB,QAjCQ,WAAV,SAAS,WAAM,UAAU,QAAC;;AACxB,gBAAI,MAAM,EAAE;AACZ,gBAAI,AAAO,WAAM,WAAH,GAAG,WAAC,YAAW,AAAQ,YAAM,WAAH,GAAG,WAAC;AACE,cAA5C,AAAQ,sBAAK,AAA8B,gCAAX,IAAI;AACpB,cAAhB,iBAAY;AACgB,cAA5B,UAAK,aAAa,SAAS;AAC3B,kBAAI,AAAU,SAAD,IAAI,MAAM;AAC8B,cAArD,wCAAwB,AAAY,gBAAa,WAAV,SAAS;AAEc,cAA9D,AAAQ,sBAAK,AAAgD,gDAAlB,SAAS,eAAT,OAAW,2BAAK;AAC3D,kBAAmB,sCAAV;AAgBL,gBAfc,AAAqB,sCAA/B,sBAAqC;AACzC,sBAAI,MAAM,EAAE;AACZ,sBAAI,AAAS,aAAG,iBAAY;AACiC,kBAA7D,AAAQ,sBAAK;AAEJ,kBAAF,WAAP,OAAO;AAEgB,kBAAvB,kBAAa,SAAS;AAGpB,kBAFQ,WAAV,SAAS,WAAM,kCACb,yCAAC,QAAQ;AAEe,kBAA1B,UAAK,WAAW,SAAS;AACT,kBAAhB,YAAY;AACK,kBAAjB,iBAAY;AACL,kBAAP;;;;AAI0C,cAA9C,AAAQ,sBAAK,AAAgC,gCAAb,IAAI;AAEsB,cAD1D,UAAK,gBACD,0CAAC,SAAS,eAAe,aAAuB,WAAV,SAAS;;;;AAKrD,4BAAkB;AACpB,YAAI,MAAM,EAAE;AAGC,QAAb,SAAS;AAEA,QAAF,WAAP,OAAO;AAEU,QAAP,WAAV,SAAS;AACO,QAAhB,YAAY;;AAIV,oBAAU,QAAC;AACP,2BAAe,SAAS;AACb,QAAjB,AAAe,eAAA;AAEsD,QAArE,AAAQ,sBAAK,AAAuD,gCAApC,IAAI,8CAA4B,GAAG;AAGA,QADnE,UAAK,gBACD,0CAAC,SAAS,AAAmB,2BAAJ,GAAG,GAAG,aAA0B,WAAb,YAAY;;AAG1D,6BAAmB,QAAC,KAAM,AAAO,OAAA,CAAC;AAGlC,oBAAU,QAAC,KAAM,AAAO,OAAA,CAAC;AAGzB,sBAAY,QAAC;;AACf,YAAI,SAAS,IAAI,qBAAW,WAAH,EAAE,WAAmB,WAAV,SAAS;AACwB,UAAnE,AAAQ,sBAAK,AAAqD,sBAAjD,EAAE,eAAF,OAAI,2BAAK,2CAAsB,SAAS,gBAAT,OAAW,4BAAK;AAC/C,UAAjB,AAAe,eAAA;;;AAWlB,MAND,UAAU;AAC8B,QAA5B,WAAV,SAAS,UAAK,QAAQ,eAAe;AACN,QAArB,WAAV,SAAS,UAAK,SAAS,OAAO;AACU,QAA9B,WAAV,SAAS,UAAK,SAAS,gBAAgB;AAClB,QAArB,SAAI,SAAS,OAAO;AACO,QAA3B,SAAI,aAAa,SAAS;;AAGW,MAA7B,WAAV,SAAS,WAAM,QAAQ,eAAe;AACN,MAAtB,WAAV,SAAS,WAAM,SAAS,OAAO;AACU,MAA/B,WAAV,SAAS,WAAM,SAAS,gBAAgB;AAEb,MAA3B,AAAK,UAAK,SAAS,OAAO;AACO,MAAjC,AAAK,UAAK,aAAa,SAAS;AAEhB,MAAN,WAAV,SAAS;IACX;;AAO6B,MAA3B,AAAQ,sBAAK;AACW,MAAnB,kBAAa;AACwC,MAA1D,wCAAwB,AAAY,gBAAQ,AAAU;AACrC,MAAjB,AAAK,UAAK;AACE,MAAZ,AAAK;AAIL,UAAI,AAAO,WAAQ,mBACF,YAAR,cAAW,SACD,sCAAV;AACgC,QAAvC,AAAQ,sBAAK;AACb,iBAAS,IAAI,GAAG,IAAS,AAAS,wBAAQ,AAAE,CAAD,gBAAG,CAAC,GAAE,IAAA,AAAC,CAAA;AACpB,UAA5B,AAAK,WAAW,AAAQ,qBAAC,CAAC;;;IAGhC;aAMa;;AACX,UAAI,AAAU,cAAQ,mBAClB,AAAO,WAAQ,mBACf,AAAU,cAAQ;AAChB,mBAAO,AAAM,MAAA,QAAC;AACd,mBAAO,AAAM,MAAA,QAAC;AACwC,QAA1D,AAAQ,sBAAK,AAA4C,qCAApB,IAAI,6BAAU,IAAI;AAE5B,QAA3B,AAAK,UAAK,UAAU,MAAM;AAGJ,QAAtB,AAAK,UAAK;AAEV,gBAAQ,IAAI;;;AAEqC,YAA7C,AAAK,iCAAY,AAAK,wCAAY,KAAL,IAAI,QAAJ,OAAQ;AACrC;;;;AAGc,YAAd,AAAK;AACY,YAAjB,AAAK,UAAK;AACV;;;;AAGqD,YAArD,AAAK,aAAQ,0CAAC,SAAS,gBAAgB,QAAQ,IAAI;AACnD;;;;AAGuB,YAAvB,AAAK,UAAK,QAAQ,IAAI;AACI,YAA1B,AAAK,UAAK,WAAW,IAAI;AACzB;;;;AAIoE,QADxE,AACK,sBAAK,AAA6D,uDAAb,mBAAW;;IAEzE;gBAOgB;AACc,MAA5B,AAAK,UAAK,aAAa,IAAI;AACN,gBAAhB,mBAAK,AAAI,IAAA,QAAC;AAC0B,MAApC,AAAU,AAAK,4BAAC,OAAS,AAAI,IAAA,QAAC;AACkB,sBAAhD,iBAAW,AAAK,qCAAe,AAAI,IAAA,QAAC;AACD,0BAAnC,gBAAe,AAAI,IAAA,QAAC;AACa,yBAAjC,gBAAc,AAAI,IAAA,QAAC;AACX,MAAb,AAAK;AAEL,UAAI,AAAS,aAAQ,iBAAY;AACnB,MAAd,AAAK;AAGkC,MAAvC,AAAK,SAAI,uBAAkB;AACW,MAAtC,AAAK,QAAG,uBAAkB;IAC5B;gBAMY;;AACqB,WAA1B;0BAAkB;AAKrB,MAJG,wBAAmB,gBACpB,sDAA+B,MAAR,OAAO,SAAP,OAAyB,aAAb,kCAAe,6BAAe;AACnE,YAAI,AAAS,aAAG,iBAAY;AACL,QAAvB,aAAQ;;IAEZ;;;AAQ6B,WAA3B;0BAAmB;AAMjB,MALF,yBAAoB,gBAAM,qCAAuB,qBAAe;AAEW,QADzE,AACK,sBAAK,AAA8D,0DAAf,oBAAY;AAC/D,QAAN;AACwB,QAAxB,iBAAY;;IAEhB;;AAO8D,MAA5D,AAAK,uBAAiB,kBAAkB,QAAC,KAAM,UAAK;IACtD;;AAOqD,MAA9C,AAAY,+BAAY,GAAQ;AAKf,MAAjB,qBAAgB;AAErB,oBAAS,AAAY;AACD,QAAlB,AAAK,UAAK;;AAEE,QAAZ,AAAK;;IAET;;AAOE,UAAI,aAAiB,mBACO,YAAnB,AAAU,yBAAY,sBACtB,gBAAa,mBACb,AAAY;AACkD,QAArE,AAAQ,sBAAK,AAAuD,uBAAtC,AAAY,6BAAO;AACZ,QAAhC,AAAU,oBAAU;AAGmB,QAAvC,qBAAqB,AAAY;AACpB,QAAlB,AAAK,UAAK;;IAEd;UAUM,KAAK,SAAuB;;AAAQ,uBAAK,GAAG,EAAE,OAAO,EAAE,EAAE;IAAC;SAE3D,KAAK,SAAuB;;AAC4C,MAA3E,AAAK,uBAAiB,iBAAiB,GAAG,WAAW,OAAO,YAAY,EAAE;IAC5E;;;UAUY;UAAM;UAAM;UAAsB;AAC5C,UAAI,AAAU,cAAQ,mBAAc,AAAS,aAAQ;AACnD;;AAGqB,MAAvB,WAAkB,KAAR,OAAO,QAAP,OAAW;AAC6B,MAA3C,WAAP,OAAO,WAAC,YAAoB,CAAN,gBAAgB,WAAP,OAAO,WAAC;AAEnC,mBAAS,0CAAC,QAAQ,IAAI,EAAE,QAAQ,IAAI,EAAE,WAAW,OAAO;AAC3B,MAAjC,AAAK,UAAK,gBAAgB,MAAM;AACJ,MAAvB,AAAY,uBAAI,MAAM;AAC3B,UAAI,QAAQ,IAAI,MAAM,AAAK,AAAuB,UAAlB,SAAS,QAAQ;AACrC,MAAZ,AAAK;IACP;;AAOM,kBAAQ;AACa,QAAvB,aAAQ;AACmD,QAA3D,AAAQ,sBAAK;AACI,QAAjB,AAAU;;AAGR;AACA,4BAAkB,QAAC;AACD,QAApB,SAAI,qCAAW,IAAI;AACM,QAAzB,SAAI,0CAAgB,IAAI;AACjB,QAAP,AAAK,KAAA;;AAIe,MAAtB,OAAO,eAAe;AAElB,2BAAiB;AAEa,QAAhC,UAAK,WAAW,eAAe;AACM,QAArC,UAAK,gBAAgB,eAAe;;AAGtC,UAAI,AAAU,cAAQ,mBAAc,AAAO,WAAQ;AACtB,QAAtB,kBAAa;AAElB,sBAAS,AAAY;AAOjB,UANF,AAAK,UAAK,SAAS,QAAC;AAClB,gBAAmB,YAAV,gBAAa;AACJ,cAAhB,AAAc,cAAA;;AAEP,cAAP,AAAK,KAAA;;;cAGJ,KAAmB,YAAV,gBAAa;AACX,UAAhB,AAAc,cAAA;;AAEP,UAAP,AAAK,KAAA;;;AAIT,YAAO;IACT;YAMQ;AAC2B,MAAjC,AAAQ,sBAAK,AAAmB,2BAAJ,GAAG;AACF,MAA7B,wCAAwB;AACD,MAAvB,AAAK,UAAK,SAAS,GAAG;AACc,MAApC,AAAK,aAAQ,mBAAmB,GAAG;IACrC;YAMQ,QAAS;;;AACf,UAAI,AAAU,cAAQ,mBAClB,AAAO,WAAQ,mBACf,AAAU,cAAQ;AAC+B,QAAnD,AAAQ,sBAAK,AAAqC,0CAAR,MAAM;AAGhB,aAA3B;4BAAmB;AACO,cAA1B;6BAAkB;AAGI,QAAtB,AAAU,mBAAI;AAGG,QAAjB,AAAU;AAGgB,QAA1B,AAAU;AAGW,QAArB,kBAAa;AAGJ,QAAT,UAAK;AAG0C,QAApD,AAAK,UAAK,SAAS,0CAAC,UAAU,MAAM,EAAE,QAAQ,IAAI;AAIlC,QAAhB,mBAAc;AACG,QAAjB,qBAAgB;;IAEpB;mBAQoB;AAChB,YAAA,AAAW,AAAmC,yBAA7B,QAAC,KAAM,AAAS,QAAD,YAAU,CAAC;IAAW;;kCAroB5C,KAAS;;IArCnB;IACA;IACC;IACA;IACE;IACH;IACA;IACC;IACE;IACF;IACA;IACA;IACA;IACE;IACH;IACS;IACT;IACG;IACF;IACD;IACA;IACC;IACD;IACC;IACD;IACG;IACF;IACD;IACA;IACE;IACA;IACF;IACM;IACL;IACA;IACD;AAEJ;AACqC,IAAnC,QAAY,KAAL,IAAI,QAAJ,OAA0B;AAEjC,QAAI,AAAI,GAAD;AACoB,MAApB,WAAU,eAAM,GAAG;AACQ,MAAhC,AAAI,IAAA,QAAC,YAAmB,AAAI;AAC2C,MAAvE,AAAI,IAAA,QAAC,UAAiB,AAAI,AAAO,AAAW,oBAAR,WAAgB,AAAI,AAAO,oBAAG;AACtC,MAA5B,AAAI,IAAA,QAAC,QAAe,AAAI;AACxB,oBAAS,AAAI,oBAAU,AAAI,AAA0B,IAA1B,QAAC,SAAgB,AAAI;UAC3C,eAAI,AAAK,IAAD,eAAa;AACqB,MAA/C,AAAI,IAAA,QAAC,YAAkB,AAAoB,kCAAd,AAAI,IAAA,QAAC;;AAGsC,kBAArE,iBAAS,AAAI,IAAA,QAAC;AAEnB,QAAI,AAAI,IAAA,QAAC,eAAe,mBAAS,AAAK,IAAD,eAAa;AAEP,MAAzC,AAAI,IAAA,QAAC,kBAAe,eAAS,QAAQ;;AAGJ,iBAA9B,kBAAsB,MAAd,AAAI,IAAA,QAAC,iBAAD,OAAa;AAEuC,oBADhE,mBACD,AAAI,IAAA,QAAC;AAML,gBALC,gBAAO,AAAI,IAAA,QACR;AAKJ,iBAAsB,OAAd,AAAI,IAAA,QAAC,kBAAD,OAAa;AAC7B,QAAU,OAAN,KAAK;AACmB,mBAArB,gBAAQ,eAAO,KAAK;UACpB,KAAU,YAAN,KAAK;AACI,MAAb,aAAQ,KAAK;;AAGmB,IAAlC,eAA0B,aAAhB,AAAI,IAAA,QAAC,YAAc;AAI3B,IAHF,YACI,AACA,AAAiC,eAFhB,OAAb,AAAI,IAAA,QAAC,iBAAD,OAAY,qCAEP,gBAAO,SAAS,MAClC;AACwC,IAAvC,kBAAgC,YAAnB,AAAI,IAAA,QAAC,eAAiB;AACL,IAA9B,aAAsB,aAAd,AAAI,IAAA,QAAC,UAAY;AACgB,IAAzC,mBAAkC,YAApB,AAAI,IAAA,QAAC,gBAAkB;AACE,IAAvC,kBAAgC,YAAnB,AAAI,IAAA,QAAC,eAAiB;AACW,0BAA9C,oBAAwC,OAAvB,AAAI,IAAA,QAAC,2BAAD,OAAsB;AACE,IAA7C,yBAAoB,AAAI,IAAA,QAAC;AACkC,sBAA3D,uBAAgC,OAAnB,AAAI,IAAA,QAAC,uBAAD,OAAkB,sBAAC,WAAW;AACE,4BAAjD,iBAA4C,OAAzB,AAAI,IAAA,QAAC,6BAAD,OAAwB;AAChC,IAAf,kBAAa;AACG,IAAhB,mBAAc;AACG,IAAjB,qBAAgB;AACsB,sBAAtC,iBAAgC,OAAnB,AAAI,IAAA,QAAC,uBAAD,OAAkB;AACe,2BAAlD,kBAA0C,OAAxB,AAAI,IAAA,QAAC,4BAAD,OAAuB;AAC5B,IAAjB,kBAAa;AACkC,8BAA/C,iBAAqB,AAAI,IAAA,QAAC;AAE/B,mBAAK,AAAK,IAAD,eAAa,yBACQ,YAA1B,AAAI,IAAA,QAAC,sBAAwB;AAEsC,+BADhE,gBACyB,YAA1B,AAAI,IAAA,QAAC,wBAA8B,AAAI,IAAA,QAAC,uBAAuB;AACnE,qBAAU,AAAkB,qCAAY;AACI,QAArC,AAAiB,8BAAC,aAAe;;;AAIqB,wBAA1D,iBAAoC,OAArB,AAAI,IAAA,QAAC,yBAAD,OAAqC;AAiClD,IAAX,AAAK;EACP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEY,qCAAqB;YAAG;;;MAMzB,wBAAQ;YAAU;;;;;MA3JlB,gBAAO;YAAG,oBAAO;;;;sBCFU;AACpC,UAAI,AAAU,cAAG,IAAI;AACnB,cAAO,uBAAC;;AAEV,YAAO;IACT;uBAEoC,MAAM;AACxC,UAAI,AAAY,gBAAG,IAAI;AACrB,cAAO,gEAAmB,OAAO;YAC5B,KAAI,AAAU,cAAG,IAAI;AAC1B,yBAAW,WAAP,OAAO,WAAC,gBAAiB;AAC3B,gBAAO,oDAAa,OAAO;;AAE3B,2BAAW,WAAP,OAAO,WAAC,WAAY,QAAO,MAAO,wDAAe,OAAO;AAC1B,UAAlC,WAAM,wBAAW;;;AAG8B,QAAjD,WAAM,8BAAiB,AAAyB,gCAAL,IAAI;;IAEnD;;;;EACF;;;;;;;;;;;;;;;;;;IC7BS;;;;;;IACA;;;;;;IACH;;;;;;IACC;;;;;;IACD;;;;;;IACG;;;;;;IACF;;;;;;IACE;;;;;;IACF;;;;;;IACE;;;;;;IACF;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;YAoCQ,KAAM;;AACjB,oBAAI,AAAK,kBAAa;AACoD,QAAxE,AAAK,UAAK,SAAS,0CAAC,OAAO,GAAG,EAAE,QAAQ,IAAI,EAAE,QAAQ;;AAEF,QAApD,AAAQ,kCAAK,AAAsC,sCAAZ,GAAG,oBAAG,IAAI;;IAErD;;AAOE,UAAI,AAAS,aAAQ,mBAAc,AAAG,OAAQ;AACjB,QAAtB,kBAAa;AACL,QAAb,AAAK;;IAET;;AAOE,UAAI,AAAU,cAAQ,mBAAc,AAAO,WAAQ;AACnC,QAAd,AAAK;AACS,QAAd,AAAK;;IAET;SAOU;AACR,UAAI,AAAO,WAAQ;AACE,QAAnB,AAAK,WAAM,OAAO;;AAEoB,QAAtC,WAAM,wBAAW;;IAErB;;AAO0B,MAAnB,kBAAa;AACE,MAAf,gBAAW;AACC,MAAjB,AAAK,UAAK;IACZ;WAOO;AACD,mBACa,kCAAa,IAAI,eAAmB,AAAO;AACvC,MAArB,AAAK,cAAS,MAAM;IACtB;aAIS;AACoB,MAA3B,AAAK,UAAK,UAAU,MAAM;IAC5B;;AAO4B,MAArB,kBAAa;AACA,MAAlB,AAAK,UAAK;IACZ;;uCA/Gc;IAfP;IACA;IACH;IACC;IACD;IACG;IACF;IACE;IACF;IACE;IACF;IACA;IACE;IACF;AAEL;AAC0B,gBAAnB,mBAAO,AAAI,IAAA,QAAC;AACe,oBAA3B,mBAAW,AAAI,IAAA,QAAC;AACG,gBAAnB,gBAAO,AAAI,IAAA,QAAC;AACW,kBAAvB,iBAAS,AAAI,IAAA,QAAC;AACO,iBAArB,gBAAQ,AAAI,IAAA,QAAC;AAC0B,0BAAvC,mBAAiB,AAAI,IAAA,QAAC;AACuB,6BAA7C,iBAAoB,AAAI,IAAA,QAAC;AACV,IAAf,kBAAa;AACiB,iBAA9B,iBAAQ,AAAI,IAAA,QAAC;AACU,kBAAvB,uBAAS,AAAI,IAAA,QAAC;AACiB,sBAA/B,iBAAa,AAAI,IAAA,QAAC;EAezB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA3Cc,4BAAO;YAAG,oBAAO;;;;;;;;ICaxB;;;;;;IAEF;;;;;;IACA;;;;;;;AAoBQ,MAAX,AAAK;IACP;UAOM;AACA,iBAAO;AAEgB,MAAtB,kBAAa;AAEd,kBAAQ;AACY,QAAtB,AAAQ,+BAAK;AACa,QAA1B,AAAK,IAAD,cAAc;AACT,QAAF,WAAP,OAAO;;AAGT,UAAiB,YAAR,cAAW,sBAAa,eAAY;AACvC,oBAAQ;AAEZ,YAAiB,YAAR,cAAW;AACyC,UAA3D,AAAQ,+BAAK;AACN,UAAP,QAAA,AAAK,KAAA;AAIH,UAHF,AAAK,UAAK,gBAAgB,QAAC;AACiB,YAA1C,AAAQ,+BAAK;AACb,gBAAY,CAAN,QAAF,AAAE,KAAK,GAAP,OAAW,GAAG,AAAK,AAAE,KAAF;;;AAI3B,yBAAS,eAAY;AACwC,UAA3D,AAAQ,+BAAK;AACN,UAAP,QAAA,AAAK,KAAA;AAIH,UAHF,AAAK,UAAK,SAAS,QAAC;AACwB,YAA1C,AAAQ,+BAAK;AACb,gBAAY,CAAN,QAAF,AAAE,KAAK,GAAP,OAAW,GAAG,AAAK,AAAE,KAAF;;;;AAIpB,QAAP,AAAK,KAAA;;IAET;;AAOyB,MAAvB,AAAQ,+BAAK;AACM,MAAd,eAAU;AACF,MAAb,AAAK;AACY,MAAjB,AAAK,UAAK;IACZ;WAMO;AACD,iBAAO;AAC2B,MAAtC,AAAQ,+BAAK,AAAwB,+BAAL,IAAI;AAChC,qBAAW,SAAC,QAAS,OAAO;;;AAE9B,YAAI,AAAU,cAAG,AAAK,IAAD;AACN,UAAb,AAAK,IAAD;;AAIN,YAAI,AAAQ,YAAS,WAAN,MAAM,WAAC;AACN,UAAd,AAAK,IAAD;AACJ,gBAAO;;AAIY,QAArB,AAAK,IAAD,UAAU,MAAM;AACpB,cAAO;;AAKkD,MAD9C,mCAAc,IAAI,gCACV,AAAO,mCAAsB,QAAQ;AAG1D,UAAI,aAAiB;AAEC,QAAf,eAAU;AACU,QAAzB,AAAK,UAAK;AAEV,YAAI,AAAO,WAAQ;AACN,UAAX,AAAK;;AAE+D,UAApE,AAAQ,+BAAK,AAAsD,gDAAb,mBAAW;;;IAGvE;;AAOM,iBAAO;AAEP,kBAAQ,QAAE;;AACwB,QAApC,AAAQ,+BAAK;AAGX,QAFF,AAAK,IAAD,OAAO,CACT,yCAAC,QAAQ;;AAIb,UAAI,AAAO,WAAQ;AACuB,QAAxC,AAAQ,+BAAK;AACN,QAAP,AAAK,KAAA;;AAI+C,QAApD,AAAQ,+BAAK;AACW,QAAxB,AAAK,UAAK,QAAQ,KAAK;;IAE3B;UAQW;AACL,iBAAO;AACU,MAAhB,gBAAW;AACZ,uBAAa,QAAC;AACI,QAApB,AAAK,IAAD,YAAY;AACE,QAAlB,AAAK,IAAD,MAAM;;AAMV,MAHW,mCAAc,OAAO,mBAAuB,+BAC3C,QAAC;AACiB,UAA9B,AAAK,IAAD,SAAS,IAAI,EAAE,UAAU;;IAEjC;;;AAOM,mBAAmB,uBAAN,OAAS;AACtB,6BAAc,eAAS,UAAU;AACjC,iBAAO;AAGX,uBAAS,wBAAqB;AAE+B,QAD3D,AAAK,KAAA,QAAM,qBACE,AAAM,AAAuB,+DAAc;;AAG1D,UAAwB,YAAf,qBAAkB,qBAAU,AAAM,KAAD,eAAa;AACrC,QAAhB,AAAK,KAAA,QAAC,OAAS;;AAIjB,UAAS,aAAQ,SACX,AAAQ,YAAG,MAAM,IAAS,cAAQ,OAC/B,AAAO,WAAG,MAAM,IAAS,cAAQ;AAClB,QAAtB,OAAO,AAAe,eAAN;;AAGd,wBAAc,eAAO,KAAK;AAG9B,qBAAgB,WAAZ,WAAW;AACgB,QAA7B,cAAc,AAAe,eAAZ,WAAW;;AAG1B,iBAAY,AAAS,yBAAS;AAClC,YAAO,AAAO,AACJ,AAC6C,AAC9C,AACK,OAJD,GACT,qBACC,IAAI,GAAG,AAAI,AAAgB,mBAAT,iBAAW,MAAW,iBACzC,IAAI,gBACC,6CACL,WAAW;IACjB;;qDAnMqB;IAVd,cAAO;IAET;IACA;AAOwB,gEAAM,IAAI;AACjC,sBAAe,AAAa,IAAT,IAAI,mBAAQ,AAAI,IAAA,QAAC;AACxC,QAAqB,WAAW;AACH,MAAtB,sBAAiB;;EAE1B;;;;;;;;;;;;;;;;;;;;;;;;;;ICvBI;;;;;;IACC;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACJ;;;;;;IA0BC;;;;;;YAMQ;;;AACM,MAAjB,QAAY,KAAL,IAAI,QAAJ,OAAQ;AACS,MAAxB,AAAI,IAAA,QAAC,OAAS,AAAK;AACC,MAApB,AAAI,IAAA,QAAC,MAAa;AACE,MAApB,AAAI,IAAA,QAAC,MAAa;AACiB,MAAnC,AAAI,IAAA,QAAC,UAAsB,yBAAN,OAAS;AACc,MAA5C,AAAI,IAAA,QAAC,kBAAyB;AACM,MAApC,AAAI,IAAA,QAAC,cAAqB;AAac,MAAxC,AAAI,IAAA,QAAC,gBAAuB;AAE5B,YAAO,+BAAQ,IAAI;IACrB;YAQQ,MAAM;AACR,qBAAkB,EAAF,OAAL,IAAI;AACf,gBACA,AAAK,aAAQ,+BAAC,UAAU,QAAQ,QAAQ,IAAI,EAAE,YAAY,QAAQ;AACjD,MAAjB,WAAJ,GAAG,SAAI,WAAW,EAAE;AAGlB,MAFE,WAAJ,GAAG,SAAI,SAAS,QAAC;AACe,UAA9B,aAAQ,kBAAkB,GAAG;;AAEb,qBAAb,6BAAU,GAAG;IACpB;;AAO0B,MAAxB,AAAQ,2BAAK;AACT,gBAAM,AAAK;AAGb,MAFE,WAAJ,GAAG,SAAI,QAAQ,QAAC;AACF,UAAZ,YAAO,IAAI;;AAIX,MAFE,WAAJ,GAAG,SAAI,SAAS,QAAC;AACe,UAA9B,aAAQ,kBAAkB,GAAG;;AAEb,qBAAb,6BAAU,GAAG;IACpB;;6CAjFiB;;IAZb;IACC;IACA;IACG;IACA;IACJ;IA0BC,yBAAiB;AAnBG,wDAAM,IAAI;AACW,0BAAvC,gBAAiB,AAAI,IAAA,QAAC;AACoC,wBAA1D,iBAAoC,KAArB,AAAI,IAAA,QAAC,uBAAD,OAAqC;AAEzD,gBAAQ,AAAS,aAAG,AAAO,AAAS;AACpC,eAAO,AAAO,AAAS;AAG3B,QAAI,AAAK,IAAD;AACqB,MAA3B,OAAO,KAAK,GAAG,QAAQ;;AAIU,IAD9B,UAAkD,aAA7C,AAAI,IAAA,QAAC,aAAe,AAAO,AAAS,oDACtC,eAAM,IAAI,GAAK,AAAI,IAAA,QAAC;AACK,IAA5B,UAAoB,aAAf,AAAI,IAAA,QAAC,WAAa,KAAK;EACnC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4EO;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IACC;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IACQ;;;;;;IACL;;;;;;IACY;;;;;;IACf;;;;;;;;AA0BU,gBAAW,WAAM;AACzB,iBAAO;AAEX;AACsD,QAApD,AAAQ,2BAAK,AAAsC,uBAArB,eAAO,gBAAS;AACI,QAAlD,AAAI,GAAD,MAAW,aAAa,kBAAiB;AAE5C;AACE,cAAkC,kDAAzB,OAAc,kBAAc;AAGjC,YAFG,AAAa,4BAAQ,SAAC,GAAG;AACF,cAA1B,AAAI,GAAD,qCAAkB,CAAC,sBAAE,CAAC;;;;cAGtB;;AAIT,YAAI,AAAO,WAAQ;AACjB;AACE,0BAAS;AACyD,cAAhE,AAAI,GAAD,kBAAkB,gBAAgB;;AAE2B,cAAhE,AAAI,GAAD,kBAAkB,gBAAgB;;;gBAEhC;;;AAKX;AACuC,UAArC,AAAI,GAAD,kBAAkB,UAAU;;cACxB;;AA2CP,QApBF,wBAAmB,AAAI,AAAmB,GAApB,6BAA2B,QAAC;AAChD,cAAI,AAAI,AAAW,GAAZ,gBAAe;AAChB;AACJ;AACqD,cAAnD,cAAc,AAAI,GAAD,mBAAmB;;kBAC7B;;AAGT,gBAAgB,YAAZ,WAAW,EAAI;AACe,cAAhC,AAAI,GAAD,gBAAgB;;;AAGvB,cAAI,MAAK,AAAI,GAAD,aAAa;AACzB,cAAI,AAAI,QAAG,AAAI,GAAD,WAAW,AAAK,SAAG,AAAI,GAAD;AACrB,YAAb,AAAK,IAAD;;AAIqC,YAAnC,gBAAI,cAAM,AAAK,IAAD,SAAS,AAAI,GAAD;;;AAKC,QAArC,AAAQ,2BAAK,AAAuB,uBAAN;AACX,QAAnB,AAAI,GAAD,MAAW;;YACP;AAIoB,QAArB,gBAAI,cAAM,aAAQ,CAAC;AACzB;;IAEJ;;AAOsB,MAApB,AAAK,UAAK;AACI,MAAd,AAAK;IACP;WAMO;AACkB,MAAvB,AAAK,UAAK,QAAQ,IAAI;AACN,MAAhB,AAAK;IACP;YAMQ;AACiB,MAAvB,AAAK,UAAK,SAAS,GAAG;AACJ,MAAlB,AAAK,aAAQ;IACf;YAMS;;;AACP,UAAS,AAAI,YAAG;AACd;;AAGF,qBAAI,AAAK;;AAEmB,aAA1B;4BAAkB;AACK,QAAvB,wBAAmB;;AAGrB,UAAI,SAAS,IAAI;AACf;AACkB,UAAX,AAAI;;cACF;;;AAKI,MAAV,WAAM;IACb;;;AAOM;AACJ;AACM;AACJ;AAC0D,UAAxD,cAAmB,AAAI,2BAAkB;;cAClC;;AAGT,YAAgB,YAAZ,WAAW,EAAI;AACgC,UAAjD,QAAyB,MAAb,AAAI,4BAAA,OAAiB,AAAI;;AAET,UAA5B,OAAY,AAAI;;;YAEX;AACQ,QAAf,AAAK,aAAQ,CAAC;;AAEhB,UAAI,QAAQ,IAAI;AACd,YAAS,yBAAL,IAAI,GAAgB,AAAyB,OAAb,WAAL,IAAI;AAClB,QAAjB,AAAK,YAAO,IAAI;;IAEpB;;AAQE,YAAO;IAET;;AAMW;IAAS;;wCA9MR;;IAfL;IACF;IACA;IACA;IACD;IACC;IACA;IACA;IACA;IACD;IACQ;IACL;IACY;IACf;AAEJ;AACuC,kBAAhC,oBAAwB,KAAf,AAAI,IAAA,QAAC,iBAAD,OAAc;AACV,eAAjB,mBAAM,AAAI,IAAA,QAAC;AACY,IAAvB,UAAgB,YAAX,AAAI,IAAA,QAAC,OAAS;AACI,IAAvB,UAAgB,YAAX,AAAI,IAAA,QAAC,OAAS;AACW,IAA9B,aAAsB,aAAd,AAAI,IAAA,QAAC,UAAY;AACN,IAAnB,YAAO,AAAI,IAAA,QAAC;AACS,iBAArB,iBAAQ,AAAI,IAAA,QAAC;AACc,oBAA3B,iBAAW,AAAI,IAAA,QAAC;AACuB,0BAAvC,iBAAiB,AAAI,IAAA,QAAC;AACS,sBAA/B,iBAAa,AAAI,IAAA,QAAC;AACqB,0BAAvC,gBAAiB,AAAI,IAAA,QAAC;AACa,wBAAnC,gBAAe,AAAI,IAAA,QAAC;AAEZ,IAAb,AAAK;EACP;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAxIW,qBAAO;YAAG,oBAAO;;;;MDMjB,yBAAO;YAAG,oBAAO;;;mCELnB;AACL,cAAM;AAEV,aAAS,IAAK,AAAI,IAAD;AACf,UAAI,AAAI,GAAD,eAAa,AAAU,MAAV,AAAI,GAAD,GAAI;AAC8C,MAAzE,MAAA,AAAI,GAAD,IAA8B,AAAM,aAA5B,yBAAoB,SAAF,CAAC,MAAK,mBAAU,yBAA2B,SAAR,AAAG,GAAA,QAAC,CAAC;;AAGvE,UAAO,IAAG;EACZ;mCAQO;AACD,cAAwB;AACxB,gBAAW,WAAH,EAAE,YAAO;AACrB,aAAS,IAAI,GAAG,IAAU,WAAN,KAAK,aAAS,AAAE,CAAD,gCAAG,CAAC,IAAE,IAAA,AAAC,CAAA;AACpC,iBAAgB,WAAJ,WAAL,KAAK,WAAC,CAAC,cAAQ;AACsC,MAAhE,AAAG,GAAA,QAAK,4CAAoB,WAAJ,IAAI,WAAC,OAAW,4CAAoB,WAAJ,IAAI,WAAC;;AAE/D,UAAO,IAAG;EACZ;;;;;;;ICtBS;;;;;;IACH;;;;;;IAEC;;;;;;IACD;;;;;;IACM;;;;;;;AAUJ,gBAAM,AAAK;AACX,sBAAiB;AAErB;AACqC,QAA9B,UAAK,sCAAU,GAAG,GAAE,SAAS;;YAC3B;AACP,cAAO,AAAK,WAAK,SAAS,GAAG;;AAG/B,UAAS,AAAG,AAAW,sBAAG;AACG,QAAtB,sBAAiB;;AAGU,MAA7B,AAAG,qBAAa;AAEG,MAAxB,AAAK;IACP;;;AAYM,YANC;MACD,AAAO,oBAAO,QAAC,KAAM;MACrB,AAAQ,qBAAO,QAAC,KAAM;MACtB,AAAU,uBAAO,QAAc,OAAQ,YAAO,AAAI,GAAD;MACjD,AAAQ,qBAAO,QAAC;AACU,QAA1B,aAAQ;;;IAEd;UAMW;AACY,MAAhB,gBAAW;AAEZ,iBAAO;AACI,QAAb,UAAK;AAOH,QAHI,gBAAI;AACO,UAAf,gBAAW;AACE,UAAb,UAAK;;;AAIL,kBAAQ,AAAQ,OAAD;AAkBjB,MAfF,AAAQ,OAAD,WAAS,QAAC;AAcb,QAbW,kDAAa,MAAM,oBACZ,iCAA4B,gBAAgB,QAAC;AAI/D;AAEe,cAAb,AAAG,aAAK,IAAI;;kBACL;AAC8C,cAArD,AAAQ,oDAAK;;AAGf,gBAAY,CAAN,QAAF,aAAE,KAAK,IAAP,OAAW,GAAG,AAAI,AAAE,IAAF;;;IAG5B;;;AAMkB,YAAX;2BAAI;IACX;;;AAMM,mBAAmB,yBAAN,OAAS;AACtB,6BAAc,eAAS,QAAQ;AAC/B,iBAAO;AAGX,UAAS,aAAQ,SACX,AAAM,UAAG,MAAM,IAAS,cAAQ,OAC7B,AAAK,SAAG,MAAM,IAAS,cAAQ;AAChB,QAAtB,OAAO,AAAe,eAAN;;AAIlB,UAA2B,YAAlB,wBAAqB;AAE+B,QAD3D,AAAK,KAAA,QAAM,qBACE,AAAM,AAAuB,+DAAc;;AAI1D,UAAwB,YAAf,qBAAkB;AACT,QAAhB,AAAK,KAAA,QAAC,OAAS;;AAGb,wBAAc,eAAO,KAAK;AAG9B,qBAAgB,WAAZ,WAAW;AACgB,QAA7B,cAAc,AAAe,eAAZ,WAAW;;AAG1B,iBAAY,AAAS,yBAAS;AAClC,YAAO,AAAO,AACJ,AAC6C,AAC9C,AACK,OAJD,GACT,qBACC,IAAI,GAAG,AAAI,AAAgB,mBAAT,iBAAW,MAAW,iBACzC,IAAI,gBACC,6CACL,WAAW;IACjB;;yDA7HuB;IAPhB,eAAO;IACV;IAEC;IACD;IACM;AAEqB,oEAAM,IAAI;AACnC,sBAAe,AAAa,IAAT,IAAI,mBAAQ,AAAI,IAAA,QAAC;AACN,IAA7B,sBAAiB,CAAC,WAAW;AACgB,6BAA7C,gBAAoB,AAAI,IAAA,QAAC;AACI,IAA7B,iBAAY,AAAI,IAAA,QAAC;EACxB;;;;;;;;;;;;;;;;;;;;MAfc,8CAAO;YACjB,oBAAO;;;;;;;;;;;;ICcP;;;;;;IACU;;;;;;IACF;;;;;;IACE;;;;;;IACE;;;;;;IACT;;;;;;IAsCF;;;;;;;AAOH,UAAS,eAAU;AACG,QAAf,AAAO;AACM,QAAb,cAAS;;AAGhB,UAAS,aAAQ;AACG,QAAb,AAAK;AACM,QAAX,YAAO;AACM,QAAb,cAAS;;AAED,MAAT;IACR;;;AAOgB,6CAAS,AAAS,8BAAc;AAEzB,YAAhB;2BAAQ;AACK,MAAb,cAAS;AAEK,MAAnB,AAAO,MAAD,SAAS;AACQ,MAAvB,AAAO,MAAD,OAAC,mBAAM,AAAK;AAGhB,MAFF,AAAO,AAAQ,MAAT,kBAAgB,QAAC;AACM,QAA3B,aAAQ;;AAGI,+CAAW,AAAS,AAA8B,mCAAT,iBAAU;AACjE,UAAI,QAAQ,IAAI;AACoC,QAAlD,AAAS,AAAW,QAAZ,yBAAyB,MAAM,EAAE,QAAQ;;AAEF,QAAd,CAAlB,OAAd,AAAS,8BAAA,OAAQ,AAAS,oCAAa,MAAM;;AAE5B,MAAf,cAAS,MAAM;AAEhB,sBAAY,AAAO,AAAU,AAAU,2CAAS;AAEpD,UAAI,SAAS;AAKT,QAJF,gBAAM,qCAAuB,OAAM;AAC7B,uBAAS,AAAS,8BAAc;AACR,UAA5B,AAAS,AAAK,4BAAO,MAAM;AACZ,UAAf,AAAO,MAAD;;;IAGZ;YAQQ,MAAM;AACZ,UAAS,AAAK,aAAG;AACH,2CAAO,AAAS,8BAAc;AAC1B,+CAAO,AAAS,8BAAc;AAC1C,iBAAU,gBAAW,AAA0B,yBAAP;AAEjB,QAA3B,AAAK,IAAD,aAAa;AACe,QAAhC,AAAK,AAAM,IAAP,oBAAkB;AACI,QAA1B,AAAK,AAAM,IAAP,eAAa;AACU,QAA3B,AAAK,AAAM,IAAP,gBAAc;AACF,QAAhB,AAAK,IAAD,UAAU,EAAE;AACI,QAApB,AAAK,IAAD,UAAU;AAC8B,QAA5C,AAAK,IAAD,gBAAc,kBAAkB;AACrB,QAAf,AAAK,IAAD,QAAQ;AACK,QAAjB,AAAK,IAAD,UAAQ,IAAI;AACU,QAA1B,AAAS,AAAK,4BAAO,IAAI;AAET,QAAX,YAAO,IAAI;AACA,QAAX,YAAO,IAAI;;AAGW,MAAxB,AAAK,mBAAA,mBAAS,AAAK;AAEpB,uBAAa;AACf,YAAI,eAAU;AACZ;AACiB,YAAf,AAAO;;gBACA;AACyC,YAAhD,aAAQ,sCAAsC,CAAC;;;AAIV,sBAAzC,0BAAS,AAAS,8BAAc;AACV,QAAtB,AAAO,mBAAO;AACa,QAA3B,AAAO,kBAAM;AAEO,QAApB,AAAO,iBAAK;AAEO,QAAnB,AAAK,mBAAO;AACQ,QAAf,cAAS;;AAGJ,MAAZ,AAAU,UAAA;AAIqC,MAA/C,OAAY,WAAL,IAAI,iBAAY,iCAAiB;AACU,MAA7C,AAAK,kBAAA,mBAAa,WAAL,IAAI,iBAAY,0BAAU;AAE5C;AACoB,QAAb,AAAK;;YACH;;AAOP,MAHG,AAAO,AAAO,4BAAO,QAAC;AACb,QAAZ,AAAU,UAAA;AACN,QAAF,WAAF,EAAE;;IAEN;;iDAvJmB;IAZf;IACU;IACF;IACE;IACE;IACT;IAsCF,yBAAiB;AA/BK,4DAAM,IAAI;AAClB,IAAZ,AAAM,cAAA,OAAN,aAAU,iCAAJ;AAIX,QAAI,AAAU,6BAAG;AAEf,UAAI,AAAO,AAAW,gBAAV,aAAa,MAAM,AAAO,AAAe,gBAAd,UAAY;AACtB,MAA7B,4BAAY,AAAO,gBAAC;;AAIO,iBAAxB,gBAAkB,WAAV;AAKX,IAFQ,WAAV,mCAAc,QAAC;AACF,QAAX,YAAO,GAAG;;AAIgB,IAAvB,AAAK,kBAAC,KAAY;EAQzB;;;;;;;;;;;;;;;;;;;MAjDW,wBAAQ;YAAG,iBAAO;;MAClB,+BAAe;YAAG,iBAAO;;MAIlC,yBAAS;;;;;oCCkBV,KAAM;;AAAU,oCAAQ,GAAG,EAAE,IAAI;EAAC;8CAE7B,KAAK;;AACwB,IAAnC,QAAY,MAAL,IAAI,SAAJ,OAA0B;AAE7B,iBAAa,kCAAM,GAAG;AACtB,aAAuD,SAA/C,AAAO,MAAD,WAAQ,iBAAK,AAAO,MAAD,SAAM,eAAG,AAAO,MAAD;AAChD,eAAO,AAAO,MAAD;AACb,wBAAsC,UAAtB,AAAM,qCAAY,EAAE,iBAAoB,WAAL,WAAV,AAAK,8BAAC,EAAE,4BAAmB,IAAI;AACxE,wBAAiC,AAEN,YAFP,WAAJ,IAAI,WAAC,cAAe,SACP,YAAzB,WAAJ,IAAI,WAAC,0BAA2B,SAChC,AAAM,gBAAO,WAAJ,IAAI,WAAC,kBACd,aAAa;AAEb;AAEJ,QAAI,aAAa;AAC+B,MAA9C,AAAQ,8BAAK,AAAgC,wCAAJ,GAAG;AACP,MAArC,KAAK,8BAAa,GAAG,2BAAW,IAAI;;AAEe,MAAnD,MAAe,OAAV,8BAAM,EAAE,QAAH,yBAAK,cAAI,8BAAa,GAAG,2BAAW,IAAI,KAAxC;;AAEZ,QAAI,AAAO,AAAM,MAAP,uBAAyB,AAAU,WAAd,IAAI,WAAC,aAAY;AAClB,MAAxB,WAAJ,IAAI,WAAC,SAAW,AAAO,MAAD;UACjB,KAAI,IAAI,IAAI,QAAsB,YAAV,WAAJ,IAAI,WAAC;AACO,MAAjC,WAAJ,IAAI,WAAC,SAAW,+BAAW,WAAJ,IAAI,WAAC;;AAE9B,UAAU,YAAH,EAAE,aAAQ,AAAO,AAAK,MAAN,kBAAgB,MAAM,AAAO,MAAD,OAAO,IAAI;EAChE;;MA9CM,yBAAQ;YAAU;;MAEG,sBAAK;YAAG;;MAEtB,wBAAO;YAAG,oBAAO","file":"socket_io_client.ddc.js"}');
  // Exports:
  return {
    src__socket: socket$,
    src__on: on,
    src__manager: manager,
    src__engine__socket: socket$0,
    src__engine__transport__transports: transports,
    src__engine__transport__xhr_transport: xhr_transport,
    src__engine__transport__polling_transport: polling_transport,
    src__engine__transport__transport: transport$,
    src__engine__parseqs: parseqs,
    src__engine__transport__websocket_transport: websocket_transport,
    src__engine__transport__jsonp_transport: jsonp_transport,
    socket_io_client: socket_io_client
  };
});

//# sourceMappingURL=socket_io_client.ddc.js.map
