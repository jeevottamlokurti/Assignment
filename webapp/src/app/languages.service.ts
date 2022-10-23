import { Injectable, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http:HttpClient) { }

  fetchCount(){
    let url=`http://localhost:8080/count`
    return this.http.get(url);
  }
  fetchPage(page:number){
    let url=`http://localhost:8080/?page=${page}`
    return this.http.get(url);
  }
  deleteRecord(id:number){
    let url=`http://localhost:8080/${id}`
    return this.http.delete(url)
  }
}
