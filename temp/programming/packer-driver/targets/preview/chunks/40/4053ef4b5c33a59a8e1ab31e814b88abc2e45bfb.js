System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, CCFloat, Collider2D, Component, Contact2DType, lerp, log, RigidBody2D, tween, Vec2, Vec3, Game, SpriteAnimator, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, State, Bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteAnimator(extras) {
    _reporterNs.report("SpriteAnimator", "./SpriteAnimator", _context.meta, extras);
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
      CCFloat = _cc.CCFloat;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      lerp = _cc.lerp;
      log = _cc.log;
      RigidBody2D = _cc.RigidBody2D;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Game = _unresolved_2.Game;
    }, function (_unresolved_3) {
      SpriteAnimator = _unresolved_3.SpriteAnimator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c7178v1gpIvaeWZik+9CDD", "Bird", undefined);

      // Import các module từ 'cc'
      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'CCFloat', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact', 'lerp', 'log', 'Node', 'RigidBody2D', 'Tween', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // Gán giá trị của ccclass và property từ _decorator
      // Tạo một enum với các trạng thái: WAITING, PLAYING, DEAD

      State = /*#__PURE__*/function (State) {
        State[State["WAITING"] = 0] = "WAITING";
        State[State["PLAYING"] = 1] = "PLAYING";
        State[State["DEAD"] = 2] = "DEAD";
        return State;
      }(State || {}); // Import class Game từ tệp Game.ts


      // Import class SpriteAnimator từ tệp SpriteAnimator.ts
      _export("Bird", Bird = (_dec = ccclass('Bird'), _dec2 = property({
        type: _crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
          error: Error()
        }), Game) : Game
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: AudioSource,
        tooltip: "Add AudioSource node"
      }), _dec5 = property({
        type: AudioClip,
        tooltip: "Add FlappySound node"
      }), _dec(_class = (_class2 = class Bird extends Component // Định nghĩa class Bird kế thừa từ Component
      {
        constructor() {
          super(...arguments);
          this.actionTime = 1;

          // Thời gian hoạt động mặc định
          _initializerDefineProperty(this, "Game", _descriptor, this);

          // Tham chiếu đến đối tượng Game
          _initializerDefineProperty(this, "verticalForce", _descriptor2, this);

          // Lực đẩy theo chiều dọc mặc định
          _initializerDefineProperty(this, "AudioSource", _descriptor3, this);

          // Tham chiếu đến nút AudioSource
          _initializerDefineProperty(this, "FlappySound", _descriptor4, this);

          // Tham chiếu đến âm thanh Flappy
          this.state = State.WAITING;
          // Trạng thái ban đầu của Bird
          this._wPos = new Vec3(0, 0, 0);
          // Vị trí thế giới của Bird
          this.rb = void 0;
          // Tham chiếu đến RigidBody2D
          this.collider2D = void 0;
          // Tham chiếu đến Collider2D
          this.SpriteAnimator = void 0;
          // Tham chiếu đến SpriteAnimator
          this.tweenPos = void 0;
          // Tween cho vị trí
          this.startPos = void 0;
          // Vị trí bắt đầu
          this.timerRotateUp = 0;
          // Thời gian quay lên
          this.timeElapsedDown = 0;
          // Thời gian trôi qua khi quay xuống
          this.rotateLerpDuration = 10;
          // Thời gian quay mềm xuống
          this.rotateLerpDurationUp = 0.5;
          // Thời gian quay mềm lên
          this.tweenRotateUp = void 0;
          // Tween cho góc quay lên
          this.faceUpAngle = 15;
          // Góc quay lên
          this.hitSomething = false;
        }

        // Đánh dấu đã va chạm với vật gì đó
        onLoad() // Hàm được gọi khi nạp xong
        {
          this.state = State.WAITING; // Thiết lập trạng thái ban đầu là WAITING

          this.rb = this.node.getComponent(RigidBody2D); // Lấy tham chiếu đến RigidBody2D

          this.collider2D = this.node.getComponent(Collider2D); // Lấy tham chiếu đến Collider2D

          this.SpriteAnimator = this.node.getComponent(_crd && SpriteAnimator === void 0 ? (_reportPossibleCrUseOfSpriteAnimator({
            error: Error()
          }), SpriteAnimator) : SpriteAnimator); // Lấy tham chiếu đến SpriteAnimator

          this.rb.gravityScale = 0; // Tắt trọng lực cho đến khi bắt đầu chơi

          Vec3.copy(this._wPos, this.node.worldPosition); // Sao chép vị trí thế giới của Bird

          this.startPos = this.node.getWorldPosition(); // Lưu vị trí bắt đầu

          var moveUp = this.node.getWorldPosition(); // Di chuyển lên trên

          moveUp.y += 20; // Tạo tween cho vị trí của Bird

          this.tweenPos = tween(this._wPos).to(this.actionTime, moveUp, {
            easing: 'linear'
          }).to(this.actionTime, this.startPos, {
            easing: 'linear'
          }).union().repeat(Infinity);

          if (this.collider2D != null) // Kiểm tra nếu có Collider2D
            {
              // Đăng ký sự kiện va chạm
              this.collider2D.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            }
        }

        start() // Hàm được gọi khi khởi động
        {
          this.tweenPos.start(); // Bắt đầu tween vị trí
        }

        onDisable() // Hàm được gọi khi tắt
        {
          this.tweenPos.stop(); // Dừng tween vị trí
        }

        play() // Phương thức để bắt đầu chơi
        {
          if (this.state == State.WAITING) // Nếu đang ở trạng thái WAITING
            {
              this.state = State.PLAYING; // Thiết lập trạng thái là PLAYING

              this.rb.gravityScale = 1; // Bật trọng lực
            }

          if (this.state == State.PLAYING) // Nếu đang ở trạng thái PLAYING
            {
              this.Flappy(); // Gọi phương thức Flappy
            }
        }

        Flappy() // Phương thức để làm Bird nhảy
        {
          if (this.state == State.DEAD) return; // Nếu đã chết thì không thực hiện gì

          this.rb.linearVelocity = new Vec2(0, 0); // Đặt vận tốc tuyến tính về 0

          this.rb.applyForceToCenter(new Vec2(0, this.verticalForce), true); // Áp dụng lực để Bird nhảy

          this.AudioSource.playOneShot(this.FlappySound, 1); // Phát âm thanh nhảy
        }

        update(dt) // Hàm được gọi mỗi frame
        {
          if (this.state == State.DEAD) // Nếu Bird đã chết
            {
              var velocity = this.rb.linearVelocity; // Lấy vận tốc

              this.UpdateFaceBirdAngle(velocity, dt); // Cập nhật góc quay của Bird

              return; // Thoát khỏi hàm update
            }

          if (this.state == State.WAITING) // Nếu Bird đang ở trạng thái chờ đợi
            {
              this.node.worldPosition = this._wPos; // Cập nhật vị trí của Bird
            }

          if (this.state == State.PLAYING) // Nếu Bird đang ở trạng thái chơi
            {
              var _velocity = this.rb.linearVelocity; // Lấy vận tốc

              this.UpdateFaceBirdAngle(_velocity, dt); // Cập nhật góc quay của Bird
            }
        }

        UpdateFaceBirdAngle(velocity, dt) // Phương thức để cập nhật góc quay của Bird
        {
          if (velocity.y > 1) // Nếu Bird đang bay lên
            {
              this.timerRotateUp = 0; // Đặt thời gian quay lên về 0

              if (this.timeElapsedDown < this.rotateLerpDurationUp) // Nếu thời gian trôi qua khi quay xuống nhỏ hơn thời gian quay mềm lên
                {
                  this.timeElapsedDown += dt; // Tăng thời gian trôi qua

                  this.node.angle = lerp(this.node.angle, this.faceUpAngle, this.timeElapsedDown / this.rotateLerpDurationUp); // Cập nhật góc quay mềm lên
                } else // Nếu đã đủ thời gian quay mềm lên
                {
                  this.node.angle = this.faceUpAngle; // Đặt góc quay của Bird thành góc quay lên
                }
            } else if (velocity.y < 0) // Nếu Bird đang rơi xuống
            {
              this.timeElapsedDown = 0; // Đặt thời gian trôi qua khi quay xuống về 0

              if (this.timerRotateUp < this.rotateLerpDuration) // Nếu thời gian quay lên nhỏ hơn thời gian quay mềm xuống
                {
                  this.timerRotateUp += dt; // Tăng thời gian quay lên

                  this.node.angle = lerp(this.node.angle, -90, this.timerRotateUp / this.rotateLerpDuration); // Cập nhật góc quay mềm xuống
                } else // Nếu đã đủ thời gian quay mềm xuống
                {
                  this.node.angle = -90; // Đặt góc quay của Bird thành 90 độ
                }
            }
        }

        onBeginContact(selfCollider, otherCollider, contact) // Xử lý khi có va chạm
        {
          if (otherCollider.tag == 1) // Nếu va chạm với đối tượng có tag là 1 (điểm)
            {
              log("You hit a new point"); // Log ra màn hình console

              this.Game.AddPoint(); // Thêm điểm

              otherCollider.enabled = false; // Tắt collider của đối tượng đó
            } else // Nếu va chạm với đối tượng khác
            {
              log("You die"); // Log ra màn hình console

              this.SpriteAnimator.paused = true; // Dừng SpriteAnimator

              this.hitSomething = true; // Đánh dấu đã va chạm

              this.state = State.DEAD; // Thiết lập trạng thái là DEAD

              this.Game.Dead(); // Gọi phương thức Dead từ Game
            }
        }

        lerp(start, end, time) // Phương thức lerp để làm mềm di chuyển
        {
          return start + time * (end - start); // Tính toán giá trị mềm
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Game", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "verticalForce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "FlappySound", [_dec5], {
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
//# sourceMappingURL=4053ef4b5c33a59a8e1ab31e814b88abc2e45bfb.js.map