import ILoginResponseDTO from "../interfaces/authentication/ILoginResponse";

export default class Token implements ILoginResponseDTO{
    public tokenType: string;
    public accessToken: string;
    public expiresIn: number;
    public refreshToken: string;

    constructor(accessToken: string | null, expiresIn: string, refreshToken: string | null){
        this.tokenType = 'Bearer';
        this.accessToken = accessToken ? accessToken : '';
        this.expiresIn  = parseInt(expiresIn);
        this.refreshToken = refreshToken ? refreshToken : '';
    }

}