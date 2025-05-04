export class Warehouse {
    warehouse_id: number;
    order_id: number;
    received_date: string;
    stored_qty: number;
  
    constructor() {
      this.warehouse_id = 0;
      this.order_id = 0;
      this.received_date = '';
      this.stored_qty = 0;
    }
  }
  