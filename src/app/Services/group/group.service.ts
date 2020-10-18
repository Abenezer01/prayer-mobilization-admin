import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../env.service';
import { ApiService } from './../api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends ApiService{

  constructor( http: HttpClient) {
    super(`${EnvService.API_URL}/api/grpups`, http);
  }
}
