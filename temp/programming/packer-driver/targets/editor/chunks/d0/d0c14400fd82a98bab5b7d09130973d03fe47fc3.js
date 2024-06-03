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

      // Import các module từ 'cc'
      __checkObsolete__(['_decorator', 'Component', 'native', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator); // Gán giá trị của ccclass và property từ _decorator

      _export("AndroidNative", AndroidNative // Khai báo lớp AndroidNative
      = (_dec = ccclass('AndroidNative'), _dec(_class = class AndroidNative // Khai báo lớp AndroidNative
      {
        static showAlert(message) // Phương thức tĩnh showAlert
        {
          if (sys.os === sys.OS.ANDROID) // Kiểm tra hệ điều hành
            {
              let className = "com/cocos/game/AppActivity"; // Tên của lớp Java

              let methodName = "showAlertDialog"; // Tên của phương thức Java

              let methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V"; // Chữ ký của phương thức Java

              native.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test is OK"); // Gọi phương thức Java
            }
        }

        static showToast(message, length) // Phương thức tĩnh showToast
        {
          if (sys.os === sys.OS.ANDROID) // Kiểm tra hệ điều hành
            {
              let className = "com/cocos/game/AppActivity"; // Tên của lớp Java

              let methodName = "showToast"; // Tên của phương thức Java

              let methodSignature = "(Ljava/lang/String;I)V"; // Chữ ký của phương thức Java

              native.reflection.callStaticMethod(className, methodName, methodSignature, message, length); // Gọi phương thức Java
            }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0c14400fd82a98bab5b7d09130973d03fe47fc3.js.map