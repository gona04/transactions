import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction/transaction.component';
import { HeaderComponent } from './header/header.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    HeaderComponent,
    TransactionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
