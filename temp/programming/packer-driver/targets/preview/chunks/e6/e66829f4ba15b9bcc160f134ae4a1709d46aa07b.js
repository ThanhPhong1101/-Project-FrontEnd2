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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "prefabPipes", _descriptor, this);

          _initializerDefineProperty(this, "pipePoolHome", _descriptor2, this);

          this.pool = new NodePool();
          this.createPipe = null;
        }

        initPool() {
          //build the amount of nodes needed at a time
          var initCount = 3; //fill up the node pool

          for (var i = 0; i < initCount; i++) {
            // create the new node
            var createPipe = instantiate(this.prefabPipes); //instantiate means make a copy of the orginal
            // put first one on the screen. So make it a child of the canvas.

            if (i == 0) {
              this.pipePoolHome.addChild(createPipe);
            } else {
              //put others into the nodePool
              this.pool.put(createPipe);
            }
          }
        }

        addPool() {
          //if the pool is not full add a new one, else get the first one in the pool
          if (this.pool.size() > 0) {
            //get from the pool
            this.createPipe = this.pool.get();
          } else {
            //build a new one
            this.createPipe = instantiate(this.prefabPipes);
          } //add pipe to game as a node


          this.pipePoolHome.addChild(this.createPipe);
        }

        reset() {
          //clear pool and reinitialize
          this.pipePoolHome.removeAllChildren();
          this.pool.clear();
          this.initPool();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPipes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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