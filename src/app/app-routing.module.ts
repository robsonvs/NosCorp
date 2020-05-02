import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ContactMeComponent } from './shared/contact-me/contact-me.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { AboutMeComponent } from './shared/about-me/about-me.component';
import { ListComponent } from './admin/list/list.component';
import { FormComponent } from './admin/form/form.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact-me', component: ContactMeComponent },

  { path: 'components-form/:id', component: FormComponent },
  { path: 'components-form', component: FormComponent },
  { path: 'components-list', component: ListComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
