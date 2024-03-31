import { _decorator, Component, Node } from 'cc';
import { JoyStick } from '../Widget_Ctrl/JoyStick';
import { BattleManager } from '../Manager/BattleManager';
import { ActorManager } from '../Manager/ActorManager';
import { DataManager } from '../Manager/DataManager';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    JoyStick: Node;
    onLoad() {
        this.JoyStick = this.node.getChildByName("JoyStick")
        this.JoyStick.addComponent(JoyStick)
        this.addComponent(DataManager)
        this.addComponent(BattleManager)
    }

    update(deltaTime: number) {
        
    }
}


