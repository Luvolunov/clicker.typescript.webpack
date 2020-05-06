import { ScoreModel } from "./score.model";

export class ScoreController implements ScoreModel{

    private _score: number;
    private addingHook: (value: number) => void;
    private conflictHook: (value: number) => void;

    private get score(){
        return this._score;
    }

    private set score(value: number){
        this._score = value;
        this.addingHook && this.addingHook(this._score);
    }

    constructor(score?: number){
        this._score = score ?? 0;
    }

    add(value: number){
        this.score += value;
    }

    sub(value: number){
        if (this.score < value) 
            return this.conflictHook && this.conflictHook(this.score);
            
        this.score -= value;
    }

    getScore(){
        return this.score;
    }

    onChanging(cb: (value: number) => void){
        this.addingHook = cb;
    }

    onConflict(cb: (value: number) => void){
        this.conflictHook = cb;
    }
}