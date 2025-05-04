import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Design } from '../../Model/design.model';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
    
  private baseUrl='http://localhost:8080/design'

  constructor(private http:HttpClient) { }

  getAllDesign():Observable<Design[]>{

    return this.http.get<Design[]>(this.baseUrl)


  }


  
  updateDesignByService(id:number,design:Design):Observable<Design>{

    if(id==null){
      throw new Error('Invalid Id?')

    }

    return this.http.put<Design>(this.baseUrl+'/'+id,design)
  }

    postDesingByService(design:Design):Observable<Design>{

      return this.http.post<Design>(this.baseUrl,design)
    }


    deleteDesignByService(id:number):Observable<void>{

      if(id<=0){

        throw new Error('Invalid Erorr')
      }

      return this.http.delete<void>(this.baseUrl+'/'+id)
    }

}
