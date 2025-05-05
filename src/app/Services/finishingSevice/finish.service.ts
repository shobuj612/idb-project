import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finishing } from '../../Model/fInishing.model';

@Injectable({
  providedIn: 'root'
})
export class FinishService {

  private baseUrl='http://localhost:8080/finis'

  constructor(private http:HttpClient) { }

   // this is the method to get data from the database

   getAllFinish():Observable<Finishing[]>{

    return this.http.get<Finishing[]>(this.baseUrl)
   }


       // this is the method to update data in the database

       updateFinisngByService(id:number,finis:Finishing):Observable<Finishing>{

        if(id==null){

          throw new Error('Invalid Id?')
        }

          return this.http.put<Finishing>(this.baseUrl+'/'+id,finis)
       }


       // thi is the method for post data in the database

       postFinishingByService(finis:Finishing):Observable<Finishing>{

        return this.http.post<Finishing>(this.baseUrl,finis)
       }

       // this is the method for delete data from the database

       deleteFinishingByService(id:number):Observable<void>{

        if(id<=0){

          throw new Error('Invalid Id?')
        }

        return this.http.delete<void>(this.baseUrl+'/'+id)
        
       }

}
