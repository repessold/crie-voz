import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InfoElevenService {

  protected readonly API = environment.API;
  protected readonly Headers= environment.API_KEY;

  constructor() { }

  getAllModels() {
    return axios.get('https://api.elevenlabs.io/v1/models', {
      headers: {
        'accept: application/json':
        'xi-api-key: 530918fb46da5ee32e6f902e7982e837'
      }
    });
  }







}
