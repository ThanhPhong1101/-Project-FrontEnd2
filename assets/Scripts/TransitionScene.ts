import { _decorator, Color, Component, find, Node, Sprite, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TransitionScene')
export class TransitionScene extends Component
{
    protected onLoad (): void
    {
        // Lấy thành phần UIOpacity của đối tượng hiện tại
        let opa = this.getComponent(UIOpacity);

        // Tạo một hoạt ảnh tween để thay đổi độ mờ dần của màn hình
        // Hoạt ảnh này sẽ kéo dài trong 1 giây và thay đổi độ mờ dần của màn hình đến 255 (màn hình đen)
        tween(opa).to(1, { opacity:255 }).start();
    }
}
