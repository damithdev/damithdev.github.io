import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  downloadPDF(url): any {
  return this.http.get(url, { responseType: 'blob'  }).pipe(
    map(
      (res) => {
          return new Blob([res], { type: 'application/pdf' });
      })
  );
}

}
