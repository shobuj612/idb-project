import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QualityControl } from '../../Model/qualitycontrol.model';

@Injectable({
  providedIn: 'root'
})
export class QcService {

  private baseUrl='http://localhost:8080/qc'


   

  constructor( private http:HttpClient) { }


    // this is the method to get all the data fro the data base


     getAllQcByService():Observable<QualityControl[]>{


      return this.http.get<QualityControl[]>(this.baseUrl)
     }

      
     // this is the method to update data in the database


     updateQcByService(id:number,qc:QualityControl):Observable<QualityControl>{


        if(id==null){


          throw new Error('Id is Invalid?')

        }

        return this.http.put<QualityControl>(this.baseUrl+'/'+id,qc)
     }


       // this is the method to post data in the database

       postQcByService(qc:QualityControl):Observable<QualityControl>{

        return this.http.post<QualityControl>(this.baseUrl,qc)
       }

         
       // this is the method to delete data from the database


       deleteQcByService(id:number):Observable<void>{

        if(id <=0){

          throw new Error('Id is Invalid?')
        }

          return this.http.delete<void>(this.baseUrl+'/'+id)
       }


}
