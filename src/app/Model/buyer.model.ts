export class Buyer {
  buyerId: number;  // Required, initialized to 0
  buyerName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;

  constructor() {
    this.buyerId = 0;  // Default value (e.g., for new unsaved buyer)
    this.buyerName = '';
    this.contactPerson = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
}
