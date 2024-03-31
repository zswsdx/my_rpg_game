import { _decorator, assert, Component, Node } from 'cc';
import { DataManager } from './DataManager';
import { JoyStick } from '../Widget_Ctrl/JoyStick';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {


    private shouldUpdate = false

    protected onLoad(): void {
        let joyStick = this.node.getChildByPath('JoyStick')
        DataManager.Instance.jm = joyStick.getComponent(JoyStick)
    }


    protected update(dt: number): void {
        if (!this.shouldUpdate){
            return
        }
        this.renderActor()
    }

    renderActor(){
        for(const data of DataManager.Instance.state.actors){
            let am = DataManager.Instance.actorMap.get(data.id)
            if (!am){
                
            }else{
                am.render(data)
            }
        }
    }

}


