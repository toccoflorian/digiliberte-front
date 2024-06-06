import ILocalization from './ILocalisation';

export default interface IGetOneVehicleVehicleWithRent {
  VehiculeId: string;
  BrandName: string;
  ModelName: string;
  CategoryName: string;
  MotorizationName: string;
  StateName: string;
  PictureUrl: string;
  Localisation: ILocalization;
  Color?: string;
  SeatsNumber: number;
  CO2: number;
  ModelYear: number;
  Immatriculation: string;
}
