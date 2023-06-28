import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario:any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    
    function getRandomArbitrary(min: number, max: number) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let result = this.usuarioService.retornar();
    let random = getRandomArbitrary(0, result.length);
    console.log(random);
    
    this.usuario = result[random];
  }

  presion() {
    this.recuperarPersona();
  }
}