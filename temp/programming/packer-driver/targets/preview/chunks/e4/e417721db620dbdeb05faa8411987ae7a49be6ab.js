System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, screen, find, UITransform, log, view, Game, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, random, Pipes;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      screen = _cc.screen;
      find = _cc.find;
      UITransform = _cc.UITransform;
      log = _cc.log;
      view = _cc.view;
    }, function (_unresolved_2) {
      Game = _unresolved_2.Game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c6714eVY9A06W+lejzHeeH", "Pipes", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'screen', 'find', 'UITransform', 'log', 'director', 'view']);

      ({
        ccclass,
        property
      } = _decorator); // Hàm tạo số ngẫu nhiên trong khoảng min và max

      random = (min, max) => {
        return Math.random() * (max - min) + min;
      };

      _export("Pipes", Pipes = (_dec = ccclass('Pipes'), _dec2 = property({
        type: Node,
        tooltip: 'Top Pipe'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Bottom Pipe'
      }), _dec(_class = (_class2 = class Pipes extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "topPipe", _descriptor, this);

          _initializerDefineProperty(this, "bottomPipe", _descriptor2, this);

          // Vị trí tạm thời của các ống trên và dưới
          this.tempStartLocationUp = new Vec3(0, 0, 0);
          this.tempStartLocationDown = new Vec3(0, 0, 0);
          this.scene = screen.windowSize;
          // Kích thước màn hình hiện tại
          // Các thuộc tính liên quan đến tốc độ ống
          this.game = void 0;
          // Lấy tốc độ ống từ GameCtrl
          this.bird = void 0;
          this.pipeSpeed = void 0;
          // Tốc độ cuối cùng của ống
          this.tempSpeed = void 0;
          // Tốc độ tạm thời của ống khi di chuyển
          // Cơ chế tính điểm
          this.isPass = void 0;
        }

        // Kiểm tra ống có vượt qua chim không
        onLoad() {
          // Tìm kiếm GameCtrl
          var gameControl = find("GameCtrl");

          if (gameControl == null) {
            log("GameCtrl not found");
            return;
          } else {
            this.game = gameControl.getComponent(_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game);
            this.bird = this.game.bird;
          } // Thêm tốc độ ống vào biến tạm thời


          this.pipeSpeed = this.game.Scroll.speed; // Đặt vị trí ban đầu

          this.initPos(); // Đặt cơ chế tính điểm dừng kích hoạt

          this.isPass = false;
        } // Đặt vị trí ban đầu của các ống


        initPos() {
          var visibleSize = view.getVisibleSize();
          var width = visibleSize.width; // Đặt vị trí ban đầu của x cho cả hai ống

          this.tempStartLocationUp.x = this.topPipe.getComponent(UITransform).width + width;
          this.tempStartLocationDown.x = this.bottomPipe.getComponent(UITransform).width + width; // Các biến ngẫu nhiên cho khoảng cách giữa các ống

          var gap = 50; // Khoảng cách có thể đi qua

          var topHeight = random(-30, 150); // Chiều cao của ống trên

          this.tempStartLocationUp.y = gap;
          this.tempStartLocationDown.y = -gap; // Đặt vị trí tạm thời thành vị trí thực tế

          this.topPipe.setPosition(this.tempStartLocationUp.x, this.tempStartLocationUp.y);
          this.bottomPipe.setPosition(this.tempStartLocationDown.x, this.tempStartLocationDown.y);
          var tempPos = this.node.getPosition();
          tempPos.y = topHeight;
          this.node.setPosition(tempPos);
        } // Di chuyển các ống khi cập nhật game


        update(deltaTime) {
          if (this.bird == null) {
            log("bird is null");
            return;
          }

          if (this.bird.state == 0 || this.bird.state == 2) return; // Lấy tốc độ ống

          this.tempSpeed = Math.abs(this.pipeSpeed * deltaTime); // Tạo vị trí tạm thời của các ống

          this.tempStartLocationDown = this.bottomPipe.position;
          this.tempStartLocationUp = this.topPipe.position; // Di chuyển các vị trí tạm thời của các ống

          this.tempStartLocationDown.x -= this.tempSpeed;
          this.tempStartLocationUp.x -= this.tempSpeed; // Đặt vị trí mới của các ống từ các vị trí tạm thời

          this.bottomPipe.setPosition(this.tempStartLocationDown);
          this.topPipe.setPosition(this.tempStartLocationUp); // Kiểm tra nếu các ống đã vượt qua màn hình, đặt lại vị trí các ống

          if (this.topPipe.getWorldPosition().x < 0 - this.scene.width) {
            // Tạo ống mới
            // this.game.createPipe();
            // Xóa node này để tiết kiệm bộ nhớ
            this.destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topPipe", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomPipe", [_dec3], {
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
//# sourceMappingURL=e417721db620dbdeb05faa8411987ae7a49be6ab.js.map