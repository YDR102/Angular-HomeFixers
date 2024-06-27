import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Notiflix from 'notiflix';
import { ApiContactService } from '../services/api-contact.service';
import { CorreoService } from '../services/correo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,          // Formulario de tipo plantilla
    ReactiveFormsModule,  // Formulario de tipo reactivo
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  contact: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiCorreo: ApiContactService,
    private correoService: CorreoService
  ) {
    this.contact = this.formBuilder.group({
      nombre: ['', Validators.required],
      tef: [''],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  hasErrors(controlName: string, errorType: string) {
    return this.contact.get(controlName)?.hasError(errorType) && (this.contact.get(controlName)?.touched || this.contact.get(controlName)?.dirty);
  }
  
  enviarCorreo() {
    if (this.contact.invalid) {
      return;
    }

    const datosFormulario = this.contact.value;

    this.correoService.enviarCorreo(datosFormulario).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Mensaje enviado');
      },
      error => {
        console.error('Error al enviar el correo: ', error);
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Error al enviar el mensaje');
      }
    );
  }

  ngOnInit(): void {
    //?futuras expansiones?\\
    
    //*logeo de usuarios
    //this.contact.get('nombre')?.setValue('traer del backend'); opcion 1
    // this.contact.patchValue({ opcion 2
    //   nombre: 'nombre traido del backend',
    //   email: 'email traido del backend',
    //   tef: 'telefono traido del backend'
    // })
    // this.contact.get('nombre')?.disable();
    // this.contact.get('email')?.disable();
    // this.contact.get('tef')?.disable();
    //

    //*campos con control de fuljo
    // this.contact.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // })
  };

  ngOnDestroy(): void {
  
  }

}