import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  toggleLoading = new Subject<boolean>();

  getToggleLoading() {
    return this.toggleLoading.asObservable();
  }
constructor() { }

}
