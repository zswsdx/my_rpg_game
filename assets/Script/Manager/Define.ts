import { Input, Vec2 } from "cc";

export interface IActor {
    id: number;
    position: Vec2;
    direction: Vec2;
}
export interface IState {
    actors: IActor[]

}

export interface IActorMove {
    id: number,
    type: InputTypeEnum.ActorMove,
    direction: Vec2,
    dt: number
}

export enum InputTypeEnum {
    ActorMove = "ActorMove",
}

