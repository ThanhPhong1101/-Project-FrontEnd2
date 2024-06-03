import { _decorator, Component, native, Node, sys } from 'cc'; // Import các module từ 'cc'

const { ccclass, property } = _decorator; // Gán giá trị của ccclass và property từ _decorator

@ccclass('AndroidNative')
export class AndroidNative // Khai báo lớp AndroidNative
{
    public static showAlert (message: string): void // Phương thức tĩnh showAlert
    {
        if (sys.os === sys.OS.ANDROID) // Kiểm tra hệ điều hành
        {
            let className = "com/cocos/game/AppActivity"; // Tên của lớp Java
            let methodName = "showAlertDialog"; // Tên của phương thức Java
            let methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V"; // Chữ ký của phương thức Java
            native.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test is OK"); // Gọi phương thức Java
        }
    }

    public static showToast (message: string, length: number): void // Phương thức tĩnh showToast
    {
        if (sys.os === sys.OS.ANDROID) // Kiểm tra hệ điều hành
        {
            let className = "com/cocos/game/AppActivity"; // Tên của lớp Java
            let methodName = "showToast"; // Tên của phương thức Java
            let methodSignature = "(Ljava/lang/String;I)V"; // Chữ ký của phương thức Java
            native.reflection.callStaticMethod(className, methodName, methodSignature, message, length); // Gọi phương thức Java
        }
    }
}
