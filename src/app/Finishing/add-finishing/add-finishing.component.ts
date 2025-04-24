import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Finishing } from '../../Model/fInishing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-finishing',
  imports: [FormsModule],
  templateUrl: './add-finishing.component.html',
  styleUrl: './add-finishing.component.css'
})
export class AddFinishingComponent {

  finish:Finishing = new Finishing()

  
   
  isUpdate=false;

  constructor(private router:Router){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.finish=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      let  orders: Finishing[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].finish_qty==this.finish.finish_qty){

          orders[i]=this.finish;

        }

       
       }
      }

      else{

        orders.push(this.finish)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.finish=new Finishing();

      this.router.navigate(['/fli'])
    }



  }





