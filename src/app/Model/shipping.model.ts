export class Shipping {
    shipping_id: string;
    order_id: string;
    shipping_date: Date;
    shipped_qty: number;
    invoice_no: string;
    destination: string;
    carrier: string;

    constructor() {
        this.shipping_id = '';
        this.order_id = '';
        this.shipping_date = new Date();
        this.shipped_qty = 0;
        this.invoice_no = '';
        this.destination = '';
        this.carrier = '';
    }
}
