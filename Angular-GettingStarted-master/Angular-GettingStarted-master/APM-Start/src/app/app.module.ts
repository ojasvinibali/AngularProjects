import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ProductGuardService } from './products/product-guard.service';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    // ProductDetailComponent,
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent
  ],

  imports: [
    BrowserModule,
   //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
       ]),
     ProductModule
      // P
  ],
 // providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
