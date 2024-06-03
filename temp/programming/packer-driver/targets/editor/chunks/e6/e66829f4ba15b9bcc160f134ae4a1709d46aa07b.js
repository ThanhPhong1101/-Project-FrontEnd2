System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, NodePool, Prefab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PipePool;

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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a892eD3dSJLiJm5xoFlU2PA", "PipePool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodePool', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PipePool", PipePool = (_dec = ccclass('PipePool'), _dec2 = property({
        type: Prefab,
        tooltip: 'Prefab Pipes'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Where the new pipes go'
      }), _dec(_class = (_class2 = class PipePool extends Component {
        constructor(...args) {
          super(...args);

          // Định nghĩa thuộc tính prefabPipes, loại Prefab, được sử dụng để tạo các ống mới
          _initializerDefineProperty(this, "prefabPipes", _descriptor, this);

          // Định nghĩa thuộc tính pipePoolHome, loại Node, là nơi chứa các ống mới được tạo
          _initializerDefineProperty(this, "pipePoolHome", _descriptor2, this);

          // Khởi tạo một NodePool để quản lý các ống (pipes)
          this.pool = new NodePool();
          this.createPipe = null;
        }

        // Phương thức khởi tạo bể (pool) các ống
        initPool() {
          // Số lượng ống ban đầu cần tạo
          let initCount = 3; // Điền vào bể các ống (pipes)

          for (let i = 0; i < initCount; i++) {
            // Tạo một node mới từ prefab
            let createPipe = instantiate(this.prefabPipes); // instantiate nghĩa là tạo một bản sao của prefab gốc
            // Đưa ống đầu tiên lên màn hình bằng cách thêm nó vào pipePoolHome

            if (i == 0) {
              this.pipePoolHome.addChild(createPipe);
            } // Đưa các ống khác vào NodePool để quản lý
            else {
              this.pool.put(createPipe);
            }
          }
        } // Phương thức thêm ống mới vào bể


        addPool() {
          // Kiểm tra nếu bể không đầy thì thêm ống mới, nếu không thì lấy ống đầu tiên trong bể
          if (this.pool.size() > 0) {
            // Lấy một ống từ bể
            this.createPipe = this.pool.get();
          } else {
            // Tạo một ống mới
            this.createPipe = instantiate(this.prefabPipes);
          } // Thêm ống vào trò chơi như một node


          this.pipePoolHome.addChild(this.createPipe);
        } // Phương thức đặt lại (reset) bể các ống


        reset() {
          // Xóa tất cả các node con khỏi pipePoolHome và làm sạch bể
          this.pipePoolHome.removeAllChildren();
          this.pool.clear(); // Khởi tạo lại bể các ống

          this.initPool();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPipes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pipePoolHome", [_dec3], {
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
//# sourceMappingURL=e66829f4ba15b9bcc160f134ae4a1709d46aa07b.js.map