import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsSerService {

  url : string = "https://newsapi.org/v2/top-headlines?language=en&apiKey=d948c11e91b04de9bbcd5bb0065a395c";
  responseData : any = [];

  constructor(private HttpClient : HttpClient) { }

  getNews()  {
  this.responseData = this.HttpClient.get(this.url);
  return this.responseData;
  }
}
 