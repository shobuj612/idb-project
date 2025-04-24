import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../../Model/warehouse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collectioin-list',
  imports: [],
  templateUrl: './collectioin-list.component.html',
  styleUrl: './collectioin-list.component.css'
})
export class CollectioinListComponent implements OnInit {



 
  // this is object for this  class

  collect_order:Warehouse[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Warehouse){

    this.router.navigate(['/aw'],{state:{a}})
  }

  Delete(a:Warehouse){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}



