import { Component } from '@angular/core';
import { Shipping } from '../../Model/shipping.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShippingService } from '../../Services/shippingService/shipping.service';

@Component({
  selector: 'app-add-shipment',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './add-shipment.component.html',
  styleUrl: './add-shipment.component.css'
})
export class AddShipmentComponent {

  ship:Shipping =new Shipping()

  
  isUpdate=false;

  constructor(private router:Router , private shipService:ShippingService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.ship=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      /**
       * 
       * let  orders: Shipping[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].shipped_qty==this.ship.shipped_qty){

          orders[i]=this.ship;

        }

       
       }
      }

      else{

        orders.push(this.ship)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.ship=new Shipping();

      this.router.navigate(['/shiplist'])

       */


      if(this.isUpdate){

        this.shipService.updateShippingByService(this.ship.shipping_id!,this.ship).subscribe(()=>{

           this.router.navigate(['/shiplist'])
        })
      }

        else{

           this.shipService.postShippingByService(this.ship).subscribe(()=>{

             this.router.navigate(['/shiplist'])

             this.ship=new Shipping()

           })

        }
    }



  }


