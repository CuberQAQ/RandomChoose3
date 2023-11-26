import { RCDataLoader } from "./RCDataLoader";
import { RCRandom } from "./RCRandom";
import { RCStatistician } from "./RCStatistician";
import { RCUIManager } from "./RCUIManager";

export class RCCore {
    constructor(
        public dataLoader: RCDataLoader,
        public randomGenerator: RCRandom,
        public statistician: RCStatistician,
        public uiManager: RCUIManager
    ) {

    };

    run(): void {
        
    }
}