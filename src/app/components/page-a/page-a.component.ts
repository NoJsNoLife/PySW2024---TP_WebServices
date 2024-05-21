import { Component, inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.css'
})
export class PageAComponent {
  private newsService = inject(NewsService)
  articles: Article[] | undefined
  constructor(){
    this.newsService.setNewsOptions()
    this.getNews()
  }

  async getNews(){
    let aux = sessionStorage.getItem('articles')
    if(aux){
      this.articles = JSON.parse(aux)
    } else {
      this.articles = await this.newsService.getNews()
      sessionStorage.setItem('articles', JSON.stringify(this.articles))
    }
  }
}
