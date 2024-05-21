import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpMethods } from '../utils/http-methods';
import { environment } from '../../environments/environment';
import { CarsActions } from '../utils/cars-actions';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private options: {} = {}

  constructor(){}

  setCarsOptions(): void{
    this.options = {
      method: HttpMethods.GET,
      url: environment.CARS_API_URL + CarsActions.MAKES,
      headers: {
        'X-RapidAPI-Key': environment.API_KEY2,
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }
    };
  }
  async setCarsOptionsWithId(id: string): Promise<void>{
    this.options = {
      method: HttpMethods.GET,
      url: environment.CARS_API_URL + CarsActions.MAKES + '/' + id + '/' + CarsActions.MODELS,
      headers: {
        'X-RapidAPI-Key': environment.API_KEY2,
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      }
    };
  }

  async getMakers(): Promise<[] | undefined> {
    let response = undefined
    if(Object.keys(this.options).length === 0){
      return undefined
    }
    try {
      response = await axios.request(this.options)
      return response.data
    } catch (error) {
        console.error(error);
        return undefined
    }
  }

  async getModels(): Promise<[] | undefined> {
    let response = undefined
    if(Object.keys(this.options).length === 0){
      return undefined
    }
    try {
      response = await axios.request(this.options)
      return response.data
    } catch (error) {
        console.error(error);
        return undefined
    }
  }
}
