export class Cutting {
  cutting_id?: number;
  order_id: number;
  cutting_start_date: string;
  cutting_end_date: string;
  cut_qty: number;
  supervisor_name: string;

  constructor() {
    //this.cutting_id = 0;  // Initializing cutting_id as a number
    this.order_id = 0;    // Initializing order_id as a number
    this.cutting_start_date = '';
    this.cutting_end_date = '';
    this.cut_qty = 0;
    this.supervisor_name = '';
  }
}
