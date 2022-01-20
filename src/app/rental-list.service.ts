import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {

  constructor(private http: HttpClient) {

  }
  getRentalList(){
    return this.http.get('http://localhost:3000/rentalList')
    
  }
  addFlop(item){
    item.id = undefined;
    return this.http.post('http://localhost:3000/rentalList',item);
  }
  onDeleteItem(flopId){
    return this.http.delete('http://localhost:3000/rentalList/'+flopId);
  }
}