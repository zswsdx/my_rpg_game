import { _decorator, Component, Node } from 'cc';
import { JoyStick } from '../Widget_Ctrl/JoyStick';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    JoyStick: Node;
    start() {
        this.JoyStick = this.node.getChildByName("JoyStick")
        this.JoyStick.addComponent(JoyStick)
    }

    update(deltaTime: number) {
        
    }
}


