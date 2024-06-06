import IGetOneUser from "./IGetOneUser";

export default interface IGetOneCarPoolPassenger {
    id: number;
    carPoolId: number;
    userDTO: IGetOneUser;
    description: string;
}


