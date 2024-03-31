import { _decorator, Component, EventTouch, Input, input, Node, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('JoyStick')
export class JoyStick extends Component {

    oriPos: Vec3;
    radius: number;
    public input: Vec3;

    onLoad() {
        this.oriPos = this.node.position.clone()
        this.radius = this.node.getComponent(UITransform).width / 2

        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
    }

    onTouchStart(e: EventTouch) {
        let pos = e.getUILocation()
        this.node.setWorldPosition(new Vec3(pos.x, pos.y))
    }

    onTouchEnd(e: EventTouch) {
        this.node.setPosition(this.oriPos.x, this.oriPos.y)
        let node = this.node.getChildByPath("Stick")
        node.setPosition(0, 0, 0)
        this.input = Vec3.ZERO
    }

    onTouchMove(e: EventTouch) {
        let bodyPos = this.node.getWorldPosition()
        let pos = e.getUILocation()
        let stickPos = new Vec3(pos.x - bodyPos.x, pos.y - bodyPos.y)
        if (stickPos.length() > this.radius) {
            stickPos.multiplyScalar(this.radius / stickPos.length())
        }
        let node = this.node.getChildByPath("Stick")
        node.setPosition(stickPos)
        this.input = stickPos.clone().normalize()
        // console.log(this.input)
    }
}


