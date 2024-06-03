System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec2, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ClariceCamera;

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
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10c0c1pi2JDup+SUzWnlDvu", "ClariceCamera", undefined);

      // Import các module cần thiết từ 'cc'
      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator); // Lấy ccclass và property từ _decorator
      /// <summary>
      /// This is a Camera Script to follow the player.
      /// Must be attached to the Camera Node.
      /// </summary>

      _export("ClariceCamera", ClariceCamera = (_dec = ccclass('ClariceCamera'), _dec2 = property({
        type: Node,
        tooltip: "The target to follow",
        displayOrder: 1
      }), _dec3 = property({
        type: Vec2,
        tooltip: "The offset to follow",
        displayOrder: 2
      }), _dec(_class = (_class2 = class ClariceCamera extends Component // Định nghĩa lớp ClariceCamera kế thừa từ Component
      {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "target", _descriptor, this);

          // Đối tượng mục tiêu mà camera sẽ theo dõi
          _initializerDefineProperty(this, "offset", _descriptor2, this);
        }

        // Khoảng cách bù để camera theo dõi
        // start() 
        // {
        //     
        // }
        update(deltaTime) // Hàm được gọi mỗi frame
        {
          if (this.target == null) return; // Nếu không có mục tiêu thì không làm gì cả

          let targetPos = this.target.getWorldPosition(); // Lấy vị trí của mục tiêu

          let CameraPos = this.node.getWorldPosition(); // Lấy vị trí hiện tại của camera

          CameraPos.x = targetPos.x + this.offset.x; // Cập nhật vị trí x của camera dựa trên vị trí mục tiêu và khoảng cách bù
          // CameraPos.y = targetPos.y + this.offset.y; // Không cần cập nhật y trong trò chơi này

          this.node.setWorldPosition(CameraPos); // Đặt lại vị trí của camera
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2eb161d6eaaad7f8d1a033b53d5dc251516fc5d.js.map