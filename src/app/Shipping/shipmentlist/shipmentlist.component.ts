import { Component, OnInit } from '@angular/core';
import { Shipping } from '../../Model/shipping.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipmentlist',
  imports: [],
  templateUrl: './shipmentlist.component.html',
  styleUrl: './shipmentlist.component.css'
})
export class ShipmentlistComponent implements OnInit {

  
  // this is object for this  class

  collect_order:Shipping[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Shipping){

    this.router.navigate(['/addship'],{state:{a}})
  }

  Delete(a:Shipping){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}






