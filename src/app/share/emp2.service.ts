import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Emp2Service {

  constructor(private http:HttpClient) { }
   postemp(data:any)
  {
    
    return this.http.post<any>("http://localhost:3000/posts", data)
    pipe(map((res:any)=>{
      return res;

    }))
  }

  postEmployee(data: any) {

    return this.http.post<any>("http://localhost:3000/posts",data)
   pipe(map((res: any) => {
      return res;
    }))
  }

 getEmployee() {
    return this.http.get<any>("http://localhost:3000/posts")
    pipe(map((res: any) => {
      return res;
    }))
  }
  getAchievement() {
    return this.http.get<any>("http://localhost:3000/achievement")
    pipe(map((res: any) => {
      return res;
    }))
  }

  getContact(){
    return this.http.get<any>("http://localhost:3000/contact")
    pipe(map((res: any) => {
      return res;
    }))
  }
  getContact1(){
    return this.http.get<any>("http://localhost:3000/contact1")
    pipe(map((res: any) => {
      return res;
    }))
  }
  getProjects(){
    return this.http.get<any>("http://localhost:3000/project")
    pipe(map((res: any) => {
      return res;
    }))
   // alert("hello..")
  }

  getEmployee1() {
    return this.http.get<any>("http://localhost:3000/work")
    pipe(map((res: any) => {
      return res;
    }))
  }

updateemployee(data:any,id:number)
{
  return this.http.put<any>("http://localhost:3000/posts/"+id,data)
  pipe(map((res :any)=>{
    return res;
  }
  ))
}



delete(id:number)
{
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
  pipe(map((res :any)=>{
    return res;
  }
  ))
}

}



