import { Component, OnInit } from '@angular/core';
import { FabricStore } from '../../Model/fabric.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabric-list',
  imports: [],
  templateUrl: './fabric-list.component.html',
  styleUrl: './fabric-list.component.css'
})
export class FabricListComponent  implements OnInit{

   
  // this is object for this  class

  collect_order:FabricStore[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:FabricStore){

    this.router.navigate(['/af'],{state:{a}})
  }

  Delete(a:FabricStore){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}





