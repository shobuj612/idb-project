import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Warehouse } from '../../Model/warehouse.model';
import { Router } from '@angular/router';
import { WareService } from '../../Services/warehouseService/ware.service';

@Component({
  selector: 'app-add-collection',
  imports: [FormsModule],
  templateUrl: './add-collection.component.html',
  styleUrl: './add-collection.component.css'
})
export class AddCollectionComponent {

  ware:Warehouse=new Warehouse()

  
  isUpdate=false;

  constructor(private router:Router , private warService:WareService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.ware=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      /**
       * 
       * let  orders: Warehouse[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].warehouse_id==this.ware.warehouse_id){

          orders[i]=this.ware;

        }

       
       }
      }

      else{

        orders.push(this.ware)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.ware=new Warehouse();

      this.router.navigate(['/cwl'])
      
    }
       */

    if(this.isUpdate){


      this.warService.updateWareByService(this.ware.warehouse_id!,this.ware).subscribe(()=>{
           
          this.router.navigate(['/cwl'])

      })
    }
         
       else{

        this.warService.createWareByService(this.ware).subscribe(()=>{

          this.router.navigate(['/cwl'])

          this.ware= new Warehouse()
        })
       }

    }

  }





