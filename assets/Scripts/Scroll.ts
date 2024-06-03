import { _decorator, CCFloat, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Scroll')
export class Scroll extends Component 
{
    // Tốc độ cuộn của nền
    @property({type: CCFloat})
    public speed: number = -300;
    
    // Giới hạn cuộn (khi nền cuộn đến vị trí này, nó sẽ quay lại vị trí ban đầu)
    @property({type: CCFloat})
    public limit: number = -336; // chiều rộng của nền

    // Biến kiểm tra xem nền có đang cuộn không
    public canScroll: boolean;

    start() 
    {
        // Khởi tạo nền có thể cuộn
        this.canScroll = true;
    }

    // Hàm dừng cuộn nền
    StopScroll()
    {
        this.canScroll = false;
    }

    // Hàm cập nhật được gọi mỗi khung hình
    update(deltaTime: number) 
    {
        // Nếu nền không thể cuộn, thoát hàm
        if (this.canScroll == false)
        {
            return;
        }

        // Lấy vị trí hiện tại của nền
        let pos = this.node.getPosition();
        
        // Cập nhật vị trí x dựa trên tốc độ và deltaTime
        pos.x += this.speed * deltaTime;
        
        // Nếu vị trí x của nền nhỏ hơn giới hạn, đặt lại vị trí x
        if (pos.x <= this.limit)
        {
            pos.x += Math.abs(this.limit);
        }
        
        // Đặt vị trí mới cho nền
        this.node.setPosition(pos);
    }
}
