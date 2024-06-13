export default interface IGetOneRentWithCarPool {
  id: number;
  userId: string;
  vehiculeId: number;
  vehiculeInfo: string;
  immatriculation: string;
  startDate: Date;
  returnDate: Date;
  userFirstName: string;
  userLastName: string;
  carpools: [];
}
