import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiciosService } from '../../services/servicios.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService]
})
export class HomeComponent {
  formContacto!:FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private serviciosService: ServiciosService,
    private messageService: MessageService
  ) { 
    this.formContacto = this.formBuilder.group({
      nombreCompleto: [null],
      email: [null],
      telefono: [null],
      mensaje: [null]
    });
  }

  enviarMensaje() {
    console.log('datos formulario', this.formContacto);
    if (this.formContacto.value.nombreCompleto != '' || this.formContacto.value.email != '' || 
        this.formContacto.value.telefono != '' || this.formContacto.value.mensaje != '') {
          this.messageService.add({ severity: 'error', summary: '¡Error!', detail: 'Debes completar el formulario para enviar el mensaje' });
          return;
        }
    const datos = {
      datosContacto : {
        nombreCompleto: this.formContacto.value.nombreCompleto,
        email: this.formContacto.value.email,
        telefono: this.formContacto.value.telefono,
        mensaje: this.formContacto.value.mensaje
      }
    }
    this.serviciosService.registro(datos).subscribe({
      next: res => {
        console.log('res.message', res.message);
        this.messageService.add({ severity: 'success', summary: '¡Listo!', detail: res.message });
        this.formContacto.reset();
      },
      error: error => {

      }
    });
  }

  scrollToPortfolio(idRef:any) {
    const element = document.getElementById(`${idRef}`); // Ajusta el ID según tu estructura HTML
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
