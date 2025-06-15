import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, NavItemComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  router = inject(Router)

  isLinkActive(path: string): boolean {
    const currentUrl = this.router.url;
    if (path === '/home' && (currentUrl === '/' || currentUrl === '/home')) return true;
    return currentUrl === path || currentUrl.startsWith(path + '/');
  }
}
