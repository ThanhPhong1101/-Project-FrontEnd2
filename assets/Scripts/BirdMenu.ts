import { _decorator, CCFloat, Component, Node, tween, Tween, Vec3 } from 'cc'; // Import các module cần thiết từ 'cc'
const { ccclass, property } = _decorator; // Lấy ccclass và property từ _decorator

@ccclass('BirdMenu')
export class BirdMenu extends Component // Định nghĩa lớp BirdMenu kế thừa từ Component
{
    @property({type: CCFloat})
    public actionTime: number = 1; // Thời gian để thực hiện hành động (di chuyển)

    @property({type: CCFloat})
    public moveUpDistance: number = 20; // Khoảng cách di chuyển lên

    private tweenPos: Tween<Vec3>; // Tween cho vị trí
    private _wPos: Vec3 = new Vec3(0, 0, 0); // Vị trí thế giới của BirdMenu
    private startPos: Vec3; // Vị trí bắt đầu

    protected onLoad (): void // Hàm được gọi khi nạp xong
    {
        Vec3.copy(this._wPos, this.node.worldPosition); // Sao chép vị trí thế giới của node
        this.startPos = this.node.getWorldPosition(); // Lưu vị trí bắt đầu
        let moveUp = this.node.getWorldPosition(); // Lấy vị trí hiện tại của node
        moveUp.y += this.moveUpDistance; // Tăng y của vị trí hiện tại thêm khoảng cách di chuyển lên

        // Tạo tween cho vị trí của BirdMenu
        this.tweenPos = tween(this._wPos)
            .to(this.actionTime, moveUp, { easing: 'linear' }) // Di chuyển đến vị trí mới với khoảng thời gian actionTime
            .to(this.actionTime, this.startPos, { easing: 'linear' }) // Di chuyển trở lại vị trí ban đầu với khoảng thời gian actionTime
            .union() // Liên kết các hành động di chuyển
            .repeat(Infinity); // Lặp lại vô hạn
    }

    protected onEnable (): void // Hàm được gọi khi BirdMenu được kích hoạt
    {
        this.tweenPos.start(); // Bắt đầu tween vị trí
    }

    protected onDisable (): void // Hàm được gọi khi BirdMenu bị tắt
    {
        this.tweenPos.stop(); // Dừng tween vị trí
    }

    protected update (dt: number): void // Hàm được gọi mỗi frame
    {
        this.node.setWorldPosition(this._wPos); // Cập nhật vị trí của node dựa trên tween
    }
}
