import { Component, OnInit } from '@angular/core';
import { Cutting } from '../../Model/cutting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cutting-list',
  imports: [],
  templateUrl: './cutting-list.component.html',
  styleUrl: './cutting-list.component.css'
})
export class CuttingListComponent implements OnInit{

  
  // this is object for this  class

  collect_order:Cutting[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Cutting){

    this.router.navigate(['/ac'],{state:{a}})
  }

  Delete(a:Cutting){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}




