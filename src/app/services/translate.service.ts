import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpMethods } from '../utils/http-methods';
import { environment } from '../../environments/environment'
import { TranslateActions } from '../utils/translate-actions';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private encodedParams = new URLSearchParams();
  private options: {} = {}
  constructor() {}
  


  setTranslateOptions(content: string, source: string, target: string): void{
    this.encodedParams.set('q', content);
    this.encodedParams.set('target', target);
    this.encodedParams.set('source', source);
    this.options = {
      method: HttpMethods.POST,
      url: environment.TRANSLATE_API_URL + TranslateActions.TRANSLATE,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': environment.API_KEY,
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: this.encodedParams,
    };
  }

  async translate(): Promise<string> {
    let response = undefined
    if(Object.keys(this.options).length === 0){
      return ''
    }
    try {
      response = await axios.request(this.options)
      return response.data.data.translations[0].translatedText
    } catch (error) {
        console.error(error);
        return ''
    }
  }

}
