import { Component, Input } from '@angular/core';
import { FigureData } from 'src/app/class/figure-data';

@Component({
  selector: 'app-figure-calculator',
  templateUrl: './figure-calculator.component.html',
  styleUrls: ['./figure-calculator.component.css']
})
export class FigureCalculatorComponent {
  
  Figures: FigureData[] = [];

  constructor() {


    this.Figures.push({Name: 'Square',Sides: [1], SidesName: ["a"], Circumference: function(args: any) { return args[0] * 4}, Area: function(args: any) { return args[0] * args[0]}});

    this.Figures.push({Name: 'Rectangle',Sides: [1,1], SidesName: ["a","b"], Circumference: function(args: any) { return args[0] * 4}, Area: function(args: any) { return args[0] * args[0]}});

    this.Figures.push({Name: 'Trapez',Sides: [1,1,1,1,1], SidesName: ["a","b","c","d","h"], Circumference: function(args: any) { return args[0] + args[1] + args[2] + args[3]}, Area: function(args: any) { return ((args[0] +args[1]) / 2) * args[4]}});

    this.Figures.push({Name: 'Parallelogram',Sides: [1,1,1], SidesName: ["a","b","h"], Circumference: function(args: any) { return (2 * args[0]) + (2*args[1])}, Area: function(args: any) { return args[1] * args[2]}});


  }

}
