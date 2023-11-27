import { RCCore } from "./RCCore";

export abstract class RCUIManager {
    protected core?: RCCore
    init(core: RCCore) {
        this.core = core
    }
    abstract run(): void;
}