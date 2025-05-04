import { Component, OnInit } from '@angular/core';
import { Design } from '../../Model/design.model';
import { Router } from '@angular/router';
import { DesignService } from '../../Services/DesignSerivce/design.service';

@Component({
  selector: 'app-design-list',
  imports: [],
  templateUrl: './design-list.component.html',
  styleUrl: './design-list.component.css'
})
export class DesignListComponent  implements OnInit{

  
  // this is object for this  class

  collect_order:Design[]=[];

  constructor(private router:Router,private designService:DesignService){


  }


  ngOnInit(): void {
      
   // this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

   this.fetchAllDesign()

  }

  // get all the data from the database by this method


  fetchAllDesign(){

    this.designService.getAllDesign().subscribe((data)=>{

      this.collect_order=data;
    })
  }

  Edit(a:Design){

    this.router.navigate(['/ad'],{state:{a}})
  }

  Delete(a:Design){

   if(a.design_id !=null){

    if(confirm("are you want to delete?")){


      //this.collect_order=this.collect_order.filter(f=>f!==a);

     // localStorage.setItem('b',JSON.stringify(this.collect_order))

      this.designService.deleteDesignByService(a.design_id).subscribe(()=>{

        this.fetchAllDesign()
      })
    }
  }
  else{

    alert('Invalid Id?')
  }
   }

}




