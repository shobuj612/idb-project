import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../Model/buyer.model';

@Injectable({
  providedIn: 'root'
})
export class BuyerServiceService {

  private baseUrl = 'http://localhost:8080/buyer'

  constructor(private http: HttpClient) { }

  // Method to get all the data from the database
  getAllBuyerByService(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.baseUrl);
  }

  // Method to update a buyer in the database
  updateBuyerByService(id: number, buyer: Buyer): Observable<Buyer> {
    return this.http.put<Buyer>(`${this.baseUrl}/${id}`, buyer);
  }

  // Method to create a new buyer in the database
  createBuyerByService(buyer: Buyer): Observable<Buyer> {
    return this.http.post<Buyer>(this.baseUrl, buyer);
  }

  // Method to delete a buyer from the database
  deleteBuyerByService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
