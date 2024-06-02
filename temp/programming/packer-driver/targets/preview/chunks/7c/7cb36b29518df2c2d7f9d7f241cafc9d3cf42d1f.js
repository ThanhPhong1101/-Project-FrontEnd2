System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BirdMenu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6dbadeLjtGgaR1i0cbgbSB", "BirdMenu", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BirdMenu", BirdMenu = (_dec = ccclass('BirdMenu'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class BirdMenu extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "actionTime", _descriptor, this);

          _initializerDefineProperty(this, "moveUpDistance", _descriptor2, this);

          this.tweenPos = void 0;
          this._wPos = new Vec3(0, 0, 0);
          this.startPos = void 0;
        }

        onLoad() {
          Vec3.copy(this._wPos, this.node.worldPosition);
          this.startPos = this.node.getWorldPosition();
          var moveUp = this.node.getWorldPosition();
          moveUp.y += this.moveUpDistance;
          this.tweenPos = tween(this._wPos).to(this.actionTime, moveUp, {
            easing: 'linear'
          }).to(this.actionTime, this.startPos, {
            easing: 'linear'
          }).union().repeat(Infinity);
        }

        onEnable() {
          this.tweenPos.start();
        }

        onDisable() {
          this.tweenPos.stop();
        }

        update(dt) {
          this.node.setWorldPosition(this._wPos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveUpDistance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7cb36b29518df2c2d7f9d7f241cafc9d3cf42d1f.js.map