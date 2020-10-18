import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  public static API_URL = 'https://instant-prayer-api.herokuapp.com';
  public static API_URL2 ='https://db46dc480e68.ngrok.io/telegram_message';
  // public static API_URL = 'http://192.168.1.103:3000';


  constructor() {}
}
