import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { UserService } from './admin/user/user.service';
import { ComponentService } from './components/component.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutMeComponent } from './shared/about-me/about-me.component';
import { ContactMeComponent } from './shared/contact-me/contact-me.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { UserFormComponent } from './admin/user/user-form/user-form.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { UserDetailsComponent } from './admin/user/user-details/user-details.component';
import { FormComponent } from './admin/form/form.component';
import { ListComponent } from './admin/list/list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MediaComponent } from './components/media/media.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutMeComponent,
    ContactMeComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    UserFormComponent,
    UserListComponent,
    UserDetailsComponent,
    FormComponent,
    ListComponent,
    MediaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    UserService,
    ComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
