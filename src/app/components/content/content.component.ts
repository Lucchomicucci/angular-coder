import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from 'src/app/interfaces';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  arrayDeAlumnos: Array<Alumnos> = []
  formularioEstudiantes: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comentarios: new FormControl('')
  })
  constructor() {
  }

  ngOnInit(): void {
  }

  submit(form: any){
    let nuevoAlumno: Alumnos;
    nuevoAlumno = form.value
    this.arrayDeAlumnos.push(nuevoAlumno)
    this.formularioEstudiantes.reset()
  }

  eliminarAlumno(emailAlumno: string){
    let newAlumnos: Array<Alumnos> = this.arrayDeAlumnos.filter(alumno => alumno.email !== emailAlumno)
    this.arrayDeAlumnos = newAlumnos;
  }

  // updatedAlumno(emailAlumno: string){
  //   let alumnoModificar: Alumnos = this.arrayDeAlumnos.find(alumno => alumno.email === emailAlumno)
  // }
}
