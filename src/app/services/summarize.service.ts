import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpMethods } from '../utils/http-methods';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummarizeService {
  private options: {} = {}
  constructor() {}
  


  setSummarizeOptions(content: string): void{
    this.options = {
      method: HttpMethods.POST,
      url: environment.SUMMARIZE_URL,
      headers: {
        'content-type': 'application/json',
        'apy-token': environment.API_KEY3,
      },
      data: {
        url: content,
        summary_length: 'short',
        output_language: 'es',
      }
    };
  }

  async summarize(): Promise<string> {
    let response = undefined
    if(Object.keys(this.options).length === 0){
      return ''
    }
    try {
      response = await axios.request(this.options)
      return response.data.data.summary
    } catch (error) {
        console.error(error);
        return ''
    }
  }
}
