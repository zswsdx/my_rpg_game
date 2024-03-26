import { _decorator, assetManager, Component, instantiate, Node, Prefab } from 'cc';
import { Login } from './UI_Ctrl/Login';
const { ccclass, property } = _decorator;

@ccclass('GameApp')
export class GameApp extends Component {
    start() {
        console.log("start GameApp")
        //加载login界面
        assetManager.loadBundle('UI', (err, bundle) => {
            if (err){
                console.log(err)
                return
            }
            bundle.load('Login',Prefab, (err, prefab) => {
                if (err){
                    console.log(err)
                    return
                }
                let login = instantiate(prefab);
                login.setParent(this.node)
                login.addComponent(Login)
            })
        });
    }

    update(deltaTime: number) {
        
    }
}


