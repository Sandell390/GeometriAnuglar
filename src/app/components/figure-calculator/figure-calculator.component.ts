import { Component } from '@angular/core';
import { Figure } from 'src/app/interfaces/figure';

@Component({
  selector: 'app-figure-calculator',
  templateUrl: './figure-calculator.component.html',
  styleUrls: ['./figure-calculator.component.css']
})
export class FigureCalculatorComponent {

  figure: Figure;

  

  constructor(){
    this.figure = {a: 0, b: 0}
  }

  GetA(value: string){
    if(!isNaN(Number(value))){
      var numberValue = Number(value);
      this.figure = {a: numberValue, b: this.figure.b}
    } else{
        console.log('Not a Number');
    }
  }

  GetB(value: string){
    if(!isNaN(Number(value))){
      var numberValue = Number(value);
      this.figure = {a: this.figure.a, b: numberValue}
    } else{
        console.log('Not a Number');
    }
  }


}
