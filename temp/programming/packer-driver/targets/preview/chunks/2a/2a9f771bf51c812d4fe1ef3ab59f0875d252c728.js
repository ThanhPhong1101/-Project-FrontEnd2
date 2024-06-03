System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Collider2D, Component, Contact2DType, director, Input, input, KeyCode, log, Node, RichText, tween, UIOpacity, Vec3, Bird, Scroll, PipePool, FlashUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScroll(extras) {
    _reporterNs.report("Scroll", "./Scroll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPipePool(extras) {
    _reporterNs.report("PipePool", "./PipePool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlashUI(extras) {
    _reporterNs.report("FlashUI", "./UI/FlashUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      log = _cc.log;
      Node = _cc.Node;
      RichText = _cc.RichText;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Bird = _unresolved_2.Bird;
    }, function (_unresolved_3) {
      Scroll = _unresolved_3.Scroll;
    }, function (_unresolved_4) {
      PipePool = _unresolved_4.PipePool;
    }, function (_unresolved_5) {
      FlashUI = _unresolved_5.FlashUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65166Uz7qNJ4Z7/ou9ec9Pv", "Game", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Collider2D', 'Component', 'Contact2DType', 'director', 'EventGamepad', 'EventKeyboard', 'EventMouse', 'Input', 'input', 'KeyCode', 'log', 'Node', 'RichText', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec2 = property({
        type: _crd && Bird === void 0 ? (_reportPossibleCrUseOfBird({
          error: Error()
        }), Bird) : Bird,
        tooltip: "Add Bird node"
      }), _dec3 = property({
        type: _crd && Scroll === void 0 ? (_reportPossibleCrUseOfScroll({
          error: Error()
        }), Scroll) : Scroll,
        tooltip: "Add Scroll node"
      }), _dec4 = property({
        type: UIOpacity,
        tooltip: "Add UIOpacity node"
      }), _dec5 = property({
        type: Node,
        tooltip: "Add GameOver node"
      }), _dec6 = property({
        type: _crd && PipePool === void 0 ? (_reportPossibleCrUseOfPipePool({
          error: Error()
        }), PipePool) : PipePool,
        tooltip: "Add PipePool node"
      }), _dec7 = property({
        type: AudioSource,
        tooltip: "Add AudioSource node"
      }), _dec8 = property({
        type: AudioClip,
        tooltip: "Add hitSound node"
      }), _dec9 = property({
        type: AudioClip,
        tooltip: "Add scoreSound node"
      }), _dec10 = property({
        type: RichText,
        tooltip: "Add ScoreLabel node"
      }), _dec11 = property({
        type: Vec3,
        tooltip: "Add GameOverStartPos node"
      }), _dec12 = property({
        type: Vec3,
        tooltip: "Add GameOverHidePos node"
      }), _dec13 = property({
        type: RichText,
        tooltip: "Add labelScore node"
      }), _dec14 = property({
        type: RichText,
        tooltip: "Add labelBestScore node"
      }), _dec15 = property({
        type: _crd && FlashUI === void 0 ? (_reportPossibleCrUseOfFlashUI({
          error: Error()
        }), FlashUI) : FlashUI,
        tooltip: "The Flash Screen"
      }), _dec(_class = (_class2 = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bird", _descriptor, this);

          _initializerDefineProperty(this, "Scroll", _descriptor2, this);

          _initializerDefineProperty(this, "SpriteFade", _descriptor3, this);

          _initializerDefineProperty(this, "GameOverNode", _descriptor4, this);

          _initializerDefineProperty(this, "pipeQueue", _descriptor5, this);

          this.isOver = void 0;

          _initializerDefineProperty(this, "AudioSource", _descriptor6, this);

          _initializerDefineProperty(this, "hitSound", _descriptor7, this);

          _initializerDefineProperty(this, "scoreSound", _descriptor8, this);

          this.score = 0;

          _initializerDefineProperty(this, "ScoreLabel", _descriptor9, this);

          _initializerDefineProperty(this, "gameOverStartPos", _descriptor10, this);

          _initializerDefineProperty(this, "gameOverHidePos", _descriptor11, this);

          _initializerDefineProperty(this, "labelScore", _descriptor12, this);

          _initializerDefineProperty(this, "labelBestScore", _descriptor13, this);

          _initializerDefineProperty(this, "FlashUI", _descriptor14, this);

          this.timerSpawnPipe = 0;
        }

        onLoad() {
          // Thiết lập trạng thái ban đầu của trò chơi
          this.score = 0;
          this.isOver = true;
          this.SpriteFade.opacity = 255; // Thiết lập độ mờ ban đầu của SpriteFade là 255 (hoàn toàn hiện)

          this.initListener(); // Gọi phương thức để khởi tạo các lắng nghe sự kiện
          // Vô hiệu hóa node GameOver khi trò chơi bắt đầu

          this.GameOverNode.active = false; // Đặt vị trí bắt đầu và vị trí ẩn của node GameOver

          log("Game Over Pos " + this.GameOverNode.position.toString());
          log("Game Over World Pos " + this.GameOverNode.getWorldPosition());
          this.gameOverStartPos = this.GameOverNode.getWorldPosition();
          this.gameOverHidePos = new Vec3(this.gameOverStartPos.x, this.gameOverStartPos.y - 1000, this.gameOverStartPos.z); // Thiết lập vị trí ẩn của GameOverNode

          this.GameOverNode.setPosition(new Vec3(0, -1000)); // Đặt vị trí ban đầu của GameOverNode ra khỏi màn hình
          // Chuyển động làm mờ dần SpriteFade

          tween().target(this.SpriteFade).to(0.5, {
            opacity: 0
          }) // Làm mờ SpriteFade trong 0.5 giây
          .start();
        }

        initListener() {
          // Đăng ký các sự kiện đầu vào
          input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this); // Lắng nghe sự kiện nhấn phím

          input.on(Input.EventType.TOUCH_START, this.touchStart, this); // Lắng nghe sự kiện chạm màn hình

          input.on(Input.EventType.GAMEPAD_INPUT, this.GamePadOnKeyDown, this); // Lắng nghe sự kiện điều khiển gamepad
        }

        GamePadOnKeyDown(event) {
          // Kiểm tra nếu nút phía nam của gamepad được nhấn
          if (event.gamepad.buttonSouth.getValue() == 1) {
            this.FlapBird(); // Gọi phương thức FlapBird khi nút phía nam được nhấn
          }
        }

        OnClick(event) {
          log("Mouse Click"); // Ghi nhật ký khi chuột được nhấp

          this.FlapBird(); // Gọi phương thức FlapBird khi nhấp chuột
        }

        touchStart() {
          log("Click and Touch"); // Ghi nhật ký khi màn hình được chạm

          this.FlapBird(); // Gọi phương thức FlapBird khi màn hình được chạm
        }

        OnKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              log("You Press the A Key"); // Ghi nhật ký khi phím A được nhấn

              break;

            case KeyCode.SPACE:
              {
                this.FlapBird(); // Gọi phương thức FlapBird khi phím Space được nhấn
              }
              break;
          }
        }

        FlapBird() {
          log("Flap Bird"); // Ghi nhật ký khi phương thức FlapBird được gọi

          if (this.isOver) {
            this.resetGame(); // Đặt lại trò chơi nếu trò chơi đã kết thúc

            this.startGame(); // Bắt đầu trò chơi mới
          }

          if (this.isOver == false) {
            if (this.bird == null) {
              // Kiểm tra nếu đối tượng bird là null
              log("The Bird is Null assign on the editor"); // Ghi nhật ký nếu đối tượng bird là null
            }

            this.bird.play(); // Gọi phương thức play của đối tượng bird
          }
        }

        startGame() {
          this.isOver = false; // Đặt trạng thái trò chơi là chưa kết thúc
          // this.Scroll.StartScroll(); // Bắt đầu cuộn nền (được comment lại)
          // this.pipeQueue.addPool(); // Thêm đường ống vào hàng đợi (được comment lại)
        }

        resetGame() {
          this.isOver = false; // Đặt trạng thái trò chơi là chưa kết thúc
          // this.pipeQueue.reset(); // Đặt lại hàng đợi đường ống (được comment lại)
          // this.bird.resetBird(); // Đặt lại đối tượng bird (được comment lại)
          // this.Scroll.reset(); // Đặt lại cuộn nền (được comment lại)
        }

        AddPoint() {
          this.score++; // Tăng điểm số

          this.ScoreLabel.string = this.score.toString(); // Cập nhật nhãn điểm số

          this.AudioSource.playOneShot(this.scoreSound, 1); // Phát âm thanh điểm số
        }

        Dead() {
          if (this.isOver == false) {
            this.FlashUI.Flash(); // Gọi phương thức Flash của FlashUI

            this.isOver = true; // Đặt trạng thái trò chơi là kết thúc

            this.Scroll.StopScroll(); // Dừng cuộn nền

            this.AudioSource.playOneShot(this.hitSound, 1); // Phát âm thanh khi va chạm

            this.GameOverNode.active = true; // Kích hoạt node GameOver

            this.labelScore.string = this.score.toString(); // Cập nhật nhãn điểm số
            // Lấy điểm số cao nhất từ localStorage

            var recoverScore = localStorage.getItem("bestScore");

            if (recoverScore == null) {
              localStorage.setItem("bestScore", "0"); // Nếu không có điểm số cao nhất, đặt thành 0
            }

            var bestScore = parseInt(localStorage.getItem("bestScore"));

            if (this.score > bestScore) {
              bestScore = this.score; // Cập nhật điểm số cao nhất nếu điểm hiện tại lớn hơn

              localStorage.setItem("bestScore", bestScore.toString()); // Lưu điểm số cao nhất mới vào localStorage
            }

            this.labelBestScore.string = bestScore.toString(); // Cập nhật nhãn điểm số cao nhất
            // Chuyển động hiển thị GameOverNode

            tween(this.GameOverNode).to(1, {
              position: new Vec3(0, 0)
            }) // Di chuyển GameOverNode đến vị trí (0, 0) trong 1 giây
            .start();
          }
        }

        onClickRestartGame(event, customData) {
          // Chuyển động làm mờ dần SpriteFade
          tween().target(this.SpriteFade).to(0.5, {
            opacity: 255
          }) // Làm mờ SpriteFade trong 0.5 giây
          .call(this.RestartGame) // Gọi phương thức RestartGame sau khi làm mờ
          .start();
        }

        RestartGame() {
          // Đếm số lần chơi trò chơi
          var countGamePlay = localStorage.getItem("countGamePlay");

          if (countGamePlay == null) {
            localStorage.setItem("countGamePlay", "0"); // Nếu không có, đặt thành 0
          }

          var count = parseInt(localStorage.getItem("countGamePlay"));
          count++;

          if (count > 3) {
            count = 0; // Đặt lại đếm nếu vượt quá 3
          }

          localStorage.setItem("countGamePlay", count.toString()); // Lưu đếm vào localStorage

          director.loadScene("game"); // Tải lại cảnh game
        }

        update(dt) {
          if (this.isOver == false) {
            this.timerSpawnPipe += dt;

            if (this.timerSpawnPipe > 1) {
              this.timerSpawnPipe = 0;
              this.pipeQueue.addPool(); // Thêm đường ống vào hàng đợi sau mỗi giây
            }
          }
        }

        contactGroundPipe() {
          var collider = this.bird.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // Lắng nghe sự kiện va chạm
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.bird.hitSomething = true; // Đặt trạng thái va chạm của bird là true khi va chạm
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Scroll", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "SpriteFade", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GameOverNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pipeQueue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "AudioSource", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hitSound", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scoreSound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ScoreLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameOverStartPos", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameOverHidePos", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelScore", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelBestScore", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "FlashUI", [_dec15], {
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
//# sourceMappingURL=2a9f771bf51c812d4fe1ef3ab59f0875d252c728.js.map