
export default interface ILoginResponse{
    tokenType: string,
    accessToken: string,
    expiresIn: number,
    refreshToken: string
}