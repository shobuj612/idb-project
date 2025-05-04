import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cutting } from '../../Model/cutting.model';

@Injectable({
  providedIn: 'root'
})
export class CutService {

  private baseUrl='http://localhost:8080/cut'



  constructor(private http:HttpClient) { }

       
  getAllCut():Observable<Cutting[]>{

    return this.http.get<Cutting[]>(this.baseUrl)
  }


  updateCuttingByServie(id:number,cut:Cutting):Observable<Cutting>
{

  if(id==null){

    throw new Error('Id is Invalid?')
  }

  return this.http.put<Cutting>(this.baseUrl+'/'+id,cut)
}



postDesignByService(cut:Cutting):Observable<Cutting>{

  return this.http.post<Cutting>(this.baseUrl,cut)

}


deleteDesignByService(id:number):Observable<void>{

  if(id<=0){
    throw new Error('Invalid id?')
  }

  return this.http.delete<void>(this.baseUrl+'/'+id)
}

}
