import { Component, OnInit } from '@angular/core';
import { Finishing } from '../../Model/fInishing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finishing-list',
  imports: [],
  templateUrl: './finishing-list.component.html',
  styleUrl: './finishing-list.component.css'
})
export class FinishingListComponent implements OnInit {


  
  collect_order:Finishing[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Finishing){

    this.router.navigate(['/afi'],{state:{a}})
  }

  Delete(a:Finishing){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}



