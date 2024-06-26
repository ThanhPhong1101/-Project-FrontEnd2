System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, SpriteAnimator;

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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c67eehxXmVFbJzCJ6mjnJW9", "SpriteAnimator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteAnimator", SpriteAnimator = (_dec = ccclass('SpriteAnimator'), _dec2 = property({
        type: [Sprite]
      }), _dec3 = property({
        type: [SpriteFrame]
      }), _dec(_class = (_class2 = class SpriteAnimator extends Component {
        constructor() {
          super(...arguments);

          // Thuộc tính để chứa đối tượng Sprite sẽ được hoạt hình
          _initializerDefineProperty(this, "Sprite", _descriptor, this);

          // Mảng các khung hình Sprite để tạo hoạt hình
          _initializerDefineProperty(this, "sprites", _descriptor2, this);

          // Số khung hình trên giây
          _initializerDefineProperty(this, "framesPerSecond", _descriptor3, this);

          // Biến kiểm tra xem hoạt hình có đang tạm dừng hay không
          _initializerDefineProperty(this, "paused", _descriptor4, this);

          // Khung hình hiện tại của hoạt hình
          this._currentFrame = 0;
          // Thời gian từ khung hình cuối cùng
          this._timeSinceLastFrame = 0;
        }

        // Hàm khởi tạo, được gọi khi đối tượng được tải
        onLoad() {
          // Lấy thành phần Sprite từ node
          this.Sprite = this.node.getComponent(Sprite);
        } // Hàm cập nhật, được gọi mỗi khung hình


        update(deltaTime) {
          // Nếu hoạt hình đang tạm dừng, thoát hàm
          if (this.paused) return; // Cập nhật thời gian từ khung hình cuối cùng

          this._timeSinceLastFrame += deltaTime; // Nếu thời gian đã đủ để chuyển sang khung hình tiếp theo

          if (this._timeSinceLastFrame >= 1 / this.framesPerSecond) {
            // Cập nhật khung hình hiện tại
            this._currentFrame = (this._currentFrame + 1) % this.sprites.length; // Đặt lại thời gian từ khung hình cuối cùng

            this._timeSinceLastFrame = 0;
          } // Cập nhật SpriteFrame hiện tại cho đối tượng Sprite


          this.Sprite.spriteFrame = this.sprites[this._currentFrame];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprites", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "framesPerSecond", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "paused", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=127fcc1624a218f2551cd400c964ec543592b291.js.map