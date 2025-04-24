import { Component, OnInit } from '@angular/core';
import { Design } from '../../Model/design.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-list',
  imports: [],
  templateUrl: './design-list.component.html',
  styleUrl: './design-list.component.css'
})
export class DesignListComponent  implements OnInit{

  
  // this is object for this  class

  collect_order:Design[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:Design){

    this.router.navigate(['/ad'],{state:{a}})
  }

  Delete(a:Design){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}




