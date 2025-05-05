import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sewing } from '../../Model/sewing.model';

@Injectable({
  providedIn: 'root'
})
export class SewingService {

  private baseUrl='http://localhost:8080/sew'

  

  constructor(private http:HttpClient) { }

  // this is the method to get all data from the database
  
  getAllSewingByService():Observable<Sewing[]>{

    return this.http.get<Sewing[]>(this.baseUrl)
  }

    // this is the method to update data in the database


    updateByService(id:number,sew:Sewing):Observable<Sewing>{

      if(id==null){

        throw new Error('Id is Invalid?')
      }

       return this.http.put<Sewing>(this.baseUrl+'/'+id,sew)
    }

   
    // this is the method to post in the database

    postSewingByService(sew:Sewing):Observable<Sewing>{

      return this.http.post<Sewing>(this.baseUrl,sew)
    }
   

    // this is the method to delete data from the database


    deleteSewingByService(id:number):Observable<void>{

      if(id <=0){

        throw new Error('Id is Invalid')
      }

      return this.http.delete<void>(`${this.baseUrl}/${id}`)
    }

}
