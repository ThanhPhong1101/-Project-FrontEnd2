import { _decorator, Component, Node, Vec2 } from 'cc'; // Import các module cần thiết từ 'cc'
const { ccclass, property } = _decorator; // Lấy ccclass và property từ _decorator

/// <summary>
/// This is a Camera Script to follow the player.
/// Must be attached to the Camera Node.
/// </summary>
@ccclass('ClariceCamera')
export class ClariceCamera extends Component // Định nghĩa lớp ClariceCamera kế thừa từ Component
{
    @property({type: Node, tooltip: "The target to follow", displayOrder: 1})
    public target: Node; // Đối tượng mục tiêu mà camera sẽ theo dõi

    @property({type: Vec2, tooltip: "The offset to follow", displayOrder: 2})
    public offset: Vec2 = new Vec2(0, 0); // Khoảng cách bù để camera theo dõi

    // start() 
    // {
    //     
    // }

    update(deltaTime: number) // Hàm được gọi mỗi frame
    {
        if (this.target == null) return; // Nếu không có mục tiêu thì không làm gì cả

        let targetPos = this.target.getWorldPosition(); // Lấy vị trí của mục tiêu
        let CameraPos = this.node.getWorldPosition(); // Lấy vị trí hiện tại của camera

        CameraPos.x = targetPos.x + this.offset.x; // Cập nhật vị trí x của camera dựa trên vị trí mục tiêu và khoảng cách bù
        // CameraPos.y = targetPos.y + this.offset.y; // Không cần cập nhật y trong trò chơi này

        this.node.setWorldPosition(CameraPos); // Đặt lại vị trí của camera
    }
}
