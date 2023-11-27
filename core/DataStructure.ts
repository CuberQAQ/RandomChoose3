declare interface DataPackage {
    count: Number;
    list: DataItem[];
}

declare interface DataItem {
    name: String;
}

declare interface GenerateResult {
    targetIndex: number;
}
