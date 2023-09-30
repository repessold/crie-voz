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

  public postTextToSpeech(texto: any) {
    const idVoz = "21m00Tcm4TlvDq8ikWAM";
    const idModelo = "eleven_multilingual_v1";
    const idIdioma = "pt";

    const apiUrl = `https://api.elevenlabs.io/v1/text-to-speech/${idVoz}`;

    const headers = {
      'Content-Type': 'application/json',
      'xi-api-key': '530918fb46da5ee32e6f902e7982e837',
    };

    const body = {
      'text': texto,
      'model_id': idModelo,
      'voice_settings': {
        'stability': 0,
        'similarity_boost': 0,
        'style': 0,
        'use_speaker_boost': true,
        'language_id': idIdioma,
      },
    };

    return axios.post(apiUrl, body, { headers, responseType: 'arraybuffer' });
  }
}
