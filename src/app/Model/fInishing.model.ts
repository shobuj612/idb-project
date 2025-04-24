export class Finishing {
    finish_id:  string;
    order_id:  string;
    finishing_date: Date;
    finish_qty: number;
    packing_done: string;
  
    constructor() {
      this.finish_id = '';
      this.order_id = '';
      this.finishing_date = new Date();
      this.finish_qty = 0;
      this.packing_done = '';
    }
  }
  