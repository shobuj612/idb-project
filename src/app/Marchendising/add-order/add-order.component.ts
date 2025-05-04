import { Component } from '@angular/core';
import { Order } from '../../Model/order.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../Services/OrderService/order.service';

@Component({
  selector: 'app-add-order',
  imports: [FormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {

  order:Order=new Order()

  isUpdate=false;

  constructor(private router:Router,private orderService:OrderService){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.order=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){

       /**
        * 
        * 
      let  orders: Order[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].order_id==this.order.order_id){

          orders[i]=this.order;

        }

       
       }
      }

      else{

        orders.push(this.order)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.order=new Order();

      this.router.navigate(['/ol'])

        */

      if(this.isUpdate){

      this.orderService.updateOrderByService(this.order.order_id!,this.order).subscribe(()=>{


        this.router.navigate(['/ol'])
      })

      }


      else{

        this.orderService.createOrderByService(this.order).subscribe(()=>{


          this.order=new Order()

          this.router.navigate(['/ol'])
        })
      }

      
    }



  }
