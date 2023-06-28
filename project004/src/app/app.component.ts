import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formAlumno: FormGroup;
  resultado!: string;

  constructor(private fb: FormBuilder) {
    this.formAlumno = this.fb.group({
      nombre: [''],
      dni: [''],
      notas: this.fb.group({
        nota1: [0],
        nota2: [0],
        nota3: [0]
      })
    })
  }

  submit() {
    let nombre: string = this.formAlumno.value.nombre;
    let dni: string = this.formAlumno.value.dni;
    let nota1 = parseInt(this.formAlumno.value.notas.nota1);
    let nota2 = parseInt(this.formAlumno.value.notas.nota2);
    let nota3 = parseInt(this.formAlumno.value.notas.nota3);
    if (nota1 >= 4 && nota2 >= 4 && nota3 >= 4)
      this.resultado = "¡¡El alumno " + nombre + ", con dni " + dni + " queda aprobado!!  o((*^▽^*))o";
    else
      this.resultado = "El alumno " + nombre + ", con dni " + dni + " no aprobará... （；へ；）";
  }
}