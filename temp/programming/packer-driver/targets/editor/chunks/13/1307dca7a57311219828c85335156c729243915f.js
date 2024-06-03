System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Scroll;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a19f19ZOQVDN7En7Lka/nhF", "Scroll", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Scroll", Scroll = (_dec = ccclass('Scroll'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = class Scroll extends Component {
        constructor(...args) {
          super(...args);

          // Tốc độ cuộn của nền
          _initializerDefineProperty(this, "speed", _descriptor, this);

          // Giới hạn cuộn (khi nền cuộn đến vị trí này, nó sẽ quay lại vị trí ban đầu)
          _initializerDefineProperty(this, "limit", _descriptor2, this);

          // chiều rộng của nền
          // Biến kiểm tra xem nền có đang cuộn không
          this.canScroll = void 0;
        }

        start() {
          // Khởi tạo nền có thể cuộn
          this.canScroll = true;
        } // Hàm dừng cuộn nền


        StopScroll() {
          this.canScroll = false;
        } // Hàm cập nhật được gọi mỗi khung hình


        update(deltaTime) {
          // Nếu nền không thể cuộn, thoát hàm
          if (this.canScroll == false) {
            return;
          } // Lấy vị trí hiện tại của nền


          let pos = this.node.getPosition(); // Cập nhật vị trí x dựa trên tốc độ và deltaTime

          pos.x += this.speed * deltaTime; // Nếu vị trí x của nền nhỏ hơn giới hạn, đặt lại vị trí x

          if (pos.x <= this.limit) {
            pos.x += Math.abs(this.limit);
          } // Đặt vị trí mới cho nền


          this.node.setPosition(pos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "limit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -336;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1307dca7a57311219828c85335156c729243915f.js.map