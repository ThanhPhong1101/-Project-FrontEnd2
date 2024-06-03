import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteAnimator')
export class SpriteAnimator extends Component 
{
    // Thuộc tính để chứa đối tượng Sprite sẽ được hoạt hình
    @property({type: [Sprite]})
    public Sprite: Sprite;

    // Mảng các khung hình Sprite để tạo hoạt hình
    @property({type: [SpriteFrame]})
    public sprites: SpriteFrame[] = [];

    // Số khung hình trên giây
    @property
    public framesPerSecond: number = 10;

    // Biến kiểm tra xem hoạt hình có đang tạm dừng hay không
    @property
    public paused: boolean = false;

    // Khung hình hiện tại của hoạt hình
    private _currentFrame: number = 0;

    // Thời gian từ khung hình cuối cùng
    private _timeSinceLastFrame: number = 0;

    // Hàm khởi tạo, được gọi khi đối tượng được tải
    protected onLoad(): void
    {
        // Lấy thành phần Sprite từ node
        this.Sprite = this.node.getComponent(Sprite);
    }

    // Hàm cập nhật, được gọi mỗi khung hình
    public update(deltaTime: number)
    {
        // Nếu hoạt hình đang tạm dừng, thoát hàm
        if (this.paused) return;

        // Cập nhật thời gian từ khung hình cuối cùng
        this._timeSinceLastFrame += deltaTime;

        // Nếu thời gian đã đủ để chuyển sang khung hình tiếp theo
        if (this._timeSinceLastFrame >= 1 / this.framesPerSecond)
        {
            // Cập nhật khung hình hiện tại
            this._currentFrame = (this._currentFrame + 1) % this.sprites.length;
            // Đặt lại thời gian từ khung hình cuối cùng
            this._timeSinceLastFrame = 0;
        }

        // Cập nhật SpriteFrame hiện tại cho đối tượng Sprite
        this.Sprite.spriteFrame = this.sprites[this._currentFrame];
    }
}
