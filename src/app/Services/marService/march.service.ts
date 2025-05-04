import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchandising } from '../../Model/marchendising.model';

@Injectable({
  providedIn: 'root'
})
export class MarchService {

  // thi is the url to send the request to the backend

  private hiUrl='http://localhost:8080/march';

  constructor(private httpclient:HttpClient) { }

  // this is the method to get all the Marchendising

  getAllMarchendising():Observable<Merchandising[]>{

    return this.httpclient.get<Merchandising[]>(this.hiUrl);
  }

  // this is the update method in the database


  updateMarchByService(id:number,march:Merchandising):Observable<Merchandising>{

     if(id==null){

      throw new Error('invalid Id?');
     }

     
    return this.httpclient.put<Merchandising>(`${this.hiUrl}/${id}`,march);
  }

  // thi is the method for post in the database

  postMarchByService(march:Merchandising):Observable<Merchandising>{

    return this.httpclient.post<Merchandising>(this.hiUrl,march)
  }

  // thi is the delete method from something from the database

  deleteMarchByService(id:number):Observable<void>{

    if(id<=0){

      throw new Error('invalid id?')
    }

    return this.httpclient.delete<void>(this.hiUrl+'/'+id)
  }
}
