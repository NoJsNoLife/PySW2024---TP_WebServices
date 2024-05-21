import { Component, inject } from '@angular/core';
import { SummarizeService } from '../../services/summarize.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-d',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './page-d.component.html',
  styleUrl: './page-d.component.css'
})
export class PageDComponent {
  private summarizeService = inject(SummarizeService)
  summarizedText: string = ''

  constructor(){}

  toSummarize = new FormGroup({
    url: new FormControl('', Validators.required)
  })

  get url() {
    return this.toSummarize.get('url')
  }

  async summarize() {
    if(this.url!.value !== null){
      this.summarizeService.setSummarizeOptions(this.url!.value)
      this.summarizedText = await this.summarizeService.summarize()
    } else {
      alert('Debe ingresar una url para resumir')
    }
  }
}
