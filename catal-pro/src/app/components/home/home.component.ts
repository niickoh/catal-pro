import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  formContacto!:FormGroup;

  constructor (
    private formBuilder: FormBuilder
  ) { 
    this.formContacto = this.formBuilder.group({
      nombreCompleto: [null],
      email: [null],
      mensaje: [null]
    });
  }

  enviarMensaje() {
    console.log('datos formulario', this.formContacto);
    this.formContacto.reset();
  }

}
