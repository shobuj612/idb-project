import { Component, OnInit } from '@angular/core';
import { Merchandising } from '../../Model/marchendising.model';
import { Router } from '@angular/router';
import { MarchService } from '../../Services/marService/march.service';

@Component({
  selector: 'app-marchendiser-orderlist',
  imports: [],
  templateUrl: './marchendiser-orderlist.component.html',
  styleUrl: './marchendiser-orderlist.component.css'
})
export class MarchendiserOrderlistComponent  implements OnInit{

  
  
  // this is object for this  class

  collect_order:Merchandising[]=[];

  constructor(private router:Router, private marchService:MarchService){


  }


  ngOnInit(): void {
      
    //this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

    this.getAllMarch()

  }

  // this is the method to get all the March from the database

  getAllMarch(){

  this.marchService.getAllMarchendising().subscribe((data)=>{

    this.collect_order=data;
  })

  }

  Edit(a:Merchandising){

    this.router.navigate(['/am'],{state:{a}})
  }

  Delete(a:Merchandising){

    if(a.merch_id!=null){

      if(confirm("are you want to delete?")){


        //this.collect_order=this.collect_order.filter(f=>f!==a);
  
        //localStorage.setItem('b',JSON.stringify(this.collect_order))

        this.marchService.deleteMarchByService(a.merch_id).subscribe(()=>{

          this.getAllMarch();
        })
      }
    }

    else{

      alert('Invalid Id?')
    }
  
    }
}






