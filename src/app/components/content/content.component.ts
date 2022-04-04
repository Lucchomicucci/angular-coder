import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  arrayDeAlumnos: Array<string> = ["Jose", "Luciano", "Juan", "Lucas", "Nazarena"]
  formularioEstudiantes: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comentarios: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log('Se enviaron los datos')
  }
}
