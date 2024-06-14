export interface ICreateBrand {
  Name: string;
}

export class CreateBrand implements ICreateBrand {
  Name: string;
  constructor(label: string) {
    this.Name = label;
  }
}
