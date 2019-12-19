define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const circular_countdown = Object.create(dart.library);
  const circular_countdown_painter = Object.create(dart.library);
  const circular_countdown$ = Object.create(dart.library);
  const $ceilToDouble = dartx.ceilToDouble;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1308622847
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/circular_countdown/src/circular_countdown.dart"
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C0;
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C3;
  let C2;
  const diameter$ = dart.privateName(circular_countdown, "CircularCountdown.diameter");
  const countdownTotal$ = dart.privateName(circular_countdown, "CircularCountdown.countdownTotal");
  const countdownRemaining$ = dart.privateName(circular_countdown, "CircularCountdown.countdownRemaining");
  const countdownTotalColor$ = dart.privateName(circular_countdown, "CircularCountdown.countdownTotalColor");
  const countdownRemainingColor$ = dart.privateName(circular_countdown, "CircularCountdown.countdownRemainingColor");
  const countdownCurrentColor$ = dart.privateName(circular_countdown, "CircularCountdown.countdownCurrentColor");
  const gapFactor$ = dart.privateName(circular_countdown, "CircularCountdown.gapFactor");
  const strokeWidth$ = dart.privateName(circular_countdown, "CircularCountdown.strokeWidth");
  const textSpan$ = dart.privateName(circular_countdown, "CircularCountdown.textSpan");
  circular_countdown.CircularCountdown = class CircularCountdown extends framework.StatelessWidget {
    get diameter() {
      return this[diameter$];
    }
    set diameter(value) {
      super.diameter = value;
    }
    get countdownTotal() {
      return this[countdownTotal$];
    }
    set countdownTotal(value) {
      super.countdownTotal = value;
    }
    get countdownRemaining() {
      return this[countdownRemaining$];
    }
    set countdownRemaining(value) {
      super.countdownRemaining = value;
    }
    get countdownTotalColor() {
      return this[countdownTotalColor$];
    }
    set countdownTotalColor(value) {
      super.countdownTotalColor = value;
    }
    get countdownRemainingColor() {
      return this[countdownRemainingColor$];
    }
    set countdownRemainingColor(value) {
      super.countdownRemainingColor = value;
    }
    get countdownCurrentColor() {
      return this[countdownCurrentColor$];
    }
    set countdownCurrentColor(value) {
      super.countdownCurrentColor = value;
    }
    get gapFactor() {
      return this[gapFactor$];
    }
    set gapFactor(value) {
      super.gapFactor = value;
    }
    get strokeWidth() {
      return this[strokeWidth$];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get textSpan() {
      return this[textSpan$];
    }
    set textSpan(value) {
      super.textSpan = value;
    }
    build(context) {
      let paintStrokeWidth = this.strokeWidth != null && dart.notNull(this.strokeWidth) > 0 && dart.notNull(this.strokeWidth) <= dart.notNull(this.diameter) / 2 ? this.strokeWidth : dart.notNull(this.diameter) / 6;
      return new basic.CustomPaint.new({painter: new circular_countdown_painter.CircularCountdownPainter.new({countdownTotal: this.countdownTotal, countdownRemaining: this.countdownRemaining, countdownTotalColor: this.countdownTotalColor, countdownRemainingColor: this.countdownRemainingColor, countdownCurrentColor: this.countdownCurrentColor, gapFactor: this.gapFactor, strokeWidth: paintStrokeWidth, textSpan: this.textSpan}), size: new ui.Size.new(dart.notNull(this.diameter) - dart.notNull(paintStrokeWidth), dart.notNull(this.diameter) - dart.notNull(paintStrokeWidth)), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (circular_countdown.CircularCountdown.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let diameter = opts && 'diameter' in opts ? opts.diameter : null;
    let countdownTotal = opts && 'countdownTotal' in opts ? opts.countdownTotal : null;
    let countdownRemaining = opts && 'countdownRemaining' in opts ? opts.countdownRemaining : null;
    let countdownTotalColor = opts && 'countdownTotalColor' in opts ? opts.countdownTotalColor : C0 || CT.C0;
    let countdownRemainingColor = opts && 'countdownRemainingColor' in opts ? opts.countdownRemainingColor : C1 || CT.C1;
    let countdownCurrentColor = opts && 'countdownCurrentColor' in opts ? opts.countdownCurrentColor : null;
    let gapFactor = opts && 'gapFactor' in opts ? opts.gapFactor : 6;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let textSpan = opts && 'textSpan' in opts ? opts.textSpan : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[diameter$] = diameter;
    this[countdownTotal$] = countdownTotal;
    this[countdownRemaining$] = countdownRemaining;
    this[countdownTotalColor$] = countdownTotalColor;
    this[countdownRemainingColor$] = countdownRemainingColor;
    this[countdownCurrentColor$] = countdownCurrentColor;
    this[gapFactor$] = gapFactor;
    this[strokeWidth$] = strokeWidth;
    this[textSpan$] = textSpan;
    if (!(diameter != null && dart.notNull(diameter) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/circular_countdown/src/circular_countdown.dart", 40, 16, "diameter != null && diameter > 0.0");
    if (!(countdownTotal != null && dart.notNull(countdownTotal) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/circular_countdown/src/circular_countdown.dart", 41, 16, "countdownTotal != null && countdownTotal > 0.0");
    if (!(countdownRemaining != null && dart.notNull(countdownRemaining) >= 0.0 && dart.notNull(countdownRemaining) <= dart.notNull(countdownTotal))) dart.assertFailed(null, "org-dartlang-app:///packages/circular_countdown/src/circular_countdown.dart", 42, 16, "countdownRemaining != null &&\n            countdownRemaining >= 0.0 &&\n            countdownRemaining <= countdownTotal");
    if (!(dart.notNull(gapFactor) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/circular_countdown/src/circular_countdown.dart", 45, 16, "gapFactor > 0.0");
    circular_countdown.CircularCountdown.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = circular_countdown.CircularCountdown.prototype;
  dart.addTypeTests(circular_countdown.CircularCountdown);
  dart.setMethodSignature(circular_countdown.CircularCountdown, () => ({
    __proto__: dart.getMethods(circular_countdown.CircularCountdown.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(circular_countdown.CircularCountdown, "package:circular_countdown/src/circular_countdown.dart");
  dart.setFieldSignature(circular_countdown.CircularCountdown, () => ({
    __proto__: dart.getFields(circular_countdown.CircularCountdown.__proto__),
    diameter: dart.finalFieldType(core.double),
    countdownTotal: dart.finalFieldType(core.int),
    countdownRemaining: dart.finalFieldType(core.int),
    countdownTotalColor: dart.finalFieldType(ui.Color),
    countdownRemainingColor: dart.finalFieldType(ui.Color),
    countdownCurrentColor: dart.finalFieldType(ui.Color),
    gapFactor: dart.finalFieldType(core.double),
    strokeWidth: dart.finalFieldType(core.double),
    textSpan: dart.finalFieldType(text_span.TextSpan)
  }));
  const countdownTotal$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.countdownTotal");
  const countdownRemaining$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.countdownRemaining");
  const countdownTotalColor$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.countdownTotalColor");
  const countdownRemainingColor$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.countdownRemainingColor");
  const gapFactor$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.gapFactor");
  const strokeWidth$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.strokeWidth");
  const countdownCurrentColor$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.countdownCurrentColor");
  const textSpan$0 = dart.privateName(circular_countdown_painter, "CircularCountdownPainter.textSpan");
  circular_countdown_painter.CircularCountdownPainter = class CircularCountdownPainter extends custom_paint.CustomPainter {
    get countdownTotal() {
      return this[countdownTotal$0];
    }
    set countdownTotal(value) {
      super.countdownTotal = value;
    }
    get countdownRemaining() {
      return this[countdownRemaining$0];
    }
    set countdownRemaining(value) {
      super.countdownRemaining = value;
    }
    get countdownTotalColor() {
      return this[countdownTotalColor$0];
    }
    set countdownTotalColor(value) {
      super.countdownTotalColor = value;
    }
    get countdownRemainingColor() {
      return this[countdownRemainingColor$0];
    }
    set countdownRemainingColor(value) {
      super.countdownRemainingColor = value;
    }
    get gapFactor() {
      return this[gapFactor$0];
    }
    set gapFactor(value) {
      super.gapFactor = value;
    }
    get strokeWidth() {
      return this[strokeWidth$0];
    }
    set strokeWidth(value) {
      super.strokeWidth = value;
    }
    get countdownCurrentColor() {
      return this[countdownCurrentColor$0];
    }
    set countdownCurrentColor(value) {
      super.countdownCurrentColor = value;
    }
    get textSpan() {
      return this[textSpan$0];
    }
    set textSpan(value) {
      super.textSpan = value;
    }
    get totalPaint() {
      let t0;
      t0 = new ui.Paint.new();
      t0.style = ui.PaintingStyle.stroke;
      t0.strokeWidth = this.strokeWidth;
      t0.color = this.countdownTotalColor;
      return t0;
    }
    get remainingPaint() {
      let t0;
      t0 = new ui.Paint.new();
      t0.style = ui.PaintingStyle.stroke;
      t0.strokeWidth = this.strokeWidth;
      t0.color = this.countdownRemainingColor;
      return t0;
    }
    get currentPaint() {
      let t0;
      if (this.countdownCurrentColor != null) {
        t0 = new ui.Paint.new();
        t0.style = ui.PaintingStyle.stroke;
        t0.strokeWidth = this.strokeWidth;
        t0.color = this.countdownCurrentColor;
        return t0;
      } else {
        return null;
      }
    }
    get emptyArcSize() {
      return 2 * 3.141592653589793 / (dart.notNull(this.gapFactor) * dart.notNull(this.countdownTotal));
    }
    get fullArcSize() {
      return 2 * 3.141592653589793 / dart.notNull(this.countdownTotal) - dart.notNull(this.emptyArcSize);
    }
    startAngle(unit) {
      return -3.141592653589793 / 2 + dart.notNull(unit) * (dart.notNull(this.emptyArcSize) + dart.notNull(this.fullArcSize)) + dart.notNull(this.emptyArcSize) / 2;
    }
    getInnerRadius(width) {
      let _radius = dart.notNull(width) - 2 * dart.notNull(this.strokeWidth);
      return _radius > 0 ? _radius : 0.0;
    }
    paint(canvas, size) {
      let t0, t0$;
      let paint = null;
      for (let unit = 0; unit < dart.notNull(this.countdownTotal); unit = unit + 1) {
        if (this.currentPaint != null) {
          if (dart.notNull(this.countdownTotal) - unit < dart.notNull(this.countdownRemaining)) {
            paint = this.remainingPaint;
          } else if (dart.notNull(this.countdownTotal) - unit === this.countdownRemaining) {
            paint = this.currentPaint;
          } else {
            paint = this.totalPaint;
          }
        } else {
          if (dart.notNull(this.countdownTotal) - unit <= dart.notNull(this.countdownRemaining)) {
            paint = this.remainingPaint;
          } else {
            paint = this.totalPaint;
          }
        }
        canvas.drawArc(new ui.Rect.fromCircle({center: new ui.Offset.new(dart.notNull(size.width) / 2, dart.notNull(size.height) / 2), radius: dart.notNull(size.width) / 2}), this.startAngle(unit), this.fullArcSize, false, paint);
      }
      if (this.textSpan != null) {
        let textPainter = (t0 = new text_painter.TextPainter.new({text: this.textSpan, textDirection: ui.TextDirection.ltr, maxLines: 1}), t0.layout({minWidth: this.getInnerRadius(size.width), maxWidth: this.getInnerRadius(size.width)}), t0);
        let constraints = new box.BoxConstraints.new({maxWidth: this.getInnerRadius(size.width), minWidth: 0.0, maxHeight: this.getInnerRadius(size.width), minHeight: 0.0});
        let renderParagraph = (t0$ = new paragraph.RenderParagraph.new(this.textSpan, {textDirection: ui.TextDirection.ltr, overflow: paragraph.TextOverflow.ellipsis, maxLines: 1, textAlign: ui.TextAlign.center}), t0$.layout(constraints), t0$);
        let textWidth = renderParagraph.getMinIntrinsicWidth(dart.notNull(size.width) / 2)[$ceilToDouble]();
        let textHeight = renderParagraph.getMinIntrinsicHeight(dart.notNull(size.width) / 2)[$ceilToDouble]();
        if (textWidth <= dart.notNull(this.getInnerRadius(size.width))) {
          let offset = new ui.Offset.new(dart.notNull(size.width) / 2 - textWidth / 2, dart.notNull(size.height) / 2 - textHeight / 2);
          textPainter.paint(canvas, offset);
        }
      }
    }
    shouldRepaint(oldDelegate) {
      circular_countdown_painter.CircularCountdownPainter._check(oldDelegate);
      return this.countdownTotal != oldDelegate.countdownTotal || this.countdownRemaining != oldDelegate.countdownRemaining || !dart.equals(this.countdownTotalColor, oldDelegate.countdownTotalColor) || !dart.equals(this.countdownRemainingColor, oldDelegate.countdownRemainingColor) || !dart.equals(this.countdownCurrentColor, oldDelegate.countdownCurrentColor) || this.gapFactor != oldDelegate.gapFactor || this.strokeWidth != oldDelegate.strokeWidth || !dart.equals(this.textSpan, oldDelegate.textSpan);
    }
  };
  (circular_countdown_painter.CircularCountdownPainter.new = function(opts) {
    let countdownTotal = opts && 'countdownTotal' in opts ? opts.countdownTotal : null;
    let countdownRemaining = opts && 'countdownRemaining' in opts ? opts.countdownRemaining : null;
    let countdownTotalColor = opts && 'countdownTotalColor' in opts ? opts.countdownTotalColor : null;
    let countdownRemainingColor = opts && 'countdownRemainingColor' in opts ? opts.countdownRemainingColor : null;
    let strokeWidth = opts && 'strokeWidth' in opts ? opts.strokeWidth : null;
    let gapFactor = opts && 'gapFactor' in opts ? opts.gapFactor : null;
    let countdownCurrentColor = opts && 'countdownCurrentColor' in opts ? opts.countdownCurrentColor : null;
    let textSpan = opts && 'textSpan' in opts ? opts.textSpan : null;
    this[countdownTotal$0] = countdownTotal;
    this[countdownRemaining$0] = countdownRemaining;
    this[countdownTotalColor$0] = countdownTotalColor;
    this[countdownRemainingColor$0] = countdownRemainingColor;
    this[strokeWidth$0] = strokeWidth;
    this[gapFactor$0] = gapFactor;
    this[countdownCurrentColor$0] = countdownCurrentColor;
    this[textSpan$0] = textSpan;
    circular_countdown_painter.CircularCountdownPainter.__proto__.new.call(this);
    ;
  }).prototype = circular_countdown_painter.CircularCountdownPainter.prototype;
  dart.addTypeTests(circular_countdown_painter.CircularCountdownPainter);
  dart.setMethodSignature(circular_countdown_painter.CircularCountdownPainter, () => ({
    __proto__: dart.getMethods(circular_countdown_painter.CircularCountdownPainter.__proto__),
    startAngle: dart.fnType(core.double, [core.int]),
    getInnerRadius: dart.fnType(core.double, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(circular_countdown_painter.CircularCountdownPainter, () => ({
    __proto__: dart.getGetters(circular_countdown_painter.CircularCountdownPainter.__proto__),
    totalPaint: ui.Paint,
    remainingPaint: ui.Paint,
    currentPaint: ui.Paint,
    emptyArcSize: core.double,
    fullArcSize: core.double
  }));
  dart.setLibraryUri(circular_countdown_painter.CircularCountdownPainter, "package:circular_countdown/src/circular_countdown_painter.dart");
  dart.setFieldSignature(circular_countdown_painter.CircularCountdownPainter, () => ({
    __proto__: dart.getFields(circular_countdown_painter.CircularCountdownPainter.__proto__),
    countdownTotal: dart.finalFieldType(core.int),
    countdownRemaining: dart.finalFieldType(core.int),
    countdownTotalColor: dart.finalFieldType(ui.Color),
    countdownRemainingColor: dart.finalFieldType(ui.Color),
    gapFactor: dart.finalFieldType(core.double),
    strokeWidth: dart.finalFieldType(core.double),
    countdownCurrentColor: dart.finalFieldType(ui.Color),
    textSpan: dart.finalFieldType(text_span.TextSpan)
  }));
  dart.trackLibraries("packages/circular_countdown/circular_countdown", {
    "package:circular_countdown/src/circular_countdown.dart": circular_countdown,
    "package:circular_countdown/src/circular_countdown_painter.dart": circular_countdown_painter,
    "package:circular_countdown/circular_countdown.dart": circular_countdown$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/circular_countdown.dart","src/circular_countdown_painter.dart"],"names":[],"mappings":"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","file":"circular_countdown.ddc.js"}');
  // Exports:
  return {
    src__circular_countdown: circular_countdown,
    src__circular_countdown_painter: circular_countdown_painter,
    circular_countdown: circular_countdown$
  };
});

//# sourceMappingURL=circular_countdown.ddc.js.map
