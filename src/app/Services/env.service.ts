import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  public static API_URL = 'https://instant-prayer-api.herokuapp.com';
  // public static API_URL = 'http://192.168.1.103:3000';


  constructor() {}
}
