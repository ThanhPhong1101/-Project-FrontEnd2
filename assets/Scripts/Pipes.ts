import { _decorator, Component, Node, Vec3, screen, find, UITransform, log, director, view } from 'cc';

import { Game } from './Game';
import { Bird } from './Bird';

const { ccclass, property } = _decorator;

// Hàm tạo số ngẫu nhiên trong khoảng min và max
const random = (min, max) =>
{
    return Math.random() * (max - min) + min;
}

@ccclass('Pipes')
export class Pipes extends Component
{
    @property({ type: Node, tooltip: 'Top Pipe' })
    public topPipe: Node;

    @property({ type: Node, tooltip: 'Bottom Pipe' })
    public bottomPipe: Node;

    // Vị trí tạm thời của các ống trên và dưới
    public tempStartLocationUp: Vec3 = new Vec3(0, 0, 0);  
    public tempStartLocationDown: Vec3 = new Vec3(0, 0, 0); 
    public scene = screen.windowSize; // Kích thước màn hình hiện tại

    // Các thuộc tính liên quan đến tốc độ ống
    public game: Game; // Lấy tốc độ ống từ GameCtrl
    public bird: Bird;
    public pipeSpeed: number; // Tốc độ cuối cùng của ống
    public tempSpeed: number; // Tốc độ tạm thời của ống khi di chuyển

    // Cơ chế tính điểm
    isPass: boolean; // Kiểm tra ống có vượt qua chim không

    protected onLoad (): void
    {
        // Tìm kiếm GameCtrl
        let gameControl = find("GameCtrl");
        if (gameControl == null)
        {
            log("GameCtrl not found");
            return;
        }
        else
        {
            this.game = gameControl.getComponent(Game);
            this.bird = this.game.bird;
        }

        // Thêm tốc độ ống vào biến tạm thời
        this.pipeSpeed = this.game.Scroll.speed;

        // Đặt vị trí ban đầu
        this.initPos();

        // Đặt cơ chế tính điểm dừng kích hoạt
        this.isPass = false;
    }

    // Đặt vị trí ban đầu của các ống
    initPos ()
    {   
        const visibleSize = view.getVisibleSize();
        let width = visibleSize.width;

        // Đặt vị trí ban đầu của x cho cả hai ống
        this.tempStartLocationUp.x = (this.topPipe.getComponent(UITransform).width + width);
        this.tempStartLocationDown.x = (this.bottomPipe.getComponent(UITransform).width + width);

        // Các biến ngẫu nhiên cho khoảng cách giữa các ống
        let gap = 50;  // Khoảng cách có thể đi qua
        let topHeight = random(-30, 150);   // Chiều cao của ống trên

        this.tempStartLocationUp.y = gap;
        this.tempStartLocationDown.y = -gap;

        // Đặt vị trí tạm thời thành vị trí thực tế
        this.topPipe.setPosition(this.tempStartLocationUp.x, this.tempStartLocationUp.y);
        this.bottomPipe.setPosition(this.tempStartLocationDown.x, this.tempStartLocationDown.y);

        let tempPos = this.node.getPosition();
        tempPos.y = topHeight;
        this.node.setPosition(tempPos);
    }

    // Di chuyển các ống khi cập nhật game
    protected update (deltaTime: number): void
    {
        if (this.bird == null)
        {
            log("bird is null");
            return;
        }
        if (this.bird.state == 0 || this.bird.state == 2) return;

        // Lấy tốc độ ống
        this.tempSpeed = Math.abs(this.pipeSpeed * deltaTime);

        // Tạo vị trí tạm thời của các ống
        this.tempStartLocationDown = this.bottomPipe.position;
        this.tempStartLocationUp = this.topPipe.position;

        // Di chuyển các vị trí tạm thời của các ống
        this.tempStartLocationDown.x -= this.tempSpeed;
        this.tempStartLocationUp.x -= this.tempSpeed;

        // Đặt vị trí mới của các ống từ các vị trí tạm thời
        this.bottomPipe.setPosition(this.tempStartLocationDown);
        this.topPipe.setPosition(this.tempStartLocationUp);

        // Kiểm tra nếu các ống đã vượt qua màn hình, đặt lại vị trí các ống
        if (this.topPipe.getWorldPosition().x < (0 - this.scene.width))
        {
            // Tạo ống mới
            // this.game.createPipe();

            // Xóa node này để tiết kiệm bộ nhớ
            this.destroy();
        }
    }
}
