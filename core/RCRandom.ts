import { RCCore } from "./RCCore";

export abstract class RCRandom {
    constructor(protected core: RCCore) { };
    abstract generate(): void;
}