import IGetOneDate from "./GetOneDate";
import ILocalization from "./ILocalisation";

export default interface ICreateOneCarPool {
    userId?: string;
    rentId: number;
    carpoolName: string;
    startLocalizationId?: number;
    startLocalization: ILocalization;
    endLocalizationId?: number;
    endLocalization: ILocalization;
    startDateId?: number;
    startDate: IGetOneDate;
    endDateId?: number;
    endDate: IGetOneDate;
}
