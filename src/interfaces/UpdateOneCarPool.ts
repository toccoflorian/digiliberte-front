import ILocalization from "./ILocalisation";

export default interface IUpdateOneCarPool {
    id: number;
    startDate: Date;
    endDate: Date;
    startLocalization: ILocalization;
    endLocalization: ILocalization;
}
