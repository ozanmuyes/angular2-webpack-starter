export class MenuItem {
  id: number;
  name: string;
  image?: string;
  price: number;
  ingredients: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
