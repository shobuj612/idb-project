export class QualityControl {
    qc_id: string;
    order_id: string;
    inspection_date: Date;
    passed_qty: number;
    rejected_qty: number;
    remarks: string;

    constructor() {
        this.qc_id = '';
        this.order_id = '';
        this.inspection_date = new Date();
        this.passed_qty = 0;
        this.rejected_qty = 0;
        this.remarks = '';
    }
}
