//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { ReactiveFormsModule } from "@angular/forms";

//Services
import { LoginService } from './services/login.service';
import { HomeService } from './services/home.service';
import { PerguntasService } from './services/perguntas.service';
import { AuthGuardService } from './services/auth-guard.service';

//Componet
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { TopomenuComponent } from './admin/topomenu/topomenu.component';
import { SidemenuComponent } from './admin/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    TopomenuComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    LoginService,
    HomeService,
    PerguntasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
