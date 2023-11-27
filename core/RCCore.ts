import { RCDataManager } from "./RCDataManager";
import { RCRandom } from "./RCRandom";
import { RCStatistician } from "./RCStatistician";
import { RCUIManager } from "./RCUIManager";

export class RCCore {
    public dataPackage: DataPackage | null = null;
    public generateResult: GenerateResult | null = null;
    constructor(
        public dataLoader: RCDataManager,
        public randomGenerator: RCRandom,
        public statistician: RCStatistician,
        public uiManager: RCUIManager
    ) {
        dataLoader.init(this);
        randomGenerator.init(this);
        statistician.init(this);
        uiManager.init(this);
    };

    run(): void {
        this.dataPackage = this.dataLoader.load();
        this.generateResult = this.randomGenerator.generate();
        this.statistician.statistic();
        this.uiManager.run();
    }
}