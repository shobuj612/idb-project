import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../../Model/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WareService {

  private baseUrl='http://localhost:8080/war'



  constructor( private http:HttpClient) { }

  // thisi is the method to get data from the database

  getAllWareHoueByService():Observable<Warehouse[]>{

    return this.http.get<Warehouse[]>(this.baseUrl)
  }

  // this is the method to update data in the database

  updateWareByService(id:number,war:Warehouse):Observable<Warehouse>{

    if(id==null){

      throw new Error('INvalid Id?')
    }

    return this.http.put<Warehouse>(this.baseUrl+'/'+id,war)
  }


  // this is the method to post in the database

  createWareByService(war:Warehouse):Observable<Warehouse>{


    return this.http.post<Warehouse>(this.baseUrl,war)
  }


  // this is the method to delete data from the database


  deleteWareByService(id:number):Observable<void>{

    if(id <=0){

      throw new Error('Invalid id?')
    }

    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }




}
