export interface ScoreModel{
    add(value: number): void;
    sub(value: number): void;
    getScore(): number;
    onChanging(cb: (score: number) => void): void;
    onConflict(cb: (score: number) => void): void;
}