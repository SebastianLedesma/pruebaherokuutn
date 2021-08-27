import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase 01';

  /*miUsuario:Usuario;

  constructor(){
    this.miUsuario = new Usuario();
  }

  saludar():void{
    console.log("Hola mundo");
  }*/

  numeroUno:number;
  numeroDos:number;
  promedio:number;
  suma:number;

  constructor(){
    this.numeroUno=0;
    this.numeroDos=0;
    this.promedio=0;
    this.suma=0;
  }

  calcular(){
    this.suma= this.numeroUno + this.numeroDos;
    this.promedio = this.suma / 2;
  }
}
