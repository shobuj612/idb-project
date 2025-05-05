import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipping } from '../../Model/shipping.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private baseUrl='http://localhost:8080/ship'



  constructor(private http:HttpClient) { }

   
  // this is the method to get all the data from the database


  getAllShippingByService():Observable<Shipping[]>{


    return this.http.get<Shipping[]>(this.baseUrl)
  }
  
  // this is the method to update data in the database


  updateShippingByService(id:number,ship:Shipping):Observable<Shipping>{

   if(id==null){

    throw new Error('INVALID ID?')
   }

    return this.http.put<Shipping>(`${this.baseUrl}/${id}`,ship)

  }


  // thisi is the method to post data in the database


  postShippingByService(ship:Shipping):Observable<Shipping>{

    return this.http.post<Shipping>(this.baseUrl,ship)
  }

    // this is the method to delete data from the database

    deleteShippingByService(id:number):Observable<void>{

      if(id <=0){

        throw new Error('Invalid id?')
      }

      return this.http.delete<void>(`${this.baseUrl}/${id}`)
    }



}
