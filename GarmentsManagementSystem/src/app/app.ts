import { Component, OnInit } from '@angular/core';
import { User } from '../model/Auth/user.model';
import { AuthService } from './service/Auth/auth-service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  protected title = 'GarmentsManagementSystem';

   userRole: string | null = '';
  currentUser: User | null = null;

    showHeader = true;
  constructor(
    private authService: AuthService,
    private router: Router
  ){
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = ['/', '/login'];

        // Add dynamic check for product details
        const isProductDetails = event.url.startsWith('/productdetails/');

        this.showHeader = !(
          hiddenRoutes.includes(event.url) || isProductDetails
        );
      }
    });


  }
  }


   

