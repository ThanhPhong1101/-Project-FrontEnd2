System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, director, Canvas, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Ground;

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
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      director = _cc.director;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6332ohVs1HZpVX7FTYyRRN", "Ground", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'director', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ground", Ground = (_dec = ccclass('Ground'), _dec2 = property({
        type: Node,
        tooltip: 'Ground 1 is here'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Ground 2 is here'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Ground 3 is here'
      }), _dec(_class = (_class2 = class Ground extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ground1", _descriptor, this);

          _initializerDefineProperty(this, "ground2", _descriptor2, this);

          _initializerDefineProperty(this, "ground3", _descriptor3, this);

          //Create ground width variables
          this.groundWidth1 = void 0;
          this.groundWidth2 = void 0;
          this.groundWidth3 = void 0;
          this.tempStartLocation1 = new Vec3();
          this.tempStartLocation2 = new Vec3();
          this.tempStartLocation3 = new Vec3();
          this.gameSpeed = 50;
        }

        onLoad() {
          this.startUp();
        } //initial startup function, does only once


        startUp() {
          this.groundWidth1 = this.ground1.getComponent(UITransform).width;
          this.groundWidth2 = this.ground2.getComponent(UITransform).width;
          this.groundWidth3 = this.ground3.getComponent(UITransform).width;
          this.tempStartLocation1.x = 0;
          this.tempStartLocation2.x = this.groundWidth1;
          this.tempStartLocation3.x = this.groundWidth1 + this.groundWidth2;
          this.ground1.setPosition(this.tempStartLocation1);
          this.ground2.setPosition(this.tempStartLocation2);
          this.ground3.setPosition(this.tempStartLocation3);
        }

        update(deltaTime) {
          this.tempStartLocation1 = this.ground1.position;
          this.tempStartLocation2 = this.ground2.position;
          this.tempStartLocation3 = this.ground3.position; //get speed and subtract from x

          this.tempStartLocation1.x -= this.gameSpeed * deltaTime;
          this.tempStartLocation2.x -= this.gameSpeed * deltaTime;
          this.tempStartLocation3.x -= this.gameSpeed * deltaTime;
          var scene = director.getScene();
          var canvas = scene.getComponentInChildren(Canvas);

          if (this.tempStartLocation1.x <= 0 - this.groundWidth1) {
            this.tempStartLocation1.x = canvas.getComponent(UITransform).width;
          }

          if (this.tempStartLocation2.x <= 0 - this.groundWidth2) {
            this.tempStartLocation2.x = canvas.getComponent(UITransform).width;
          }

          if (this.tempStartLocation3.x <= 0 - this.groundWidth3) {
            this.tempStartLocation3.x = canvas.getComponent(UITransform).width;
          }

          this.ground1.setPosition(this.tempStartLocation1);
          this.ground2.setPosition(this.tempStartLocation2);
          this.ground3.setPosition(this.tempStartLocation3);
        } //every time there is a new frame, will do this


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ground1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ground2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ground3", [_dec4], {
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
//# sourceMappingURL=418d49316199fa50c7b67d502f403faafa68f5ca.js.map