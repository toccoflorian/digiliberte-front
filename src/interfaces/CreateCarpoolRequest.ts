import ILocalization from "./ILocalisation";

export default interface ICreateCarpoolRequest {
    RentId: number;
    CarpoolName: string;
    StartLocalization: ILocalization;
    EndLocalization: ILocalization;
    StartDate: Date;
    EndDate: Date;
}

