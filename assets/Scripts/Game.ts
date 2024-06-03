import { _decorator, AudioClip, AudioSource, Collider2D, Component, Contact2DType, director, EventGamepad, EventKeyboard, EventMouse, Input, input, KeyCode, log, Node, RichText, tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { Bird } from './Bird';
import { Scroll } from './Scroll';
import { PipePool } from './PipePool';
import { FlashUI } from './UI/FlashUI';

@ccclass('Game')
export class Game extends Component {

    @property({ type: Bird, tooltip: "Add Bird node" })
    public bird: Bird;

    @property({ type: Scroll, tooltip: "Add Scroll node" })
    public Scroll: Scroll;

    @property({ type: UIOpacity, tooltip: "Add UIOpacity node" })
    public SpriteFade: UIOpacity;

    @property({ type: Node, tooltip: "Add GameOver node" })
    public GameOverNode: Node;

    @property({ type: PipePool, tooltip: "Add PipePool node" })
    public pipeQueue: PipePool;

    public isOver: boolean;

    @property({ type: AudioSource, tooltip: "Add AudioSource node" })
    public AudioSource: AudioSource;

    @property({ type: AudioClip, tooltip: "Add hitSound node" })
    public hitSound: AudioClip;

    @property({ type: AudioClip, tooltip: "Add scoreSound node" })
    public scoreSound: AudioClip;

    public score: number = 0;

    @property({ type: RichText, tooltip: "Add ScoreLabel node" })
    public ScoreLabel: RichText = null;

    @property({ type: Vec3, tooltip: "Add GameOverStartPos node" })
    public gameOverStartPos: Vec3;

    @property({ type: Vec3, tooltip: "Add GameOverHidePos node" })
    public gameOverHidePos: Vec3;

    @property({ type: RichText, tooltip: "Add labelScore node" })
    public labelScore: RichText = null;

    @property({ type: RichText, tooltip: "Add labelBestScore node" })
    public labelBestScore: RichText = null;

    @property({ type: FlashUI, tooltip: "The Flash Screen" })
    public FlashUI: FlashUI;    

    protected onLoad(): void {
        // Thiết lập trạng thái ban đầu của trò chơi
        this.score = 0;
        this.isOver = true;
        this.SpriteFade.opacity = 255; // Thiết lập độ mờ ban đầu của SpriteFade là 255 (hoàn toàn hiện)
        this.initListener(); // Gọi phương thức để khởi tạo các lắng nghe sự kiện

        // Vô hiệu hóa node GameOver khi trò chơi bắt đầu
        this.GameOverNode.active = false;

        // Đặt vị trí bắt đầu và vị trí ẩn của node GameOver
        log("Game Over Pos " + this.GameOverNode.position.toString());
        log("Game Over World Pos " + this.GameOverNode.getWorldPosition());
        this.gameOverStartPos = this.GameOverNode.getWorldPosition();
        this.gameOverHidePos = new Vec3(this.gameOverStartPos.x, this.gameOverStartPos.y - 1000, this.gameOverStartPos.z); // Thiết lập vị trí ẩn của GameOverNode
        this.GameOverNode.setPosition(new Vec3(0, -1000)); // Đặt vị trí ban đầu của GameOverNode ra khỏi màn hình

        // Chuyển động làm mờ dần SpriteFade
        tween().
            target(this.SpriteFade)
            .to(0.5, { opacity: 0 }) // Làm mờ SpriteFade trong 0.5 giây
            .start();
    }

    initListener(): void {
        // Đăng ký các sự kiện đầu vào
        input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this); // Lắng nghe sự kiện nhấn phím
        input.on(Input.EventType.TOUCH_START, this.touchStart, this); // Lắng nghe sự kiện chạm màn hình
        input.on(Input.EventType.GAMEPAD_INPUT, this.GamePadOnKeyDown, this); // Lắng nghe sự kiện điều khiển gamepad
    }

    private GamePadOnKeyDown(event: EventGamepad): void {
        // Kiểm tra nếu nút phía nam của gamepad được nhấn
        if (event.gamepad.buttonSouth.getValue() == 1) {
            this.FlapBird(); // Gọi phương thức FlapBird khi nút phía nam được nhấn
        }
    }

    private OnClick(event: EventMouse): void {
        log("Mouse Click"); // Ghi nhật ký khi chuột được nhấp
        this.FlapBird(); // Gọi phương thức FlapBird khi nhấp chuột
    }

    private touchStart(): void {
        log("Click and Touch"); // Ghi nhật ký khi màn hình được chạm
        this.FlapBird(); // Gọi phương thức FlapBird khi màn hình được chạm
    }

    OnKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                log("You Press the A Key"); // Ghi nhật ký khi phím A được nhấn
                break;
            case KeyCode.SPACE:
                {
                    this.FlapBird(); // Gọi phương thức FlapBird khi phím Space được nhấn
                }
                break;
        }
    }

    public FlapBird(): void {
        log("Flap Bird"); // Ghi nhật ký khi phương thức FlapBird được gọi
        if (this.isOver) {
            this.resetGame(); // Đặt lại trò chơi nếu trò chơi đã kết thúc
            this.startGame(); // Bắt đầu trò chơi mới
        }

        if (this.isOver == false) {
            if (this.bird == null) {
                // Kiểm tra nếu đối tượng bird là null
                log("The Bird is Null assign on the editor"); // Ghi nhật ký nếu đối tượng bird là null
            }
            this.bird.play(); // Gọi phương thức play của đối tượng bird
        }
    }

    startGame(): void {
        this.isOver = false; // Đặt trạng thái trò chơi là chưa kết thúc
        // this.Scroll.StartScroll(); // Bắt đầu cuộn nền (được comment lại)
        // this.pipeQueue.addPool(); // Thêm đường ống vào hàng đợi (được comment lại)
    }

    resetGame(): void {
        this.isOver = false; // Đặt trạng thái trò chơi là chưa kết thúc
        // this.pipeQueue.reset(); // Đặt lại hàng đợi đường ống (được comment lại)
        // this.bird.resetBird(); // Đặt lại đối tượng bird (được comment lại)
        // this.Scroll.reset(); // Đặt lại cuộn nền (được comment lại)
    }

    AddPoint(): void {
        this.score++; // Tăng điểm số
        this.ScoreLabel.string = this.score.toString(); // Cập nhật nhãn điểm số
        this.AudioSource.playOneShot(this.scoreSound, 1); // Phát âm thanh điểm số
    }

    Dead(): void {
        if (this.isOver == false) {
            this.FlashUI.Flash(); // Gọi phương thức Flash của FlashUI

            this.isOver = true; // Đặt trạng thái trò chơi là kết thúc
            this.Scroll.StopScroll(); // Dừng cuộn nền
            this.AudioSource.playOneShot(this.hitSound, 1); // Phát âm thanh khi va chạm
            this.GameOverNode.active = true; // Kích hoạt node GameOver

            this.labelScore.string = this.score.toString(); // Cập nhật nhãn điểm số

            // Lấy điểm số cao nhất từ localStorage
            let recoverScore = localStorage.getItem("bestScore");
            if (recoverScore == null) {
                localStorage.setItem("bestScore", "0"); // Nếu không có điểm số cao nhất, đặt thành 0
            }
            let bestScore = parseInt(localStorage.getItem("bestScore"));

            if (this.score > bestScore) {
                bestScore = this.score; // Cập nhật điểm số cao nhất nếu điểm hiện tại lớn hơn
                localStorage.setItem("bestScore", bestScore.toString()); // Lưu điểm số cao nhất mới vào localStorage
            }

            this.labelBestScore.string = bestScore.toString(); // Cập nhật nhãn điểm số cao nhất

            // Chuyển động hiển thị GameOverNode
            tween(this.GameOverNode)
                .to(1, { position: new Vec3(0, 0) }) // Di chuyển GameOverNode đến vị trí (0, 0) trong 1 giây
                .start();
        }
    }

    public onClickRestartGame(event, customData): void {
        // Chuyển động làm mờ dần SpriteFade
        tween().
            target(this.SpriteFade)
            .to(0.5, { opacity: 255 }) // Làm mờ SpriteFade trong 0.5 giây
            .call(this.RestartGame) // Gọi phương thức RestartGame sau khi làm mờ
            .start();
    }

    private RestartGame(): void {
        // Đếm số lần chơi trò chơi
        let countGamePlay = localStorage.getItem("countGamePlay");
        if (countGamePlay == null) {
            localStorage.setItem("countGamePlay", "0"); // Nếu không có, đặt thành 0
        }
        let count = parseInt(localStorage.getItem("countGamePlay"));
        count++;

        if(count > 3) {
            count = 0; // Đặt lại đếm nếu vượt quá 3
        }        
        localStorage.setItem("countGamePlay", count.toString()); // Lưu đếm vào localStorage

        director.loadScene("game"); // Tải lại cảnh game
    }

    timerSpawnPipe: number = 0;

    protected update(dt: number): void {
        if (this.isOver == false) {
            this.timerSpawnPipe += dt;
            if (this.timerSpawnPipe > 1) {
                this.timerSpawnPipe = 0;
                this.pipeQueue.addPool(); // Thêm đường ống vào hàng đợi sau mỗi giây
            }
        }
    }

    contactGroundPipe(): void {
        let collider = this.bird.node.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // Lắng nghe sự kiện va chạm
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: any): void {
        this.bird.hitSomething = true; // Đặt trạng thái va chạm của bird là true khi va chạm
    }
}
