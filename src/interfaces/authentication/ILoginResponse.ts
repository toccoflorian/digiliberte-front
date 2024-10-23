export default interface ILoginResponse {
  tokenType: string;
  accessToken: string;
  userId: string;
  expiresIn: number;
  refreshToken: string;
}
