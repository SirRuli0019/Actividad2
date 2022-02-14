import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  curso1 = {"nombre":"Beca Angular", "total_dias":9, "descripcion":"Curso sobre Angular y TypeScript"};
  curso2 = {"nombre":"Beca Java", "total_dias":10, "descripcion":"Formacion sobre Java"};
  contador:number = 0;
  temp: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  eventoBotonAngular(): void{
    this.temp = this.curso1;
   this.curso1 =this.curso2;
   this.curso2 = this.temp;

   this.contador = this.contador + 1;



   /* this.curso2 = this.curso1; */


  }

}
