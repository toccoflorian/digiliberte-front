export interface ICreateBrand {
  Name: string;
}

export class CreateBrand implements ICreateBrand {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
}
