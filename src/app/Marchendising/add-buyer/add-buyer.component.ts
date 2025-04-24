import { Component } from '@angular/core';
import { Buyer } from '../../Model/buyer.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-buyer',
  imports: [FormsModule],
  templateUrl: './add-buyer.component.html',
  styleUrl: './add-buyer.component.css'
})
export class AddBuyerComponent {

  buy :Buyer =new Buyer

  
  isUpdate=false;

  constructor(private router:Router){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.buy=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      let  orders: Buyer[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].buyer_name==this.buy.buyer_name){

          orders[i]=this.buy;

        }

       
       }
      }

      else{

        orders.push(this.buy)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.buy=new Buyer();

      this.router.navigate(['/bl'])
    }



  }



