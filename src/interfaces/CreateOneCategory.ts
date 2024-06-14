export interface ICreateCategory {
  Name: string;
  SeatsNumber: number;
}

export class CreateCategory implements ICreateCategory {
  Name: string;
  SeatsNumber: number;
  constructor(label: string, SeatsNumber: number) {
    this.Name = label;
    this.SeatsNumber = SeatsNumber;
  }
}
