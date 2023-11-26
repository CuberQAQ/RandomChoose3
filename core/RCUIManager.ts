import { RCCore } from "./RCCore";

export abstract class RCUIManager {
    constructor(protected core: RCCore) { };
    abstract init(): void;
    abstract run(): void;
}