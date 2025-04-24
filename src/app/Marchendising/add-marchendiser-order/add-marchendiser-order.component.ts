import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Merchandising } from '../../Model/marchendising.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-marchendiser-order',
  imports: [FormsModule],
  templateUrl: './add-marchendiser-order.component.html',
  styleUrl: './add-marchendiser-order.component.css'
})
export class AddMarchendiserOrderComponent {

  marchendiser:Merchandising=new Merchandising();

   
  isUpdate=false;

  constructor(private router:Router){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.marchendiser=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      let  orders: Merchandising[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].merchandiser_name==this.marchendiser.merchandiser_name){

          orders[i]=this.marchendiser;

        }

       
       }
      }

      else{

        orders.push(this.marchendiser)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.marchendiser=new Merchandising();

      this.router.navigate(['/ml'])
    }



  }



