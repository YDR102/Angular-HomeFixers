import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  httpclient: HttpClientModule = new HttpClientModule;
  contact: FormGroup;
  constructor( private form: FormBuilder, httpclient: HttpClientModule) {
    this.contact = this.form.group({
      nombre: ['', Validators.required],
      tef: [''],
      email: ['', Validators.required, Validators.email],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    })
  }

  hasErrors(controlName:string, errorType: string){
    return this.contact.get(controlName)?.hasError(errorType) && this.contact.get(controlName)?.touched
  }
  //! sin terminar https://www.youtube.com/watch?v=7R4jfPJjkdc
  enviar() {
    // this.httpclient.post('http://local:3000/envio',)
    console.log(this.contact)
  }
}
