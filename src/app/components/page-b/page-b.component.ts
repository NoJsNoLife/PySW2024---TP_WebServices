import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.css'
})
export class PageBComponent {
  private translateService = inject(TranslateService)
  source: string = 'es'
  target: string = 'en'
  translated: string = ''

  toTranslate = new FormGroup({
    text: new FormControl('', Validators.required)
  })

  get text(){
    return this.toTranslate.get('text')
  }

  setSource(source: string) {
    if(this.target !== source){
      this.source = source
    }
  }
  setTarget(target: string) {
    if(this.source !== target){
      this.target = target
    }
  }

  async translate() {
    if(this.text!.value !== null){
      this.translateService.setTranslateOptions(this.text!.value, this.source!, this.target!)
      this.translated = await this.translateService.translate()
    }
  }

}
