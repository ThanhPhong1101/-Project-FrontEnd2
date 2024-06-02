System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, log, Component, ComponentEventHandler, AndroidNative, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, UISelectable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAndroidNative(extras) {
    _reporterNs.report("AndroidNative", "../Android/AndroidNative", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      log = _cc.log;
      Component = _cc.Component;
      ComponentEventHandler = _cc.EventHandler;
    }, function (_unresolved_2) {
      AndroidNative = _unresolved_2.AndroidNative;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fd17s/5X5LQ6cKWr1JyC1i", "UISelectable", undefined);

      __checkObsolete__(['_decorator', 'Button', 'EventGamepad', 'log']);

      __checkObsolete__(['Component', 'EventHandler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UISelectable", UISelectable = (_dec = ccclass('UISelectable'), _dec2 = property({
        type: Button,
        tooltip: "Navigation Up"
      }), _dec3 = property({
        type: Button,
        tooltip: "Navigation Down"
      }), _dec4 = property({
        type: Button,
        tooltip: "Navigation Left"
      }), _dec5 = property({
        type: Button,
        tooltip: "Navigation Right"
      }), _dec(_class = (_class2 = class UISelectable extends Component {
        constructor() {
          super(...arguments);

          //For now lets just use a Explicit Navigation   
          _initializerDefineProperty(this, "SelectOnUp", _descriptor, this);

          _initializerDefineProperty(this, "SelectOnDown", _descriptor2, this);

          _initializerDefineProperty(this, "SelectOnLeft", _descriptor3, this);

          _initializerDefineProperty(this, "SelectOnRight", _descriptor4, this);

          this.Button = null;
          this.selectRight = void 0;
          this.selectLeft = void 0;
          this.selectUp = void 0;
          this.selectDown = void 0;
        }

        onLoad() {
          this.Button = this.getComponent(Button);

          if (this.SelectOnUp != null) {
            this.selectUp = this.SelectOnUp.getComponent(UISelectable);
          }

          if (this.SelectOnDown != null) {
            this.selectDown = this.SelectOnDown.getComponent(UISelectable);
          }

          if (this.SelectOnLeft != null) {
            this.selectLeft = this.SelectOnLeft.getComponent(UISelectable);
          }

          if (this.SelectOnRight != null) {
            this.selectRight = this.SelectOnRight.getComponent(UISelectable);
          }
        }

        OnSubmit() {
          if (this.Button != null && this.Button.clickEvents != null) {
            var count = this.Button.clickEvents.length;
            (_crd && AndroidNative === void 0 ? (_reportPossibleCrUseOfAndroidNative({
              error: Error()
            }), AndroidNative) : AndroidNative).showToast("Tryin to emit event " + count + " " + this.node.name, 0);
            ComponentEventHandler.emitEvents(this.Button.clickEvents);
            log("OnSubmit " + this.node.name);
          }
        }

        OnSelect() {
          log("OnSelect " + this.node.name);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SelectOnUp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SelectOnDown", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "SelectOnLeft", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SelectOnRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82278ee9361234be0e31ffc047f554c3724dfee5.js.map