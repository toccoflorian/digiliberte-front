export default interface IGetOneRent {
    id: number;
    userId: string;
    vehiceId: number;
    vehicleInfo: string;
    immatriculation: string;
    startDate: Date;
    returnDate: Date;
    userFirstname: string;
    userLastname: string;
}
