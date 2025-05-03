export class Buyer {
  buyerId: number;
  buyerName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;

  constructor() {
    this.buyerId = 0;
    this.buyerName = '';
    this.contactPerson = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
}
