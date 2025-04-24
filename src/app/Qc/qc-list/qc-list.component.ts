import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QualityControl } from '../../Model/qualitycontrol.model';

@Component({
  selector: 'app-qc-list',
  imports: [],
  templateUrl: './qc-list.component.html',
  styleUrl: './qc-list.component.css'
})
export class QcListComponent implements OnInit {


  
  // this is object for this  class

  collect_order:QualityControl[]=[];

  constructor(private router:Router){


  }


  ngOnInit(): void {
      
    this.collect_order=JSON.parse(localStorage.getItem('b') || '[]');

  }

  Edit(a:QualityControl){

    this.router.navigate(['/aq'],{state:{a}})
  }

  Delete(a:QualityControl){

    if(confirm("are you want to delete?")){


      this.collect_order=this.collect_order.filter(f=>f!==a);

      localStorage.setItem('b',JSON.stringify(this.collect_order))
    }
  }

}



