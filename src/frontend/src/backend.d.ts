import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UserProgress {
    finalSectionViewed: boolean;
    surpriseButtonsCompleted: boolean;
    teasingSectionCompleted: boolean;
    hasStarted: boolean;
    loveLetterCompleted: boolean;
}
export interface backendInterface {
    getAllUserProgress(): Promise<Array<UserProgress>>;
    getFinalMessages(): Promise<Array<string>>;
    getLoveLetterMessages(): Promise<Array<string>>;
    getTeasingMessages(): Promise<Array<string>>;
    getUserProgress(userId: bigint): Promise<UserProgress | null>;
    initializeUserProgress(): Promise<bigint>;
    updateUserProgress(userId: bigint, hasStarted: boolean, loveLetterCompleted: boolean, teasingSectionCompleted: boolean, surpriseButtonsCompleted: boolean, finalSectionViewed: boolean): Promise<boolean>;
}
