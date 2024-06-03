import {
_decorator,
AudioClip,
AudioSource,
CCFloat,
Collider2D,
Component,
Contact2DType,
IPhysics2DContact,
lerp,
log,
Node,
RigidBody2D,
Tween,
tween,
Vec2,
Vec3,
} from 'cc'; // Import các module từ 'cc'

const { ccclass, property } = _decorator; // Gán giá trị của ccclass và property từ _decorator

// Tạo một enum với các trạng thái: WAITING, PLAYING, DEAD
enum State {
    WAITING = 0,
    PLAYING = 1,
    DEAD = 2,
}

import { Game } from './Game'; // Import class Game từ tệp Game.ts
import { SpriteAnimator } from './SpriteAnimator'; // Import class SpriteAnimator từ tệp SpriteAnimator.ts

@ccclass('Bird')
export class Bird extends Component // Định nghĩa class Bird kế thừa từ Component
{
    public actionTime: number = 1; // Thời gian hoạt động mặc định

    @property({ type: Game })
    public Game: Game; // Tham chiếu đến đối tượng Game

    @property({ type: CCFloat })
    public verticalForce: number = 300; // Lực đẩy theo chiều dọc mặc định

    @property({ type: AudioSource, tooltip: "Add AudioSource node", })
    public AudioSource: AudioSource; // Tham chiếu đến nút AudioSource

    @property({ type: AudioClip, tooltip: "Add FlappySound node", })
    public FlappySound: AudioClip; // Tham chiếu đến âm thanh Flappy

    public state: State = State.WAITING; // Trạng thái ban đầu của Bird

    _wPos: Vec3 = new Vec3(0, 0, 0); // Vị trí thế giới của Bird

    private rb: RigidBody2D; // Tham chiếu đến RigidBody2D
    private collider2D: Collider2D; // Tham chiếu đến Collider2D
    private SpriteAnimator: SpriteAnimator; // Tham chiếu đến SpriteAnimator

    private tweenPos: Tween<Vec3>; // Tween cho vị trí

    private startPos: Vec3; // Vị trí bắt đầu

    private timerRotateUp: number = 0; // Thời gian quay lên
    private timeElapsedDown: number = 0; // Thời gian trôi qua khi quay xuống

    private rotateLerpDuration: number = 10; // Thời gian quay mềm xuống
    private rotateLerpDurationUp: number = 0.5; // Thời gian quay mềm lên

    private tweenRotateUp: Tween<number>; // Tween cho góc quay lên

    private faceUpAngle: number = 15; // Góc quay lên

    public hitSomething: boolean = false; // Đánh dấu đã va chạm với vật gì đó

