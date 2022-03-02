import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  informations: any = []
  date: any;

  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getInformations();
  }

  getInformations() {
    this.service.getInformationISS().subscribe((res) => {
      this.informations = res;
      this.transformTimeStampToDate(this.informations?.timestamp)
      console.log(this.informations)
    })
  }
  transformTimeStampToDate(timeStamp: number): void {
    this.date = new Date(timeStamp)
  }
}
