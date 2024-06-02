System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, screen, UIOpacity, UITransform, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FlashUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      screen = _cc.screen;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "720b2LBPBJGepXxd26LfGIh", "FlashUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'UIOpacity', 'UITransform', 'Vec2', 'View']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FlashUI", FlashUI = (_dec = ccclass('FlashUI'), _dec2 = property({
        type: UIOpacity,
        tooltip: "Add labelBestScore node"
      }), _dec(_class = (_class2 = class FlashUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiElement", _descriptor, this);

          this.uiTransform = void 0;
          this.flashDuration = 0.2;
          // Duration of the flash effect in seconds
          this.flashTimer = 0;
          // Timer to control the flash duration
          this.isFlashing = false;
        }

        // Flag to track if the flash effect is active
        start() {
          this.uiTransform = this.getComponent(UITransform);
          this.uiElement.opacity = 0;
        }

        Flash() {
          let size = screen.windowSize;
          this.uiTransform.setContentSize(size.x, size.y);
          this.isFlashing = true;
        }

        update(dt) {
          if (this.isFlashing) {
            this.flashTimer += dt; // Calculate the opacity based on the flash timer

            const t = this.flashTimer / this.flashDuration;
            const opacity = Math.abs(Math.sin(t * Math.PI)); // Adjust the function for the desired effect
            // Set the opacity of the UI element

            this.uiElement.opacity = Math.floor(opacity * 255); // Check if the flash duration is complete

            if (this.flashTimer >= this.flashDuration) {
              this.isFlashing = false;
              this.flashTimer = 0; // Reset the UI element opacity

              this.uiElement.opacity = 0;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiElement", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f605348f2ee2b3e823aa58deece847c2fb608a46.js.map