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

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'CCFloat', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact', 'lerp', 'log', 'Node', 'RigidBody2D', 'Tween', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); //create a enum waiting, playing, dead

      State = /*#__PURE__*/function (State) {
        State[State["WAITING"] = 0] = "WAITING";
        State[State["PLAYING"] = 1] = "PLAYING";
        State[State["DEAD"] = 2] = "DEAD";
        return State;
      }(State || {});

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
      }), _dec(_class = (_class2 = class Bird extends Component {
        constructor(...args) {
          super(...args);
          this.actionTime = 1;

          _initializerDefineProperty(this, "Game", _descriptor, this);

          _initializerDefineProperty(this, "verticalForce", _descriptor2, this);

          _initializerDefineProperty(this, "AudioSource", _descriptor3, this);

          _initializerDefineProperty(this, "FlappySound", _descriptor4, this);

          this.state = State.WAITING;
          this._wPos = new Vec3(0, 0, 0);
          this.rb = void 0;
          this.collider2D = void 0;
          this.SpriteAnimator = void 0;
          this.tweenPos = void 0;
          this.startPos = void 0;
          this.timerRotateUp = 0;
          this.timeElapsedDown = 0;
          this.rotateLerpDuration = 10;
          this.rotateLerpDurationUp = 0.5;
          this.tweenRotateUp = void 0;
          this.faceUpAngle = 15;
          this.hitSomething = false;
        }

        onLoad() {
          this.state = State.WAITING;
          this.rb = this.node.getComponent(RigidBody2D);
          this.collider2D = this.node.getComponent(Collider2D);
          this.SpriteAnimator = this.node.getComponent(_crd && SpriteAnimator === void 0 ? (_reportPossibleCrUseOfSpriteAnimator({
            error: Error()
          }), SpriteAnimator) : SpriteAnimator);
          this.rb.gravityScale = 0;
          Vec3.copy(this._wPos, this.node.worldPosition);
          this.startPos = this.node.getWorldPosition();
          let moveUp = this.node.getWorldPosition();
          moveUp.y += 20;
          this.tweenPos = tween(this._wPos).to(this.actionTime, moveUp, {
            easing: 'linear'
          }).to(this.actionTime, this.startPos, {
            easing: 'linear'
          }).union().repeat(Infinity);
          log('Load Finish');

          if (this.collider2D != null) {
            this.collider2D.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        start() {
          this.tweenPos.start();
        }

        onDisable() {
          this.tweenPos.stop();
        }

        play() {
          if (this.state == State.WAITING) {
            this.state = State.PLAYING;
            this.rb.gravityScale = 1;
          }

          if (this.state == State.PLAYING) {
            this.Flappy();
          }
        }

        Flappy() {
          if (this.state == State.DEAD) return;
          this.rb.linearVelocity = new Vec2(0, 0);
          this.rb.applyForceToCenter(new Vec2(0, this.verticalForce), true);
          this.AudioSource.playOneShot(this.FlappySound, 1);
        }

        update(dt) {
          if (this.state == State.DEAD) {
            let velocity = this.rb.linearVelocity;
            this.UpdateFaceBirdAngle(velocity, dt);
            return;
          }

          if (this.state == State.WAITING) {
            this.node.worldPosition = this._wPos;
          }

          if (this.state == State.PLAYING) {
            let velocity = this.rb.linearVelocity;
            this.UpdateFaceBirdAngle(velocity, dt);
          }
        }

        UpdateFaceBirdAngle(velocity, dt) {
          if (velocity.y > 1) {
            this.timerRotateUp = 0;

            if (this.timeElapsedDown < this.rotateLerpDurationUp) {
              this.timeElapsedDown += dt;
              this.node.angle = lerp(this.node.angle, this.faceUpAngle, this.timeElapsedDown / this.rotateLerpDurationUp);
            } else {
              this.node.angle = this.faceUpAngle;
            }
          } else if (velocity.y < 0) {
            this.timeElapsedDown = 0;

            if (this.timerRotateUp < this.rotateLerpDuration) {
              this.timerRotateUp += dt;
              this.node.angle = lerp(this.node.angle, -90, this.timerRotateUp / this.rotateLerpDuration);
            } else {
              this.node.angle = -90;
            }
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.tag == 1) {
            log("You hit a new point");
            this.Game.AddPoint();
            otherCollider.enabled = false;
          } else {
            log("You die");
            this.SpriteAnimator.paused = true;
            this.hitSomething = true;
            this.state = State.DEAD;
            this.Game.Dead();
          }
        }

        lerp(start, end, time) {
          return start + time * (end - start);
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
        initializer: function () {
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