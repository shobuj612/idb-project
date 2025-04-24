export class Cutting {
    cutting_id: string;
    order_id: string;
    cutting_start_date: Date;
    cutting_end_date: Date;
    cut_qty: number;
    supervisor_name: string;
  
    constructor() {
      this.cutting_id = '';
      this.order_id = '';
      this.cutting_start_date = new Date();
      this.cutting_end_date = new Date();
      this.cut_qty = 0;
      this.supervisor_name = '';
    }
  }
  