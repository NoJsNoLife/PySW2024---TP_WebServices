import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpMethods } from '../utils/http-methods';
import { environment } from '../../environments/environment';
import { NewsActions } from '../utils/news-actions';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private options: {} = {}

  constructor() {}

  

  setNewsOptions(): void{
    this.options = {
      method: HttpMethods.GET,
      url: environment.NEWS_API_URL + NewsActions.LIST,
      headers: {
        'X-RapidAPI-Key': environment.API_KEY,
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };
  }

  async getNews(): Promise<[] | undefined> {
    let response = undefined
    if(Object.keys(this.options).length === 0){
      return undefined
    }
    try {
      response = await axios.request(this.options)
      return response.data.homepageArticles[0].articles
    } catch (error) {
        console.error(error);
        return undefined
    }
  }
}
