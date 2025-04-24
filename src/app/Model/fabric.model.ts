export class FabricStore {
    fabric_id: string;
    order_id: string;
    fabric_type: string;
    fabric_qty: number;
    received_date: Date;
    available_stock: number;
  
    constructor() {
      this.fabric_id = '';
      this.order_id = '';
      this.fabric_type = '';
      this.fabric_qty = 0;
      this.received_date = new Date();
      this.available_stock = 0;
    }
  }
  