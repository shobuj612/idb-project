import { Component, OnInit } from '@angular/core';
import { Merchandising } from '../../Model/marchendising.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marchendiser-orderlist',
  imports: [],
  templateUrl: './marchendiser-orderlist.component.html',
  styleUrl: './marchendiser-orderlist.component.css'
})
export class MarchendiserOrderlistComponent  implements OnInit{

  
  
  // this is object for this  class

  collect_order:Merchandising[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Merchandising){

    this.router.navigate(['/am'],{state:{a}})
  }

  Delete(a:Merchandising){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}






