import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';

import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AddService } from './shared/add.service';
import { AddComponent } from './menu/add/add.component';
import { ViewComponent } from './view/view.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProfileComponent,
    ProductComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   FormsModule,
  ],
  providers: [AddService],
  bootstrap: [HeaderComponent,AppComponent,FooterComponent,]
})
export class AppModule { }
