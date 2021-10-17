import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

constructor(private http:HttpClient) { }

postMessage(input: any,api:string){
  return this.http.post(api,input,{}).pipe(
    map(
      (response) => {
        console.log(response)
        if(response)return response;
      },
      (error: any) => {
        return error;
      }
    )
  )
}

}
