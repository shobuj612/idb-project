import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FabricStore } from '../../Model/fabric.model';

@Injectable({
  providedIn: 'root'
})
export class FabricService {

  private baseUrl='http://localhost:8080/fabric'

  constructor(private http:HttpClient) { }

  // this is the method to get all the data from the database

  getAllFabric():Observable<FabricStore[]>{

    return this.http.get<FabricStore[]>(this.baseUrl)
  }

  // this is the method to update fabric in the database

  updateFabricByService(id:number,fabric:FabricStore):Observable<FabricStore>{

    if(id==null){

      throw new Error('Invalid ID?')
    }

    return this.http.put<FabricStore>(this.baseUrl+'/'+id,fabric)
  }


  // this is the method to post data in the database

  postFabricByService(fabric:FabricStore):Observable<FabricStore>{

    return this.http.post<FabricStore>(this.baseUrl,fabric)
  }


  // this is method to delete data from the database

  deleteFabricByService(id:number):Observable<void>{

     if(id<=0){

      throw new Error('Invalid Id?')
     }

     return this.http.delete<void>(this.baseUrl+'/'+id)
  }
}
