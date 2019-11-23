import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { SellComponent } from './sell/sell.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
{ path : '', component : LoginComponent },
{ path : 'registration', component : RegistrationComponent },
{ path : 'home', component : HomeComponent, children : [
  { path : '', component : ContentComponent },
  { path : 'sell_path', component : SellComponent },
  { path : 'order_link', component : OrdersComponent, children : [
    { path : 'a', component : FavoritesComponent },
    { path : 'b', component : RegistrationComponent },
  ] },
  { path : 'favorites', component : FavoritesComponent },
  { path : 'details/name/:n/desc/:description/p/:price', component : DetailsComponent }
] },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ItemComponent,
    SellComponent,
    OrdersComponent,
    FavoritesComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
