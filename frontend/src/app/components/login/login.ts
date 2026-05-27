import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Necesario para leer los inputs y mostrar errores
  templateUrl: './login.html'
})
export class LoginComponent {
  
  // Variables para capturar lo que el usuario escribe
  usuario: string = '';
  contrasena: string = '';
  
  // Variable para mostrar el mensaje de error
  errorLogin: boolean = false;

  constructor(private router: Router) {}

  ingresar() {
    // Validamos que sea exactamente admin y 1234
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      this.errorLogin = false;
      this.router.navigate(['/dashboard']); // Si está correcto, entra al sistema
    } else {
      this.errorLogin = true; // Si se equivoca, muestra el error
    }
  }
}