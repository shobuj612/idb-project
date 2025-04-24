import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Design } from '../../Model/design.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-design',
  imports: [FormsModule],
  templateUrl: './add-design.component.html',
  styleUrl: './add-design.component.css'
})
export class AddDesignComponent {

  desingn : Design = new Design();

  
   
  isUpdate=false;

  constructor(private router:Router){
    
    const nav= this.router.getCurrentNavigation();

    if(nav?.extras.state&&nav.extras.state['a']){

      this.desingn=nav.extras.state['a'];

      this.isUpdate=true;
    }
     


    }

    // this is the form Method

    submission(){
       
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



  

}
