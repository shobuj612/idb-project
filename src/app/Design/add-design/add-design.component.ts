import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Design } from '../../Model/design.model';
import { Router } from '@angular/router';
import { DesignService } from '../../Services/DesignSerivce/design.service';

@Component({
  selector: 'app-add-design',
  imports: [FormsModule],
  templateUrl: './add-design.component.html',
  styleUrl: './add-design.component.css'
})
export class AddDesignComponent {

  desingn : Design = new Design();

  
   
  isUpdate=false;

  constructor(private router:Router , private designService:DesignService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.desingn=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
     /**
      * 
      *   
      let  orders: Design[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].design_name==this.desingn.design_name){

          orders[i]=this.desingn;

        }

       
       }
      }

      else{

        orders.push(this.desingn)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.desingn=new Design();

      this.router.navigate(['/dl'])
    }


      */

     if(this.isUpdate){

      this.designService.updateDesignByService(this.desingn.design_id!,this.desingn).subscribe(()=>{

        this.router.navigate(['/dl'])
      })
     }
        
     else{

      this.designService.postDesingByService(this.desingn).subscribe(()=>{

        this.desingn= new Design()

        this.router.navigate(['/dl'])
      })
     }
    }
}
