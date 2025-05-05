import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FabricStore } from '../../Model/fabric.model';
import { Router } from '@angular/router';
import { FabricService } from '../../Services/fabricService/fabric.service';

@Component({
  selector: 'app-add-fabric',
  imports: [FormsModule],
  templateUrl: './add-fabric.component.html',
  styleUrl: './add-fabric.component.css'
})
export class AddFabricComponent {

  farbric:FabricStore =new FabricStore();

    
  isUpdate=false;

  constructor(private router:Router , private fabricService:FabricService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.farbric=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
      
      /**
       *  
      let  orders: FabricStore[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].fabric_type==this.farbric.fabric_type){

          orders[i]=this.farbric;

        }

       
       }
      }

      else{

        orders.push(this.farbric)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.farbric=new FabricStore();

      this.router.navigate(['/fl'])
    }


       */
      
      if(this.isUpdate){

        this.fabricService.updateFabricByService(this.farbric.fabric_id!,this.farbric).subscribe(()=>{

          this.router.navigate(['/fl'])
        })
      }
  
      else{
        this.fabricService.postFabricByService(this.farbric).subscribe(()=>{

          this.router.navigate(['/fl'])

          this.farbric=new FabricStore()
        })
      }

}

}

