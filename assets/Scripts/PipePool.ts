import { _decorator, Component, instantiate, Node, NodePool, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipePool')
export class PipePool extends Component 
{
    // Định nghĩa thuộc tính prefabPipes, loại Prefab, được sử dụng để tạo các ống mới
    @property({ type: Prefab, tooltip: 'Prefab Pipes' })
    public prefabPipes = null;

    // Định nghĩa thuộc tính pipePoolHome, loại Node, là nơi chứa các ống mới được tạo
    @property({ type: Node, tooltip: 'Where the new pipes go' })
    public pipePoolHome;

    // Khởi tạo một NodePool để quản lý các ống (pipes)
    public pool = new NodePool();
    public createPipe: Node = null;

    // Phương thức khởi tạo bể (pool) các ống
    initPool ()
    {
        // Số lượng ống ban đầu cần tạo
        let initCount = 3;

        // Điền vào bể các ống (pipes)
        for (let i = 0; i < initCount; i++)
        {
            // Tạo một node mới từ prefab
            let createPipe = instantiate(this.prefabPipes); // instantiate nghĩa là tạo một bản sao của prefab gốc
            
            // Đưa ống đầu tiên lên màn hình bằng cách thêm nó vào pipePoolHome
            if (i == 0)
            {
                this.pipePoolHome.addChild(createPipe);
            } 
            // Đưa các ống khác vào NodePool để quản lý
            else
            {
                this.pool.put(createPipe);
            }
        }
    }

    // Phương thức thêm ống mới vào bể
    addPool ()
    {
        // Kiểm tra nếu bể không đầy thì thêm ống mới, nếu không thì lấy ống đầu tiên trong bể
        if (this.pool.size() > 0)
        {
            // Lấy một ống từ bể
            this.createPipe = this.pool.get();
        } 
        else
        {
            // Tạo một ống mới
            this.createPipe = instantiate(this.prefabPipes);
        }
        // Thêm ống vào trò chơi như một node
        this.pipePoolHome.addChild(this.createPipe);
    }

    // Phương thức đặt lại (reset) bể các ống
    reset ()
    {
        // Xóa tất cả các node con khỏi pipePoolHome và làm sạch bể
        this.pipePoolHome.removeAllChildren();
        this.pool.clear();
        // Khởi tạo lại bể các ống
        this.initPool();
    }
}
