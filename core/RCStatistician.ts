import { RCCore } from "./RCCore";

export abstract class RCStatistician {
    constructor(protected core: RCCore) { };
    abstract statistic(): void;
}