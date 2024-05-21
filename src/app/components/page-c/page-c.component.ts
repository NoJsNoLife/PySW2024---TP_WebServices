import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Maker } from '../../models/maker';
import { Model } from '../../models/model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [ MatPaginatorModule, MatCardModule, MatButtonModule, MatGridListModule ],
  templateUrl: './page-c.component.html',
  styleUrl: './page-c.component.css'
})
export class PageCComponent implements OnInit{
  @Input() totalItems!: number
  @Input() pageSize!: number
  @Output() pageChanged = new EventEmitter<PageEvent>()
  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule

  private carsService = inject(CarsService)
  startIndex!: number
  endIndex!: number
  makers: Maker[] | undefined
  makersFiltered: Maker[] | undefined
  models: Model[] | undefined
  mostrarModal: boolean = false

  constructor(){
    this.carsService.setCarsOptions()
    this.getMakers()
  }
  ngOnInit(): void {
    this.startIndex = 0
    this.endIndex = 8
    this.makersFiltered = this.makers!.slice(this.startIndex, this.endIndex)
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize
    const endIndex = startIndex + event.pageSize
    this.makersFiltered = this.makers!.slice(startIndex, endIndex)
    this.pageChanged.emit(event)
  }

  async getMakers(): Promise<void>{
    let aux = sessionStorage.getItem('makers')
    if(aux){
      this.makers = JSON.parse(aux)
    } else {
      this.makers = await this.carsService.getMakers()
      sessionStorage.setItem('makers', JSON.stringify(this.makers))
    }
  }

  async getModels(id: string): Promise<void>{
    await this.carsService.setCarsOptionsWithId(id)
    this.models = await this.carsService.getModels()
    this.mostrarModal = true
  }

  cerrarModal(): void{
    this.mostrarModal = false
  }

}
