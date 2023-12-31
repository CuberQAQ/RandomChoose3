import { RCCore } from "./RCCore";

export abstract class RCStatistician {
    protected core?: RCCore
    init(core: RCCore) {
        this.core = core
    }
    abstract statistic(): void;
}