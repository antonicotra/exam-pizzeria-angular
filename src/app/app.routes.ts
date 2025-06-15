import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { NotFoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'menu/:id', component: DetailsComponent},
    {path: 'cart', component: CartComponent},
    { path: '**', component: NotFoundComponent }

];
