import { RCCore } from "./RCCore";

export abstract class RCDataLoader {
    constructor(protected core: RCCore) { };
    abstract load(): void;
}