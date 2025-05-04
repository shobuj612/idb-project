export class Warehouse {
    warehouse_id: string;
    order_id: string;
    received_date: Date;
    stored_qty: number;
  
    constructor() {
      this.warehouse_id = '';
      this.order_id = '';
      this.received_date = new Date();
      this.stored_qty = 0;
    }
  }
  