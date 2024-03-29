import { _decorator, Component, EventTouch, Input, input, Node, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('JoyStick')
export class JoyStick extends Component {

    pos: Vec3;
    rad: number;
    public input: Vec3;

    onLoad() {
        this.pos = this.node.position.clone()
        this.rad = this.node.getComponent(UITransform).width / 2

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
        console.log("location:",e.getLocation());  // Location on screen space
        console.log("UI Location",e.getUILocation());  // Location on UI space
        
        let pos = e.getUILocation()
        // this.node.setPosition(new Vec3(pos.x, pos.y))
        this.node.setWorldPosition(new Vec3(pos.x, pos.y))
    }

    onTouchEnd(e: EventTouch) {
        this.node.setPosition(this.pos.x, this.pos.y)
        let node = this.node.getChildByName("Stick")
        node.setPosition(0, 0, 0)
        this.input = Vec3.ZERO
    }

    onTouchMove(e: EventTouch) {
        let bodyPos = this.node.getPosition()
        let pos = e.getUILocation()
        // let stickPos = new Vec3(pos.x - bodyPos.x, pos.y - bodyPos.y)
        let stickPos = new Vec3(pos.x , pos.y)
        if (stickPos.length() > this.rad) {
            stickPos.multiplyScalar(this.rad / stickPos.length())
        }
        let node = this.node.getChildByName("Stick")
        node.setPosition(stickPos)
        this.input = stickPos.clone().normalize()
        // console.log(this.input)
    }
}


