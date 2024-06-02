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
      } = _decorator); //make a random number generator for the gap

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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "topPipe", _descriptor, this);

          _initializerDefineProperty(this, "bottomPipe", _descriptor2, this);

          //temporary Locations
          this.tempStartLocationUp = new Vec3(0, 0, 0);
          //Temporary location of the up pipe
          this.tempStartLocationDown = new Vec3(0, 0, 0);
          //Temporary location of the bottom pipe
          this.scene = screen.windowSize;
          //get the size of the screen in case we decide to change the content size
          //get the pipe speeds
          this.game = void 0;
          //get the pipe speed from GameCtrl
          this.bird = void 0;
          this.pipeSpeed = void 0;
          //use as a final speed number
          this.tempSpeed = void 0;
          //use as the moving pipe speed
          //scoring mechanism
          this.isPass = void 0;
        }

        //Did the pipe pass the bird?
        onLoad() {
          //first search the gamec control
          let gameControl = find("GameCtrl");

          if (gameControl == null) {
            log("GameCtrl not found");
            return;
          } else {
            this.game = gameControl.getComponent(_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game);
            this.bird = this.game.bird;
          } //add pipespeed to temporary method


          this.pipeSpeed = this.game.Scroll.speed; //set the original position

          this.initPos(); //set the scoring mechanism to stop activating

          this.isPass = false;
        } //initial positions of the grounds


        initPos() {
          const visibleSize = view.getVisibleSize();
          let width = visibleSize.width; //start with the initial position of x for both pipes

          this.tempStartLocationUp.x = this.topPipe.getComponent(UITransform).width + width;
          this.tempStartLocationDown.x = this.bottomPipe.getComponent(UITransform).width + width; //random variables for the gaps
          // let gap = random(50, 50);  //passable area randomized. 

          let gap = 50; //passable area.

          let topHeight = random(-30, 150); //The height of the top pipe

          this.tempStartLocationUp.y = gap;
          this.tempStartLocationDown.y = -gap; //set temp locations to real ones

          this.topPipe.setPosition(this.tempStartLocationUp.x, this.tempStartLocationUp.y);
          this.bottomPipe.setPosition(this.tempStartLocationDown.x, this.tempStartLocationDown.y);
          let tempPos = this.node.getPosition();
          tempPos.y = topHeight;
          this.node.setPosition(tempPos);
        } //move the pipes as we update the game
        //this just moves a pair of pipes top and down


        update(deltaTime) {
          // if(this.game.isOver==false) return;
          if (this.bird == null) {
            log("bird is null");
            return;
          }

          if (this.bird.state == 0 || this.bird.state == 2) return; //get the pipe speed

          this.tempSpeed = Math.abs(this.pipeSpeed * deltaTime); //make temporary pipe locations

          this.tempStartLocationDown = this.bottomPipe.position;
          this.tempStartLocationUp = this.topPipe.position; //move temporary pipe locations

          this.tempStartLocationDown.x -= this.tempSpeed;
          this.tempStartLocationUp.x -= this.tempSpeed; //place new positions of the pipes from temporary pipe locations

          this.bottomPipe.setPosition(this.tempStartLocationDown);
          this.topPipe.setPosition(this.tempStartLocationUp); // //find out if bird past a pipe, add to the score
          // if (this.isPass == false && this.topPipe.position.x <= 0)
          // {
          //     //make sure it is only counted once
          //     this.isPass = true;
          //     //add a point to the score
          //     // this.game.passPipe();
          // };
          //if passed the screen, reset pipes to new location

          if (this.topPipe.getWorldPosition().x < 0 - this.scene.width) {
            //create a new pipe
            // this.game.createPipe();
            //delete this node for memory saving
            this.destroy();
          }

          ;
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