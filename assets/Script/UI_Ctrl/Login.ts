import { _decorator, assert, assetManager, Component, instantiate, Node, Prefab } from 'cc';
import { Main } from './Main';
const { ccclass, property } = _decorator;

@ccclass('Login')
export class Login extends Component {
    start() {
        this.node.getChildByName("Btn_Login").on("click",this.login.bind(this));

        this.node.getChildByName("Btn_Reg").on("click", () => {
            console.log("register")
        });
    }

    update(deltaTime: number) {
        
    }

    login(){
        assetManager.loadBundle('UI', (err, bundle) => {
            if (err){
                console.log(err)
                return
            }
            bundle.load('Main',Prefab, (err, prefab) => {
                if (err){
                    console.log(err)
                    return
                }
                let main = instantiate(prefab);
                main.setParent(this.node.parent)
                main.addComponent(Main)
                this.node.removeFromParent()
            })
        });
    }
}


