System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Canvas, UIOpacity, tween, AndroidNative, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MainMenu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAndroidNative(extras) {
    _reporterNs.report("AndroidNative", "./Android/AndroidNative", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Canvas = _cc.Canvas;
      UIOpacity = _cc.UIOpacity;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      AndroidNative = _unresolved_2.AndroidNative;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07845YcyRxI4rZn82EuEvGK", "MainMenu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Director', 'director', 'Canvas', 'UIOpacity', 'tween', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenu", MainMenu = (_dec = ccclass('MainMenu'), _dec2 = property({
        type: Canvas
      }), _dec3 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = class MainMenu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "canvas", _descriptor, this);

          _initializerDefineProperty(this, "SpriteFade", _descriptor2, this);
        }

        onLoad() {
          this.canvas = this.node.getComponent(Canvas);
          this.SpriteFade.opacity = 0;
        } // The function that will be called when the button is clicked


        onClickStart(event, customData) {
          tween().target(this.SpriteFade).to(0.5, {
            opacity: 255
          }).call(this.LoadSceneGame).start();
        }

        onClickLeaderboards() {
          (_crd && AndroidNative === void 0 ? (_reportPossibleCrUseOfAndroidNative({
            error: Error()
          }), AndroidNative) : AndroidNative).showAlert("Leaderboards");
        }

        LoadSceneGame() {
          director.loadScene("game");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SpriteFade", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21f4275a6e5b022be8eac613ed5a1b2e272469ae.js.map