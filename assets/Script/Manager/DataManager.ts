import { _decorator, Component, Node, Vec2 } from 'cc';
import { IActor, IActorMove, IState } from './Define';
import { JoyStick } from '../Widget_Ctrl/JoyStick';
import { ActorManager } from './ActorManager';
const { ccclass, property } = _decorator;

const ACTOR_SPEED = 100

@ccclass('DataManager')
export class DataManager extends Component {
    public static Instance: DataManager = null;

    protected onLoad(): void {
        if (DataManager.Instance === null) {
            DataManager.Instance = this
        } else {
            this.destroy();
            return
        }
    }

    jm: JoyStick;
    actorMap: Map<number, ActorManager> = new Map();



    state: IState = {
        actors: [
            {
                id: 1,
                position: new Vec2(0, 0),
                direction: new Vec2(0, 0)
            },
        ],
    }


    applyInput(input: IActorMove) {
        const { id, dt, direction: { x, y } } = input;
        const actor = this.state.actors.find((e) => e.id === id)
        actor.direction.x = x
        actor.direction.y = y
        actor.position.x += x * dt * ACTOR_SPEED
        actor.position.y += y * dt * ACTOR_SPEED
    }
}


