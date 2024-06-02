System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, UIOpacity, _dec, _class, _crd, ccclass, property, TransitionScene;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2bbc9sceVZHB6B/u9dZ/5br", "TransitionScene", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'find', 'Node', 'Sprite', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TransitionScene", TransitionScene = (_dec = ccclass('TransitionScene'), _dec(_class = class TransitionScene extends Component {
        onLoad() {
          //Screen Should be black
          //and fade out 
          var opa = this.getComponent(UIOpacity);
          tween(opa).to(1, {
            opacity: 255
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d38bc9118f439f7ab8496a5c2948771753573a06.js.map