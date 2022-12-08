import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient ) { }

  getAllData(){
    return this.http.get<any>(" http://localhost:3000/posts")
    .pipe(map((response)=>{
      return response
    }))
  }
  getuser(id:number){
    return this.http.get<any>(" http://localhost:3000/posts/"+id)
  }
}
