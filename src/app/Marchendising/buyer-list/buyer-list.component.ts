import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from '../../Model/buyer.model';

@Component({
  selector: 'app-buyer-list',
  imports: [],
  templateUrl: './buyer-list.component.html',
  styleUrl: './buyer-list.component.css'
})
export class BuyerListComponent  implements OnInit{

  
  // this is object for this  class

  collect_order:Buyer[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Buyer){

    this.router.navigate(['/ab'],{state:{a}})
  }

  Delete(a:Buyer){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}



