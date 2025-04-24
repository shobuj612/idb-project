import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cutting } from '../../Model/cutting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cutting',
  imports: [FormsModule],
  templateUrl: './add-cutting.component.html',
  styleUrl: './add-cutting.component.css'
})
export class AddCuttingComponent {

  cut:Cutting =new Cutting();

  
   
  isUpdate=false;

  constructor(private router:Router){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.cut=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
      let  orders: Cutting[]=JSON.parse(localStorage.getItem('b') || '[]');

      if(this.isUpdate){

       for(let i=0; i<orders.length;i++){

        if(orders[i].cut_qty==this.cut.cut_qty){

          orders[i]=this.cut;

        }

       
       }
      }

      else{

        orders.push(this.cut)
      }

      localStorage.setItem('b',JSON.stringify(orders))

      this.cut=new Cutting();

      this.router.navigate(['/cl'])
    }



  

}


