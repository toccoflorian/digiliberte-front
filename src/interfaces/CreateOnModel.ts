export interface ICreateModel {
  Name: string;
  Co2: number;
  Year: number;
}

export class CreateModel implements ICreateModel {
  Name: string;
  Co2: number;
  Year: number;
  constructor(label: string, co2: number, year: number) {
    this.Name = label;
    this.Co2 = co2;
    this.Year = year;
  }
}
  