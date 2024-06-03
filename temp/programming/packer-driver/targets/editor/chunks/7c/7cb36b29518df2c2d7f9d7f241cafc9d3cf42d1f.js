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

      // Import các module cần thiết từ 'cc'
      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // Lấy ccclass và property từ _decorator

      _export("BirdMenu", BirdMenu = (_dec = ccclass('BirdMenu'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class BirdMenu extends Component // Định nghĩa lớp BirdMenu kế thừa từ Component
      {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "actionTime", _descriptor, this);

          // Thời gian để thực hiện hành động (di chuyển)
          _initializerDefineProperty(this, "moveUpDistance", _descriptor2, this);

          // Khoảng cách di chuyển lên
          this.tweenPos = void 0;
          // Tween cho vị trí
          this._wPos = new Vec3(0, 0, 0);
          // Vị trí thế giới của BirdMenu
          this.startPos = void 0;
        }

        // Vị trí bắt đầu
        onLoad() // Hàm được gọi khi nạp xong
        {
          Vec3.copy(this._wPos, this.node.worldPosition); // Sao chép vị trí thế giới của node

          this.startPos = this.node.getWorldPosition(); // Lưu vị trí bắt đầu

          let moveUp = this.node.getWorldPosition(); // Lấy vị trí hiện tại của node

          moveUp.y += this.moveUpDistance; // Tăng y của vị trí hiện tại thêm khoảng cách di chuyển lên
          // Tạo tween cho vị trí của BirdMenu

          this.tweenPos = tween(this._wPos).to(this.actionTime, moveUp, {
            easing: 'linear'
          }) // Di chuyển đến vị trí mới với khoảng thời gian actionTime
          .to(this.actionTime, this.startPos, {
            easing: 'linear'
          }) // Di chuyển trở lại vị trí ban đầu với khoảng thời gian actionTime
          .union() // Liên kết các hành động di chuyển
          .repeat(Infinity); // Lặp lại vô hạn
        }

        onEnable() // Hàm được gọi khi BirdMenu được kích hoạt
        {
          this.tweenPos.start(); // Bắt đầu tween vị trí
        }

        onDisable() // Hàm được gọi khi BirdMenu bị tắt
        {
          this.tweenPos.stop(); // Dừng tween vị trí
        }

        update(dt) // Hàm được gọi mỗi frame
        {
          this.node.setWorldPosition(this._wPos); // Cập nhật vị trí của node dựa trên tween
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveUpDistance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7cb36b29518df2c2d7f9d7f241cafc9d3cf42d1f.js.map