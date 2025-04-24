import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  imports: [],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css'
})
export class OrderlistComponent  implements OnInit{


  // this is object for this  class

  collect_order:Order[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Order){

    this.router.navigate(['/ao'],{state:{a}})
  }

  Delete(a:Order){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}




