System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, lerp, Vec3, _dec, _class, _crd, ccclass, property, UIIndicator;

  function _reportPossibleCrUseOfUISelectable(extras) {
    _reporterNs.report("UISelectable", "./UISelectable", _context.meta, extras);
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
      lerp = _cc.lerp;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7aeeeFtbXZJ3IstOUkxeEBy", "UIIndicator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'lerp', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIIndicator", UIIndicator = (_dec = ccclass('UIIndicator'), _dec(_class = class UIIndicator extends Component {
        constructor() {
          super(...arguments);
          this.NodeTr = null;
          this.lerpSpeed = 0.1;
          this.timer = 0.0;
          this.lerpDuration = 1.0;
          this.ScaleUp = false;
          this.scaleVec3 = new Vec3(1, 1, 1);
        }

        start() {
          this.NodeTr = this.node;
          this.ScaleUp = true;
        }

        update(deltaTime) {
          this.timer += deltaTime; //scaleto 1.1

          if (this.timer < this.lerpDuration) {
            var target = this.ScaleUp ? 1.1 : 1.0;
            this.timer += deltaTime;
            this.scaleVec3.x = lerp(this.scaleVec3.x, target, this.lerpSpeed / this.lerpDuration);
            this.scaleVec3.y = lerp(this.scaleVec3.y, target, this.lerpSpeed / this.lerpDuration);
            this.scaleVec3.z = lerp(this.scaleVec3.z, target, this.lerpSpeed / this.lerpDuration);
            this.NodeTr.setScale(this.scaleVec3);
            return;
          }

          this.timer = 0;
          this.ScaleUp = !this.ScaleUp;
        }

        ChangeParent(newParent) {
          this.node.setParent(newParent.node);
          this.node.setPosition(new Vec3(0, 0, 0));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75b868930502c041709bcef762b31d222002ece0.js.map