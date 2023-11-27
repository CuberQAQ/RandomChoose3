import { RCCore } from "./RCCore";

export abstract class RCDataManager {
    protected core?: RCCore
    init(core: RCCore) {
        this.core = core
    }
    abstract load(): DataPackage;
    abstract save(): void;
}