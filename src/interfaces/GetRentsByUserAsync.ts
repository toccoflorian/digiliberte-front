
export default interface GetRentsByUserAsync {
  userId: string;
  immatriculation: string;
  startDate: Date;
  returnDate: Date;
  VehicleId: number;
  vehicleInfo: string;
}
