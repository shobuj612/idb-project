import { Component, OnInit } from '@angular/core';
import { Sewing } from '../../Model/sewing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sewing-list',
  imports: [],
  templateUrl: './sewing-list.component.html',
  styleUrl: './sewing-list.component.css'
})
export class SewingListComponent implements OnInit{

  
  // this is object for this  class

  collect_order:Sewing[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Sewing){

    this.router.navigate(['/as'],{state:{a}})
  }

  Delete(a:Sewing){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}






