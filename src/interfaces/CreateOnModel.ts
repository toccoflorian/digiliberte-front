export interface ICreateModel {
  label: string;
  co2: number;
  year: number;
}

export class CreateModel implements ICreateModel {
  label: string;
  co2: number;
  year: number;
  constructor(label: string, co2: number, year: number) {
    this.label = label;
    this.co2 = co2;
    this.year = year;
  }
}
