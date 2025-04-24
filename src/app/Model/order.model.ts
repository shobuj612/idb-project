export class Order {
    order_id: string;
    buyer_id: string;
    style_no: string;
    order_qty: number;
    order_date: Date;
    delivery_date: Date;
    status: string;
  
    constructor() {
      this.order_id = '';
      this.buyer_id = '';
      this.style_no = '';
      this.order_qty = 0;
      this.order_date = new Date();
      this.delivery_date = new Date();
      this.status = '';
    }
  }
  