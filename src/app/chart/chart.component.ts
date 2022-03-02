import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  ctx: any;

  ngOnInit(): void {
  }
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public lineChartType: any = 'polarArea';
  public lineChartLegend = true;
  public lineChartData =  [
    { data: [10,20], label: 'Latitude' },
    {
      legend: true
    }
  ];


}