    protected onLoad(): void // Hàm được gọi khi nạp xong
    {
        this.state = State.WAITING; // Thiết lập trạng thái ban đầu là WAITING
        this.rb = this.node.getComponent(RigidBody2D); // Lấy tham chiếu đến RigidBody2D
        this.collider2D = this.node.getComponent(Collider2D); // Lấy tham chiếu đến Collider2D
        this.SpriteAnimator = this.node.getComponent(SpriteAnimator); // Lấy tham chiếu đến SpriteAnimator
        this.rb.gravityScale = 0; // Tắt trọng lực cho đến khi bắt đầu chơi

        Vec3.copy(this._wPos, this.node.worldPosition); // Sao chép vị trí thế giới của Bird
        this.startPos = this.node.getWorldPosition(); // Lưu vị trí bắt đầu
        let moveUp = this.node.getWorldPosition(); // Di chuyển lên trên
        moveUp.y += 20;

        // Tạo tween cho vị trí của Bird
        this.tweenPos = tween(this._wPos)
            .to(this.actionTime, moveUp, { easing: 'linear' })
            .to(this.actionTime, this.startPos, { easing: 'linear' })
            .union()
            .repeat(Infinity);

        if (this.collider2D != null) // Kiểm tra nếu có Collider2D
        {
            // Đăng ký sự kiện va chạm
            this.collider2D.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    protected start(): void // Hàm được gọi khi khởi động
    {
        this.tweenPos.start(); // Bắt đầu tween vị trí
    }

    protected onDisable(): void // Hàm được gọi khi tắt
    {
        this.tweenPos.stop(); // Dừng tween vị trí
    }

    public play(): void // Phương thức để bắt đầu chơi
    {
        if (this.state == State.WAITING) // Nếu đang ở trạng thái WAITING
        {
            this.state = State.PLAYING; // Thiết lập trạng thái là PLAYING
            this.rb.gravityScale = 1; // Bật trọng lực
        }
        if (this.state == State.PLAYING) // Nếu đang ở trạng thái PLAYING
        {
            this.Flappy(); // Gọi phương thức Flappy
        }
    }

    public Flappy(): void // Phương thức để làm Bird nhảy
    {
        if (this.state == State.DEAD) return; // Nếu đã chết thì không thực hiện gì

        this.rb.linearVelocity = new Vec2(0, 0); // Đặt vận tốc tuyến tính về 0
        this.rb.applyForceToCenter(new Vec2(0, this.verticalForce), true); // Áp dụng lực để Bird nhảy
        this.AudioSource.playOneShot(this.FlappySound, 1); // Phát âm thanh nhảy
    }

    protected update(dt: number): void // Hàm được gọi mỗi frame
    {
        if (this.state == State.DEAD) // Nếu Bird đã chết
        {
            let velocity = this.rb.linearVelocity; // Lấy vận tốc
            this.UpdateFaceBirdAngle(velocity, dt); // Cập nhật góc quay của Bird
            return; // Thoát khỏi hàm update
        }

        if (this.state == State.WAITING) // Nếu Bird đang ở trạng thái chờ đợi
        {
            this.node.worldPosition = this._wPos; // Cập nhật vị trí của Bird
        }

        if (this.state == State.PLAYING) // Nếu Bird đang ở trạng thái chơi
        {
            let velocity = this.rb.linearVelocity; // Lấy vận tốc
            this.UpdateFaceBirdAngle(velocity, dt); // Cập nhật góc quay của Bird
        }
    }

    private UpdateFaceBirdAngle(velocity: Vec2, dt: number) // Phương thức để cập nhật góc quay của Bird
    {
        if (velocity.y > 1) // Nếu Bird đang bay lên
        {
            this.timerRotateUp = 0; // Đặt thời gian quay lên về 0
            if (this.timeElapsedDown < this.rotateLerpDurationUp) // Nếu thời gian trôi qua khi quay xuống nhỏ hơn thời gian quay mềm lên
            {
                this.timeElapsedDown += dt; // Tăng thời gian trôi qua
                this.node.angle = lerp(this.node.angle, this.faceUpAngle, this.timeElapsedDown / this.rotateLerpDurationUp); // Cập nhật góc quay mềm lên
            }
            else // Nếu đã đủ thời gian quay mềm lên
            {
                this.node.angle = this.faceUpAngle; // Đặt góc quay của Bird thành góc quay lên
            }
        }
        else if (velocity.y < 0) // Nếu Bird đang rơi xuống
        {
            this.timeElapsedDown = 0; // Đặt thời gian trôi qua khi quay xuống về 0
            if (this.timerRotateUp < this.rotateLerpDuration) // Nếu thời gian quay lên nhỏ hơn thời gian quay mềm xuống
            {
                this.timerRotateUp += dt; // Tăng thời gian quay lên
                this.node.angle = lerp(this.node.angle, -90, this.timerRotateUp / this.rotateLerpDuration); // Cập nhật góc quay mềm xuống
            }
            else // Nếu đã đủ thời gian quay mềm xuống
            {
                this.node.angle = -90; // Đặt góc quay của Bird thành 90 độ
            }
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) // Xử lý khi có va chạm
    {
        if (otherCollider.tag == 1) // Nếu va chạm với đối tượng có tag là 1 (điểm)
        {
            log("You hit a new point"); // Log ra màn hình console
            this.Game.AddPoint(); // Thêm điểm
            otherCollider.enabled = false; // Tắt collider của đối tượng đó
        }
        else // Nếu va chạm với đối tượng khác
        {
            log("You die"); // Log ra màn hình console
            this.SpriteAnimator.paused = true; // Dừng SpriteAnimator
            this.hitSomething = true; // Đánh dấu đã va chạm
            this.state = State.DEAD; // Thiết lập trạng thái là DEAD
            this.Game.Dead(); // Gọi phương thức Dead từ Game
        }
    }

    protected lerp(start: number, end: number, time: number): number // Phương thức lerp để làm mềm di chuyển
    {
        return start + time * (end - start); // Tính toán giá trị mềm
    }
}

