import { TimerModel } from "./timer.model";

export class TimerController implements TimerModel{
    private timer: any;
    private _enabled: boolean = false;
    private tickHook: (val: number) => void;

    seconds: number;
    
    get enabled(){
        return this._enabled;
    }

    set enabled(value: boolean){
        this._enabled = value;
        if (value){
            this.timer = setInterval(() => {
                this.tick();
                this.tickHook && this.tickHook(this.seconds);
            }, 1000);
            return;
        } 
        clearInterval(this.timer);
    }

    

    constructor(seconds?: number){
        this.seconds = seconds ?? 0;
    }

    run(){
        if (this.enabled) throw new Error("[Timer]: not allow to run timer, when it already ran")
        this.enabled = true;
    }

    stop(){
        if (!this.enabled) throw new Error("[Timer]: not allow to stop timer, when it already stopped")
        this.enabled = false;
    }

    onTick(cb: (value: number) => void){
        this.tickHook = cb;
    }

    private tick(){
        this.seconds++;
    }
}