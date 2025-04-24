export class Merchandising {
    merch_id: string;
    order_id: string;
    merchandiser_name: string;
    sampling_done: string;
    approval_date: Date;
    remarks: string;
  
    constructor() {
      this.merch_id = '';
      this.order_id = '';
      this.merchandiser_name = '';
      this.sampling_done = 'N';
      this.approval_date = new Date();
      this.remarks = '';
    }
  }
  