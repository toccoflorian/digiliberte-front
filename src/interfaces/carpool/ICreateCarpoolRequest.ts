import ILocalization from "../ILocalisation";

export default interface ICreateCarpoolRequest {
  rentId: number;
  carpoolName: string;
  startLocalization: ILocalization;
  endLocalization: ILocalization;
  startDate: Date;
  endDate: Date;
}
