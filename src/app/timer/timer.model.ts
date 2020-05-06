export interface TimerModel{
    enabled: boolean;
    seconds: number;
    run(): void;
    stop(): void;
    onTick(cb: (second: number) => void): void;
}