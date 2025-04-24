export class Sewing {
    sewing_id: string;
    order_id: string;
    sewing_start_date: Date;
    sewing_end_date: Date;
    sewing_qty: number;
    

    constructor() {
        this.sewing_id = '';
        this.order_id = '';
        this.sewing_start_date = new Date();
        this.sewing_end_date = new Date();
        this.sewing_qty = 0;
        
    }
}
