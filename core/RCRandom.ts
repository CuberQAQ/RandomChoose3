import { RCCore } from "./RCCore";

export abstract class RCRandom {
    protected core?: RCCore
    init(core: RCCore) {
        this.core = core
    }
    abstract generate(): GenerateResult;
}