import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameApp')
export class GameApp extends Component {
    start() {
        console.log("game start!!!")
    }

    update(deltaTime: number) {
        
    }
}


