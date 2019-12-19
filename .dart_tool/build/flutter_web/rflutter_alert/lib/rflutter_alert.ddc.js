define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const fractional_offset = packages__flutter__src__painting___network_image_web.src__painting__fractional_offset;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const routes = packages__flutter__src__widgets__actions.src__widgets__routes;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const dialog = packages__flutter__material.src__material__dialog;
  const theme = packages__flutter__material.src__material__theme;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const alert = Object.create(dart.library);
  const dialog_button = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const animation_transition = Object.create(dart.library);
  const alert_style = Object.create(dart.library);
  const rflutter_alert = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DialogButtonToNull = () => (DialogButtonToNull = dart.constFn(dart.fnType(core.Null, [dialog_button.DialogButton])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.FontStyle.prototype,
        [_name]: "FontStyle.normal",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: C3 || CT.C3,
        [TextStyle_fontWeight]: C4 || CT.C4,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C5 || CT.C5,
        [TextStyle_inherit]: true
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: C3 || CT.C3,
        [TextStyle_fontWeight]: C7 || CT.C7,
        [TextStyle_fontSize]: 22,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C5 || CT.C5,
        [TextStyle_inherit]: true
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3707764736.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.fromBottom",
        index: 3
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: alert_style.AlertStyle.prototype,
        [AlertStyle_constraints]: null,
        [AlertStyle_buttonAreaPadding]: C1 || CT.C1,
        [AlertStyle_descStyle]: C2 || CT.C2,
        [AlertStyle_titleStyle]: C6 || CT.C6,
        [AlertStyle_overlayColor]: C8 || CT.C8,
        [AlertStyle_backgroundColor]: null,
        [AlertStyle_isOverlayTapDismiss]: true,
        [AlertStyle_isCloseButton]: true,
        [AlertStyle_alertBorder]: null,
        [AlertStyle_animationDuration]: C9 || CT.C9,
        [AlertStyle_animationType]: C10 || CT.C10
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 31,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C23() {
      return C23 = dart.constList([], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 37,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "titlePadding",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 2,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 2
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 41,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 11,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: constants.AlertType.prototype,
        [_name$]: "AlertType.success",
        index: 1
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 39,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 11,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: constants.AlertType.prototype,
        [_name$]: "AlertType.error",
        index: 0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 38,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 11,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: constants.AlertType.prototype,
        [_name$]: "AlertType.info",
        index: 2
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 41,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 11,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: constants.AlertType.prototype,
        [_name$]: "AlertType.warning",
        index: 3
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/alert.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: constants.AlertType.prototype,
        [_name$]: "AlertType.none",
        index: 4
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/dialog_button.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/dialog_button.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/dialog_button.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/dialog_button.dart"
      });
    },
    get C154() {
      return C154 = dart.constList([C124 || CT.C124, C119 || CT.C119, C129 || CT.C129, C134 || CT.C134, C136 || CT.C136], constants.AlertType);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.fromRight",
        index: 0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.fromLeft",
        index: 1
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.fromTop",
        index: 2
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.grow",
        index: 4
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: constants.AnimationType.prototype,
        [_name$]: "AnimationType.shrink",
        index: 5
      });
    },
    get C160() {
      return C160 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157, C10 || CT.C10, C158 || CT.C158, C159 || CT.C159], constants.AnimationType);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -1
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: 0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/rflutter_alert/src/animation_transition.dart"
      });
    }
  });
  const AlertStyle_constraints = dart.privateName(alert_style, "AlertStyle.constraints");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C1;
  const AlertStyle_buttonAreaPadding = dart.privateName(alert_style, "AlertStyle.buttonAreaPadding");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const _name = dart.privateName(ui, "_name");
  let C3;
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C4;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color_value = dart.privateName(ui, "Color.value");
  let C5;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C2;
  const AlertStyle_descStyle = dart.privateName(alert_style, "AlertStyle.descStyle");
  let C7;
  let C6;
  const AlertStyle_titleStyle = dart.privateName(alert_style, "AlertStyle.titleStyle");
  let C8;
  const AlertStyle_overlayColor = dart.privateName(alert_style, "AlertStyle.overlayColor");
  const AlertStyle_backgroundColor = dart.privateName(alert_style, "AlertStyle.backgroundColor");
  const AlertStyle_isOverlayTapDismiss = dart.privateName(alert_style, "AlertStyle.isOverlayTapDismiss");
  const AlertStyle_isCloseButton = dart.privateName(alert_style, "AlertStyle.isCloseButton");
  const AlertStyle_alertBorder = dart.privateName(alert_style, "AlertStyle.alertBorder");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C9;
  const AlertStyle_animationDuration = dart.privateName(alert_style, "AlertStyle.animationDuration");
  const _name$ = dart.privateName(constants, "_name");
  let C10;
  const AlertStyle_animationType = dart.privateName(alert_style, "AlertStyle.animationType");
  let C0;
  const _buildDialog = dart.privateName(alert, "_buildDialog");
  const _showAnimation = dart.privateName(alert, "_showAnimation");
  const _defaultShape = dart.privateName(alert, "_defaultShape");
  const _getCloseButton = dart.privateName(alert, "_getCloseButton");
  const _getImage = dart.privateName(alert, "_getImage");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C20;
  let C19;
  let C23;
  let C22;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C29;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  let C46;
  let C45;
  let C44;
  const _getButtons = dart.privateName(alert, "_getButtons");
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C52;
  let C51;
  let C61;
  let C60;
  let C59;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C70;
  let C69;
  let C72;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C93;
  let C91;
  let C90;
  let C94;
  let C95;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C101;
  let C100;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C112;
  let C111;
  let C114;
  let C117;
  let C118;
  let C116;
  let C115;
  let C119;
  let C122;
  let C123;
  let C121;
  let C120;
  let C124;
  let C127;
  let C128;
  let C126;
  let C125;
  let C129;
  let C132;
  let C133;
  let C131;
  let C130;
  let C134;
  let C135;
  let C136;
  const context$ = dart.privateName(alert, "Alert.context");
  const type$ = dart.privateName(alert, "Alert.type");
  const style$ = dart.privateName(alert, "Alert.style");
  const image$ = dart.privateName(alert, "Alert.image");
  const title$ = dart.privateName(alert, "Alert.title");
  const desc$ = dart.privateName(alert, "Alert.desc");
  const content$ = dart.privateName(alert, "Alert.content");
  const buttons$ = dart.privateName(alert, "Alert.buttons");
  const closeFunction$ = dart.privateName(alert, "Alert.closeFunction");
  alert.Alert = class Alert extends core.Object {
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get desc() {
      return this[desc$];
    }
    set desc(value) {
      super.desc = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get closeFunction() {
      return this[closeFunction$];
    }
    set closeFunction(value) {
      super.closeFunction = value;
    }
    show() {
      return async.async(core.bool, (function* show() {
        return yield routes.showGeneralDialog(core.bool, {context: this.context, pageBuilder: dart.fn((buildContext, animation, secondaryAnimation) => this[_buildDialog](), BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), barrierDismissible: this.style.isOverlayTapDismiss, barrierLabel: material_localizations.MaterialLocalizations.of(this.context).modalBarrierDismissLabel, barrierColor: this.style.overlayColor, transitionDuration: this.style.animationDuration, transitionBuilder: dart.fn((context, animation, secondaryAnimation, child) => framework.Widget._check(this[_showAnimation](animation, secondaryAnimation, child)), BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget())});
      }).bind(this));
    }
    [_buildDialog]() {
      let t0, t0$, t0$0;
      return new basic.Center.new({child: new basic.ConstrainedBox.new({constraints: (t0 = this.style.constraints, t0 == null ? new box.BoxConstraints.expand({width: 1 / 0, height: 1 / 0}) : t0), child: new basic.Center.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new dialog.AlertDialog.new({backgroundColor: (t0$ = this.style.backgroundColor, t0$ == null ? theme.Theme.of(this.context).dialogBackgroundColor : t0$), shape: (t0$0 = this.style.alertBorder, t0$0 == null ? this[_defaultShape]() : t0$0), titlePadding: new edge_insets.EdgeInsets.all(0.0), title: new container.Container.new({child: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_getCloseButton](), new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(20.0, dart.test(this.style.isCloseButton) ? 0.0 : 20.0, 20.0, 0.0), child: new basic.Column.new({children: JSArrayOfWidget().of([this[_getImage](), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new text.Text.new(this.title, {style: this.style.titleStyle, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({height: this.desc == null ? 5.0 : 10.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), this.desc == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22}) : new text.Text.new(this.desc, {style: this.style.descStyle, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), this.content == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C29 || CT.C29}) : this.content]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), contentPadding: this.style.buttonAreaPadding, content: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_getButtons](), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
    }
    [_defaultShape]() {
      return new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0), side: new borders.BorderSide.new({color: colors.Colors.blueGrey})});
    }
    [_getCloseButton]() {
      return dart.test(this.style.isCloseButton) ? new basic.Padding.new({padding: C72 || CT.C72, child: new container.Container.new({alignment: fractional_offset.FractionalOffset.topRight, child: new container.Container.new({width: 20.0, height: 20.0, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new("assets/images" + "/close.png", {package: "rflutter_alert"})})}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                  navigator.Navigator.pop(core.Object, this.context);
                  dart.dsend(this, 'closeFunction', []);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C94 || CT.C94});
    }
    [_getButtons]() {
      let expandedButtons = JSArrayOfWidget().of([]);
      if (this.buttons != null) {
        this.buttons[$forEach](dart.fn(button => {
          let buttonWidget = new basic.Padding.new({padding: C95 || CT.C95, child: button, $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
          if (button.width != null && this.buttons[$length] === 1) {
            expandedButtons[$add](buttonWidget);
          } else {
            expandedButtons[$add](new basic.Expanded.new({child: buttonWidget, $creationLocationd_0dea112b090073317d4: C100 || CT.C100}));
          }
        }, DialogButtonToNull()));
      } else {
        expandedButtons[$add](new basic.Expanded.new({child: new dialog_button.DialogButton.new({child: new text.Text.new("CANCEL", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), onPressed: dart.fn(() => navigator.Navigator.pop(core.Object, this.context), VoidTobool()), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}));
      }
      return expandedButtons;
    }
    [_getImage]() {
      let t0;
      let response = (t0 = this.image, t0 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C114 || CT.C114}) : t0);
      switch (this.type) {
        case C119 || CT.C119:
        {
          response = new image.Image.asset("assets/images" + "/icon_success.png", {package: "rflutter_alert", $creationLocationd_0dea112b090073317d4: C115 || CT.C115});
          break;
        }
        case C124 || CT.C124:
        {
          response = new image.Image.asset("assets/images" + "/icon_error.png", {package: "rflutter_alert", $creationLocationd_0dea112b090073317d4: C120 || CT.C120});
          break;
        }
        case C129 || CT.C129:
        {
          response = new image.Image.asset("assets/images" + "/icon_info.png", {package: "rflutter_alert", $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
          break;
        }
        case C134 || CT.C134:
        {
          response = new image.Image.asset("assets/images" + "/icon_warning.png", {package: "rflutter_alert", $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
          break;
        }
        case C136 || CT.C136:
        {
          response = new container.Container.new({$creationLocationd_0dea112b090073317d4: C135 || CT.C135});
          break;
        }
      }
      return response;
    }
    [_showAnimation](animation, secondaryAnimation, child) {
      if (dart.equals(this.style.animationType, constants.AnimationType.fromRight)) {
        return animation_transition.AnimationTransition.fromRight(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      } else if (dart.equals(this.style.animationType, constants.AnimationType.fromLeft)) {
        return animation_transition.AnimationTransition.fromLeft(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      } else if (dart.equals(this.style.animationType, constants.AnimationType.fromBottom)) {
        return animation_transition.AnimationTransition.fromBottom(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      } else if (dart.equals(this.style.animationType, constants.AnimationType.grow)) {
        return animation_transition.AnimationTransition.grow(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      } else if (dart.equals(this.style.animationType, constants.AnimationType.shrink)) {
        return animation_transition.AnimationTransition.shrink(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      } else {
        return animation_transition.AnimationTransition.fromTop(AnimationOfdouble()._check(animation), AnimationOfdouble()._check(secondaryAnimation), framework.Widget._check(child));
      }
    }
  };
  (alert.Alert.new = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let style = opts && 'style' in opts ? opts.style : C0 || CT.C0;
    let image = opts && 'image' in opts ? opts.image : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let desc = opts && 'desc' in opts ? opts.desc : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : null;
    let closeFunction = opts && 'closeFunction' in opts ? opts.closeFunction : null;
    this[context$] = context;
    this[type$] = type;
    this[style$] = style;
    this[image$] = image;
    this[title$] = title;
    this[desc$] = desc;
    this[content$] = content;
    this[buttons$] = buttons;
    this[closeFunction$] = closeFunction;
    ;
  }).prototype = alert.Alert.prototype;
  dart.addTypeTests(alert.Alert);
  dart.setMethodSignature(alert.Alert, () => ({
    __proto__: dart.getMethods(alert.Alert.__proto__),
    show: dart.fnType(async.Future$(core.bool), []),
    [_buildDialog]: dart.fnType(framework.Widget, []),
    [_defaultShape]: dart.fnType(borders.ShapeBorder, []),
    [_getCloseButton]: dart.fnType(framework.Widget, []),
    [_getButtons]: dart.fnType(core.List$(framework.Widget), []),
    [_getImage]: dart.fnType(framework.Widget, []),
    [_showAnimation]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(alert.Alert, "package:rflutter_alert/src/alert.dart");
  dart.setFieldSignature(alert.Alert, () => ({
    __proto__: dart.getFields(alert.Alert.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    type: dart.finalFieldType(constants.AlertType),
    style: dart.finalFieldType(alert_style.AlertStyle),
    image: dart.finalFieldType(image.Image),
    title: dart.finalFieldType(core.String),
    desc: dart.finalFieldType(core.String),
    content: dart.finalFieldType(framework.Widget),
    buttons: dart.finalFieldType(core.List$(dialog_button.DialogButton)),
    closeFunction: dart.finalFieldType(core.Function)
  }));
  let C139;
  let C138;
  let C137;
  let C142;
  let C143;
  let C141;
  let C140;
  let C146;
  let C147;
  let C145;
  let C144;
  let C150;
  let C151;
  let C152;
  let C153;
  let C149;
  let C148;
  const child$ = dart.privateName(dialog_button, "DialogButton.child");
  const width$ = dart.privateName(dialog_button, "DialogButton.width");
  const height$ = dart.privateName(dialog_button, "DialogButton.height");
  const color$ = dart.privateName(dialog_button, "DialogButton.color");
  const gradient$ = dart.privateName(dialog_button, "DialogButton.gradient");
  const radius$ = dart.privateName(dialog_button, "DialogButton.radius");
  const onPressed$ = dart.privateName(dialog_button, "DialogButton.onPressed");
  dialog_button.DialogButton = class DialogButton extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    build(context) {
      let t0, t0$;
      return new container.Container.new({width: this.width, height: this.height, decoration: new box_decoration.BoxDecoration.new({color: (t0 = this.color, t0 == null ? theme.Theme.of(context).accentColor : t0), gradient: this.gradient, borderRadius: (t0$ = this.radius, t0$ == null ? new border_radius.BorderRadius.circular(6.0) : t0$)}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({onTap: VoidTovoid()._check(this.onPressed), child: new basic.Center.new({child: this.child, $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148});
    }
  };
  (dialog_button.DialogButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : 40;
    let color = opts && 'color' in opts ? opts.color : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[width$] = width;
    this[height$] = height;
    this[color$] = color;
    this[gradient$] = gradient;
    this[radius$] = radius;
    this[onPressed$] = onPressed;
    dialog_button.DialogButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog_button.DialogButton.prototype;
  dart.addTypeTests(dialog_button.DialogButton);
  dart.setMethodSignature(dialog_button.DialogButton, () => ({
    __proto__: dart.getMethods(dialog_button.DialogButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dialog_button.DialogButton, "package:rflutter_alert/src/dialog_button.dart");
  dart.setFieldSignature(dialog_button.DialogButton, () => ({
    __proto__: dart.getFields(dialog_button.DialogButton.__proto__),
    child: dart.finalFieldType(framework.Widget),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    gradient: dart.finalFieldType(gradient.Gradient),
    radius: dart.finalFieldType(border_radius.BorderRadius),
    onPressed: dart.finalFieldType(core.Function)
  }));
  let C154;
  constants.AlertType = class AlertType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (constants.AlertType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = constants.AlertType.prototype;
  dart.addTypeTests(constants.AlertType);
  dart.setLibraryUri(constants.AlertType, "package:rflutter_alert/src/constants.dart");
  dart.setFieldSignature(constants.AlertType, () => ({
    __proto__: dart.getFields(constants.AlertType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(constants.AlertType, ['toString']);
  constants.AlertType.error = C124 || CT.C124;
  constants.AlertType.success = C119 || CT.C119;
  constants.AlertType.info = C129 || CT.C129;
  constants.AlertType.warning = C134 || CT.C134;
  constants.AlertType.none = C136 || CT.C136;
  constants.AlertType.values = C154 || CT.C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  constants.AnimationType = class AnimationType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (constants.AnimationType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = constants.AnimationType.prototype;
  dart.addTypeTests(constants.AnimationType);
  dart.setLibraryUri(constants.AnimationType, "package:rflutter_alert/src/constants.dart");
  dart.setFieldSignature(constants.AnimationType, () => ({
    __proto__: dart.getFields(constants.AnimationType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(constants.AnimationType, ['toString']);
  constants.AnimationType.fromRight = C155 || CT.C155;
  constants.AnimationType.fromLeft = C156 || CT.C156;
  constants.AnimationType.fromTop = C157 || CT.C157;
  constants.AnimationType.fromBottom = C10 || CT.C10;
  constants.AnimationType.grow = C158 || CT.C158;
  constants.AnimationType.shrink = C159 || CT.C159;
  constants.AnimationType.values = C160 || CT.C160;
  dart.defineLazy(constants, {
    /*constants.kImagePath*/get kImagePath() {
      return "assets/images";
    }
  });
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C161;
  let C164;
  let C165;
  let C163;
  let C162;
  let C166;
  let C169;
  let C170;
  let C168;
  let C167;
  let C171;
  let C174;
  let C175;
  let C173;
  let C172;
  let C176;
  let C179;
  let C180;
  let C178;
  let C177;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C188;
  let C186;
  let C185;
  animation_transition.AnimationTransition = class AnimationTransition extends core.Object {
    static fromRight(animation, secondaryAnimation, child) {
      return new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: C161 || CT.C161, end: ui.Offset.zero}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
    }
    static fromLeft(animation, secondaryAnimation, child) {
      return new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: C166 || CT.C166, end: ui.Offset.zero}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C167 || CT.C167});
    }
    static fromTop(animation, secondaryAnimation, child) {
      return new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: C171 || CT.C171, end: ui.Offset.zero}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C172 || CT.C172});
    }
    static fromBottom(animation, secondaryAnimation, child) {
      return new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: C176 || CT.C176, end: ui.Offset.zero}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C177 || CT.C177});
    }
    static grow(animation, secondaryAnimation, child) {
      return new transitions.ScaleTransition.new({scale: new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: animation, curve: new curves.Interval.new(0.0, 0.5, {curve: curves.Curves.linear})})), child: child, $creationLocationd_0dea112b090073317d4: C181 || CT.C181});
    }
    static shrink(animation, secondaryAnimation, child) {
      return new transitions.ScaleTransition.new({scale: new (TweenOfdouble()).new({begin: 1.2, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: animation, curve: new curves.Interval.new(0.5, 1.0, {curve: curves.Curves.linear})})), child: child, $creationLocationd_0dea112b090073317d4: C185 || CT.C185});
    }
  };
  (animation_transition.AnimationTransition.new = function() {
    ;
  }).prototype = animation_transition.AnimationTransition.prototype;
  dart.addTypeTests(animation_transition.AnimationTransition);
  dart.setLibraryUri(animation_transition.AnimationTransition, "package:rflutter_alert/src/animation_transition.dart");
  alert_style.AlertStyle = class AlertStyle extends core.Object {
    get animationType() {
      return this[animationType$];
    }
    set animationType(value) {
      super.animationType = value;
    }
    get animationDuration() {
      return this[animationDuration$];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get alertBorder() {
      return this[alertBorder$];
    }
    set alertBorder(value) {
      super.alertBorder = value;
    }
    get isCloseButton() {
      return this[isCloseButton$];
    }
    set isCloseButton(value) {
      super.isCloseButton = value;
    }
    get isOverlayTapDismiss() {
      return this[isOverlayTapDismiss$];
    }
    set isOverlayTapDismiss(value) {
      super.isOverlayTapDismiss = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get overlayColor() {
      return this[overlayColor$];
    }
    set overlayColor(value) {
      super.overlayColor = value;
    }
    get titleStyle() {
      return this[titleStyle$];
    }
    set titleStyle(value) {
      super.titleStyle = value;
    }
    get descStyle() {
      return this[descStyle$];
    }
    set descStyle(value) {
      super.descStyle = value;
    }
    get buttonAreaPadding() {
      return this[buttonAreaPadding$];
    }
    set buttonAreaPadding(value) {
      super.buttonAreaPadding = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
  };
  (alert_style.AlertStyle.new = function(opts) {
    let animationType = opts && 'animationType' in opts ? opts.animationType : C10 || CT.C10;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C9 || CT.C9;
    let alertBorder = opts && 'alertBorder' in opts ? opts.alertBorder : null;
    let isCloseButton = opts && 'isCloseButton' in opts ? opts.isCloseButton : true;
    let isOverlayTapDismiss = opts && 'isOverlayTapDismiss' in opts ? opts.isOverlayTapDismiss : true;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let overlayColor = opts && 'overlayColor' in opts ? opts.overlayColor : C8 || CT.C8;
    let titleStyle = opts && 'titleStyle' in opts ? opts.titleStyle : C6 || CT.C6;
    let descStyle = opts && 'descStyle' in opts ? opts.descStyle : C2 || CT.C2;
    let buttonAreaPadding = opts && 'buttonAreaPadding' in opts ? opts.buttonAreaPadding : C1 || CT.C1;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    this[animationType$] = animationType;
    this[animationDuration$] = animationDuration;
    this[alertBorder$] = alertBorder;
    this[isCloseButton$] = isCloseButton;
    this[isOverlayTapDismiss$] = isOverlayTapDismiss;
    this[backgroundColor$] = backgroundColor;
    this[overlayColor$] = overlayColor;
    this[titleStyle$] = titleStyle;
    this[descStyle$] = descStyle;
    this[buttonAreaPadding$] = buttonAreaPadding;
    this[constraints$] = constraints;
    ;
  }).prototype = alert_style.AlertStyle.prototype;
  dart.addTypeTests(alert_style.AlertStyle);
  const animationType$ = AlertStyle_animationType;
  const animationDuration$ = AlertStyle_animationDuration;
  const alertBorder$ = AlertStyle_alertBorder;
  const isCloseButton$ = AlertStyle_isCloseButton;
  const isOverlayTapDismiss$ = AlertStyle_isOverlayTapDismiss;
  const backgroundColor$ = AlertStyle_backgroundColor;
  const overlayColor$ = AlertStyle_overlayColor;
  const titleStyle$ = AlertStyle_titleStyle;
  const descStyle$ = AlertStyle_descStyle;
  const buttonAreaPadding$ = AlertStyle_buttonAreaPadding;
  const constraints$ = AlertStyle_constraints;
  dart.setLibraryUri(alert_style.AlertStyle, "package:rflutter_alert/src/alert_style.dart");
  dart.setFieldSignature(alert_style.AlertStyle, () => ({
    __proto__: dart.getFields(alert_style.AlertStyle.__proto__),
    animationType: dart.finalFieldType(constants.AnimationType),
    animationDuration: dart.finalFieldType(core.Duration),
    alertBorder: dart.finalFieldType(borders.ShapeBorder),
    isCloseButton: dart.finalFieldType(core.bool),
    isOverlayTapDismiss: dart.finalFieldType(core.bool),
    backgroundColor: dart.finalFieldType(ui.Color),
    overlayColor: dart.finalFieldType(ui.Color),
    titleStyle: dart.finalFieldType(text_style.TextStyle),
    descStyle: dart.finalFieldType(text_style.TextStyle),
    buttonAreaPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    constraints: dart.finalFieldType(box.BoxConstraints)
  }));
  dart.trackLibraries("packages/rflutter_alert/rflutter_alert", {
    "package:rflutter_alert/src/alert.dart": alert,
    "package:rflutter_alert/src/dialog_button.dart": dialog_button,
    "package:rflutter_alert/src/constants.dart": constants,
    "package:rflutter_alert/src/animation_transition.dart": animation_transition,
    "package:rflutter_alert/src/alert_style.dart": alert_style,
    "package:rflutter_alert/rflutter_alert.dart": rflutter_alert
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/alert.dart","src/dialog_button.dart","src/constants.dart","src/animation_transition.dart","src/alert_style.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"rflutter_alert.ddc.js"}');
  // Exports:
  return {
    src__alert: alert,
    src__dialog_button: dialog_button,
    src__constants: constants,
    src__animation_transition: animation_transition,
    src__alert_style: alert_style,
    rflutter_alert: rflutter_alert
  };
});

//# sourceMappingURL=rflutter_alert.ddc.js.map
