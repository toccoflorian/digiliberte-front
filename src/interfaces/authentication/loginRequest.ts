
export interface ILoginRequest{
    email: string;
    password: string;
    twoFactorCode: string;
    twoFactorRecoveryCode: string
}

export class LoginRequest implements ILoginRequest{
    public email: string;
    public password: string;
    public twoFactorCode: string;
    public twoFactorRecoveryCode: string

    constructor(email: string, password: string, twoFactorCode: string = '', twoFactorRecoveryCode: string = ''){
        this.email = email,
        this.password = password,
        this.twoFactorCode = twoFactorCode,
        this.twoFactorRecoveryCode = twoFactorRecoveryCode
    }
}
