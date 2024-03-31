import { _decorator, Component, Node, Vec2 } from 'cc';
import { DataManager } from './DataManager';
import { IActor, InputTypeEnum } from './Define';
const { ccclass, property } = _decorator;

@ccclass('ActorManager')
export class ActorManager extends Component {
    protected update(dt: number): void {

        if (DataManager.Instance.jm.input?.length()) {
            const { x, y } = DataManager.Instance.jm.input
            DataManager.Instance.applyInput({
                id: 1,
                type: InputTypeEnum.ActorMove,
                direction: new Vec2(x, y),
                dt,
            })
            console.log(DataManager.Instance.state.actors[0].position.x, DataManager.Instance.state.actors[0].position.y)
        }
    }

    render(data: IActor) {
        this.node.setPosition(data.position.x, data.position.y)
    }
}


