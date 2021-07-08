import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData(){
    return {
      name:'adarsh',
      id:10,
      age:22
    }
  }
}
