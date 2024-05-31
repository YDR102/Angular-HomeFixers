import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'fontaneria', component: SecondComponent},
    { path: 'contacto', component: ContactComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
