import { Component } from '@angular/core';
import { AuthService } from '../SecurityService/auth.service';  // Correct path to your AuthService
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

constructor(public authService: AuthService, private router: Router) { }

  // This method now uses AuthService's hasRole to check for roles
  hasRole(role: string): boolean {
    return this.authService.hasRole(role); // Directly calls hasRole from AuthService
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }
}
