export default interface IGetCarPoolSimpleWithPassenger {
    id: number;
    startDate: Date;
    endDate: Date;
    startLocalization: ILocalization;
    endLocalization: ILocalization;
    carPoolPassenger: IGetOneCarPoolPassenger[];
}
