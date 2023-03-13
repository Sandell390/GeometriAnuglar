export abstract class FigureData {

    Name: string = "Default";

    Sides: Array<number> = [1];

    SidesName: Array<string> = ["a"];


    constructor() {
    }

    abstract Circumference(args: any): number;

    abstract Area(args: any): number;

}
