export class Warehouse {
  warehouse_id: number;
  order_id: number;
  received_date: Date;  // Change from string to Date
  stored_qty: number;

  constructor() {
    this.warehouse_id = 0;
    this.order_id = 0;
    this.received_date = new Date();  // Initialize with the current date
    this.stored_qty = 0;
  }
}
