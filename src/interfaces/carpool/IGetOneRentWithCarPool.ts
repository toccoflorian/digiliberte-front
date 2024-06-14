import GetVehicle from "../GetVehicle";

export default interface IGetOneRentWithCarPool {
  id: number;
  userId: string;
  vehicleId: number;
  vehicleInfo: string;
  immatriculation: string;
  startDate: Date;
  returnDate: Date;
  userFirstname: string;
  userLastname: string;
  carpools: [];
  vehicle: GetVehicle;
}
