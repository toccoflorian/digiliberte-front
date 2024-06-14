export interface IMotorization {
  id?: string;
  Name: string;
}

export class Motorization implements IMotorization {
  Name: string;
  constructor(label: string) {
    this.Name = label;
  }
}
