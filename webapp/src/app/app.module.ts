import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
