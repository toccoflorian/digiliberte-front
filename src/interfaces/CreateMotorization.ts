export interface ICreateMotorization {
  Name: string;
}

export class CreateMotorization implements ICreateMotorization {
  Name: string;
  constructor(label: string) {
    this.Name = label;
  }
}
