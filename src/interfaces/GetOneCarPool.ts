import ILocalization from "./ILocalisation";

export default interface IGetOneCarPool {
    carPoolId: number;
    rentId: number;
    userId: string;
    vehicleId: number;
    vehicleBrand: string;
    vehicleModel: string;
    vehicleImmatriculation: string;
    vehicleMotorization: string;
    seatsTotalNumber: number;
    CO2: number;
    startDate: Date;
    endDate: Date;
    startLocalization: ILocalization;
    endLocalization: ILocalization;
}
