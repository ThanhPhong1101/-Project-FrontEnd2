System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, native, sys, _dec, _class, _crd, ccclass, property, AndroidNative;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      native = _cc.native;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f0f4TjLE5N3IEFz6965lBQ", "AndroidNative", undefined);

      __checkObsolete__(['_decorator', 'Component', 'native', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AndroidNative", AndroidNative = (_dec = ccclass('AndroidNative'), _dec(_class = class AndroidNative {
        static showAlert(message) {
          if (sys.os === sys.OS.ANDROID) {
            var className = "com/cocos/game/AppActivity";
            var methodName = "showAlertDialog";
            var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
            native.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test is OK");
          }
        }

        static showToast(message, length) {
          if (sys.os === sys.OS.ANDROID) {
            var className = "com/cocos/game/AppActivity";
            var methodName = "showToast";
            var methodSignature = "(Ljava/lang/String;I)V";
            native.reflection.callStaticMethod(className, methodName, methodSignature, message, length);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0c14400fd82a98bab5b7d09130973d03fe47fc3.js.map