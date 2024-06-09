import ILocalization from './ILocalisation';

export default interface ICetOneVehicule {
  vehiculeId: string;
  brandName: string;
  modelName: string;
  categoryName: string;
  motorizationName: string;
  stateName: string;
  pictureUrl: string;
  localisation: ILocalization;
  color?: string;
  seatsNumber: number;
  cO2: number;
  modelYear: number;
  immatriculation: string;
}
